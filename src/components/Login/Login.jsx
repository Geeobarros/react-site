import { useState } from 'react';
import { useAuth } from '../../contexts/authContext';
import {  Link, useNavigate } from 'react-router-dom';
import Header from '../Header';
import styles from './signin.module.css'

export default function Login() {
    const { signIn } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const [error, setError] = useState(null);

    async function handleSubmit(e){
        e.preventDefault();
        setError(null);

        try {
            await signIn({ username, password });
            navigate('/dashboard');
            console.log('login', 'nome:',username, 'senha:', password)
        }catch(error) {
            console.log('falha no login');
            setError(<span>Username/password incorrect</span>)

        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <Header/>
            <div className={styles.containerFormLogin}>

                <h1 className={styles.titleFormLogin}>Login </h1>
                
                <input type="text" 
                placeholder='Username'
                value={username}
                required 
                onChange={(e) => setUsername(e.target.value)}
                />
            
                
                <input placeholder='Password' type="password" 
                value={password}
                required 
                onChange={(e) => setPassword(e.target.value)}
                />
            {error && <p style={{color:'red'}}>Username/password incorrect</p>}

            <span>Não tem uma conta? <Link style={{textDecoration: 'underline'}} to='/cadastro' >Cadastre-se</Link> </span>

            <button type='submit'>Login</button>
            </div>
        </form>

    )

}