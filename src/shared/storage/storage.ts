import { MyWorkerType, NewWorkerType } from "../type";
import { STORAGE_UPD_KEY } from "./type";

export const getWorkersArray = (key: string) => {
  let storedValue = localStorage.getItem(key);

  if (!storedValue) {
    storedValue = sessionStorage.getItem(key);
    if (!storedValue) {
      return null;
    }
  }

  return JSON.parse(storedValue);
};

export const newWorker = (value: NewWorkerType, key: string) => {
  if (!value) {
    return;
  } else {
    const newWorker: MyWorkerType = {
      ...value,
      id: Date.now(),
    };

    const storedWorkers = getWorkersArray(key);

    if (storedWorkers) {
      storedWorkers.push(newWorker);
      const data = JSON.stringify(storedWorkers);
      localStorage.setItem(key, data);
    } else {
      const data = JSON.stringify([newWorker]);
      localStorage.setItem(key, data);
    }
    window.dispatchEvent(new Event(STORAGE_UPD_KEY));
  }
};
