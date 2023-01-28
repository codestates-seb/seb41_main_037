import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url: string) => {
  //null설정한 이유: 모든 data가 같진 않기 때문
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://ec2-13-124-162-199.ap-northeast-2.compute.amazonaws.com:8080${url}`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;