import tokenStorage from "../helpers/tokenStorage";

const BASE_URL = `http://${process.env.REACT_APP_DOMAIN}:${process.env.REACT_APP_PORT}/` || "http://localhost:3000/";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function execute(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${tokenStorage.getAccessToken()}`,
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

export default execute;
