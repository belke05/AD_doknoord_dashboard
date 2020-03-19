import React, { useRef } from "react";
import handleCSV from "../../functions/handlecsv";
import api from "../../api/upload";

export default function UploadKasboek(props) {
  const fileinput = useRef(null);
  function handleUpload(e) {
    console.log(e.target.files[0], "here");
    handleCSV(e.target.files[0]).then(json => {
      api
        .postCSV(json)
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    });
  }

  return (
    <input
      ref={fileinput}
      onChange={e => handleUpload(e)}
      type="file"
      id="input"
    />
  );
}
