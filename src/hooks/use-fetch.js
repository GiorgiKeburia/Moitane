import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  const myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkZmVlF4dkZYcHpJMV9CX09rZjNuMFEiLCJ0eXAiOiJKV1QifQ.eyJuYmYiOjE2Mzc2MTIyMTgsImV4cCI6MTk1Mjk3MjIxOCwiaXNzIjoiaHR0cHM6Ly9tb2l0YW5lLWFwaS5sZW1vbi5kby8iLCJhdWQiOlsiaHR0cHM6Ly9tb2l0YW5lLWFwaS5sZW1vbi5kby9yZXNvdXJjZXMiLCJBcGkiXSwiY2xpZW50X2lkIjoiTW9pdGFuZSIsInNjb3BlIjpbIk1vaXRhbmVBcGkiXX0.HOx-DfAf83W8xBRc51QT3pQa1MkLODhJmIb6tei4YHkipEwYNGtLCclanN-ECmUncAAfUboVPjAjFlWQK2emr5XLSF0_mKLEPcdq9l5MulrTbVi4R-IGuU17ckPqmSmaXA7bBmNQiyARXvMj1oDPmGpCqAqHgQTBhY_JtUoyVI8o4MbNdMLwLjQ9sr651Y1kFr1SODY61gvcl2p5A0a7obJJQpGs2tATPXsMcaxdvqQ49MIGpLsxtF7CpN8PxcPOID8MTAVuSS1AL75B3mNcWEYjoY76dVG6DY-JehFLqmanwZFu2qryw-3TCeiYpydEm43kc_bH89BvWroVdBnAhA"
  );

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      setIsLoading(false);
      setData(responseData);
    };
    fetchData().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, [url]);

  return { data, isLoading, httpError };
};

export default useFetch;
