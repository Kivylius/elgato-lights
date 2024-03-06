import { useState } from "react";
import { storeElgatos, getElgatos, fetchElgatoInfo } from "../utils/elgato";

export const useElgatos = (config) => {
  const [isLoading, setIsLoading] = useState();
  const [elgatos, setElgatos] = useState(getElgatos());

  const addElgato = (id, val) => {
    setElgatos((old) => {
      const next = {
        ...old,
        [id]: val,
      };
      storeElgatos(next);
      return next;
    });
  };

  const tryGetAllElgatoLights = () => {
    setIsLoading(true);
    const ip = config.gateway || "192.168.0.1";
    const promises = [];
    [...Array(256)].map((_, i) => {
      const [a, b, c] = ip.split(".");
      return promises.push(fetchElgatoInfo(`${a}.${b}.${c}.${i}`));
    });
    Promise.all(promises).then((all) => {
      all.forEach((item) => {
        if (item) addElgato(item.serialNumber, item);
      });
      setIsLoading(false);
    });
  };

  return {
    isLoading,
    setIsLoading,
    elgatos,
    setElgatos,
    addElgato,
    tryGetAllElgatoLights,
  };
};
