import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Footer () {

    return (
        <>
        <Box sx={{ m: 10 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <BottomNavigation

                showLabels

            >
                <BottomNavigationAction label="Recent Lists" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorite Items" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby Stores" icon={<LocationOnIcon />} />
            </BottomNavigation>
        </Box>
        </>
    )
}

export default Footer;