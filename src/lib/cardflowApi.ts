const API_BASE_URL = import.meta.env.PUBLIC_CARDFLOW_API_BASE_URL;

console.log(import.meta.env.PUBLIC_CARDFLOW_API_BASE_URL);

if (!API_BASE_URL) {
  throw new Error('Missing PUBLIC_CARDFLOW_API_BASE_URL');
}

export async function fetchCardFlow<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`);

  if (!response.ok) {
    throw new Error(`CardFlow API request failed: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<T>;
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