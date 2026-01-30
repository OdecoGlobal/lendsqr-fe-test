export const validateLogin = (email: string, password: string) => {
  const newErrors: { email?: string; password?: string } = {};

  if (!email.trim()) {
    newErrors.email = 'Email is required';
  }
  if (!password) {
    newErrors.password = 'Password is required';
  } else if (password.length < 6) {
    newErrors.password = 'Password must be at least 6 characters long';
  }
  return newErrors;
};
