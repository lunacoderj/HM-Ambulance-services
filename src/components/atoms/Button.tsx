import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  isFullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  isFullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-bold transition-all duration-200 rounded-lg';
  
  const variantClasses = {
    primary: 'bg-red-500 text-white hover:bg-red-600 border border-red-600',
    secondary: 'bg-emerald-500 text-white hover:bg-emerald-600 border border-emerald-600',
    tertiary: 'bg-blue-500 text-white hover:bg-blue-600 border border-blue-600',
    ghost: 'bg-transparent border-2 border-gray-800 text-gray-800 hover:bg-gray-100'
  };
  
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg min-h-[60px]',
    xlarge: 'px-10 py-5 text-xl min-h-[80px]'
  };

  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${isFullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
};
