import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { fetchUsers } from '../../redux/reducers/users';
import { useDispatch, useSelector } from 'react-redux';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Person from '@mui/icons-material/Person';
import UsersSkeleton from './UsersSkeleton';
import SubHeader from '../Layout/SubHeader';
import { Button } from '@mui/material';

const Users = () => {

    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.usersReducer);
    
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <SubHeader subheading={`We have ${users?.length} users.`} />
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
