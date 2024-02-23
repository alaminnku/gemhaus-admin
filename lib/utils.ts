type FetchGemhausDataOptions = {
  body?: FormData;
  method?: 'POST' | 'DELETE';
  next?: { tags: string[] };
};

// Fetch Gemhaus data
export async function fetchGemhausData(
  path: string,
  options?: FetchGemhausDataOptions
) {
  let data;
  let error;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
    ...options,
    cache: 'no-store',
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
