"use client";

import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "@/lib/theme-provider";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function PageWrapper({ children, className = "" }: PageWrapperProps) {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className={`flex flex-col items-center w-full min-h-screen bg-white-bg ${className}`}>
      {children}
      
      {/* Theme Toggle Button */}
      <div className="fixed bottom-4 right-4 z-30">
        <div 
          className="relative bg-gray-500 rounded-full cursor-pointer flex items-center justify-between p-[5px] h-[26px] w-[50px] scale-[1.2] shadow-small"
          onClick={toggleTheme}
        >
          <IoSunnyOutline className="text-white-fg" />
          <IoMoonOutline className="text-white-fg" />
          <div 
            className={`absolute top-[2px] left-[2px] h-[22px] w-[22px] rounded-full transition-transform duration-300 
              ${theme === 'light' 
                ? 'translate-x-0 bg-rich-black shadow-inner-light' 
                : 'translate-x-[24px] bg-white-fg shadow-inner-dark'
              }`}
          ></div>
        </div>
      </div>
    </div>
  );
} 