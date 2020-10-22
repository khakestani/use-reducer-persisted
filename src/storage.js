import Cookies from "universal-cookie";

const storage = {
  get: (key, init, storage) => {
    console.log("init", init);
    const isCookie = storage instanceof Cookies;
    try {
      const storageData = isCookie ? storage.get(key, true) : storage.getItem(key);
      console.log("storageData", storageData);
      if (typeof storageData !== "undefined" && !!storageData) {
        return isCookie ? storageData : JSON.parse(storageData);
      } else if (typeof init === "function") {
        return init();
      } else if (typeof init !== "undefined") {
        return init;
      } else {
        return {};
      }
    } catch (e) {
      console.log("Error --> Getting storage data : ", e);
      return init;
    }
  },
  set: (key, value, storage, options) => {
    console.log("value", value);
    storage instanceof Cookies
      ? storage.set(key, value, !!options ? options : null)
      : storage.setItem(key, JSON.stringify(value));
  },
};

export default storage;
