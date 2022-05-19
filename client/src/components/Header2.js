import { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

const pages = [
  {
    name: "Ev Arkadaşı",
    path: "/evarkadaslari",
  },
  { name: "Eşya", path: "/esyalar" },
  { name: "Kitap", path: "/kitaplar" },
  { name: "Not", path: "/notlar" },
];

const useStyles = makeStyles((theme) => ({
  logo: {
    [theme.breakpoints.down("md")]: {
      order: 2,
      flexGrow: 1,
    },
  },
  middleNav: {
    display: "flex",
    marginLeft: theme.spacing(2),
    flexGrow: 1,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  loginRegister: {
    display: "flex",
    order: 3,
    alignItems: "center",
  },
  menuIcon: {
    flexGrow: 1,
    order: 1,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  profile: {
    order: 4,
  },
}));

const Header2 = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const classes = useStyles();
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

  const handleLogout = () => {
    dispatch(logout());
    handleCloseUserMenu();
  };

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button
            sx={{ color: "white" }}
            component={Link}
            to="/"
            className={classes.logo}
          >
            <Typography variant="h6" noWrap component="div">
              <SchoolIcon fontSize="large" />
            </Typography>
          </Button>
          <Box className={classes.menuIcon}>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box className={classes.middleNav}>
            {pages.map((page) => (
              <Button
                component={Link}
                color="inherit"
                to={page.path}
                key={page.name}
                onClick={handleCloseNavMenu}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {!user && (
            <Box className={classes.loginRegister}>
              <Button
                component={Link}
                to="/login"
                onClick={handleCloseNavMenu}
                color="inherit"
              >
                Giriş Yap
              </Button>
              <Button
                component={Link}
                to="/register"
                onClick={handleCloseNavMenu}
                color="inherit"
              >
                Kayıt Ol
              </Button>
            </Box>
          )}

          {user && (
            <Box className={classes.profile}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar>{user.name.charAt(0).toUpperCase()}</Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  component={Link}
                  to="/profile"
                  onClick={handleCloseUserMenu}
                >
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/dashboard"
                  onClick={handleCloseUserMenu}
                >
                  <Typography textAlign="center">Dashboard</Typography>
                </MenuItem>
                <MenuItem component={Link} to="/" onClick={handleLogout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header2;
