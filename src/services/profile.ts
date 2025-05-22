import http from '@/utils/http'
import type { Profile, ProfileResponse } from '@/types/profile'

export async function getProfile(): Promise<Profile> {
  try {
    const { data } = await http.get<ProfileResponse>('/profile')
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
    // Only send the fields that can be updated
    const updateData = {
      firstName: profile.firstName,
      lastName: profile.lastName,
      avatarUrl: profile.avatarUrl,
      profile: profile.profile ? {
        bio: profile.profile.bio,
        contactInfo: profile.profile.contactInfo
      } : undefined
    }

    const { data } = await http.patch<ProfileResponse>('/profile/update', updateData)
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