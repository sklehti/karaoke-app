import React, { useState } from "react";
import { FormInfo, Playlist } from "../types";
import { FormInfoSchema } from "../utils";
import KeyClass from "./KeyClass";
import TrackInfo from "./TrackInfo";
import FileUpload from "./FileUpload";
import CheckboxClass from "./CheckboxClass";
import InputClass from "./InputClass";
import SummaryModal from "./SummaryModal";

const KaraokeForm = () => {
  const [userName, setUserName] = useState("");
  const [fileInputText, setFileInputText] = useState("+ Tuo kasvokuva");
  const [selectedTrack, setSelectedTrack] = useState<Playlist | null>(null);
  const [keyValue, setKeyValue] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState(false);
  const [formInfo, setFormInfo] = useState<FormInfo | null>(null);
  const [fileTypeError, setFileTypeError] = useState(false);

  /**
   * Checks that all fields are filled in correctly
   *  and forward the completed form.
   * @param event
   */
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const form = {
      name: userName,
      faceImage: fileInputText,
      track: selectedTrack,
      keyValue: keyValue,
      acceptCheckbox: checked,
    };

    // type checking
    const result = FormInfoSchema.safeParse(form);

    if (!result.success || fileTypeError) {
      setError(true);
    } else {
      setFormInfo(result.data);
      setError(false);
      setUserName("");
      setFileInputText("+ Tuo kasvokuva");
      setSelectedTrack(null);
      setKeyValue(null);
      setChecked(false);
    }
  };

  return (
    <div className="form-container">
      <h1>Ilmoittautumislomake</h1>

      <form onSubmit={handleSubmit}>
        <InputClass
          setUserName={setUserName}
          userName={userName}
          error={error}
        />

        <FileUpload
          setFileInputText={setFileInputText}
          fileInputText={fileInputText}
          fileTypeError={fileTypeError}
          setFileTypeError={setFileTypeError}
        />

        <TrackInfo
          error={error}
          setSelectedTrack={setSelectedTrack}
          selectedTrack={selectedTrack}
        />

        <KeyClass keyValue={keyValue} setKeyValue={setKeyValue} error={error} />

        <CheckboxClass
          setChecked={setChecked}
          checked={checked}
          error={error}
        />

        <button className="submit-btn" role="button" type="submit">
          Ilmoittaudu
          <i
            className={formInfo !== null ? "fa fa-circle-o-notch fa-spin" : ""}
          ></i>
        </button>
      </form>

      <SummaryModal formInfo={formInfo} setFormInfo={setFormInfo} />
    </div>
  );
};

export default KaraokeForm;
