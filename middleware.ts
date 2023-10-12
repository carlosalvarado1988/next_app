export { default } from "next-auth/middleware";

export const config = {
  // *: zero or more
  // +: one or more
  // ?: zero or more
  matcher: ["/users/:path*"],
};
// this matcher redirects any /users/ with or without id to new-page-redirected (in the commented example)

// this is an example how the middleware determine to do a redirect
// import { NextRequest, NextResponse } from "next/server";
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/new-page-redirected", request.url));
// }

// the long way to export
// import middleware from "next-auth/middleware";
// export default middleware;
