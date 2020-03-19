import React, { useRef } from "react";
import handleCSV from "../../functions/handlecsv";
import api from "../../api/upload";
import { Button } from "../../modules/bootstrap";

export default function UploadKasboek(props) {
  const fileinput = useRef(null);
  //   function handleUpload(e) {
  //     console.log(e.target.files[0], "here");

  //   }
  function handleClick() {
    // fileinput.current.files[0];
    handleCSV(fileinput.current.files[0]).then(json => {
      api
        .postCSV(json)
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    });
  }

  return (
    <div>
      <input
        ref={fileinput}
        // onChange={e => handleUpload(e)}
        type="file"
        id="input"
      />
      <Button onClick={handleClick}>upload kasboekrij</Button>
    </div>
  );
}
