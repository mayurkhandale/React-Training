import React, { useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux'
import { getPost } from '../redux/features/user.feature.js'
const ThunkApiTable = () => {
    const dispatch = useDispatch();
    const store = useSelector((state) => {
        return state['users']
    })

    useEffect(() => {
        dispatch(getPost())
    }, [])
    console.log(store.user, '1616')
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead
                      style={{backgroundColor:'rgb(225 182 225)'}}
                    >
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">User Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {store.user && store.user.map((row,idx) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                style={idx%2==0 ? { backgroundColor:'#c9c1c9'} : { backgroundColor:'#dfd3d9de'}}
                            >   <TableCell align="right">{row.id}</TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.username}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                {/* <TableCell align="right">{row.protein}</TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}


export default ThunkApiTable;