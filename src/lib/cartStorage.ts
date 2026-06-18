export type InnoWebCartItem = {
  sku: string;
  quantity: 1;
};

const CART_STORAGE_KEY = 'innoweb-cart-v1';

function isBrowser() {
  return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
}

function notifyCartUpdated() {
  if (!isBrowser()) {
    return;
  }

  window.dispatchEvent(new CustomEvent('innoweb-cart-updated'));
}

function normalizeCartItem(item: unknown): InnoWebCartItem | null {
  if (!item || typeof item !== 'object') {
    return null;
  }

  const candidate = item as {
    sku?: unknown;
    quantity?: unknown;
  };

  if (typeof candidate.sku !== 'string') {
    return null;
  }

  const sku = candidate.sku.trim();

  if (!sku) {
    return null;
  }

  return {
    sku,
    quantity: 1,
  };
}

export function readCart(): InnoWebCartItem[] {
  if (!isBrowser()) {
    return [];
  }

  const rawCart = localStorage.getItem(CART_STORAGE_KEY);

  if (!rawCart) {
    return [];
  }

  try {
    const parsed = JSON.parse(rawCart);

    if (!Array.isArray(parsed)) {
      return [];
    }

    const normalizedItems = parsed
      .map(normalizeCartItem)
      .filter((item): item is InnoWebCartItem => item !== null);

    return Array.from(
      new Map(normalizedItems.map((item) => [item.sku, item])).values(),
    );
  } catch {
    return [];
  }
}

export function writeCart(items: InnoWebCartItem[]) {
  if (!isBrowser()) {
    return;
  }

  const normalizedItems = items
    .map(normalizeCartItem)
    .filter((item): item is InnoWebCartItem => item !== null);

  const uniqueItems = Array.from(
    new Map(normalizedItems.map((item) => [item.sku, item])).values(),
  );

  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(uniqueItems));
  notifyCartUpdated();
}

export function addToCart(sku: string) {
  const trimmedSku = sku.trim();

  if (!trimmedSku) {
    return;
  }

  const existingItems = readCart();

  if (existingItems.some((item) => item.sku === trimmedSku)) {
    writeCart(existingItems);
    return;
  }

  writeCart([
    ...existingItems,
    {
      sku: trimmedSku,
      quantity: 1,
    },
  ]);
}

export function removeFromCart(sku: string) {
  writeCart(readCart().filter((item) => item.sku !== sku));
}

export function clearCart() {
  if (!isBrowser()) {
    return;
  }

  localStorage.removeItem(CART_STORAGE_KEY);
  notifyCartUpdated();
}

export function getCartCount() {
  return readCart().length;
}