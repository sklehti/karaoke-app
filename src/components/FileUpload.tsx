import React, { useState } from "react";
import { FileUploadProps } from "../types";
import { FileSchema } from "../utils";

const FileUpload = ({
  setFileInputText,
  fileInputText,
  fileTypeError,
  setFileTypeError,
}: FileUploadProps) => {
  const [fileUrl, setFileUrl] = useState("");

  /**
   * Save the name of the file
   * @param event
   */
  const handleFileUpload = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.files && event.currentTarget.files?.length > 0) {
      // file type checking
      const fileresult = FileSchema.safeParse({
        faceImg: event.currentTarget.files[0],
      });

      if (fileresult.success) {
        setFileInputText(event.currentTarget.files[0].name);
        setFileUrl(URL.createObjectURL(event.currentTarget.files[0]));
        setFileTypeError(false);

        // send the data to the backend (Not implemented in this application)
        const formData = new FormData();
        formData.append(
          "image",
          event.currentTarget.files[0],
          event.currentTarget.files[0].name
        );
      } else {
        setFileTypeError(true);
        setFileInputText("+ Tuo kasvokuva");
      }
    } else {
      setFileTypeError(false);
      setFileInputText("+ Tuo kasvokuva");
    }
  };

  return (
    <div className="field-layout">
      <div>
        <label htmlFor="face-image">Kasvokuva</label>
        <div
          className="alert-text"
          style={fileTypeError ? { display: "initial" } : { display: "none" }}
        >
          Tiedostotyyppi: jpeg, jpg, png tai webp
        </div>
      </div>

      <div className="file-container">
        <div
          className={
            fileTypeError
              ? "input-base-style file-input-img file-input-img-alert"
              : "input-base-style file-input-img"
          }
        >
          <div>
            {fileInputText !== "+ Tuo kasvokuva" ? (
              <img src={fileUrl} alt="face image" />
            ) : (
              <></>
            )}{" "}
            {fileInputText}
          </div>

          <input
            className="file-uploading"
            type="file"
            id="face-image"
            onChange={handleFileUpload}
          />
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
