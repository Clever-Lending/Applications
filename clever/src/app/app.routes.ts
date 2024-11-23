import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages-routing.module').then((m) => m.PagesRoutingModule),
  },
];
