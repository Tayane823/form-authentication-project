import React from 'react';

const Register = () => {
  return (
    <div>
      <h1>Crie seu cadastro!</h1>
      <form onSubmit={xxx}>
        <label>
            <span>Nome e Sobrenome</span>
            <input
            type='text'
            name='name'
            placeholder='Nome'
            ></input>
        </label>
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
        <label>
            <span>Confirme sua senha</span>
            <input
            type='password'
            name='password'
            placeholder='senha'
            ></input>
        </label>
      </form>
    </div>
  );
};

export default Register;