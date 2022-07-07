
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
//import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { BrowserRouter,Routes,NavLink,Route } from 'react-router-dom';
import Home1 from './Home';
import Resume1 from './Resume';
import ActionAreaCard from './Transport';
import ResponsiveGrid from './Food';
import Music from './music';
import App4 from './contact1';
import Kaliraj from './kaliraj.png';
import App3 from './gallery';
import Cont from './cont';
import MediaControlCard from './music1';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <BrowserRouter>
   <AppBar position="fixed" style={{backgroundColor:'white',}}>
        <Toolbar disableGutters>
          {/*<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />*/}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 0,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: 'none',
              borderWidth:'1',
              color: 'white',

              textDecoration: 'none',
            }}
          >
 <div class="logo">
                    <h1 style={{color:'white',width:'50vh'}}>KALIRAJ A</h1>
                </div>         
                
                 </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'san-serif',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
           
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <NavLink to = '/'exact > <Button variant='contained' color='secondary'
              
                sx={{ my: 2, color: 'white', display: 'block',marginLeft:'100px' }}
              >
               Home
              </Button></NavLink>
             <NavLink to = '/Resume'> 
             <Button  variant='contained' color='secondary'
             sx={{ my: 2, color: 'white', display: 'block',marginLeft:'25PX' }}
            >
             Resume
            </Button></NavLink>
            <NavLink to = '/gallery'> <Button  variant='contained' color='secondary'
              
              sx={{ my: 2, color:'white', display: 'block',marginLeft:'25PX' }}
            >
             Gallery
            </Button></NavLink>
            <NavLink to = '/music'> <Button  variant='contained' color='secondary'
              
              sx={{ my: 2, color: 'white', display: 'block',marginLeft:'25PX' }}
            >
             Music
            </Button></NavLink>
            <NavLink to = '/Transport'> <Button  variant='contained' color='secondary'
              
              sx={{ my: 2, color: 'white', display: 'block',marginLeft:'25PX' }}
            >
             Sports
            </Button></NavLink>
            <NavLink to = '/Food'> <Button  variant='contained' color='secondary'
              
              sx={{ my: 2, color:'white', display: 'block',marginLeft:'25PX'  }}
            >
             Food and Transport
            </Button></NavLink>
            
            <NavLink to = '/cont'> <Button  variant='contained' color='secondary'
              
              sx={{ my: 2, color:'white', display: 'block',marginLeft:'25px' }}
            >
             Contact
            </Button></NavLink>
            
         
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={Kaliraj} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
    </AppBar>
    <Routes>
        <Route exact path='/' element={<Home1/>}/>
        <Route exact path='/Resume' element={<Resume1/>}/>
        <Route exact path='/gallery' element={<App3/>}/>


        <Route exact path='/music' element={<Music/>}/>
        <Route exact path='/Transport' element={<ActionAreaCard/>}/>
        <Route exact path='/Food' element={<ResponsiveGrid/>}/>
        <Route exact path='/contact1' element={<App4/>}/>
        <Route exact path='/cont' element={<Cont/>}/>






      
    </Routes>
    </BrowserRouter>
  );
};
export default Navigation;

