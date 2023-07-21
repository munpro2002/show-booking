import { BrowserRouter } from 'react-router-dom';
import Header from './components/Layout/Header';
import PublicRoutes from './routes';

import './App.css';


export default function App() {
    return (
        <BrowserRouter>
            <Header/>
            <PublicRoutes/>
        </BrowserRouter>
    );
}
