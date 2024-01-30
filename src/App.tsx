import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { AppRoutes } from './constants';
import { TopMenu } from './components/TopMenu';

export const App = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

const RootLayout = (): JSX.Element => {
  return (
    <>
      <TopMenu />
      <Outlet />
    </>
  );
};

const ErrorPage = (): JSX.Element => {
  return <h2>Error</h2>;
};

const NotFoundPage = (): JSX.Element => {
  return <h2>NotFound</h2>;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={AppRoutes.root}
      element={<RootLayout />}
      errorElement={<ErrorPage />}
    >
      <Route
        path={AppRoutes.favorite}
        element={<h1>fafa</h1>}
        errorElement={<ErrorPage />}
      ></Route>
      <Route path="*" element={<NotFoundPage />} errorElement={<ErrorPage />} />
    </Route>
  )
);
