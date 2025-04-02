import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Category from './pages/Category/Category';
import Checkout from './pages/Checkout/Checkout';
import Signin from './pages/SignIn/Signin';
import About from './pages/About/About';
import Signup from './pages/SignUp/Signup';

const Home = React.lazy(() => import('./pages/Home/Home'));
const Contact = React.lazy(() => import('./pages/Contact/Contact'));
const NotFound = React.lazy(() => import('./pages/AdditionalPages/NotFound'));
const Product = React.lazy(() => import('./pages/Product/Product'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about-us',
        element: <About />
      },
      {
        path: '/product/:productSlug',
        element: <Product />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/sign-in',
        element: <Signin />
      },
      {
        path: '/sign-up',
        element: <Signup />
      },
      {
        path: '/category',
        element: <Category />
      },
      {
        path: '/category/:categorySlug',
        element: <Category />
      },
      {
        path: '/checkout',
        element: <Checkout />
      },
      {
        path: '/subcategory/:subcategorySlug',
        element: <Category />
      },
      {
        path: '*',
        element: (
          <NotFound
            ctaTitle="Go to home"
            href="/"
            message="Page not found"
            description="Sorry, we couldn’t find the page you’re looking for."
          />
        )
      }
    ]
  }
]);

export default router;
