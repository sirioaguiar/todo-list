import styles from "./TaskList.module.css";

export function TaskList(){
    return(
        <div className={styles.list}>
            <header>
                <span className={styles.azul}>
                    Tarefas criadas 0
                </span>
                <span className={styles.roxo}>
                    Tarefas concluídas 0
                </span>
            </header>
        </div>
    );
}