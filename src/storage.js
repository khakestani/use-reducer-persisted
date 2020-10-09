const storage = {
  get: (key, initialValue, init) => {
    try {
      const storageData = localStorage.getItem(key);
      return !!storageData
        ? JSON.parse(storageData)
        : !!init && init instanceof Function
        ? init()
        : !!initialValue
        ? initialValue
        : {};
    } catch (e) {
      return initialValue;
    }
  },
  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

export default storage;
