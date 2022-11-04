import ReactDOM from 'react-dom/client';
import { App } from './App';
import './assets/scss/main.scss';

const root = document.getElementById('root');
if (root) {
	const rootNode = ReactDOM.createRoot(root);
	rootNode.render(<App />);
}
