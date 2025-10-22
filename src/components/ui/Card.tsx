import React from 'react';
import { cn } from '@/lib/utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-lg shadow-lg overflow-hidden transition-shadow hover:shadow-xl',
        className
      )}
    >
      {children}
    </div>
  );
}
