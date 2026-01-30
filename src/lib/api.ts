import axios from 'axios';
import type { User } from '../types';

export const fetchUsers = async (): Promise<User[]> => {
  const res = await axios.get('/data/lendsqr.json');
  return res.data;
};
