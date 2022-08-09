import { useState, useEffect } from 'react';

export function useFetch(url, token) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url){
      return
    }else{
      async function fetchData() {
        try {
          
          const response = await fetch(url, {
            headers: {
              "Content-Type" : "application/json",
              "Authorization" : `Bearer ${token}`
            }

          } );
          const data = await response.json();
          setData(data);
        }catch(err){
          console.log(err);
          setError(true);
        }finally{
        }
      }
    fetchData();
    }  
  }, [url, token]);
  return { data, error} ;
}

export function useFetchPost(url, id) {
  const [error, setError] = useState(false);
  const [postFetch, setPostFetch] = useState([]);

  useEffect(() => {
    if(!url){
      return
    }else{
      async function fetchData(){
        try{
          const response = await fetch(url);
          const data = [await response.json()];
          const post= data.find(element => element = id);

          setPostFetch(post);
        }catch(err){
          console.log(err);
          setError(true);
        }finally{

        }
      }
      fetchData();
    }
  }, [url, id]);
  return { error, postFetch}
}