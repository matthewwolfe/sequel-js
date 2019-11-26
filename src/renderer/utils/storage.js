import ejs from 'electron-json-storage';

async function get(key, options) {
  return new Promise((resolve, reject) => {
    ejs.get(key, options, (error, data) => {
      if (error) {
        reject(error);
      }

      resolve(data);
    });
  });
}

async function has(key, options) {
  return new Promise((resolve, reject) => {
    ejs.has(key, options, (error, hasKey) => {
      if (error) {
        reject(error);
      }

      resolve(hasKey);
    });
  });
}

async function remove(key, options) {
  return new Promise((resolve, reject) => {
    ejs.remove(key, options, error => {
      if (error) {
        reject(error);
      }

      resolve();
    });
  });
}

async function set(key, json, options) {
  return new Promise((resolve, reject) => {
    ejs.set(key, json, options, error => {
      if (error) {
        reject(error);
      }

      resolve();
    });
  });
}

export const storage = {
  get,
  has,
  remove,
  set,
};
