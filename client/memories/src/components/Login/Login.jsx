import React from 'react';
import { Avatar,Button,CssBaseline,TextField,Typography,FormControlLabel,Checkbox,Link,Box,Grid} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors';
import { ThemeContext } from "../../App";

const themeLogin = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: '#1565c0',
    },
    secondary: indigo,
  }
});

const useStyles = makeStyles({
  outer: {
    position: "fixed",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    //below is the image for dark theme
    // https://images.unsplash.com/photo-1660748054768-33282c43c318?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=377&q=80
    backgroundImage:
      "url('https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
    //below is the image for light theme
    // backgroundImage: "url('https://images.unsplash.com/photo-1658039615872-f3369fa3e1fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80')",
    // backgroundImage: "url('https://images.unsplash.com/photo-1660748054768-33282c43c318?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=377&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  outer_light:{
   
    position: "fixed",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    
    //below is the image for light theme
    backgroundImage: "url('https://images.unsplash.com/photo-1658039615872-f3369fa3e1fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80')",
    // backgroundImage: "url('https://images.unsplash.com/photo-1660748054768-33282c43c318?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=377&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  comp: {
    // below is the color for dark theme
    backgroundColor: "rgba(33, 37, 41, 0.2)",
    // below is the color for light theme
    // backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: "10px",
    backdropFilter: "blur(14px)",
  },
  title: {
    textTransform: "capitalize",
  },
  avatar: {
    backgroundColor: "#1769aa",
  },
  button: {
    marginBottom: "0.75em",
  },
  box: {
    border: "none",
  },
});

export default function Login() {
   const { setTheme, theme } = React.useContext(ThemeContext);

  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    
        <div className={theme === "Light" ? classes.outer_light: classes.outer }>
            <ThemeProvider theme={themeLogin}>
            <CssBaseline />
            <Grid className={classes.comp} container xs={12} sm={8} md={5} elevation={6} square>
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar className={classes.avatar} sx={{ m: 1 }}>
                  <AccountCircleIcon />
                </Avatar>
                <Typography className={classes.title} component="h1" variant="h4">
                  Login
                </Typography>
                <Box component="form" className={classes.box} noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    className={classes.button}
                    type="submit"
                    fullWidth
                    color="primary"
                    variant="contained"
                    sx={{ mt: 3 }}
                  >
                    Login
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </ThemeProvider>
        </div>
  );
}
 