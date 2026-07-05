const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const serverFetch = async (path) => {
  const res = await fetch(`${baseURL}${path}`);

  if (!res.ok) {
    const text = await res.text();
    console.error(text);
    throw new Error(`Request failed: ${res.status}`);
  }

  return res.json();
};

export const serverMutation = async (path, data) => {
  const res = await fetch(`${baseURL}${path}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
