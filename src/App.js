import React from "react";
import PropTypes from "prop-types";
import {
  getElgatos,
  fetchElgatoState,
  setElgatoOn,
  setElgatoOff,
} from "./utils/elgato";
import { useElgatos } from "./hooks/useElgatos";
import { Icons } from "./utils/icons";

export { manifest } from "./manifest";

// tempory fetcher storage for in JSX fetcher,
// hope fully this added in the app so we can have access
window._fetcher = null;
export const init = (params) => {
  console.log("params5", params?.extension?.fetch);
  window._fetcher = params?.extension?.fetch;
};

export const onPress = async (params) => {
  const { config, setIcon } = params;
  const elgatos = getElgatos();
  const fetcher = params?.extension?.fetch || fetch;
  if (config.light) {
    const elgato = elgatos[config.light];
    const state = await fetchElgatoState(elgato.ip, fetcher);
    try {
      if (state.lights[0].on) {
        await setElgatoOff(elgato.ip, fetcher);
        setIcon(Icons.OFF);
      } else {
        await setElgatoOn(elgato.ip, fetcher);
        setIcon(Icons.ON);
      }
    } catch (e) {
      console.log("elgato-ligts-plugin error", e);
    }
  } else {
    alert("please choose a light");
  }
};

const App = (props) => {
  const { config, setConfig } = props;
  const { isLoading, elgatos, tryGetAllElgatoLights } = useElgatos(config);

  const onChange = (e) =>
    setConfig({ ...config, [e.target.name]: e.target.value });

  return (
    <div
      className="webdeck-plugin"
      style={{
        backgroundColor: "orange",
        color: "white",
      }}
    >
      <h3 className="webdeck-title">Elgato Lights Plugin</h3>
      <div className="webdeck-setting">
        <label htmlFor="light">light: </label>
        <span>
          <select
            disabled={isLoading}
            required
            name="light"
            onChange={onChange}
            style={{ width: 100 }}
            value={config?.light || ""}
          >
            <option value="" disabled hidden>
              select....
            </option>
            {Object.keys(elgatos).map((key) => (
              <option
                key={key}
                title={JSON.stringify(elgatos[key], null, 4)}
                value={elgatos[key]?.serialNumber}
              >
                {elgatos[key]?.displayName || elgatos[key].productName} |{" "}
                {elgatos[key]?.serialNumber?.slice(0, 3)}
              </option>
            ))}
          </select>
          <button className="s" onClick={tryGetAllElgatoLights}>
            {isLoading ? "loading..." : "↻"}
          </button>
        </span>
      </div>
      <div className="webdeck-setting">
        <label htmlFor="action">action: </label>
        <select
          required
          name="action"
          onChange={onChange}
          value={config.action || ""}
        >
          <option value="toggle">toggle (on/off)</option>
        </select>
      </div>
      <div className="webdeck-setting">
        <label htmlFor="gateway">gateway: </label>
        <input
          type="text"
          name="gateway"
          placeholder="192.169.0.1"
          onChange={onChange}
          value={config.gateway || "192.168.0.1"}
        />
      </div>
    </div>
  );
};

App.propTypes = {
  config: PropTypes.object,
  setConfig: PropTypes.func,
};

export default App;
