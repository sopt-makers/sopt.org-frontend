import { BASE_URL } from '@src/lib/constants/client';
import axios from 'axios';
import { useEffect } from 'react';

const client = axios.create({ baseURL: BASE_URL });

export default function usePost() {
  useEffect(()=>{
    client.post('/visitor');
  }, []);
}
