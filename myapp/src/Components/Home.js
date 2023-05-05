import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector,useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { updateSelected } from '../redux/features/employee.feature';
export default function Home() {
    const state = useSelector((state) => {
        return state["employees"]
    })              

    let dispatch=useDispatch();
    console.log(state, '777')

    const handleClick=(id)=>{
       
       let s= confirm('are you really want to Delete');
       console.log(s,'17')
       if(s){
        dispatch(updateSelected(id))
       }
       
        
    }
    return (
        <div>

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.employees && state.employees.map(items=>{
                            return(
                                <>
                                <tr> 
                                    <td>{items.id}</td>
                                    <td>{items.name}</td>
                                    <td>{items.username}</td>
                                    <td>{items.email}</td>
                                    <td><Button variant="danger" onClick={()=>handleClick(items.id)}>Delete</Button></td>
                                    </tr>


                                </>
                            )
                        })

                    }
                   
                    
                </tbody>
            </Table>


        </div>
    )
}
