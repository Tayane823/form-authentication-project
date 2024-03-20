import React from 'react';
import BackToHome from '../../jsx/BackToHome';

const Login = () => {
  return (
    <div>
      <h1>Faça o seu login</h1>
      <form>
      <label>
            <span>E-mail</span>
            <input
            type='email'
            name='email'
            placeholder='E-mail'
            ></input>
        </label>
        <label>
            <span>Senha</span>
            <input
            type='password'
            name='password'
            placeholder='Senha'
            ></input>
        </label>
        <button>Entrar</button>
      </form>
      <BackToHome />
    </div>
  );
};

export default Login;