import React from 'react';

interface CTAButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    className?: string;
    onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className = '',
    onClick
}) => {
    const baseClasses = 'rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500';

    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    const variantClasses = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow hover:shadow-md',
        outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
    };

    const widthClass = fullWidth ? 'w-full flex justify-center' : '';

    return (
        <button
            className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default CTAButton;