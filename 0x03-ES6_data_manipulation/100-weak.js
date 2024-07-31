export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Check if endpoint is in WeakMap
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // current count for endpoint
  const count = weakMap.get(endpoint);

  // Increment
  weakMap.set(endpoint, count + 1);

  if (count + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }
}
