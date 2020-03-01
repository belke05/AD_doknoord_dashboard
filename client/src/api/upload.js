import axios from "axios";

console.log(process.env.NODE_ENV);

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "/api/uploads"
      : `http://${window.location.hostname}:5000/api/uploads`,
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
  postPhoto(file, photo_option) {
    const formData = new FormData();
    console.log(file, "file", photo_option, "option");
    formData.append("photo", file);
    return service
      .post(`/photo/${photo_option}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(res => {
        console.log("a reponse in api frontend", res);
        return res.data;
      })
      .catch(errHandler);
  },

  postText(text, text_option) {
    console.log(text, "file", text_option, "option");
    return service
      .post(`/text/${text_option}`, { text: text })
      .then(res => {
        console.log("a reponse in api frontend", res);
        return res.data;
      })
      .catch(errHandler);
  }
};
