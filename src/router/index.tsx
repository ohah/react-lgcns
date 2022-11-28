import App from 'App';
import { Toast } from 'components';
import { useToastInit } from 'components/Toast';
import { About, Boot, Dropdown, Home, Modal, Profile, Tab, Tooltip, Toast as ToastLayout } from 'pages';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<div> 에러 !</div>}>
      <Route index path="/" element={<Home />} />
      <Route path="/components" element={<Outlet />}>
        <Route path="/components/tooltip" element={<Tooltip />} />
        <Route path="/components/dropdown" element={<Dropdown />} />
        <Route path="/components/tab" element={<Tab />} />
        <Route path="/components/modal" element={<Modal />} />
        <Route path="/components/toast" element={<ToastLayout />} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/Boot" element={<Boot />} />
    </Route>,
  ),
);

export default router;
