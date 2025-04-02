import React from 'react';
import { cn } from '../../utils/cnHelper';

function Button({
  type = 'button',
  className,
  color = 'primary-white',
  size = 'large',
  onClick,
  children,
  disabled
}: Readonly<{
  type?: 'submit' | 'button' | 'reset';
  className?: string;
  color?: 'primary-white' | 'primary-gold' | 'remove' | 'remove-white' | 'text';
  size?: 'large' | 'small' | 'text';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.JSX.Element | string;
  disabled?: boolean;
}>) {
  const variantColor: { [key: string]: string } = {
    'primary-white':
      'bg-(--primary) text-white hover:bg-(--primary-dark) focus:ring-(--primary-dark)',
    'primary-gold':
      'bg-(--primary) text-(--secondary) hover:bg-(--primary-dark) focus:ring-(--primary-dark)',
    'remove-white': 'bg-red-500 text-white hover:bg-red-700 focus:ring-red-700',
    remove: 'text-red-600 hover:text-red-500',
    text: 'text-(--primary) hover:text-(--primary-dark)'
  };

  const variantSize: { [key: string]: string } = {
    large: 'px-8 py-3',
    small: 'px-3.5 py-2.5',
    text: 'p-0'
  };

  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={cn(
        'block cursor-pointer text-center rounded-md text-base font-medium focus:outline-hidden',
        variantSize[size],
        variantColor[color],
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
