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

export const onPress = async (params) => {
  const { config, setIcon } = params;
  const elgatos = getElgatos();
  if (config.light) {
    const elgato = elgatos[config.light];
    const state = await fetchElgatoState(elgato.ip);
    try {
      if (state.lights[0].on) {
        await setElgatoOff(elgato.ip);
        setIcon(Icons.OFF);
      } else {
        await setElgatoOn(elgato.ip);
        setIcon(Icons.ON);
      }
    } catch (e) {
      console.log("elgato-ligtts error", e);
    }
  } else {
    alert("please choose a light");
  }
};

const App = ({ config, setConfig }) => {
  const { isLoading, elgatos, tryGetAllElgatoLights } = useElgatos();

  const onChange = (e) =>
    setConfig({ ...config, [e.target.name]: e.target.value });

  return (
    <div
      style={{
        borderRadius: "4px",
        padding: "2em",
        backgroundColor: "orange",
        color: "white",
      }}
    >
      <h3 className="pt">Elgato Lights Plugin</h3>
      <p>
        This plugin required{" "}
        <a href="https://superuser.com/a/1672733">insecure content</a> and{" "}
        <a href="https://chromewebstore.google.com/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino">
          cors unblock
        </a>
      </p>
      <div className="setting">
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
              <option key={key} value={elgatos[key].serialNumber}>
                {elgatos[key].displayName || elgatos[key].productName} |{" "}
                {elgatos[key].serialNumber.slice(0, 3)}
              </option>
            ))}
          </select>
          <button className="s" onClick={tryGetAllElgatoLights}>
            {isLoading ? "loading..." : "↻"}
          </button>
        </span>
      </div>
      <div className="setting">
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
      <div className="setting">
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
