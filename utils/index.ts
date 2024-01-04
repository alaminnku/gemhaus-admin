import useSWR from 'swr';

export const formatUploadImageName = (name: string) =>
  name.length > 15
    ? `${name.slice(0, 10)}.${name.split('.')[name.split('.').length - 1]}`
    : name;

export function useCustomSWR(path: string) {
  const { isLoading, data, error, mutate } = useSWR(path, (path) =>
    fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
      credentials: 'include',
    }).then((res) => res.json())
  );

  return { isLoading, data, error, mutate };
}
