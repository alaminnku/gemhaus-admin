import axios from 'axios';

type GetDataOptions = {
  cache?: 'no-cache';
  next?: { tags: [string] };
};

type MutateDataOptions = {
  cache?: 'no-cache';
  body?: string | FormData;
  next?: { tags: [string] };
  method?: 'POST' | 'PATCH' | 'DELETE';
};

// Format long image name
export const formatUploadImageName = (name: string) =>
  name.length > 15
    ? `${name.slice(0, 10)}.${name.split('.')[name.split('.').length - 1]}`
    : name;

// Get data
export async function getData(path: string, options?: GetDataOptions) {
  let data;
  let error;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
    ...options,
    credentials: 'include',
  });
  const result = await response.json();

  if (!response.ok) {
    error = { ...result, status: response.status };
  } else {
    data = result;
  }

  return { data, error };
}

// // Mutate data
// export const mutateData = axios.create({
//   withCredentials: true,
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
// });

// Mutate data
export async function mutateData(path: string, options?: MutateDataOptions) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
    ...options,
    credentials: 'include',
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
}

// Convert date to text
export const dateToText = (input: Date | string | number | undefined) => {
  if (!input) return;

  const date = new Date(input);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleString('en-US', options);
};
