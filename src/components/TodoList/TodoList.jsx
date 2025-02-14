import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, completeTask } from "../../redux/reducers/todolist";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import WorkIcon from '@mui/icons-material/Work';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const UserInfo = () => {

    const { tasks } = useSelector((state) => state.todoListReducer );
    const dispatch = useDispatch();
    const [taskName, setTaskName] = useState('Task name here...');

    const handleChange = (e) => {
        setTaskName(e.target.value);
    }

    const handleTaskSave = () => {
        setTaskName('Task name here...')
        dispatch(addTask(taskName));
    }

    const handleTaskComplete = (id) => {
        dispatch(completeTask(id));
    }

    return (
        <div>
            <Box sx={{ display: 'flex', width: '100%' }}>
                <TextField
                    fullWidth
                    onChange={(e) => handleChange(e)}
                    label="Task Name"
                    id="taskName"
                    error={!taskName}
                    helperText={!taskName ? 'Task name is required' : ''}
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
                        <ListItem key={index}
                            secondaryAction={
                                <IconButton edge="end" aria-label="delete" onClick={() => dispatch(deleteTask(task?.id))}><DeleteIcon /></IconButton>
                            }
                        >
                        <ListItemAvatar>
                            <Avatar><WorkIcon color={task?.status ? "success" : ''} /></Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={task?.title}
                            secondary={
                                task?.status ? 'Completed'
                                :
                                <Button
                                    size="small"
                                    color="success"
                                    href="#text-buttons"
                                    onClick={() => handleTaskComplete(task?.id)}
                                >
                                    Mark done
                                </Button>
                            }
                        />
                        </ListItem>
                    )
                })}
            </List>
        </div>
    );
}

export default UserInfo;
