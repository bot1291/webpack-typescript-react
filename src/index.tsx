import ReactDOM from 'react-dom/client';
import { App } from './App';
import './assets/scss/main.scss';

const root = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootNode = ReactDOM.createRoot(root!);
rootNode.render(<App />);
