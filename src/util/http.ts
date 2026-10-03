export async function get(url: string) {
  const response = await fetch(url, {
    headers: { "X-Api-Key": import.meta.env.VITE_API_KEY_NINJAS as string },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = (await response.json()) as unknown;
  return data;
}
