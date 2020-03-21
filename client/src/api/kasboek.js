import axios from "axios";

console.log(process.env.NODE_ENV);

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "/api/kasboek"
      : `http://${window.location.hostname}:5000/api/kasboek`,
  withCredentials: true
});

const errHandler = err => {
  console.error(err);
  if (err.response && err.response.data) {
    console.error("API response", err.response.data);
    throw err.response.data.message;
  }
  throw err;
};

export default {
  service: service,
  getKasboek() {
    return service
      .get("")
      .then(res => {
        const kasboek = res.data.kasboek;
        return kasboek;
      })
      .catch(err => errHandler(err));
  }
};
