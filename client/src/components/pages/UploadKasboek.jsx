import React, { useRef } from "react";
import handleCSV from "../../functions/handlecsv";
import api from "../../api/upload";
import { Button } from "../../modules/bootstrap";
import * as XLSX from "xlsx";

export default function UploadKasboek(props) {
  const fileinput = useRef(null);
  const reader = new FileReader();

  function handleClick() {
    reader.onload = evt => {
      const bstr = evt.target.result; // parse data
      const wb = XLSX.read(bstr, { type: "binary" }); // read it
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 }); // convert
      handleCSV(data).then(json => {
        api
          .postCSV(json)
          .then(res => {
            console.log(res);
          })
          .catch(err => console.log(err));
      });
    };
    reader.readAsBinaryString(fileinput.current.files[0]);
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
