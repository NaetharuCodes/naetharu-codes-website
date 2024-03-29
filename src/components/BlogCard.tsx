interface BlogCardProps {
  url: string;
  alt: string;
  title: string;
  text: string;
  link: string;
  className?: string;
}

const BlogCard = ({
  url,
  alt,
  title,
  text,
  link,
  className = "",
}: BlogCardProps) => {
  return (
    <div class={`my-6 flex flex-col md:flex-row p-6 ${className}`}>
      <img class="w-full md:w-1/3 md:mr-6" src={url} alt={alt} />
      <div class="flex flex-col justify-between">
        <h2 class="text-xl font-bold mb-6 mt-4 md:mt-0">{title}</h2>
        <p class="mb-4">{text}</p>
        <a class="underline" href={link}>
          Read more
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
