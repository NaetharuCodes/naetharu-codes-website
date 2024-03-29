interface DownArrowIconProps {
  className?: string;
  id?: string;
}

const DownArrowIcon = ({ className, id = "" }: DownArrowIconProps) => {
  return (
    <div
      id={id}
      className={`h-6 w-6 flex justify-center items-center ${className}`}
    >
      <svg
        width="13"
        height="8"
        viewBox="0 0 13 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.8977 7.66292C6.67802 7.88259 6.32192 7.88259 6.10225 7.66292L0.367387 1.92804C0.14772 1.70837 0.14772 1.35227 0.367387 1.13259L0.632557 0.867393C0.852225 0.647718 1.20838 0.647718 1.42805 0.867393L6.49997 5.93934L11.5719 0.867393C11.7916 0.647718 12.1477 0.647718 12.3674 0.867393L12.6326 1.13259C12.8522 1.35227 12.8522 1.70837 12.6326 1.92804L6.8977 7.66292Z"
          fill="black"
        />
      </svg>
    </div>
  );
};

export default DownArrowIcon;
