import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url: string) => {
  //null설정한 이유: 모든 data가 같진 않기 때문
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get(url);
    //     const data = response?.data;
    //     setData(data);
    //   } catch (error: any) {
    //     setError(error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
    // fetchData().then((r) => r);
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
