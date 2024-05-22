import {locales, localePrefix} from './navigation';
import createMiddleware from 'next-intl/middleware';


export default createMiddleware({
  defaultLocale: 'es',
  localePrefix,
  locales
});

 
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};  