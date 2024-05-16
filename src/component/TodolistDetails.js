import { MDBBadge, MDBBtn } from 'mdb-react-ui-kit';
import { deleteTask, updateTask } from '../restAPI/TodoAPI';

const TodolistDetails =({listOfTodo})=>{
    return(
        <>
        {
            listOfTodo.map((todo) => {
                return(
                    <tr >
                        <td>
                            <p className='fw-bold mb-1'>{todo.task}</p>
                        </td>
                        <td>
                            {
                                todo.status === 'pending' ?
                                <MDBBadge color='danger' pill>
                                    {todo.status}
                                </MDBBadge>
                                :
                                <MDBBadge color='success' pill>
                                    {todo.status}
                                </MDBBadge>
                            }
                           
                        </td>
                        <td>
                            {
                                todo.status === 'complete' ?
                                    <MDBBtn className='me-1'  color='danger'  onClick={()=>deleteTask(todo.id)} >
                                        Delete
                                    </MDBBtn>
                                :
                                    <>
                                    <MDBBtn className='me-1' color='success' onClick={()=>updateTask(todo.id)} >
                                        Complete
                                    </MDBBtn>
                                    <MDBBtn className='me-1'color='danger'onClick={()=>deleteTask(todo.id)} >
                                        Delete
                                    </MDBBtn>
                                    </>
                            }
                            
                        </td>
                    </tr>
                )
            })
        }
        </>
        
    )
}

export default TodolistDetails