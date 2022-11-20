import { render, screen } from '@testing-library/react';
import App from 'App';
import { createMemoryHistory } from 'history';
import { BrowserRouter, RouterProvider } from 'react-router-dom';

import '@testing-library/jest-dom';
import router from 'router';

describe('App.tsx', () => {
  test('Navigation.tsx', () => {
    const history = createMemoryHistory();
    expect(history.location.pathname).toEqual('/');
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.getByTestId('/')).toBeInTheDocument();
  });
  test('Outlet', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });
    const { getByText } = render(<RouterProvider router={router} />);
    expect(history.location.pathname).toEqual('/');
    expect(getByText(/Hello, React!/i)).toBeInTheDocument();
  });
});
