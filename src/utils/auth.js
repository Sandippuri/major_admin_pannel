const AUTH_TOKEN = "auth_token";

export function getAuthToken() {
  const localStorageAuthToken = localStorage.getItem(AUTH_TOKEN) || "";
  const sessionStorageAuthToken = sessionStorage.getItem(AUTH_TOKEN) || "";

  if (sessionStorageAuthToken) {
    return sessionStorageAuthToken;
  }

  if (localStorageAuthToken) {
    return localStorageAuthToken;
  }

  return null;
}
export function setAuthToken(authToken) {
  localStorage.setItem(AUTH_TOKEN, JSON.stringify(authToken));
  sessionStorage.setItem(AUTH_TOKEN, JSON.stringify(authToken));
}

export function isUserLoggedIn() {
  const authToken = getAuthToken();
  if (authToken) {
    return true;
  }

  return false;
}

export function clearUserData() {
  localStorage.removeItem(AUTH_TOKEN);
  sessionStorage.removeItem(AUTH_TOKEN);
}
