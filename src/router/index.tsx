import App from 'App';
import { Boot, Home, Counter, Crud, ReduxCrud } from 'pages';
import { Dropdown, Modal, Tab, Tooltip, Toast as ToastLayout, Toggle } from 'pages/components';
import { CustomGoogle, CustomKakao, Google, Kakao } from 'pages/login';
import { Home as RouterHome } from 'pages/router';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<div> 에러 !</div>}>
      <Route index path="/" element={<Home />} />
      <Route path="/components" element={<Outlet />}>
        <Route path="/components/tooltip" element={<Tooltip />} />
        <Route path="/components/dropdown" element={<Dropdown />} />
        <Route path="/components/tab" element={<Tab />} />
        <Route path="/components/toggle" element={<Toggle />} />
        <Route path="/components/modal" element={<Modal />} />
        <Route path="/components/toast" element={<ToastLayout />} />
      </Route>
      <Route path="/redux" element={<Outlet />}>
        <Route path="/redux/counter" element={<Counter />} />
        <Route path="/redux/crud" element={<Crud />} />
        <Route path="/redux/reduxCrud" element={<ReduxCrud />} />
      </Route>
      <Route path="/login" element={<Outlet />}>
        <Route path="/login/kakao" element={<Kakao />} />
        <Route path="/login/kakao2" element={<CustomKakao />} />
        <Route path="/login/google" element={<Google />} />
        <Route path="/login/google2" element={<CustomGoogle />} />
      </Route>
      <Route
        path="/router"
        element={
          <>
            <RouterHome />
            <Outlet />
          </>
        }
      />
      <Route path="/Boot" element={<Boot />} />
    </Route>,
  ),
);

export default router;
