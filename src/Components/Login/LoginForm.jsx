'use client'
import { toast } from 'react-toastify';

const LoginForm = () => {
  
 
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (email === 'demo@gmail.com' && password === '123456') {
      document.cookie = "auth=true; path=/";
     window.location.href = '/add-item';
      toast.info('successful')
      
    } else if (email !== 'demo@gmail.com') {
      toast.error('do not match email')
    } else if (password !== '123456') {
      toast.error('do not match password')
    } else {
      toast.error('do not match email and password')
    }
  }
  
  return (
    <form onSubmit={handleLogin} className="fieldset">
      <label className="label">Email</label>
      <input
        required
        name="email"
        type="email"
        className="input"
        placeholder="Email"
      />
      <label className="label">Password</label>
      <input
        required
        name="password"
        type="password"
        className="input"
        placeholder="Password"
      />

      <button className="btn bg-blue-600 text-white hover:bg-blue-700 transition mt-4">
        Login
      </button>
    </form>
  );
};

export default LoginForm;