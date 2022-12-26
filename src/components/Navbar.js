import { React, useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Profile from './ui/profile';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="bg-black border-gray-200 dark:bg-gray-900 ">
                <div className="container flex flex-wrap items-center justify-between mx-10">
                    <Link to="/" className="  flex items-center text-white text-xl font-bold">
                        IOE DashBoard
                    </Link>
                    <div className="flex items-center md:order-2">
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

                        {/* Check */}
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar