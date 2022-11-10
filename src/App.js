import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Index from './components/Index';
import Login from './components/Login';
import Admin from './components/Admin';

function App() {
    return (
        <div className="App">
			<Routes>
				<Route path="/" element={<Index />}/>
				<Route path="/register" element={<Register />}/>
				<Route path="/login" element={<Login />}/>
				<Route path="/admin" element={<Admin />}/>
			</Routes>
        </div>
    );
}

export default App;
