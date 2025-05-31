import http from '@/utils/http'
import type { BaseResponse } from '@/types/tutor-types'

export interface Subject {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
  isRecurring: boolean;
}

export async function getSubjects(): Promise<BaseResponse<Subject[]>> {
  try {
    const { data } = await http.get<BaseResponse<Subject[]>>('/public/subjects')
    console.log(data)
    return data
  } catch (error: any) {
    console.error('Error fetching subjects:', {
      status: error.response?.status,
      message: error.message,
      data: error.response?.data
    })
    throw error
  }
}

export async function getCategories(): Promise<BaseResponse<Category[]>> {
  try {
    const { data } = await http.get<BaseResponse<Category[]>>('/public/categories')
    console.log(data)
    return data
  } catch (error: any) {
    console.error('Error fetching categories:', {
      status: error.response?.status,
      message: error.message,
      data: error.response?.data
    })
    throw error
  }
} 