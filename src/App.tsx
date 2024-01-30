import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { AppRoutes, type Cat, ENV, type CatContextProps } from './constants';
import { TopMenu } from './components/TopMenu';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Gallery } from './pages/Gallery';
import { createContext, useState } from 'react';

const queryClient = new QueryClient();
const CatContext = createContext<CatContextProps>({
  cats: [],
  addCat: (newCat: Cat) => {
    newCat.id = '';
  },
  removeCat: (newCat: Cat) => {
    newCat.id = '';
  },
});

export const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <CatProvider>
        <RouterProvider router={router} />
      </CatProvider>
    </QueryClientProvider>
  );
};

const CatProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
  const [cats, setCats] = useState<Cat[]>((): Cat[] => {
    const loaded = window.localStorage.getItem(ENV.LSKey);
    return loaded ? (JSON.parse(loaded) as Cat[]) : [];
  });

  const addCat = (newCat: Cat): void => {
    if (!cats.find((cat) => cat.id === newCat.id)) {
      const catsArray = [...cats, newCat];
      setCats(catsArray);
      window.localStorage.setItem(ENV.LSKey, JSON.stringify(catsArray));
    }
  };
  const removeCat = (newCat: Cat): void => {
    const catsArray = cats.filter((cat) => cat.id !== newCat.id);
    setCats(catsArray);
    window.localStorage.setItem(ENV.LSKey, JSON.stringify(catsArray));
  };

  return (
    <CatContext.Provider value={{ cats, addCat, removeCat }}>
      {children}
    </CatContext.Provider>
  );
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
      <Route index element={<Gallery />} errorElement={<ErrorPage />}></Route>
      <Route
        path={AppRoutes.favorite}
        element={<Gallery favorites />}
        errorElement={<ErrorPage />}
      ></Route>
      <Route path="*" element={<NotFoundPage />} errorElement={<ErrorPage />} />
    </Route>
  )
);
