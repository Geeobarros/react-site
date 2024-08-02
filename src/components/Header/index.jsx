import { Link } from "react-router-dom";
import { useAuth } from '../../contexts/authContext'; // Importando o contexto de autenticação
import styles from './header.module.css';

export default function Header(){
    const { auth, signOut } = useAuth();

    return(
        <div className={styles.container}>
            <Link to='/'><h1>My Site</h1></Link>
            <div className={styles.content}>
                <Link to="/">Home</Link>
                {auth ? (
                    <>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link onClick={signOut} >Logout</Link>
                    </>
                ) : (
                    <>
                    <Link to='/cadastro'>Register</Link>
                    <Link to='/login'>Login</Link>
                    </>


                )}
            </div>
        </div>
    );
}
