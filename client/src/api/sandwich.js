import serviceFactory from "./handlers";
const service = serviceFactory("sandwiches");

export default {
  service: service,
  getSandwiches() {
    return service.get("").then(res => {
      const sandwiches = res.data.sandwiches;
      return sandwiches;
    });
  },

  deleteSandwich(id) {
    return service.delete(`/${id}`).then(res => {
      return res.data;
    });
  },

  editSandwich(id) {
    return service.patch(`/${id}`).then(res => {
      return res.data;
    });
  }
};
