import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function proxy(req) {
  const isLogin = req.cookies.get('auth')?.value === 'true';
   
  
  if (!isLogin) {
    return NextResponse.redirect(new URL('/login',req.url))
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/add-item/:path*',
};
