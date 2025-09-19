import React, { ElementType, HTMLAttributes, ReactNode } from 'react';

// Utility function para combinar classes
const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');

// Sistema de variantes para o Card
const cardVariants = {
  variant: {
    default: 'bg-white border-gray-200',
    outlined: 'bg-white border-2 border-gray-300',
    filled: 'bg-gray-50 border-gray-200',
    elevated: 'bg-white border-gray-200 shadow-md',
    ghost: 'bg-transparent border-transparent',
    destructive: 'bg-red-50 border-red-200',
    success: 'bg-green-50 border-green-200',
    warning: 'bg-yellow-50 border-yellow-200',
    info: 'bg-blue-50 border-blue-200'
  },
  size: {
    sm: 'text-sm',
    default: '',
    lg: 'text-lg'
  },
  padding: {
    none: '',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8'
  },
  radius: {
    none: 'rounded-none',
    sm: 'rounded',
    default: 'rounded-lg',
    lg: 'rounded-xl',
    full: 'rounded-2xl'
  }
};

// ---------- Types ----------
type CardProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  variant?: keyof typeof cardVariants.variant;
  size?: keyof typeof cardVariants.size;
  padding?: keyof typeof cardVariants.padding;
  radius?: keyof typeof cardVariants.radius;
  shadow?: boolean;
  hover?: boolean;
  clickable?: boolean;
  children?: ReactNode;
  onClick?: () => void;
};

type CardHeaderProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  padding?: keyof typeof cardVariants.padding;
  children?: ReactNode;
};

type CardTitleProps = HTMLAttributes<HTMLElement> & {
  className?: string;
  size?: 'sm' | 'default' | 'lg' | 'xl';
  children?: ReactNode;
  as?: ElementType;
};

type CardDescriptionProps = HTMLAttributes<HTMLParagraphElement> & {
  className?: string;
  size?: 'sm' | 'default' | 'lg';
  children?: ReactNode;
};

type CardContentProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  padding?: keyof typeof cardVariants.padding;
  children?: ReactNode;
};

type CardFooterProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  padding?: keyof typeof cardVariants.padding;
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  children?: ReactNode;
};

// ---------- Componente Card ----------
export const CardPadrao = React.forwardRef<HTMLDivElement, CardProps>(({
  className = '',
  variant = 'default',
  size = 'default',
  padding = 'none',
  radius = 'default',
  shadow = true,
  hover = false,
  clickable = false,
  children,
  onClick,
  ...props
}, ref) => {
  const baseClasses = 'border transition-all duration-200';
  const variantClasses = cardVariants.variant[variant];
  const sizeClasses = cardVariants.size[size];
  const paddingClasses = cardVariants.padding[padding];
  const radiusClasses = cardVariants.radius[radius];
  const shadowClasses = shadow ? 'shadow-sm' : '';
  const hoverClasses = hover ? 'hover:shadow-md hover:-translate-y-1' : '';
  const clickableClasses = clickable || onClick ? 'cursor-pointer hover:shadow-lg' : '';

  return (
    <div
      ref={ref}
      className={cn(
        baseClasses,
        variantClasses,
        sizeClasses,
        paddingClasses,
        radiusClasses,
        shadowClasses,
        hoverClasses,
        clickableClasses,
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
});

// ---------- Subcomponentes ----------
export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className = '', padding = 'default', children, ...props }, ref) => {
    const paddingClasses = {
      none: '',
      sm: 'p-4 pb-2',
      default: 'p-6 pb-2',
      lg: 'p-8 pb-4'
    };

    return (
      <div
        ref={ref}
        className={cn('flex flex-col space-y-1.5', paddingClasses[padding], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export const CardTitle = React.forwardRef<HTMLElement, CardTitleProps>(
  ({ className = '', size = 'default', children, as: Component = 'h3', ...props }, ref) => {
    const sizeClasses = {
      sm: 'text-lg font-medium',
      default: 'text-xl font-semibold',
      lg: 'text-2xl font-bold',
      xl: 'text-3xl font-bold'
    };

    return (
      <Component
        ref={ref}
        className={cn('leading-none tracking-tight', sizeClasses[size], className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

export const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className = '', size = 'default', children, ...props }, ref) => {
    const sizeClasses = {
      sm: 'text-xs',
      default: 'text-sm',
      lg: 'text-base'
    };

    return (
      <p
        ref={ref}
        className={cn('text-gray-600', sizeClasses[size], className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);

export function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className ?? ''
      )}
      {...props}
    />
  )
}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className = '', padding = 'default', children, ...props }, ref) => {
    const paddingClasses = {
      none: '',
      sm: 'p-4 pt-0',
      default: 'p-6 pt-0',
      lg: 'p-8 pt-0'
    };

    return (
      <div
        ref={ref}
        className={cn(paddingClasses[padding], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className = '', padding = 'default', justify = 'start', children, ...props }, ref) => {
    const paddingClasses = {
      none: '',
      sm: 'p-4 pt-0',
      default: 'p-6 pt-0',
      lg: 'p-8 pt-0'
    };

    const justifyClasses = {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around'
    };

    return (
      <div
        ref={ref}
        className={cn('flex items-center', paddingClasses[padding], justifyClasses[justify], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
