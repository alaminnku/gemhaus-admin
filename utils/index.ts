type FetchOptions = {
  cache?: 'no-cache';
  body?: string | FormData;
  next?: { tags: [string] };
  method?: 'POST' | 'PATCH' | 'DELETE';
};

export const formatUploadImageName = (name: string) =>
  name.length > 15
    ? `${name.slice(0, 10)}.${name.split('.')[name.split('.').length - 1]}`
    : name;

export async function fetchInstance(path: string, options?: FetchOptions) {
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
