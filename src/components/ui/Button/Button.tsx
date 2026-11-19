import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/cn';
import styles from './Button.module.scss';

type Variant = 'primary' | 'secondary' | 'danger';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  icon?: ReactNode;
  loading?: boolean;
}

export const Button = ({
  variant = 'primary',
  icon,
  loading,
  className,
  children,
  disabled,
  ...rest
}: ButtonProps) => (
  <button
    className={cn(styles.button, styles[variant], className)}
    disabled={disabled || loading}
    {...rest}
  >
    {icon}
    {loading ? 'Loading...' : children}
  </button>
);
