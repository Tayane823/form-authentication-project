import React from 'react';
import { Link } from 'react-router-dom';
import Register from '../register/Register';
import { Login } from '@mui/icons-material';

const Home = () => {
  return (
    <div>
        <h1>Olá, você está na página Home</h1>
        <ul>
            <li><Link to="/register">Criar cadastro</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
      
      
    </div>
  );
};

export default Home;