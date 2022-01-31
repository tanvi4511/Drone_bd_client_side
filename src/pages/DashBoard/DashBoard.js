import * as React from 'react';
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
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";


import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const drawerWidth = 240;

function DashBoard(props) {
    const history = useHistory();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const { user, logOut } = useAuth();
    const [admin, setadmin] = React.useState(false);

    React.useEffect(() => {
        fetch(`http://localhost:5000/user/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setadmin(data.admin);
                console.log(data.admin);

            })
    }, [user.email]);
    const logOutd = () => {
        logOut();
        history.push("/home");
    }
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <Link to="/home"> <Button className='btn btn-light w-100 my-2' > Home </Button></Link>
                <Link to="/myorder"> <Button className='btn btn-light w-100 my-2' > My Order </Button></Link>
                <Link to="/addreview"> <Button className='btn btn-light w-100  my-2'>Add Review</Button></Link>
                <Link to="/pay"> <Button className='btn btn-light w-100 my-2' >Pay</Button></Link>
                {admin && <Box> <Link to="/allorder"> <Button className='btn btn-light w-100  my-2 '> All order</Button></Link>
                    <Link to="/makeadmin"> <Button className='btn btn-light w-100  my-2 '> Make Admin</Button></Link>
                    <Link to="/addproduct"> <Button className='btn btn-light w-100  my-2 '> Add Product</Button></Link>
                    <Link to="/mgproduct"> <Button className='btn btn-light w-100  my-2 '> Manage Product</Button></Link></Box>}
                <Link onClick={logOutd}><Button className='btn btn-light w-100 my-2' > Log Out </Button></Link>
            </List>
            <Divider />

        </div>
    );


    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
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
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
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
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
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
                <Toolbar />
                <Typography>
                    <h2 className='text-center'> Welcome to dashboard</h2>
                </Typography>

            </Box>
        </Box>
    );
}

DashBoard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};




export default DashBoard;
