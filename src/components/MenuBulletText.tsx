import BoxIcon from "../components/icons/BoxIcon";
interface MenuBulletTextProps {
  text: string;
  subtext?: string;
}

const MenuBulletText = ({ text, subtext }: MenuBulletTextProps) => {
  return (
    <li class="flex mt-4 font-semibold items-center md:items-start">
      <BoxIcon className="mr-2 md:mt-[3px]" />
      <div>
        <p>{text}</p>
        <p class="text-xs font-light hidden md:block">{subtext}</p>
      </div>
    </li>
  );
};

export default MenuBulletText;
