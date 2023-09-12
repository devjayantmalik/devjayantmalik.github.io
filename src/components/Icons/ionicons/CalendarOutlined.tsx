import clsx from "clsx";
import { IconProps } from "../IconProps";

export const CalendarOutlined: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={clsx("ionicon", className)}
      fill="currentColor"
      stroke="currentColor"
      viewBox="0 0 512 512"
    >
      <rect
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={32}
        x={48}
        y={80}
        width={416}
        height={384}
        rx={48}
      />
      <circle cx={296} cy={232} r={24} />
      <circle cx={376} cy={232} r={24} />
      <circle cx={296} cy={312} r={24} />
      <circle cx={376} cy={312} r={24} />
      <circle cx={136} cy={312} r={24} />
      <circle cx={216} cy={312} r={24} />
      <circle cx={136} cy={392} r={24} />
      <circle cx={216} cy={392} r={24} />
      <circle cx={296} cy={392} r={24} />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={32}
        strokeLinecap="round"
        d="M128 48v32M384 48v32"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M464 160H48"
      />
    </svg>
  );
};
