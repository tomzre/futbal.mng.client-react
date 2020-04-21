import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import userManager from '../../Utils/UserManager';
import { push } from 'connected-react-router'
import Alert from '@material-ui/lab/Alert';

class Login extends React.Component 
{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: ''

        }
        const { user } = props;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        if((!user 
          || user.expired) 
          && !this.getQueryVariable('ReturnUrl'))
        {
          userManager.signinRedirect();  
        }
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }

    getQueryVariable(variable) {
      const query = window.location.search.substring(1);
      const vars = query.split('&');
      for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) === variable) {
          return decodeURIComponent(pair[1]);
        }
      }
    }

    async handleSubmit(event) {

      event.preventDefault();
        var response = await fetch('http://localhost:5000/api/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(
                {
                    password: this.state.password,
                    username: this.state.email,
                    returnUrl: this.getQueryVariable('ReturnUrl')
                }
            )
        });

        
        const data = await response.json();
        
        if(data.status === 401)
        {
          this.setState({formErrors: 'Wrong username or password!'})
        }


        if(data.isOk)
        {
          window.location = data.redirectUrl;
        }

    }
    render() {
        const { classes } = this.props;
        return (
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="offl"
                      value={this.state.email} 
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      value={this.state.password} 
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  disabled={this.state.email.length === 0 || this.state.password.length <= 6}
                >
                  Sign In
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link 
                      type="submit"
                      to="/signup"
                      variant="body2">
                        Don't have an account? Sing up!
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
            <Box mt={5}>
              {/* <Copyright /> */}
            </Box>
            {this.state.formErrors !== '' &&
            <Alert onClose={() => {}} severity="error">
              {this.state.formErrors}
            </Alert>
        }
          </Container> 
           
        )
    }
}

const useStyles = theme => ({
    paper: {
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: 1,
      backgroundColor: 'gray',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
    //   marginTop: theme.spacing(3),
    },
    submit: {
    //   margin: theme.spacing(3, 0, 2),
    },
  });

  Login.propTypes = {
    classes: PropTypes.object.isRequired,
  };

//export default withStyles(useStyles)(Login);

function mapStateToProps(state) {
  return {
    user: state.oidc.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    push
  };
}

export default  connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Login));