import React, { useEffect } from 'react';
import { fetchUsers } from '../../redux/reducers/users';
import { useDispatch, useSelector } from 'react-redux';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Person from '@mui/icons-material/Person';
import UsersSkeleton from './UsersSkeleton';

const Users = () => {
    
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.usersReducer);
    console.log('users', users);
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {users.length === 0 ? <UsersSkeleton /> : users?.map((user, index) => (
                <ListItem alignItems="flex-start" key={index}>
                    <ListItemAvatar>
                        <Person />
                    </ListItemAvatar>
                    <ListItemText
                    primary={user.name}
                    secondary={
                        <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            sx={{ color: 'text.primary', display: 'inline' }}
                        >
                            {user.email}
                        </Typography><br />
                        Phone: {user.phone}<br />
                        Website: {user.website}
                        </React.Fragment>
                    }
                    />
                </ListItem>
        ))}
        </List>
    )
}

export default Users;
