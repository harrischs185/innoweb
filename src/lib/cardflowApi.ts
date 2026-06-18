const API_BASE_URL = import.meta.env.PUBLIC_CARDFLOW_API_BASE_URL;

if (!API_BASE_URL) {
  throw new Error('Missing PUBLIC_CARDFLOW_API_BASE_URL');
}

export class CardFlowApiError extends Error {
  status: number;
  statusText: string;
  body: unknown;

  constructor(status: number, statusText: string, body: unknown) {
    super(`CardFlow API request failed: ${status} ${statusText}`);
    this.name = 'CardFlowApiError';
    this.status = status;
    this.statusText = statusText;
    this.body = body;
  }
}

async function parseResponseBody(response: Response) {
  const text = await response.text();

  if (!text) {
    return null;
  }

  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

export async function fetchCardFlow<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`);
  const body = await parseResponseBody(response);

  if (!response.ok) {
    throw new CardFlowApiError(response.status, response.statusText, body);
  }

  return body as T;
}

export async function postCardFlow<T>(
  path: string,
  requestBody: unknown,
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  const body = await parseResponseBody(response);

  if (!response.ok) {
    throw new CardFlowApiError(response.status, response.statusText, body);
  }

  return body as T;
}

export type CardFlowListResponse<T> = {
  data: T[];
  meta?: {
    count?: number;
    page?: number;
    pageSize?: number;
    totalPages?: number;
  };
};

export type CardFlowDetailResponse<T> = {
  data: T | null;
};