import { ReactNode } from 'react';

interface SubjectSnippetProps {
  title: string;
  children: ReactNode;
  variant?: 'Default' | 'Inverse';
}

export function SubjectSnippet({ 
  children, 
  title, 
  variant = 'Default' 
}: SubjectSnippetProps) {
  return (
    <div 
      className={`h-[35px] w-auto px-[10px] rounded-small shadow-small bg-white-bg 
        flex justify-between items-center ${variant === 'Inverse' ? 'flex-row-reverse' : 'flex-row'}`}
    >
      <div>
        {children}
      </div>
      <div className="py-[10px]">
        <p>{title}</p>
      </div>
    </div>
  );
} 