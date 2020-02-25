import React, { useState, useEffect, useRef } from "react";
import DragDrop from "../DragDrop";

export default function EditPictures() {
  const [pictureFile, setPictureFile] = useState(null);
  const imageRef = useRef();
  const imageContainerRef = useRef();
  function handleFileChange_btn(e) {
    const file = e.target.files[0];
    setPictureFile(file);
    onFileSelected(file);
  }

  function handleFileChange(file) {
    setPictureFile(file);
    onFileSelected(file);
  }

  function onFileSelected(pictureFile) {
    var reader = new FileReader();

    var imgtag = imageRef.current;
    var imgContainer = imageContainerRef.current;
    imgtag.title = pictureFile.name;
    imgContainer.classList.remove("hidden");

    reader.onload = function(event) {
      imgtag.onload = () => {
        console.log("this width", this.width);
        imgtag.style.maxWidth = "500px";
      };
      imgtag.src = event.target.result;
    };

    reader.readAsDataURL(pictureFile);
  }

  return (
    <div>
      <DragDrop handleFileChange={handleFileChange}>
        <input
          type="file"
          //   value={pictureFile}
          name="file"
          id="file"
          onChange={handleFileChange_btn}
          className="inputs-edit-file hidden"
        />
        <label className="label-for-image" for="file">
          <span>plaats hier afbeelding</span>
        </label>
      </DragDrop>
      <div className="image_container hidden" ref={imageContainerRef}>
        <img alt="image placeholder" id="image" ref={imageRef} />
      </div>
    </div>
  );
}
