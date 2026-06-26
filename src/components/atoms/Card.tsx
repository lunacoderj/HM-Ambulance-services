import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevation?: 'sm' | 'md' | 'lg' | 'xl';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  elevation = 'md',
  padding = 'md',
  hoverable = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'bg-white rounded-xl overflow-hidden';
  
  const elevationClasses = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  };
  
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const hoverClasses = hoverable 
    ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-lg' 
    : '';

  const classes = `
    ${baseClasses}
    ${elevationClasses[elevation]}
    ${paddingClasses[padding]}
    ${hoverClasses}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
