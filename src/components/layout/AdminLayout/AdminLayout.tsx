import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Sidebar';
import { Header } from '../Header';
import { useToggle } from '@/hooks/useToggle';
import styles from './AdminLayout.module.scss';

export const AdminLayout = () => {
  const [collapsed, toggleCollapsed] = useToggle(false);

  return (
    <div className={styles.layout}>
      <Sidebar collapsed={collapsed} />
      <div className={styles.main}>
        <Header onToggleSidebar={toggleCollapsed} />
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
