const ACCESS_TOKEN_KEY = "accessToken";

function getAccessToken() {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  return accessToken ? accessToken : "";
}

function setAccessToken(accessToken) {
  return localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

function clear() {
  return localStorage.clear();
}

const tokenStorage = {
  getAccessToken,
  setAccessToken,
  clear,
};

export default tokenStorage;
