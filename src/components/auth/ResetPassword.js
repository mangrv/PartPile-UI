import { h } from 'preact';
import { useState } from 'preact/hooks';
import { auth } from '../../config/firebaseConfig';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await auth.sendPasswordResetEmail(email);
      console.log('Reset password email sent');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default ResetPassword;
