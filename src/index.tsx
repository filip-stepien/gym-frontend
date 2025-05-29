import '@ant-design/v5-patch-for-react-19';
import 'material-symbols/outlined.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

createRoot(document.getElementById('root')!).render(<App />);
