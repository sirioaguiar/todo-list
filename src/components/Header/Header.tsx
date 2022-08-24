import styles from "./Header.module.css";
import todoLogo from "../../assets/todo-logo.svg";

export function Header(){
    return(
        <header className={styles.header}>
            <img src={todoLogo} alt="Logotipo do Todo"/>
            <div className={styles.titulo}>
                <strong className={styles.azul}>to</strong>
                <strong className={styles.roxo}>do</strong>
            </div>
        </header>
        
    );
}