import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path'; 
/* 
	I spent 2 hours trying to figure out why this part didn't work, 
	and it turned out I just hadn't imported it. (the import path from 'path' part, by the way)

	Anyway, I think this is one of the best ways to use absolute paths in your projects. 
	Believe me, when you have a lot of files, it's really helpful.
*/

// First of all, please do not remove this URL. It contains the docs on what you can configure here, and it's useful.
// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	
	/* 
		This doesn’t really matter while developing, but it's painful to get errors when deploying 
		just because you forgot this line.

		If you're deploying to a domain like example.com directly, this doesn’t matter. 
		But if you’re like me and want something like luismonroy.dev/react_examples, 
		you should set the text after the domain here:
	*/
	base: '/react_examples/',

	/*
		It's not really necessary to change the port, but if you're like me and are working on multiple Vite projects, 
		sooner or later you'll have two projects running on the default Vite port and start questioning why 
		you chose this career. 
	*/
	server: {
		port: 90
	},

	/*
		Attention here! This is what really allows you to use absolute paths.
	*/
	resolve: {
		alias: {
			"@": path.resolve(__dirname, 'src')
		}
	}
});