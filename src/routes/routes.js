import React from 'react';

import config from '~/config';

// Pages
const HomePage = React.lazy(() => import('~/pages/Home'));
const LoginPage = React.lazy(() => import('~/pages/Login'));
const NotFoundPage = React.lazy(() => import('~/pages/NotFound'));

// Layouts
const DefaultLayout = React.lazy(() => import('~/layouts/DefaultLayout'));

const publicRoutes = [
    { path: config.routes.home, page: HomePage, layout: DefaultLayout },
    { path: config.routes.login, page: LoginPage, layout: DefaultLayout },
    { path: config.routes.notFound, page: NotFoundPage, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
