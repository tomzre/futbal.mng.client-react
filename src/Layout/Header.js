import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { push } from 'connected-react-router'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import * as types from '../Actions';
import userManager from '../Utils/UserManager';

const useStyles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 2,
    },
    title: {
        flexGrow: 1,
    },
});

class Header extends React.Component {
    constructor(props) {
        super(props);
        const { user, location } = props;
        
        this.handleMenu = this.handleMenu.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleMenu = (event) => {
        this.props.dispatch(types.openMenu({open: true, anchorEl: event.currentTarget}));
        
    };

    logout = () =>  {
        const user = this.props.user;
        if (user !== null) userManager.signoutRedirect(user.id_token);
        this.handleClose();
      }

    handleClose = () => {
        this.props.dispatch(types.closeMenu({open: false, anchorEl: null}));
    };
    goToLoginPage = (event) => {
        if(this.props.location.pathname === '/signin') event.preventDefault();
    }
    render() {
    const { classes, user, open, anchorEl, location } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Link color="inherit" to="/" >
                            Home
                            </Link>
                        {(user === null || user?.expired) ? 
                        ( <Link color="inherit" onClick={this.goToLoginPage} to="/signin" >
                                Login
                            </Link>
                        ) :
                         (
                            <div>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={this.handleClose}><Link to="/dashboard">My account</Link></MenuItem>
                                    <MenuItem onClick={this.logout}>Logout</MenuItem>

                                </Menu>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
                {this.props.children}
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        location: state.router.location,
        anchorEl: state.subscriptions.anchorEl,
        open: state.subscriptions.open,
        user: state.oidc.user
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      dispatch,
      push
    };
  }
  
  export default  connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Header));