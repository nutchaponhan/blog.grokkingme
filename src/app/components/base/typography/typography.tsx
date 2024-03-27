import { ElementType } from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';

interface Props {
  variant: Variant;
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
}

const tags: Record<Variant, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  p: 'p',
  span: 'span',
};

const sizes: Record<Variant, string> = {
  h1: 'text-5xl font-bold sm:text-4xl',
  h2: 'text-4xl font-bold sm:text-3xl',
  h3: 'text-3xl font-bold sm:text-2xl',
  h4: 'text-2xl font-bold sm:text-1xl',
  h5: 'text-xl font-bold sm:text-lg',
  p: 'text-lg sm:text-md',
  span: 'text-sm sm:text-xs',
};

const Typography = ({ variant, children, className, as }: Props) => {
  const sizeClasses = sizes[variant];
  const Tag = as || tags[variant];
  return <Tag className={`${sizeClasses} ${className}`}>{children}</Tag>;
};

export default Typography;
