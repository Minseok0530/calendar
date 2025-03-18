import '@radix-ui/themes/styles.css';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Theme } from '@radix-ui/themes';
import SideBar from './components/side-bar';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Theme className="flex w-full h-screen">
        <SideBar /> <App />
      </Theme>
    </BrowserRouter>
  </StrictMode>
);
