import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const myToken = request.cookies.get('token');

  if (!myToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/adminPage', '/newPassword']
};
