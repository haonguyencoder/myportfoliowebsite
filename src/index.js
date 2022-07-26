import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from "./Context";

ReactDOM.render(
  <ThemeProvider>

   <App/>
  </ThemeProvider>,
document.querySelector('#root'));
