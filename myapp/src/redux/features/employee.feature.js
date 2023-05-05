import { EmployeeService } from "../../services/EmployeeService";
import { createSlice } from "@reduxjs/toolkit";


const initialState={
    employees:EmployeeService.getAllEmployees()
}

const employeeSlice=createSlice({
    name:"employee",
    initialState:initialState,
    reducers:{
        updateSelected:function(state,action){
            console.log(state.employees,'1515')
            state.employees=state.employees.filter(employee=>employee.id!=action.payload)  
        }
    }
})

export const {updateSelected}=employeeSlice.actions;
export default employeeSlice.reducer;
