import { Circle, Trash } from 'phosphor-react';

import styles from "./Task.module.css";

interface TaskProps {
    content: string;
    status: 'open'|'done';
}

export function Task(){
    return(
        <div className={styles.task}>
            <div className={styles.taskBox}>
                <button>
                    <Circle size={24}/>
                </button>
                <div className={styles.taskContent}>
                        <div className={styles.taskText}>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                Totam error inventore, molestiae fugit vel sapiente aliquid. 
                                Beatae modi tenetur sapiente ipsam maxime. 
                                Animi repudiandae doloribus, voluptatum laudantium aperiam qui praesentium.</p>                                                
                        </div>
                        <button>
                            <Trash size={24}/>
                        </button>           
                </div>
            </div>
        </div>
        
    );
}