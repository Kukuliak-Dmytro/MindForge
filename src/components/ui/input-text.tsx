"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputTextProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  id: string;
  placeholder: string;
  defaultValue?: string;
  type?: "text" | "email" | "password" | "tel";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  ({ title, id, placeholder, defaultValue, type = "text", className, onChange, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <label 
          htmlFor={id} 
          className={`pl-4 ${title ? "pb-1" : ""}`}
        >
          {title}
        </label>
        <input
          type={type}
          id={id}
          ref={ref}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={onChange}
          className={cn(
            "h-[50px] rounded-medium px-4 text-base border border-primary-border",
            "shadow-small focus:outline-none focus:ring-2 focus:ring-accent",
            className
          )}
          {...props}
        />
      </div>
    )
  }
)

InputText.displayName = "InputText"

export { InputText } 