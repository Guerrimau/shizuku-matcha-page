const { STRAPI_HOST, STRAPI_KEY } = process.env;

type FetchOptions = {
  revalidate?: number | false;
  tags?: string[];
};

export async function query<T>(
  endpoint: string,
  options: FetchOptions = {},
): Promise<T> {
  const { revalidate = 60, tags } = options;

  const fetchOptions: RequestInit & {
    next?: { revalidate?: number | false; tags?: string[] };
  } = {
    headers: {
      Authorization: `Bearer ${STRAPI_KEY}`,
    },
  };

  if (tags) {
    fetchOptions.next = { tags };
  } else if (revalidate !== false) {
    fetchOptions.next = { revalidate };
  } else {
    fetchOptions.cache = "no-store";
  }

  const res = await fetch(`${STRAPI_HOST}/api/${endpoint}`, fetchOptions);

  if (!res.ok) {
    throw new Error(`Strapi query failed: ${res.status} ${res.statusText}`);
  }

  return res.json();
}
