import './RegisterPage.scss';
import { RegisterPageProps } from '../../types/pages';
import { Avatar, AvatarGroup, Button, TextField } from '@mui/material';
import cartLogo from '../../assets/svgs/approved.png';
import { getCurrentYear } from '../../utils/getCurrentYear';
import curlyarrow from '../../assets/svgs/curl-arrow.png';
import logo from '../../assets/icons/pfizer.png';
import { Link } from 'react-router-dom';

const RegisterPage = (props: RegisterPageProps) => {

  return (

    <div className='register'>
      
      <div className="register-left">

        <div className="register-content">
          
          <div className="logo-content">
            <img src={logo} alt="logo" className="logo" />
          </div>

          <div className="header-section">
            <h1 className="header">Create an account</h1>
            <h1 className="subheader">Start your journey now</h1>
          </div>

          <div className="form">
            <TextField
              label="First Name"
              id="outlined-size-small"
              defaultValue=""
              size="small"
              className="text-field"
            />
            <TextField
              label="Last Name"
              id="outlined-size-small"
              defaultValue=""
              size="small"
              className="text-field"
            />
            <TextField
              label="Email Address"
              id="outlined-size-small"
              defaultValue=""
              size="small"
              className="text-field"
            />
            <TextField
              label="Password"
              id="outlined-size-small"
              defaultValue=""
              size="small"
              className="text-field"
            />
            <h6 className="instruction-text">Must be atleast 8 characters</h6>
            <Button variant="contained" size="small" className='control-button'>Create account</Button>
            <h6 className="questionText">Been here before? <span><Link to='/'>Login</Link></span></h6>
          </div>

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
      
      <div className="register-right">

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

export default RegisterPage;
