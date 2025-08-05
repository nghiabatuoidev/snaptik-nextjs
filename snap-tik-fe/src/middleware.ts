import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/((?!api|_next|_vercel|trpc|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
