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
        const { user } = props;
        
        this.handleMenu = this.handleMenu.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
       // this.state.setAuth(event.target.checked);
    };


    handleMenu = (event) => {
        console.log(event);
        this.props.setAnchorEl(event.currentTarget);
    };

    handleClose = () => {
        this.props.setAnchorEl(null);
    };

    render() {
    const { classes, user, open, anchorEl } = this.props;
    console.log(this.props);
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Link to="/" >
                            Home
                            </Link>
                        {(user === null || user?.expired) ? 
                        ( <Link to="/signin" >
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
                                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
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
        setAnchorEl: () => null,
        anchorEl: null,
        open: false,
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