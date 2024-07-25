class Particle {
    private x: number;
    private y: number;
    private color: string;
    private radius: number;
    private velocity: { x: number; y: number };
    private life: number;
  
    constructor(x: number, y: number, color: string) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.radius = Math.random() * 2 + 1;
      this.velocity = {
        x: (Math.random() - 0.5) * 5,
        y: (Math.random() - 0.5) * 5
      };
      this.life = 30;
    }
  
    draw(ctx: CanvasRenderingContext2D): void {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  
    update(ctx: CanvasRenderingContext2D): void {
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.life--;
  
      this.draw(ctx);
    }
  
    isDead(): boolean {
      return this.life <= 0;
    }
  }
  
  class ParticleBurstButton {
    private button: HTMLButtonElement;
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private particles: Particle[];
    private animationId: number | null;
  
    constructor(button: HTMLButtonElement) {
      this.button = button;
      this.canvas = document.createElement('canvas');
      this.ctx = this.canvas.getContext('2d')!;
      this.particles = [];
      this.animationId = null;
  
      this.button.appendChild(this.canvas);
      this.resizeCanvas();
      this.addEventListeners();
    }
  
    private resizeCanvas(): void {
      this.canvas.width = this.button.offsetWidth;
      this.canvas.height = this.button.offsetHeight;
    }
  
    private createParticles(x: number, y: number): void {
      const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A'];
      for (let i = 0; i < 50; i++) {
        this.particles.push(new Particle(x, y, colors[Math.floor(Math.random() * colors.length)]));
      }
    }
  
    private animate(): void {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.particles = this.particles.filter(particle => {
        if (!particle.isDead()) {
          particle.update(this.ctx);
          return true;
        }
        return false;
      });
  
      if (this.particles.length > 0) {
        this.animationId = requestAnimationFrame(() => this.animate());
      } else {
        this.animationId = null;
      }
    }
  
    private addEventListeners(): void {
      this.button.addEventListener('click', (e: MouseEvent) => {
        const rect = this.button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        this.createParticles(x, y);
        if (!this.animationId) {
          this.animate();
        }
  
        const onClickHandler = this.button.getAttribute('data-onclick');
        if (onClickHandler) {
          const fn = new Function(onClickHandler);
          fn();
        }
      });
  
      window.addEventListener('resize', () => this.resizeCanvas());
    }
  }
  
  document.querySelectorAll('.particle-burst-button').forEach(button => {
    new ParticleBurstButton(button as HTMLButtonElement);
  });