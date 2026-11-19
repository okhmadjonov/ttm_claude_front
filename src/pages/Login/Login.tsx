import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { ROUTES } from '@/constants/routes';
import { Button } from '@/components/ui';
import styles from './Login.module.scss';

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: backend ulanganda authService.login(form) chaqirib,
    // tokenStorage.set(...) bilan tokenni saqlang
    navigate(ROUTES.DASHBOARD, { replace: true });
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.card} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Login</h1>
        <input
          className={styles.input}
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <Button type="submit" icon={<FiLogIn />}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
