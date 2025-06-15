import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getProfile, updateProfile } from '@/services/profile'
import type { Profile } from '@/types/profile'
import { useEffect, useState } from 'react'
import { supabaseClient } from '@/utils/supabase/client'

export const profileKeys = {
  all: ['profile'] as const,
  details: (userId?: string | null) => [...profileKeys.all, 'detail', userId] as const,
}

export function useProfile() {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    supabaseClient.auth.getUser().then(({ data: { user } }) => {
      setUserId(user?.id ?? null);
    });
  }, []);

  return useQuery<Profile | null>({
    queryKey: profileKeys.details(userId),
    queryFn: getProfile,
    enabled: !!userId,
    retry: (failureCount, error) => {
      // Retry up to 3 times if profile is null (not an actual error)
      return failureCount < 3;
    },
    retryDelay: 500, // 500ms between retries
  })
}

export function useUpdateProfile() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateProfile,
    onSuccess: (updatedProfile) => {
      // Invalidate all profile queries for all users
      queryClient.invalidateQueries({ queryKey: profileKeys.all })
    },
  })
} 