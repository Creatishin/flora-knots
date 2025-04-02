import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Loading from './components/common/Loading';
import 'react-toastify/dist/ReactToastify.css';
import 'react-multi-carousel/lib/styles.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import { ToastContainer } from 'react-toastify';
import { PrimeReactProvider } from 'primereact/api';

function App() {
  return (
    <PrimeReactProvider>
      <Provider store={store}>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
          <ToastContainer />
        </Suspense>
      </Provider>
    </PrimeReactProvider>
  );
}

export default App;
