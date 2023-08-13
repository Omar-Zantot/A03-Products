export interface RoutesModel {
  route: string;
  title: string;
}

export const MainRoutes: RoutesModel[] = [
  {
    route: '/',
    title: 'Home',
  },
  {
    route: '/products',
    title: 'products',
  },
];
