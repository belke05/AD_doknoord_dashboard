import axios from "axios";

console.log(process.env.NODE_ENV);

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "/api/orders"
      : `http://${window.location.hostname}:5000/api/orders`,
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
  getOrders() {
    return service
      .get("")
      .then(res => {
        const bestellingen = res.data.bestellingen;
        console.log(bestellingen);
        return bestellingen;
      })
      .catch(err => console.error(err));
  },

  deleteOrder(idJSON) {
    return service
      .delete(`/${JSON.stringify(idJSON)}`)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.error(err);
      });
  }
};
