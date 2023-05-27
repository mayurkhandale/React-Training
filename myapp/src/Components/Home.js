import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector,useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { updateSelected,editSelected } from '../redux/features/employee.feature';
export default function Home() {
    const state = useSelector((state) => {
        return state["employees"]
    })              

    let dispatch=useDispatch();
    console.log(state, '777')

    const handleClick=(id)=>{
       
       let s=window.confirm('are you really want to Delete');
       console.log(s,'17')
       if(s){
        dispatch(updateSelected(id))
       }
       
        
    }
    const handeChange=()=>{
        dispatch(updateSelected('mayur'))
    }
    const handleEdit=(id)=>{
        let edit=window.confirm('are you really want to Edit');
        if(edit){
             dispatch(editSelected(id))
           }
    }
    return (
        <div>{state.name} <button onClick={()=>handeChange()}>change Name</button>
         {state.employees.length>0 ?
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
                                    <td><input value={items.id} readOnly={true}/></td>
                                    <td>{items.name}</td>
                                    <td>{items.username}</td>
                                    <td>{items.email}</td>
                                    <td><Button variant="danger" onClick={()=>handleClick(items.id)}>Delete</Button></td>
                                    <td><Button variant="primary" onClick={()=>handleEdit(items.id)}>Edit</Button></td>
                                    </tr>


                                </>
                            )
                        })

                    }
                   
                    
                </tbody>
            </Table>
            :

            <p className='alert alert-danger m-6 -5'>Data is not Available</p>
        }


        </div>
    )   
}
