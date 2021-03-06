import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import shortid from 'shortid';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state =
    {
      username: '',
      lastName: '',
      password: '',
      email: '',
      formErrors: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:5000/api/account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(
        {
          name: this.state.username,
          password: this.state.password,
          email: this.state.email,
          returnUrl: "http://localhost:3000/callback"
        }
      )
    });

    const data = await response.json();
    console.log(data);
    if (Object.entries(data).length === 0 && data.constructor === Object) {
      this.setState({
        username: '',
        lastName: '',
        password: '',
        email: ''
      });
    }else{
      var temp = [];
      data.map(error => 
        temp.push({id: shortid.generate(), code: error.code, description: error.description}))
      this.setState({ formErrors: temp });
    }
  }

  closeError = (errorId) => 
  {
    let errors = this.state.formErrors.filter(e => {
      return e.id !== errorId
    })
    this.setState({formErrors: errors});
  }
  classes = useStyles();

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
            Sign up
        </Typography>
          <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="off"
                  name="username"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="off"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </Grid>
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
              disabled={this.state.password.length === 0 
                || this.state.username.length === 0 
                || this.state.lastName.length === 0 
                || this.state.email.length === 0}
            >
              Sign Up
          </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link
                  type="submit"
                  to="/signin"
                  variant="body2">
                  Already have an account? Sign in
              </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        {
          this.state.formErrors.map((error) =>
            <Alert onClose={() => this.closeError(error.id)} severity="error" key={error.id}>
              {error.description}
            </Alert>)
        }
      </Container>
    );
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

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Register);