import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, completeTask } from "../../redux/reducers/todolist";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import CheckCircle from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import WorkIcon from '@mui/icons-material/Work';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Cancel from '@mui/icons-material/Cancel';


const TodoList = () => {

    const { tasks } = useSelector((state) => state.todoListReducer );
    const dispatch = useDispatch();
    const [taskName, setTaskName] = useState('');
    const [errorStatus, setErrorStatus] = useState(false);

    const handleChange = (e) => {
        setTaskName(e.target.value);
    }

    const handleTaskSave = () => {
        setTaskName('')
        if(!taskName) {
            setErrorStatus(true);
        }
        dispatch(addTask(taskName));
    }

    return (
        <div>
            <Box sx={{ display: 'flex', width: '100%' }}>
                <TextField
                    fullWidth
                    onChange={(e) => handleChange(e)}
                    label="Task Name"
                    id="taskName"
                    error={errorStatus}
                    helperText={errorStatus ? 'Task name is required' : ''}
                    sx={{ marginRight: '1rem' }}
                    value={taskName}
                />
                <Button
                    sx={{ whiteSpace: 'nowrap', height: '56px' }}
                    onClick={handleTaskSave}
                    variant="contained"
                    disabled={!taskName}
                >
                    Add Task
                </Button>
            </Box>
            <List>
                {tasks?.map((task, index) => {
                    return (
                        <>
                        <ListItem key={index}
                            secondaryAction={
                                <>
                                    <IconButton aria-label="delete" onClick={() => dispatch(deleteTask(task?.id))}><DeleteIcon /></IconButton>
                                    <IconButton
                                        aria-label="update"
                                        onClick={() =>  dispatch(completeTask(task?.id))}
                                    >
                                        {!task?.status ? <CheckCircle /> : <Cancel />}
                                    </IconButton>
                                </>
                            }
                        >
                        <ListItemAvatar>
                            <Avatar><WorkIcon color={task?.status ? "success" : ''} /></Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={<>
                                <Typography variant="h6" component="div">{task?.title}</Typography>
                                <Typography variant="caption" component="div">{task?.date}</Typography></>
                            }
                            secondary={
                                task?.status ? 'Completed'
                                :
                                'Pending'
                            }
                        />
                        </ListItem>
                        <Divider />
                        </>
                    )
                })}
            </List>
        </div>
    );
}

export default TodoList;
