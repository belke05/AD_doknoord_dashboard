import serviceFactory from "./handlers";

const service = serviceFactory("kasboek");

export default {
  service: service,
  getKasboek() {
    return service.get("").then(res => {
      const kasboek = res.data.kasboek;
      return kasboek;
    });
  }
};
