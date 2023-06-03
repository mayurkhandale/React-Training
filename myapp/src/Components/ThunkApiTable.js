import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import { getPost } from '../redux/features/user.feature.js';
const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const ThunkApiTable = () => {
    const [open, setOpen] = React.useState(false);
    const [rowData,setRowData]=useState();
    console.log(rowData,'31')
  const handleOpen = (row) =>{
    setRowData(row)
     setOpen(true)
    }

  const handleClose = () => setOpen(false);

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
                        style={{ backgroundColor: 'rgb(225 182 225)' }}
                    >
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">User Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {store.user && store.user.map((row, idx) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                style={idx % 2 == 0 ? { backgroundColor: '#c9c1c9' } : { backgroundColor: '#dfd3d9de' }}
                                onClick={()=>handleOpen(row)}
                           >   <TableCell align="right">{row.id}</TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.username}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                              
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div>
    
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
             Modal
            </Typography>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead
                        style={{ backgroundColor: 'rgb(225 182 225)' }}
                    >
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">User Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                     
                            <TableRow
                            
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                // style={idx % 2 == 0 ? { backgroundColor: '#c9c1c9' } : { backgroundColor: '#dfd3d9de' }}
                              
                           >   <TableCell align="right">{rowData?.id}</TableCell>
                                <TableCell align="right">{rowData?.name}</TableCell>
                                <TableCell align="right">{rowData?.username}</TableCell>
                                <TableCell align="right">{rowData?.email}</TableCell>
                              
                            </TableRow>
                      
                    </TableBody>
                </Table>
          </Box>
        </Fade>
      </Modal>
    </div>
        </>
    )
}


export default ThunkApiTable;