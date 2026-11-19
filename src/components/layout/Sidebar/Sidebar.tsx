import { NavLink } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { FiUsers } from 'react-icons/fi';
import type { IconType } from 'react-icons';
import { ROUTES } from '@/constants/routes';
import { env } from '@/config/env';
import { cn } from '@/utils/cn';
import styles from './Sidebar.module.scss';

interface MenuItem {
  label: string;
  path: string;
  icon: IconType;
}

const MENU: MenuItem[] = [
  { label: 'Dashboard', path: ROUTES.DASHBOARD, icon: MdDashboard },
  { label: 'Users', path: '/users', icon: FiUsers },
];

interface SidebarProps {
  collapsed: boolean;
}

export const Sidebar = ({ collapsed }: SidebarProps) => (
  <aside className={cn(styles.sidebar, collapsed && styles.collapsed)}>
    <div className={styles.logo}>{collapsed ? env.APP_NAME[0] : env.APP_NAME}</div>
    <nav className={styles.nav}>
      {MENU.map(({ label, path, icon: Icon }) => (
        <NavLink
          key={path}
          to={path}
          end
          className={({ isActive }) => cn(styles.link, isActive && styles.active)}
        >
          <Icon size={20} />
          {!collapsed && <span>{label}</span>}
        </NavLink>
      ))}
    </nav>
  </aside>
);
