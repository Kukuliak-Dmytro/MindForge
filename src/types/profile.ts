export interface Profile {
  id: string
  email: string
  firstName: string
  lastName: string
  avatarUrl: string | null
  role: 'STUDENT' | 'TUTOR'
  profile: {
    bio?: string
    contactInfo?: string
    updatedAt: string
  } | null
  createdAt: string
  studentOrders: any[] // We can type this more specifically if needed
  studentReviews: any[] // We can type this more specifically if needed
}

// API response type
export interface ProfileResponse {
  message: string
  data: Profile
} 