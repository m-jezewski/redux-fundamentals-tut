interface ReqInit<T> {
  body?: T;
  customConfig?: RequestInit;
}

export async function client<T>(endpoint: string, { body, customConfig }: ReqInit<T> = {}): Promise<T> {
  const headers = { 'Content-Type': 'application/json' };

  const config: RequestInit = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig?.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const request = new Request(endpoint, config);
  const response = await window.fetch(request);

  if (!response.ok) {
    const err = new Error();
    err.message = response.statusText;
    throw err;
  }

  return <T>response.json();
}

client.get = function <T>(endpoint: string, customConfig = {}) {
  return client<T>(endpoint, { customConfig: { ...customConfig, method: 'GET' } });
};

client.post = function <T>(endpoint: string, body: T, customConfig = {}) {
  return client<T>(endpoint, { ...customConfig, body });
};
