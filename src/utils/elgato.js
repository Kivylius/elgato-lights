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

export const fetchElgatoInfo = async (ip) => {
  const path = "elgato/accessory-info";
  try {
    const response = await fetch(`http://${ip}:${ELGATO_PORT}/${path}`);
    const data = await response.json();
    return { ...data, ip };
  } catch (e) {
    console.error(e);
    return;
  }
};

export const fetchElgatoState = async (ip) => {
  const resp = await fetch(`http://${ip}:${ELGATO_PORT}/elgato/lights`);
  const data = await resp.json();
  return data;
};

export const setElgatoOn = async (ip) => {
  const a = await fetch(`http://${ip}:${ELGATO_PORT}/elgato/lights`, {
    method: "put",
    body: JSON.stringify({ lights: [{ on: 1 }] }),
  });
  const d = await a.json();
  return d;
};

export const setElgatoOff = async (ip) => {
  const a = await fetch(`http://${ip}:${ELGATO_PORT}/elgato/lights`, {
    method: "put",
    body: JSON.stringify({ lights: [{ on: 0 }] }),
  });
  const d = await a.json();
  return d;
};
