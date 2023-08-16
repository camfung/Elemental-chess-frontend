import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from '../../../assets/logo-color-cropped.png';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { VIEWPORT } from '../../../utils/Enums';
import "./PermanentDrawer.css"

const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(true);

    const navigate = useNavigate();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const handlePageNavigation = (pageName) => {

        // console.log(`Navigating to ${pageName}`)
        navigate(`/${pageName}`);
    };
    const drawer = (
        <div stye={{ backgroundColor: '#003664;' }}>
            <img src={Logo} style={{ width: '100%' }} className='link-cursor' alt="Logo" />
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
        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <div
                className="app-bar"
            >
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                        backgroundColor: '#003664;',
                        color: 'white',
                    }}

                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Elemental Chess
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            <Box
                component="nav"
                sx={{ backgroundColor: '#003664;', width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        flexShrink: 0,
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#003664;', },
                        color: 'white',

                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            backgroundColor: '#003664;',
                            color: "white"
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                {props.children}
            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;
