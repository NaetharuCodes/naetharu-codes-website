interface StandardButtonProps {
  id: string;
  text: string;
  type: "primary" | "secondary";
  classes?: string;
}

const StandardButton = ({
  id,
  text,
  type,
  classes = "",
}: StandardButtonProps) => {
  const buttonStyle =
    type === "primary"
      ? "bg-transparent border-2 border-black"
      : "bg-black text-white";

  return (
    <button id={id} className={`${buttonStyle} py-2 px-4 ${classes}`}>
      {text}
    </button>
  );
};

export default StandardButton;
