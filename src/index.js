import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import AddItemProvider from './components/useCart';
import ThemeProvider from './components/useTheme';
import CategoryProvider from './components/useCategory';
import AuthProvider from './components/useAuth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <AuthProvider>
      <AddItemProvider>
        <CategoryProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CategoryProvider>
      </AddItemProvider>
    </AuthProvider>
  </ThemeProvider>

);

reportWebVitals();
