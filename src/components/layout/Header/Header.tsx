import { FiMenu, FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { tokenStorage } from '@/utils/storage';
import { ROUTES } from '@/constants/routes';
import styles from './Header.module.scss';

interface HeaderProps {
  onToggleSidebar: () => void;
}

export const Header = ({ onToggleSidebar }: HeaderProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    tokenStorage.clear();
    navigate(ROUTES.LOGIN, { replace: true });
  };

  return (
    <header className={styles.header}>
      <button className={styles.iconBtn} onClick={onToggleSidebar} aria-label="Toggle sidebar">
        <FiMenu size={20} />
      </button>
      <button className={styles.iconBtn} onClick={handleLogout} aria-label="Logout">
        <FiLogOut size={20} />
      </button>
    </header>
  );
};
