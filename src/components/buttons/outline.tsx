import clsx from "clsx";
import { ReactNode } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const OutlineButton = ({ children, className, ...rest }: Props) => (
  <button
    className={clsx(
      "relative z-0 flex items-center gap-2 overflow-hidden rounded-md border-[1px]",
      "border-white px-4 py-2 text-sm font-medium",
      "text-white transition-all duration-300",
      "before:absolute before:inset-0",
      "before:-z-10 before:translate-x-[150%]",
      "before:translate-y-[150%] before:scale-[2.5]",
      "before:rounded-[100%] before:bg-white",
      "before:transition-transform before:duration-1000",
      "before:content-['']",
      "hover:text-zinc-950",
      "hover:before:translate-x-[0%]",
      "hover:before:translate-y-[0%]",
      "active:scale-95",
      className,
    )}
    {...rest}
  >
    {children}
  </button>
);
