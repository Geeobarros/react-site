import { useForm } from "react-hook-form"
import styles from './userForm.module.css'
import Header from "../Header";


export default function UserForm() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    function onSubmit(data){    
        console.log(data);
    }

    return(
        
        <form onSubmit={handleSubmit(onSubmit)} className={styles.containerFormRegister}>
            <Header/>
            <h1 className={styles.titleFormRegister}>Cadastre-se</h1>

            <div>
                
                <input type="text"
                placeholder="Nome"
                id="name"
                {...register('name', { required: true})} />
                {errors.name && <p className={styles.errorSpan}>Nome é obrigatório!</p>}
            </div>                
            

            <div>
                <input type="number"
                placeholder="Idade"
                id="age"
                {...register('age', {required: true,
                validate: value => value >= 18 || 'Você deve ter pelo menos 18 anos!'
                })} />
                {errors.age && <p className={styles.errorSpan}>{errors.age.message}</p>}
            </div>
            

            <div>
                <input type="email"
                placeholder="Emai"
                id="email"
                {...register('email', {required: true })} />
                {errors.email && <p className={styles.errorSpan}>Email é obrigatório!</p>}
            </div>
            

            <div>
                <input type="password"
                placeholder="Senha"
                id="password"
                {...register('password',  {required: true})} />
                {errors.password && <p className={styles.errorSpan}>Senha é obrigatório!</p>}
            </div>
            <button type="submit">Cadastrar</button>


        </form>
    )
}