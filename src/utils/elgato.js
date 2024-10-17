const STORAGE_KEY = "elgatos";
const ELGATO_PORT = 9123;

export const getElgatos = () => {
  const elgatos = localStorage.getItem(STORAGE_KEY);
  if (elgatos) {
    return JSON.parse(elgatos);
  }
  return {};
};

export const storeElgatos = (elgatos) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(elgatos));
};

export const fetchElgatoInfo = async (ip, fetcher) => {
  const path = "elgato/accessory-info";
  const _fetcher = fetcher || window._fetcher;
  try {
    const data = await _fetcher(`http://${ip}:${ELGATO_PORT}/${path}`);
    console.log("fetchElgatoInfo.response", data);
    return { ...data, ip };
  } catch (e) {
    console.error(e);
    return;
  }
};

export const fetchElgatoState = async (ip, fetcher) => {
  const data = await fetcher(`http://${ip}:${ELGATO_PORT}/elgato/lights`);
  return data;
};

export const setElgatoOn = async (ip, fetcher) => {
  const data = await fetcher(`http://${ip}:${ELGATO_PORT}/elgato/lights`, {
    method: "put",
    body: JSON.stringify({ lights: [{ on: 1 }] }),
  });
  return data;
};

export const setElgatoOff = async (ip, fetcher) => {
  const data = await fetcher(`http://${ip}:${ELGATO_PORT}/elgato/lights`, {
    method: "put",
    body: JSON.stringify({ lights: [{ on: 0 }] }),
  });
  return data;
};
