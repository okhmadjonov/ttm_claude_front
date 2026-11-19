import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import styles from './NotFound.module.scss';

const NotFound = () => (
  <div className={styles.wrapper}>
    <h1>404</h1>
    <p>Page not found</p>
    <Link to={ROUTES.DASHBOARD}>Back to dashboard</Link>
  </div>
);

export default NotFound;
