export { auth as middleware } from "@/auth"

export const config = {
  unstable_allowDynamic: [
    
    '/node_modules/mongoose/dist/**', // use a glob to allow anything in the function-bind 3rd party module
  ],
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  }