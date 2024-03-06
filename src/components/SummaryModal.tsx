import React from "react";
import { AlertModalProps } from "../types";

const SummaryModal = ({ formInfo, setFormInfo }: AlertModalProps) => {
  return (
    <div
      id="myModal"
      className="modal"
      style={formInfo === null ? { display: "none" } : { display: "block" }}
    >
      <div className="modal-content">
        <h2>Kiitos osallistumisesta Karaoke tapahtumaan</h2>
        <h3>Tässä vielä yhteenveto:</h3>

        <div>
          <b>Nimi: </b> {formInfo?.name}
        </div>

        {formInfo?.faceImage !== "+ Tuo kasvokuva" ? (
          <div>
            <b>Kasvokuva: </b> {formInfo?.faceImage}
          </div>
        ) : (
          ""
        )}

        <div>
          <b>Biisi: </b> {formInfo?.track.name} {formInfo?.track.track}
        </div>

        <div>
          <b>Sävellaji: </b> {formInfo?.keyValue}
        </div>

        <button className="submit-btn" onClick={() => setFormInfo(null)}>
          Sulje tästä
        </button>
      </div>
    </div>
  );
};

export default SummaryModal;
