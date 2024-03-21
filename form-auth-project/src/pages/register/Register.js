import React from 'react';
import BackToHome from '../../jsx/BackToHome';
import { useState, useEffect } from 'react';
import { useAuthenticator } from '../../hooks/useAuthenticator';

const Register = () => {

    const [displayName, setDisplayName] = useState("");
    const [email, setEmail ] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
   // const [sucsess, setSuccess] = useState("");

    const {createUser, error: authError, loading } = useAuthenticator();

    const handleSubmit = async (e) => {

        e.preventDefault()

        setError("")

        const user = {
            displayName,
            email,
            password,
        }

        if (password !== confirmPassword) {

            setError("As senhas precisam ser iguais!")
            return;
        } 

        const res = await createUser(user)
        console.log(res)
    }

  return (
    <div>
      <h1>Crie seu cadastro!</h1>
      <form onSubmit={handleSubmit}>
        <label>
            <span>Nome e Sobrenome</span>
            <input
            type='text'
            name='name'
            placeholder='Nome'
            value={displayName}
            onChange={({target}) => setDisplayName(target.value)}
            ></input>
        </label>
        <label>
            <span>E-mail</span>
            <input
            type='email'
            name='email'
            placeholder='E-mail'
            value={email}
            onChange={({target}) => setEmail(target.value)}
            ></input>
        </label>
        <label>
            <span>Senha</span>
            <input
            type='password'
            name='password'
            placeholder='Senha'
            value={password}
            onChange={({target}) => setPassword(target.value)}
            ></input>
        </label>
        <label>
            <span>Confirme sua senha</span>
            <input
            type='password'
            name='password'
            placeholder='senha'
            value={confirmPassword}
            onChange={({target}) => setConfirmPassword(target.value)}
            ></input>
        </label>
        {error && <span>{error}</span>}
        <button >Criar cadastro</button>
      </form>
      <BackToHome />
    </div>
  );
};

export default Register;