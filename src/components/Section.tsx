import StandardButton from "./StandardButton";

interface SectionProps {
  title: string;
  text: string;
  url: string;
  alt: string;
  id: string;
  children?: preact.ComponentChildren;
  className?: string;
}

const Section = ({
  title,
  text,
  url,
  alt,
  id,
  children,
  className,
}: SectionProps) => {
  return (
    <div id={id} class={`lg:flex items-center justify-between ${className}`}>
      <div class="lg:w-1/2 lg:mr-16">
        <h2 class="text-4xl font-bold">{title}</h2>
        <p class="my-6">{text}</p>
        <div class="flex w-full justify-start mt-6 mb-10">{children}</div>
      </div>
      <div class="mb-20 lg:w-1/2">
        <img src={url} alt={alt} />
      </div>
    </div>
  );
};

export default Section;
