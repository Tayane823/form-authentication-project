import React from 'react';
import BackToHome from '../../jsx/BackToHome';
import { useState } from 'react';
import { useAuthentication } from '../../hooks/useAuthenticator';

const Register = () => {

    const [displayName, setDisplayName] = useState("");
    const [email, setEmail ] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [sucsess, setSuccess] = useState("");

    const {createUser, error: authError, loading } = useAuthentication();

    const handleSubmit = async (e) => {

        e.preventDefault()

        setError("")
        setSuccess("")

        const User = {
            displayName,
            email,
            password,
        }

        if (password !== confirmPassword) {

            setError("As senhas precisam ser iguais!")
        } 

        const res = await createUser(User)
        console.log(res)
    }

  return (
    <div>
      <h1>Crie seu cadastro!</h1>
      <form>
        <label>
            <span>Nome e Sobrenome</span>
            <input
            type='text'
            name='name'
            placeholder='Nome'
            onChange={({target}) => setDisplayName(target.value)}
            ></input>
        </label>
        <label>
            <span>E-mail</span>
            <input
            type='email'
            name='email'
            placeholder='E-mail'
            onChange={({target}) => setEmail(target.value)}
            ></input>
        </label>
        <label>
            <span>Senha</span>
            <input
            type='password'
            name='password'
            placeholder='Senha'
            onChange={({target}) => setPassword(target.value)}
            ></input>
        </label>
        <label>
            <span>Confirme sua senha</span>
            <input
            type='password'
            name='password'
            placeholder='senha'
            onChange={({target}) => setConfirmPassword(target.value)}
            ></input>
        </label>
        {error && <span>{error}</span>}
        {!error && <span>{sucsess}</span>}
        <button type='button' onClick={handleSubmit}>Criar cadastro</button>
      </form>
      <BackToHome />
    </div>
  );
};

export default Register;