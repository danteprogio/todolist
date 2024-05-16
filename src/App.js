import { useState,useEffect } from 'react';
import './App.css';
import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody,MDBCard,MDBCardBody,MDBCardTitle,MDBInputGroup,MDBInput,MDBIcon,MDBValidation,MDBValidationItem } from 'mdb-react-ui-kit';
import TodolistDetails from './component/TodolistDetails';
import { addTask, getTodoList } from './restAPI/TodoAPI';
import TaskComponents from './component/TaskComponents';

function App() {
  const [listOfTodo, setListOfTodo ] = useState([])
  useEffect(() => {
      getTodoList()
        .then((data)=>{
          setListOfTodo(data)
        })
  }, [listOfTodo]);



  return (

    <div className='m-5' >
      <TaskComponents/>
      <MDBCard>
      <MDBCardBody>
          <MDBCardTitle className='mt-4 ' ><h3>List Of Task</h3></MDBCardTitle>
          <MDBTable align='middle'>
                <MDBTableHead dark>
                  <tr>
                    <th scope='col'>Task</th>
                    <th scope='col'>Status</th>
                    <th scope='col'>Actions</th>
                   
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                    <TodolistDetails  listOfTodo ={listOfTodo}/>
                </MDBTableBody>
          </MDBTable>
      </MDBCardBody>
      </MDBCard>

    </div>
   
  );
}

export default App;

