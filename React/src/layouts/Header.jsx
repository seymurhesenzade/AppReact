import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useState } from 'react';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
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
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="data:image/jpeg;base64,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" />
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
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
