import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = (url, body, fetchType, dependency = [], condition = true) => {
  const [ payload, setPayload ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(false);
  const token = localStorage.getItem('token');
  const tokenHeader = token ? {headers: {"Authorization": `Token ${token}`}} : null;

  let fetcher = () => {};
  switch(fetchType){
    case 'POST':
      fetcher = (url, body) => axios.post(url, body, tokenHeader);
      break;
    
    case 'GET':
      fetcher = (url, body) => axios.get(url, tokenHeader);
      break;
    
    default:
      break;
  }

  useEffect(() => {
    if(!condition) return;

    console.log('I am fetching!!');

    setLoading(true);
    setError(false);

    fetcher(url, body)
    .then(res => setPayload(res.data))
    .then(() => setLoading(false))
    .catch(e => setError(true));

  }, dependency);

  return { payload, loading, error };
}