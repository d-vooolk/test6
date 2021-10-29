import styles from './EmployeesPage.module.css';
import React from "react";

let EmployeesPage = (props) => {

    let newUserElement = React.createRef();

    let onWriteText = () => {
        let text = newUserElement.current.value;
        props.updateText(text);
    }


    return (
        <div className={styles.content}>
            <h1> Employees Page </h1>

            <div>
                <input type={'text'} ref={newUserElement} value={props.newTextUserName} onChange={onWriteText}/>
                <button className={styles.addButton} onClick={props.addUser}>add new person</button>
            </div>


            <>
                {
                    props.users.map(person => <div>
                            <li>
                                {person.first_name}
                                <button key={person.id} onClick={() => {
                                    props.onDeleteUser(person.id)
                                }}> delete
                                </button>
                            </li>
                        </div>
                    )
                }
            </>


        </div>
    )
}

export default EmployeesPage;
