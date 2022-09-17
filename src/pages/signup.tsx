import { Button, Grid, Paper, TextField } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Copyright } from "../components/common/copyright";

export const SignUp = () => {
  return (
    <Grid
      container
      // textAlign={"center"}
      justifyContent={"center"}
      height={"100vh"}
    >
      <Grid
        textAlign={"center"}
        item
        xs={12}
        md={5}
        component={Paper}
        elevation={4}
        square
        spacing={5}
      >
        {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}> */}
        <LockOutlinedIcon />
        {/* </Avatar> */}
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <TextField fullWidth label={"email"} />
        <TextField fullWidth label={"password"} />
        <TextField fullWidth label={"name"} />
        <Button>회원가입</Button>
        <Copyright />
      </Grid>
    </Grid>
  );
};
