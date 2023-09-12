import clsx from "clsx";
import { IconProps } from "../IconProps";

export const ChevronDownOutlined: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={clsx("ionicon", className)}
      fill="currentColor"
      stroke="currentColor"
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={48}
        d="M112 184l144 144 144-144"
      />
    </svg>
  );
};
