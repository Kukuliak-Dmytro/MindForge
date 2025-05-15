import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name: string, options: CookieOptions) {
          response.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )

  const { data: { session } } = await supabase.auth.getSession()

  // If there's no session and trying to access protected routes
  if (!session) {
    const isAuthPage = request.nextUrl.pathname.startsWith('/auth')
    if (!isAuthPage) {
      return NextResponse.redirect(new URL('/auth/login', request.url))
    }
    return response
  }

  // Get user role from metadata
  const role = session.user.user_metadata.role || 'STUDENT'

  // Handle tutor routes
  if (request.nextUrl.pathname.startsWith('/tutor')) {
    if (role !== 'TUTOR') {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  // Handle student routes
  if (request.nextUrl.pathname.startsWith('/(student)')) {
    if (role !== 'STUDENT') {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  // Handle private routes (accessible by both tutors and students)
  if (request.nextUrl.pathname.startsWith('/private')) {
    if (role !== 'TUTOR' && role !== 'STUDENT') {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  return response
}

export const config = {
  matcher: [
    '/tutor/:path*',
    '/(student)/:path*',
    '/private/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 