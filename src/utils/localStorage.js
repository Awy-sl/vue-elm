/*
 * localStorage
 */

// setLocalStorage

export const setLocalStorage = (key, val) => {
  let str = JSON.stringify(val);
  localStorage.setItem(key, str);
};

// getLocalStorage
export const getLocalStorage = (key)=>{
   let data = JSON.parse(localStorage.getItem(key)) || null;
   return data
}

// removeLocalStorage
export const removeLocalStorage = (key) => {
   return localStorage.removeItem(key)
}
