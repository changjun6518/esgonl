import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AmListPage from './pages/AmListPage';
import AmDetailPage from './pages/AmDetailPage';
import NoonListPage from './pages/NoonListPage';
import NoonDetailPage from './pages/NoonDetailPage';
import PmListPage from './pages/PmListPage';
import PmDetailPage from './pages/PmDetailPage';
import SnackListPage from './pages/SnackListPage';
import SearchPage from './pages/SearchPage';
import AboutPage from './pages/AboutPage';
import NoticePage from './pages/NoticePage';
import FaqPage from './pages/FaqPage';
import EnquirePage from './pages/EnquirePage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },

      // AM Coffee & Bagel
      { path: 'article/amList', element: <AmListPage /> },
      { path: 'article/amDetail', element: <AmDetailPage /> },

      // Noon Lunch Box
      { path: 'article/noonList', element: <NoonListPage /> },
      { path: 'article/noonDetail', element: <NoonDetailPage /> },

      // PM Tea Time
      { path: 'article/pmList', element: <PmListPage /> },
      { path: 'article/pmDetail', element: <PmDetailPage /> },

      // Snack Fortune Cookie
      { path: 'article/snackList', element: <SnackListPage /> },

      // 검색
      { path: 'article/articleSearch', element: <SearchPage /> },

      // ONL 정보
      { path: 'onl/about', element: <AboutPage /> },
      { path: 'onl/notice', element: <NoticePage /> },
      { path: 'onl/faq', element: <FaqPage /> },
      { path: 'onl/enquire', element: <EnquirePage /> },

      // 404
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
