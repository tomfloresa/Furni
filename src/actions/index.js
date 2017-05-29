import axios from 'axios';
export const SUBMIT_CONTACT_FORM = 'SUBMIT_CONTACT_FORM';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCT = 'FETCH_PRODUCT';

const ROOT_URL = 'http://localhost:3000';

export function submitContactForm(values, callback) {
    return {
      type: SUBMIT_CONTACT_FORM,
      payload: ''
    };
}

export function fetchProducts() {
  const request = axios.get(`${ROOT_URL}/products`);

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
