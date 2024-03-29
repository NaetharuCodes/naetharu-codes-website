interface YouTubeIconProps {
  className?: string;
  id?: string;
}

const YouTubeIcon = ({ className, id = "" }: YouTubeIconProps) => {
  return (
    <div
      id={id}
      className={`h-6 w-6 flex justify-center items-center ${className}`}
    >
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.593 8.09168C21.4791 7.66908 21.2565 7.28368 20.9474 6.97385C20.6383 6.66401 20.2534 6.44054 19.831 6.32568C18.265 5.89568 12 5.88868 12 5.88868C12 5.88868 5.73602 5.88168 4.16902 6.29268C3.74695 6.41283 3.36285 6.63946 3.05359 6.95081C2.74433 7.26217 2.52031 7.6478 2.40302 8.07068C1.99002 9.63668 1.98602 12.8847 1.98602 12.8847C1.98602 12.8847 1.98202 16.1487 2.39202 17.6987C2.62202 18.5557 3.29702 19.2327 4.15502 19.4637C5.73702 19.8937 11.985 19.9007 11.985 19.9007C11.985 19.9007 18.25 19.9077 19.816 19.4977C20.2385 19.383 20.6238 19.1601 20.9337 18.8509C21.2436 18.5417 21.4674 18.1569 21.583 17.7347C21.997 16.1697 22 12.9227 22 12.9227C22 12.9227 22.02 9.65768 21.593 8.09168ZM9.99603 15.8937L10.001 9.89368L15.208 12.8987L9.99603 15.8937Z"
          fill="black"
        />
      </svg>
    </div>
  );
};

export default YouTubeIcon;