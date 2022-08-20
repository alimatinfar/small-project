import axios, { AxiosRequestConfig } from "axios";
import {useState} from "react";

const serverAxios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export type ResponseType = {
  data: any;
  error: any;
  loading: boolean;
  status: any
};

const useAxios = () => {
  const [response, setResponse] = useState<ResponseType>({ data: null, error: null, loading: false, status: null })

  const sendRequest = async function ({ url, method, data}: AxiosRequestConfig) {
    setResponse((prev) => ({ ...prev, loading: true, error: null }))
    try {
      const result = await serverAxios.request({ url, method, data })
      setResponse((prev) => ({ ...prev, data: result.data, loading: false, status: result.status, error: null }))
      return result.data;
    } catch (error) {
      setResponse((prev) => ({ ...prev, error: error, status: error, loading: false }))
      return Promise.reject(error);
    }
  }
  return [response, sendRequest] as const
}

export default useAxios;