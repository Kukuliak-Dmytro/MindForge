"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useProfile, profileKeys } from "@/hooks/use-profile";
import { useQueryClient } from '@tanstack/react-query';
import { supabaseClient } from "@/utils/supabase/client";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { data: profile, isLoading: isProfileLoading } = useProfile();
  const queryClient = useQueryClient();
  // console.log(profile);

  // Remove the local supabase creation
  // const supabase = createBrowserClient(...)
  const supabase = supabaseClient;

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menuButton = document.querySelector('[data-menu-button]');
      const menuContent = document.querySelector('[data-menu-content]');
      
      if (isMenuOpen && menuButton && menuContent) {
        if (!menuButton.contains(event.target as Node) && !menuContent.contains(event.target as Node)) {
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Listen for Supabase auth state changes and invalidate profile query
  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' || event === 'SIGNED_OUT') {
        queryClient.invalidateQueries({ queryKey: profileKeys.details() });
        if (event === 'SIGNED_IN') {
          // Try to get user role from session or refetch profile
          let role = 'STUDENT';
          if (session?.user?.user_metadata?.role) {
            role = session.user.user_metadata.role;
          }
          // Determine target page
          const target = role === 'TUTOR' ? '/tutor/profile' : '/profile';
          if (window.location.pathname !== target) {
            window.location.href = target; // Hard reload to ensure session is fresh
          } else {
            window.location.reload();
          }
        }
      }
    });
    return () => {
      listener.subscription.unsubscribe();
    };
  }, [supabase, queryClient, router]);

  const handleSignOut = async () => {
    try {
      setIsMenuOpen(false);
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      queryClient.invalidateQueries({ queryKey: profileKeys.details() });
      router.push('/');
      router.refresh();
      window.location.reload();
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
              <Image 
                src="/assets/images/logo.png" 
                alt="MindForge" 
                width={64} 
                height={64}
                className="w-[64px] h-[64px]"
              />
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
              data-menu-button
              className="h-10 w-10 p-[12px_8px] rounded-medium bg-primary shadow-small flex flex-col justify-between items-center cursor-pointer transition-all focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-[3px] bg-rich-black rounded-[3px] transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[6.5px] origin-center' : ''}`}></span>
              <span className={`block w-6 h-[3px] bg-rich-black rounded-[3px] transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-[3px] bg-rich-black rounded-[3px] transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[7px] origin-center' : ''}`}></span>
            </button>
            
            <div 
              data-menu-content
              className={`absolute top-full right-0 mt-2 w-[225px] bg-white-fg rounded-medium shadow-double p-4 border-none text-right z-50 origin-top-right transition-all duration-200 ease-out
                ${isMenuOpen 
                  ? 'transform scale-100 opacity-100 translate-y-0' 
                  : 'transform scale-95 opacity-0 -translate-y-2 pointer-events-none'}`}
            >
              {isProfileLoading ? (
                <div className="py-2 px-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary mr-2"></div>
                  Завантаження...
                </div>
              ) : profile ? (
                <div className="flex flex-col gap-2">
                  <div className="py-2 px-0 border-b border-gray-200">
                    <div className="font-medium">{profile.firstName} {profile.lastName}</div>
                    <div className="text-sm text-gray-600">{profile.email}</div>
                    <div className="text-xs text-gray-500">{profile.role === 'TUTOR' ? 'Ментор' : 'Студент'}</div>
                  </div>
                  <a 
                    href={profile.role === 'TUTOR' ? '/tutor/profile' : '/profile'} 
                    className="py-2 px-0 hover:text-secondary transition-colors"
                  >
                    Профіль
                  </a>
                  {profile.role === 'TUTOR' ? (
                    <>
                      <a href="/tutor/profile/subjects" className="py-2 px-0 hover:text-secondary transition-colors">Мої предмети</a>
                      <a href="/tutor/schedule" className="py-2 px-0 hover:text-secondary transition-colors">Розклад</a>
                      <a href="/tutor/students" className="py-2 px-0 hover:text-secondary transition-colors">Мої студенти</a>
                      <a href="/tutor/saved" className="py-2 px-0 hover:text-secondary transition-colors">Збережені замовлення</a>
                    </>
                  ) : (
                    <>
                      <a href="/saved" className="py-2 px-0 hover:text-secondary transition-colors">Збережені</a>
                      <a href="/orders" className="py-2 px-0 hover:text-secondary transition-colors">Мої заняття</a>
                    </>
                  )}
                  <a href="/messages" className="py-2 px-0 hover:text-secondary transition-colors">Повідомлення</a>
                  <button 
                    onClick={handleSignOut}
                    className="py-2 px-0 hover:text-secondary transition-colors text-left"
                  >
                    Вихід
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <div className="py-2 px-0 text-gray-500">Ви не увійшли в систему</div>
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