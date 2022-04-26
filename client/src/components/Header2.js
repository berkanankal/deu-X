import * as React from "react";
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
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const pages = [
  {
    name: "Ev Arkadaşı",
    path: "/evarkadasi",
  },
  { name: "Eşya", path: "/esyalar" },
  { name: "Kitap", path: "/kitaplar" },
  { name: "Not", path: "/notlar" },
];
const settings = [
  { name: "Profile", path: "/" },
  { name: "Account", path: "/" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Logout", path: "/" },
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
  const classes = useStyles();
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
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button
            sx={{ color: "white" }}
            component={Link}
            to="/ "
            className={classes.logo}
          >
            <Typography variant="h6" noWrap component="div">
              LOGO
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

          <Box className={classes.profile}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
              {settings.map((setting) => (
                <MenuItem
                  component={Link}
                  to={setting.path}
                  key={setting.name}
                  onClick={handleCloseUserMenu}
                >
                  <Typography textAlign="center">{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header2;
