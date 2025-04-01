import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import UserContext from './context/UserContext.tsx';
import CaptainContext from './context/CaptainContext.tsx';

createRoot(document.getElementById('root')!).render(
  <CaptainContext>
    <UserContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContext>
  </CaptainContext>
);
