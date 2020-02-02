import config from "../config/config.json";

export const ENDPOINTS = {
  search: "/search",
  autocomplete: "/autocomplete"
};

const params = {
  q: "?q="
};

const defaultOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  },
  mode: "cors",
  cache: "no-cache"
};

const get = async url => {
  try {
    const response = await fetch(url, defaultOptions);
    
    return await response.json();
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const ApiService = uri => {
  const url = `${config.apiUrl}${uri}`;

  return query => get(`${url}${params.q}${query}`);
};
