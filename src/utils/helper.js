import validator from "validator";
import { DEFAULT_USER_AUTH } from "./Consts";

/** Handle form validation for the login form
 * @param email - user's auth email
 * @param password - user's auth password
 * @param setError - function that handles updating error state value
 */
export const validateLoginForm = (email, password, setError) => {
  // Check for undefined or empty input fields
  if (!email || !password) {
    //setError("Please enter a valid email and password.");
    return false;
  }

  // Validate email
  if (!validator.isEmail(email)) {
    if (!validator.isMobilePhone(email)) {
      //    setError("Please enter a valid email address.");
      return false;
    }
  }

  return true;
};

/** Return user auth from local storage value */
export const getStoredUserAuth = () => {
  const auth = localStorage.getItem("UserAuth");
  if (auth) {
    return JSON.parse(auth);
  }
  return DEFAULT_USER_AUTH;
};

/**
 * API Request handler
 * @param url - api endpoint
 * @param method - http method
 * @param bodyParams - body parameters of request
 */
export const apiRequest = async ({ url, method, bodyParams }) => {
  const response = await fetch(url, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: bodyParams ? JSON.stringify(bodyParams) : undefined
  });
  return await response.json();
};

/**
 * API Request handler
 * @param url - api endpoint
 * @param method - http method
 * @param bodyParams - body parameters of request
 */
export const apiImageUpdate = async ({ url, method, bodyParams }) => {
  var { imagePath } = bodyParams;
  const response = await fetch(url, {
    method,
    body: imagePath
  });
  return await response.json();
};
