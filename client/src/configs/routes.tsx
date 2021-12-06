import ThankPage from 'thanks/ThankPage';
import HomePage from 'homepage/HomePage';
import PageNotFound from 'pageNotFound/PageNotFound';

export const routes = [
  {
    path: '/',
    module: <HomePage />,
  },
  {
    path: '/thanks',
    module: <ThankPage />,
  },
  {
    path: '*',
    module: <PageNotFound />,
  },
];
