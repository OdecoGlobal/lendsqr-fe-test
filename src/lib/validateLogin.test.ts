import { describe, expect, it } from 'vitest';
import { validateLogin } from './validateLogin';

describe('validateLogin', () => {
  it('returns nor errors for valid email and password', () => {
    const errors = validateLogin('test@example.com', '123456');
    expect(errors).toEqual({});
  });

  it('returns error if email is empty', () => {
    const errors = validateLogin('', '123456');
    expect(errors).toHaveProperty('email', 'Email is required');
  });

  it('returns error if password is empty', () => {
    const errors = validateLogin('test@example.com', '');
    expect(errors).toHaveProperty('password', 'Password is required');
  });

  it('returns error if password is less than 6 chars', () => {
    const errors = validateLogin('test@example.com', '123');
    expect(errors).toHaveProperty(
      'password',
      'Password must be at least 6 characters long',
    );
  });

  it('returns both errors if email and password are invalid', () => {
    const errors = validateLogin('', '');
    expect(errors).toEqual({
      email: 'Email is required',
      password: 'Password is required',
    });
  });
});
