export const getData = (key) => {
  return localStorage.getItem(key);
};

export const setData = (key, value) => {
  return localStorage.setItem(key, value);
};

export const removeData = (key) => {
  return localStorage.removeItem(key);
};


