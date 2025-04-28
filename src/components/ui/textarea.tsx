"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  title: string;
  id: string;
  placeholder: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ title, id, placeholder, defaultValue, className, onChange, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <label 
          htmlFor={id} 
          className="pl-4 pb-1"
        >
          {title}
        </label>
        <textarea
          id={id}
          ref={ref}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={onChange}
          className={cn(
            "min-h-16 rounded-medium px-4 py-2 text-base border border-primary-border",
            "shadow-small focus:outline-none focus:ring-2 focus:ring-accent",
            className
          )}
          {...props}
        />
      </div>
    )
  }
)

Textarea.displayName = "Textarea"

export { Textarea }
