interface FacebookIconProps {
  className?: string;
  id?: string;
}

const FacebookIcon = ({ className, id = "" }: FacebookIconProps) => {
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
          d="M22 13.192C22 7.63537 17.5229 3.13086 12 3.13086C6.47715 3.13086 2 7.63537 2 13.192C2 18.2137 5.65684 22.3761 10.4375 23.1309V16.1003H7.89844V13.192H10.4375V10.9754C10.4375 8.45382 11.9305 7.06098 14.2146 7.06098C15.3088 7.06098 16.4531 7.25749 16.4531 7.25749V9.73347H15.1922C13.95 9.73347 13.5625 10.5091 13.5625 11.3048V13.192H16.3359L15.8926 16.1003H13.5625V23.1309C18.3432 22.3761 22 18.2139 22 13.192Z"
          fill="black"
        />
      </svg>
    </div>
  );
};

export default FacebookIcon;
