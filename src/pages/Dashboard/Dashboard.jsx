import Logout from "../../components/LogOut/Logout";
import styles from './dashboard.module.css'

export default function Dashboard(){

    return(
        <div className={styles.containerDashboard}>
            <h2>Dashboard</h2>
            <p>Esta é um rota privada</p>
            < Logout/>
        </div>
    )
}