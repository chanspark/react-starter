import asyncRoute from 'lib/asyncRoute';

export const FirstPage = asyncRoute(() => import('./FirstPage'));
export const SecondPage = asyncRoute(() => import('./SecondPage'));