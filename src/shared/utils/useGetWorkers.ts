import { useState, useEffect } from "react";
import { getWorkersArray } from "../storage/storage";
import { STORAGE_UPD_KEY, WORKERS_STORAGE_KEY } from "../storage/type";
import { MyWorkerType } from "../type";

const useGetWorkers = (): MyWorkerType[] | undefined => {
  const [data, setData] = useState<MyWorkerType[]>();

  const handleSetWorkers = () => {
    setData(getWorkersArray(WORKERS_STORAGE_KEY));
  };

  useEffect(() => {
    handleSetWorkers();
    window.addEventListener(STORAGE_UPD_KEY, handleSetWorkers);

    return () => {
      window.removeEventListener(STORAGE_UPD_KEY, handleSetWorkers);
    };
  }, []);

  return data;
};

export default useGetWorkers;
