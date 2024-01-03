import axios from 'axios';

export const formatUploadImageName = (name: string) =>
  name.length > 15
    ? `${name.slice(0, 10)}.${name.split('.')[name.split('.').length - 1]}`
    : name;

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
