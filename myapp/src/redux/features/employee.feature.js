import { EmployeeService } from "../../services/EmployeeService";
import { createSlice } from "@reduxjs/toolkit";
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';

const initialState={
    employees:EmployeeService.getAllEmployees(),
    name:"ratan"
}

const employeeSlice=createSlice({
    name:"employee",
    initialState:initialState,
    
    reducers:{
        updateSelected:function(state,action){
            console.log(state.name,'1515')
           // state.name=action.payload
            state.employees=state.employees.filter(employee=>employee.id!==action.payload)  
        },
        editSelected:function(state,action){
            console.log('edit')
        }
    }
})

export const {updateSelected,editSelected}=employeeSlice.actions;
export default employeeSlice.reducer;
