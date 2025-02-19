/* Use @ as synonim of /src */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App.jsx'

/* I really love MUI so I'll include it globally with Roboto Font */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';

const html_root = document.getElementById('root');
const root = createRoot(html_root);
root.render(
	<StrictMode>
		<CssBaseline />
		<App />
	</StrictMode>
);