// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get("token")?.value;
//   const role = request.cookies.get("role")?.value;

//   const { pathname } = request.nextUrl;

//   // 🔐 Not logged in
//   if (!token && pathname !== "/login") {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   // 🚫 Store Keeper cannot access dashboard
//   if (pathname.startsWith("/dashboard") && role !== "manager") {
//     return NextResponse.redirect(new URL("/products", request.url));
//   }

//   // 🚫 Store Keeper cannot add/edit products
//   if (
//     (pathname.startsWith("/products/add") ||
//       pathname.startsWith("/products/edit")) &&
//     role !== "manager"
//   ) {
//     return NextResponse.redirect(new URL("/products", request.url));
//   }

//   return NextResponse.next();
// }

// // 👇 Routes jaha middleware apply hoga
// export const config = {
//   matcher: ["/dashboard/:path*", "/products/:path*"],
// };
