import './LoginPage.scss';
import { LoginPageProps } from '../../types/pages';
import { getCurrentYear } from '../../utils/getCurrentYear';
import { Link, useNavigate } from 'react-router-dom';
import { Alert, Avatar, AvatarGroup, Backdrop, Button, CircularProgress, TextField } from '@mui/material';
import cartLogo from '../../assets/svgs/approved.png';
import curlyarrow from '../../assets/svgs/curl-arrow.png';
import logo from '../../assets/icons/pfizer.png';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import loginUser from '../../services/user-service/loginUser';
import CheckIcon from '@mui/icons-material/Check';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { logIn } from '../../store/slices/authSlice';

const LoginPage = (props: LoginPageProps) => {

  const navigate = useNavigate();

  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const yupValidationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string()
      .min(3, 'Password must be at least 3 characters')
      .required('Password is required'),
  });

  const handleLogIn = () => {
    dispatch(logIn());
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yupValidationSchema,
    onSubmit: async (values) => {
      console.log(values);
      await loginUser({
        values: values,
        navigate: navigate,
        setIsError: setIsError,
        setIsSuccess: setIsSuccess,
        setIsLoading: setIsLoading,
        handleLogIn: handleLogIn
      });
      formik.resetForm();
    },
  });

  return (

    <div className='login'>
      
      <div className="login-left">

        <div className="login-content">

          <Backdrop
            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
            open={isLoading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>

          {
            isError && (
              <Alert className='alert-message' icon={<CheckIcon fontSize="inherit" />} severity="error">
                Please try again later
              </Alert>
            )
          }
          
          {
            isSuccess && (
              <Alert className='alert-message' icon={<CheckIcon fontSize="inherit" />} severity="success">
                Login Successful
              </Alert>
            )
          }
          
          <div className="logo-content">
            <img src={logo} alt="logo" className="logo" />
          </div>

          <div className="header-section">
            <h1 className="header">Welcome Back</h1>
            <h1 className="subheader">Login to your account</h1>
          </div>

          <form onClick={formik.handleSubmit} className="form">
            <div className="text-input-container">
              <div className="error">
                <h6 className="error-texts">
                  {formik.touched.email && formik.errors.email}
                </h6>
              </div>
              <TextField
                label="Email Address"
                id="outlined-size-small"
                size="small"
                className="text-field"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="text-input-container">
              <div className="error">
                <h6 className="error-texts">
                  {formik.touched.password && formik.errors.password}
                </h6>
              </div>
              <TextField
                label="Password"
                id="outlined-size-small"
                size="small"
                className="text-field"
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <Button type="submit" variant="contained" size="small" className='control-button'>Login</Button>
            <h6 className="questionText">Didn't here before? <span><Link to='/register'>Register</Link></span></h6>
          </form>
        </div>

        <div className="left-footer">
          <div className="left">
            <h5 className="link">© { getCurrentYear() } Company</h5>
          </div>
          <div className="right">
            <h5 className="link">Term</h5>
            <h5 className="link">Privacy</h5>
          </div>
        </div>
        
      </div>
      
      <div className="login-right">

        <img src={curlyarrow} alt="curlyarrow" className="curlyarrow" />

        <div className="logo-container">
          <img src={cartLogo} alt="logo-img" className="logo-img" />
        </div>
        <h2 className="right-header">Purchase thousands of products</h2>
        <h5 className="right-para">Join our platform to purchase thousands of highly valuable products in minutes.</h5>
        <div className="right-users">
          <AvatarGroup max={4}>
            <Avatar alt="Remy Sharp" src="https://plus.unsplash.com/premium_photo-1689606093808-3cb4393248d2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1685903772095-f07172808761?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1599110364868-364162848518?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </AvatarGroup>
          <h5 className="users-text">
            Join 60,000+ users
          </h5>
        </div>
      </div>
      
    </div>
  );

}

export default LoginPage;
