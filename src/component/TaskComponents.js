import { MDBBadge, MDBBtn,MDBCheckbox, MDBTable, MDBTableHead, MDBTableBody,MDBCard,MDBCardBody,MDBCardTitle,MDBInputGroup,MDBInput,MDBIcon,MDBValidation,MDBValidationItem } from 'mdb-react-ui-kit';
import { addTask } from '../restAPI/TodoAPI';
import { useState } from 'react';

const TaskComponents= () =>{
    const [addTaskData, setAddTaskData] = useState('')
    const addTaskToTheList = () =>{
        if (addTaskData !== '') {
        addTask(addTaskData)
            .then((value) => {
            
            })
        }
    }
    return(
        <MDBCard className='mb-3' >
            <MDBCardBody>
            <MDBValidation > 
                <MDBValidationItem >
                    <MDBInputGroup>
                    <MDBInput label='Add Task' required  onChange={(e) => setAddTaskData(e.target.value)} />
                        <MDBBtn  rippleColor='dark' type='submit'  onClick={() => addTaskToTheList()} > 
                        <MDBIcon icon='pencil' />
                    </MDBBtn>
                </MDBInputGroup>
                </MDBValidationItem>
            </MDBValidation>
            </MDBCardBody>
        </MDBCard>

    )
}

export default TaskComponents;