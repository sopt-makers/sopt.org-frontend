import { BASE_URL } from '@src/lib/constants/client';
import axios from 'axios';
import { useEffect, useState } from 'react';

const client = axios.create({ baseURL: BASE_URL });

export default function useFetch() {
  const [data, setData] = useState<{Count:number}>();

  const getVisitor = async () => {
    const { data } = await client.get('/visitor');
    setData(data);
  };

  useEffect(()=>{
    getVisitor();
  }, []);

  return data;
}
