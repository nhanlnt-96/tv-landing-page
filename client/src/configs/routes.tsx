import ThankPage from 'thanks/ThankPage';
import HomePage from 'homepage/HomePage';
import PageNotFound from 'pageNotFound/PageNotFound';
import Section02 from 'section02/Section02';

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
