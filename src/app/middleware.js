// // middleware.js
// import { NextResponse } from 'next/server';

// export function middleware(request) {
//   // Получаем путь, на который перешел пользователь
//   const pathname = request.nextUrl.pathname;

//   // Пример логирования в консоль сервера
//   console.log(`[PAGE_VIEW] Пользователь посетил: ${pathname} в ${new Date().toISOString()}`);

//   // Здесь можно добавить отправку данных в вашу аналитику
//   // (например, fetch на ваш API)

//   // Продолжаем выполнение запроса
//   return NextResponse.next();
// }

// // Конфигурация, чтобы middleware срабатывал только на нужных путях
// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
// };