import http from '@/utils/http'
import { createBrowserClient } from '@supabase/ssr'
import type { Profile, ProfileResponse, StudentProfile, TutorProfile } from '@/types/profile'
import type { UpdateTutorProfileRequest } from '@/types/tutor-types'

export async function getProfile(): Promise<Profile> {
  try {
    // Get role from Supabase user metadata
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
    
    const { data: { user }, error: userError } = await supabase.auth.getUser()
    if (userError || !user) {
      throw new Error('Failed to get user data')
    }

    console.log('User Metadata:', user.user_metadata)
    const role = user.user_metadata.role || 'STUDENT'

    // Fetch the appropriate profile based on role
    const endpoint = role === 'TUTOR' ? '/tutor/profile' : '/student/profile'
    const { data } = await http.get<ProfileResponse>(endpoint)
    
    console.log('Profile data:', data)
    return data.data
  } catch (error: any) {
    console.error('Error fetching profile:', {
      status: error.response?.status,
      message: error.message,
      data: error.response?.data
    })
    throw error
  }
}

export async function updateProfile(profile: Partial<Profile>): Promise<Profile> {
  try {
    // Base update data that applies to both student and tutor profiles
    const baseUpdateData = {
      firstName: profile.firstName,
      lastName: profile.lastName,
      avatarUrl: profile.avatarUrl,
      profile: profile.profile ? {
        bio: profile.profile.bio,
        phone: profile.profile.phone,
        updatedAt: new Date().toISOString()
      } : undefined
    }

    // If it's a tutor profile update with tutor-specific fields
    if ('tutorProfile' in profile) {
      const tutorUpdateData = profile as Partial<TutorProfile>
      const { data } = await http.patch<ProfileResponse>('/tutor/profile/update', {
        ...baseUpdateData,
        tutorProfile: tutorUpdateData.tutorProfile
      })
      return data.data
    }

    // For student profile updates
    const { data } = await http.patch<ProfileResponse>('/profile/update', baseUpdateData)
    return data.data
  } catch (error: any) {
    console.error('Error updating profile:', {
      status: error.response?.status,
      message: error.message,
      data: error.response?.data
    })
    throw error
  }
}

export async function updateTutorProfile(updateData: UpdateTutorProfileRequest): Promise<TutorProfile> {
  try {
    const { data } = await http.patch<ProfileResponse>('/tutor/profile/update', updateData)
    if (!('tutorProfile' in data.data)) {
      throw new Error('Invalid tutor profile response')
    }
    return data.data as TutorProfile
  } catch (error: any) {
    console.error('Error updating tutor profile:', {
      status: error.response?.status,
      message: error.message,
      data: error.response?.data
    })
    throw error
  }
} 