import React from 'react';
import { cn } from '../../utils/cnHelper';

interface TypographyProps {
  variant?:
    | 'title'
    | 'subTitle'
    | 's-title'
    | 's-subTitle'
    | 'body-1'
    | 'body-2'
    | 'caption'
    | 'error'
    | 's-caption'
    | 'button'
    | 's-button'
    | 'blockquote'
    | 'quote'
    | 'muted';
  children: React.ReactNode;
  className?: string;
}
function Typography({ variant = 'body-1', children, className }: Readonly<TypographyProps>) {
  const tagMapping: Record<string, keyof React.JSX.IntrinsicElements> = {
    title: 'h1',
    subTitle: 'h2',
    's-title': 'h1',
    's-subTitle': 'h2',
    'body-1': 'p',
    'body-2': 'p',
    caption: 'p',
    error: 'p',
    's-caption': 'p',
    button: 'p',
    's-button': 'button',
    blockquote: 'blockquote',
    quote: 'q',
    muted: 'p'
  };
  const classMapping: Record<string, string> = {
    title: 'text-2xl lg:text-4xl',
    subTitle: 'text-xl lg:text-2xl font-semibold',
    's-title': 'text-2xl lg:text-4xl style-font',
    's-subTitle': 'text-xl lg:text-2xl font-semibold style-font',
    'body-1': 'text-lg',
    'body-2': 'text-md',
    caption: 'text-sm',
    error: 'text-sm text-red-500',
    's-caption': 'text-sm style-font',
    button: 'text-sm tracking-wide',
    's-button': 'text-sm tracking-wide style-font',
    blockquote: 'mt-6 border-l-2 text-md pl-6 italic',
    quote: 'text-sm font-semibold',
    muted: 'text-sm text-muted-foreground tracking-wide'
  };
  const Component = tagMapping[variant] || 'p';
  return <Component className={cn(classMapping[variant], className)}>{children}</Component>;
}
export default Typography;
