export const saveToLocalStorage = (key: string, value: any): void => {
  if (!key) return;
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadFromLocalStorage = (key: string): string | null => {
  const val = localStorage.getItem(key);

  if (val) return JSON.parse(val);
  return null;
};

export const removeFromLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};
