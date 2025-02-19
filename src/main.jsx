import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App.jsx'
/* Use @ as synonim of /src */

const html_root = document.getElementById('root');
const root = createRoot(html_root);
root.render(
	<StrictMode>
		<App />
	</StrictMode>
);