"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { PrimaryButton } from "@/components/ui/button";
import { getUserData, signOut } from "@/utils/auth";
import type { User } from "@/types";
import { useRouter } from "next/navigation";
import { supabaseClient } from "@/utils/supabase/client";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const userData = await getUserData();
        setUser(userData);
      } catch (error) {
        console.error('Error loading user:', error);
      } finally {
        setIsLoading(false);
      }
    };

    // Initial load
    loadUser();

    // Subscribe to auth state changes
    const { data: { subscription } } = supabaseClient.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' || event === 'SIGNED_OUT' || event === 'USER_UPDATED') {
        await loadUser();
        router.refresh();
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router]);

  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
      router.push('/');
      router.refresh();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="w-full h-[80px] flex justify-center items-center bg-gradient-to-b from-white-bg to-white-fg shadow-small">
      <div className="flex justify-between max-w-[1240px] w-full px-4">
        {/* Left side */}
        <div className="flex justify-between items-center gap-4">
          <a href="/">
            <div className="flex items-center gap-0">
              <Image src="/assets/images/logo.png" alt="MindForge" width={64} height={64} />
              <span className="text-3xl text-secondary font-bold">Mind</span>
              <span className="text-3xl text-primary font-bold">Forge</span>
            </div>
          </a>
        </div>
        
        {/* Right side */}
        <div className="flex justify-between items-center gap-4">
          {/* Custom Dropdown Menu */}
          <div className="relative">
            <button 
              className="h-10 w-10 p-[12px_8px] rounded-medium bg-primary shadow-small flex flex-col justify-between items-center cursor-pointer transition-all focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className={`block w-6 h-[3px] bg-rich-black rounded-[3px] transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[6.5px] origin-center' : ''}`}></span>
              <span className={`block w-6 h-[3px] bg-rich-black rounded-[3px] transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-[3px] bg-rich-black rounded-[3px] transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[7px] origin-center' : ''}`}></span>
            </button>
            
            <div 
              className={`absolute top-full right-0 mt-2 w-[225px] bg-white-fg rounded-medium shadow-double p-4 border-none text-right z-50 origin-top-right transition-all duration-200 ease-out
                ${isMenuOpen 
                  ? 'transform scale-100 opacity-100 translate-y-0' 
                  : 'transform scale-95 opacity-0 -translate-y-2 pointer-events-none'}`}
            >
              {isLoading ? (
                <div className="py-2 px-0">Завантаження...</div>
              ) : user ? (
                <div className="flex flex-col gap-2">
                  <div className="py-2 px-0 border-b border-gray-200">
                    <div className="font-medium">{user.firstName} {user.lastName}</div>
                    <div className="text-sm text-gray-600">{user.email}</div>
                  </div>
                  <a href="/profile" className="py-2 px-0 hover:text-secondary transition-colors">Профіль</a>
                  <a href="/saved" className="py-2 px-0 hover:text-secondary transition-colors">Збережені</a>
                  <a href="/messages" className="py-2 px-0 hover:text-secondary transition-colors">Повідомлення</a>
                  <a href="/orders" className="py-2 px-0 hover:text-secondary transition-colors">Замовлення</a>
                  <button 
                    onClick={handleSignOut}
                    className="py-2 px-0 hover:text-secondary transition-colors text-left"
                  >
                    Вихід
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <a href="/auth/login" className="py-2 px-0 hover:text-secondary transition-colors">Увійти</a>
                  <a href="/auth/signup" className="py-2 px-0 hover:text-secondary transition-colors">Зареєструватися</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </header>
  );
} 