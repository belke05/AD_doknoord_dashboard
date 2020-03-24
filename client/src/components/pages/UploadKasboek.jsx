import React, { useRef } from "react";
import handleCSV from "../../functions/handlecsv";
import api from "../../api/upload";
import { Button } from "../../modules/bootstrap";
import * as XLSX from "xlsx";

export default function UploadKasboek(props) {
  const fileinput = useRef(null);

  function handleClick() {
    console.log(fileinput.current.files);
    if (fileinput.current.files.length > 1) {
      for (let i = 0; i < fileinput.current.files.length; i++) {
        const file = fileinput.current.files[i];
        handleFile(file);
      }
    }
  }

  function handleFile(file) {
    const reader = new FileReader();
    reader.onload = evt => {
      const bstr = evt.target.result; // parse data
      const wb = XLSX.read(bstr, { type: "binary" }); // read it
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 }); // convert
      const kasrowJSON = handleCSV(data);
      api
        .postCSV(kasrowJSON)
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    };
    reader.readAsBinaryString(file);
  }

  return (
    <div>
      <input
        ref={fileinput}
        // onChange={e => handleUpload(e)}
        type="file"
        id="input"
        multiple
      />
      <Button onClick={handleClick}>upload kasboekrij</Button>
    </div>
  );
}
