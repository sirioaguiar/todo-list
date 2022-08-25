import { PlusCircle } from 'phosphor-react';
import styles from "./TaskList.module.css";

export function TaskList(){
    return(
        <div className={styles.taskWrapper}>
                <form 
                // onSubmit={handleCreateNewComment} 
                className={styles.taskForm}>            
                <textarea 
                    name="task"
                    placeholder="Adicione uma nova tarefa"
                    // value={newCommentText}
                    // onChange={handleNewCommentChange}
                    // onInvalid={handleNewCommentInvalid}
                    required
                />
                <div>
                    <button 
                        type="submit" 
                        // disabled={isNewCommentEmpty}
                        >
                            Criar
                            <PlusCircle size={16}/>
                        </button>
                </div>
            </form>
            <div className={styles.taskList}>
            <header>
                <span className={styles.azul}>
                    Tarefas criadas 0
                </span>
                <span className={styles.roxo}>
                    Tarefas concluídas 0
                </span>
            </header>
            </div>
        </div>
    );
}