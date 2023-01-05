import { React, useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Profile from './ui/profile';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="bg-gray-900 fixed top-0 left-0 right-0 z-10 py-5">
                <div className="container flex flex-wrap items-center justify-between mx-10">
                    <Link to="/" className="flex items-center text-white text-xl font-bold">
                        IOE DashBoard
                    </Link>
                    {/* <div className="flex items-center md:order-2">
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            sx={{color:'white'}}
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <Profile />
                    </div> */}
                </div>
            </nav>

        </>
        
    )
}

export default Navbar