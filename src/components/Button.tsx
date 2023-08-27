import clsx from 'clsx';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const variantStyles: Record<string, string> = {
  primary:
    'bg-zinc-800 font-medium text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70',
  secondary:
    'bg-zinc-50 ring-1 ring-zinc-100 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60',
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  className,
  ...props
}) => {
  const combinedClassName = clsx(
    'inline-flex items-center gap-2 justify-center rounded-full py-2 px-4 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className,
  );

  return <button className={combinedClassName} {...props} />;
};

export default Button;
