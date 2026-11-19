import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { authService } from '@/services/auth.service';
import { tokenStorage } from '@/utils/storage';
import { ROUTES } from '@/constants/routes';
import { Button } from '@/components/ui';
import styles from './Login.module.scss';

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const data = await authService.login(form);
      tokenStorage.set(data.access_token, data.refresh_token);
      navigate(ROUTES.DASHBOARD, { replace: true });
    } catch {
      setError('Invalid username or password');
    } finally {
      setLoading(false);
    }
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
        {error && <p className={styles.error}>{error}</p>}
        <Button type="submit" loading={loading} icon={<FiLogIn />}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
