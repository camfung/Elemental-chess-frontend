import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Logo from '../../../assets/logo-color-cropped.png';
import { useNavigate } from 'react-router-dom';
// Import the CSS class for the link cursor
import './PermanentDrawer.css';

const drawerWidth = 240;

export default function PermanentDrawerLeft(props) {
  const navigate = useNavigate();
  // Function to handle page navigation
  const handlePageNavigation = (pageName) => {

    // console.log(`Navigating to ${pageName}`)
    navigate(`/${pageName}`);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#003664;',
            color: 'white',
          },
        }}
        anchor="left"
      >
        <img src={Logo} style={{ width: "100%" }} className='link-cursor' alt="Logo" />
        <Divider />
        <List>
          {[
            { pageName: 'community', label: 'Community' },
            { pageName: 'how-to-play', label: 'How To Play' },
            { pageName: 'type-chart', label: 'Type Chart' },
            { pageName: 'bug-reporting', label: 'Bug Reporting' },
            { pageName: 'sign-out', label: 'Sign Out' },
          ].map((item, index) => (
            <ListItem key={item.label} disablePadding>
              {/* Use ListItemButton with an onClick handler and apply the link-cursor class */}
              <ListItemButton className="link-cursor" onClick={() => handlePageNavigation(item.pageName)}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.transparent', p: 3, height: '90vh' }}>
        {props.children}
      </Box>
    </Box>
  );
}
