import { PlusCircle } from 'phosphor-react';

import styles from "./Task.module.css";

export function Task(){
    return(
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
        
    );
}