import axios from 'axios';
export const SUBMIT_CONTACT_FORM = 'SUBMIT_CONTACT_FORM';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const SUBMIT_ADMIN_LOGIN_FORM = 'SUBMIT_ADMIN_LOGIN_FORM';

const ROOT_URL = 'http://localhost:3000';

export function submitContactForm(values, callback) {
  const {name, email, message} = values;
  const postData = JSON.stringify({
    mail: {
      name,
      email,
      message
    }
  });
  const request = axios.post(`${ROOT_URL}/mailer/contact_mailer`, postData, {
    headers: {
      "Content-Type": "application/json"
    }
  });

  return {
    type: SUBMIT_CONTACT_FORM,
    payload: request
  };
}

export function fetchProducts(numberToBring) {
  const furnitureToBring = numberToBring;
  let request;

  if (furnitureToBring === undefined) {
    request = axios.get(`${ROOT_URL}/products`);
  } else {
    request = axios.get(`${ROOT_URL}/products?furnitureLimit=${furnitureToBring}`);
  }

  return {
    type: FETCH_PRODUCTS,
    payload: request
  }
}

export function fetchProduct(id) {
  const request = axios.get(`${ROOT_URL}/products/${id}`);

  return {
    type: FETCH_PRODUCT,
    payload: request
  }
}

export function submitAdminLoginForm(values) {
  const {mail, secret} = values;

  const request = axios({
    method: 'post',
    url: `${ROOT_URL}/login`,
    data: {
      auth: {
        email: mail,
        password: secret
      }
    }
  });

  return {
    type: SUBMIT_ADMIN_LOGIN_FORM,
    payload: request
  }
}
