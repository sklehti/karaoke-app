import React, { useState } from "react";
import selectArrow from "../images/select-arrow.svg";
import { playlist } from "../playlist";
import { TrackInfoProps } from "../types";

const TrackInfo = ({
  error,
  setSelectedTrack,
  selectedTrack,
}: TrackInfoProps) => {
  const [showSelectList, setShowSelectList] = useState(false);

  return (
    <div
      className={showSelectList ? "field-layout select-layout" : "field-layout"}
    >
      <div>
        <label htmlFor="select-track">Biisi*</label>
        <div
          className="alert-text"
          style={
            error && selectedTrack === null
              ? { display: "initial" }
              : { display: "none" }
          }
        >
          Valitse biisi!
        </div>
      </div>
      <div
        id="select-track"
        className="input-base-style"
        style={
          error && selectedTrack === null
            ? { border: "2px solid red" }
            : { border: "2px solid rgb(167, 166, 166)" }
        }
        onClick={() =>
          showSelectList ? setShowSelectList(false) : setShowSelectList(true)
        }
      >
        {selectedTrack?.name ? (
          <div>
            <b>{selectedTrack.name}:</b> {selectedTrack.track}
          </div>
        ) : (
          <div>Valitse alta</div>
        )}
        <img
          className="select-arrow"
          style={
            showSelectList
              ? { transform: "rotateX(180deg)" }
              : { transform: "rotateX(0deg)" }
          }
          src={selectArrow}
          alt="select arrow"
        />
      </div>
      {showSelectList ? (
        <ul className="dropdown-style">
          {playlist.map((p) => (
            <li className="dropdown-li-style" key={p.id}>
              <button
                type="button"
                value={p.track}
                className="dropdown-li-btn"
                onClick={() => {
                  setShowSelectList(false);
                  setSelectedTrack(p);
                }}
              >
                <b>{p.name}:</b> {p.track}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TrackInfo;
