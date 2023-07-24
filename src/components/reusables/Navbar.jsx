import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, CssBaseline, useScrollTrigger, Box, Fab, Fade, IconButton, Menu, Tooltip, MenuItem, Button } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Logo from '../../assets/LOGO.svg';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import DownloadIcon from '@mui/icons-material/Download';
import '../reusables/Reusables.css';

const pages = ['Noticias', 'Store', 'Soporte técnico'];
const about = ['Un ecosistema global', 'Programa de fidelización', 'Datos y consejos', 'Fair Play Program'];

const ScrollTop = (props) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
            });
        }
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Fade>
    );
};

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

const BackToTop = (props) => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [expand, setExpand] = React.useState(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setExpand(true);
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setExpand(false);
        setAnchorElUser(null);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar>
                <Toolbar className='Appbar'>

                    <img src={Logo} alt='Logo' />

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open About">
                            <Button
                                onClick={handleOpenUserMenu}
                                sx={{
                                    p: 0, mr: 1, ml: 4,
                                    my: 2, color: '#9e9e9e',
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'roboto',
                                    fontWeight: 590,
                                }}
                            >
                                Acerca de {expand ? (<ExpandLessIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />)
                                    : (<ExpandMoreIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />)}

                            </Button>
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
                            {about.map((about) => (
                                <MenuItem key={about} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{about}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

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
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2, color: '#9e9e9e', display: 'block',
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'roboto',
                                    fontWeight: 590,
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    {/* FLEX END*/}
                    <Box sx={{ flexGrow: 0 }}>
                        <Button variant="contained" className='ButtonLogin'
                            sx={{
                                backgroundColor: 'white',
                                color: 'black',
                                mr: 2,
                                fontFamily: 'roboto',
                                borderRadius: '50px',
                                fontWeight: 'bold',
                            }}
                        >Iniciar sesión</Button>
                        <Button variant="contained" className='ButtonDownload'
                            sx={{
                                backgroundColor: '#2962ff',
                                color: 'white',
                                mr: 2,
                                fontFamily: 'roboto',
                                borderRadius: '50px',
                                fontWeight: 'bold',
                            }}
                        >
                            <DownloadIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />Descarga para PC
                        </Button>
                    </Box>

                </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor" />

            <ScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>

        </React.Fragment >
    );
};

const Navbar = () => {
    return (
        <React.Fragment>
            <BackToTop />
        </React.Fragment>
    );
};

export default Navbar;
