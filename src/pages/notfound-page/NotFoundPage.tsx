import { Button, Chip } from '@mui/material';
import { NotFoundPageProps } from '../../types/pages'
import './NotFoundPage.scss';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = (props: NotFoundPageProps) => {

  const navigate = useNavigate();

  const goBack = (e: any) => {
    e.preventDefault();
    navigate(-1);
  }
    
  return (
    <div className='not-found'>
      <div className="not-found-inner">
        <div className="badge">
          <h5 className="error-text">404 error</h5>
        </div>
        <h1 className="header">We've lost this page</h1>
        <h5 className="subheader">Sorry, the page you are looking for doesn't exist or has been moved</h5>
        <Button variant="contained" size="small" className='control-button' onClick={goBack}>Back</Button>
      </div>
    </div>
  );

}

export default NotFoundPage;
