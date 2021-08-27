import React, { useState, useEffect } from "react";

function NewChar({ characters }) {
  return (
    <form className="new-form-div" onSubmit={() => console.log("submit new")}>
      <div className="new-form">
        <table>
          <tr>
            <div className="fields">
              <td>
                <div className="new-row-one">
                  <label>Name: </label>
                  <input
                    type="text"
                    placeholder="Character Name"
                    value=""
                    onChange=""
                  />
                </div>
              </td>
              <td>
                <div className="new-row-one">
                  <label>Image: </label>
                  <input
                    type="text"
                    placeholder="URL Here"
                    value=""
                    onChange=""
                  />
                </div>
              </td>
              <td>
                <div className="new-row-one">
                  <label>Affiliation: </label>
                  <input
                    type="text"
                    placeholder="Affiliation"
                    value=""
                    onChange=""
                  />
                </div>
              </td>
            </div>
          </tr>
          <tr>
            <div className="fields">
              <td>
                <div className="new-row-two">
                  <label className="bio-label">Bio: </label>
                  <textarea
                    placeholder="Insert Text"
                    className="bio-container"
                    value=""
                    onChange=""
                  />
                </div>
              </td>
              <td>
                <div>
                  <div className="stat-fields">
                    <label>HP: </label>
                    <input
                      type="text"
                      placeholder="HP"
                      id="hp-input"
                      value=""
                      onChange=""
                    />
                  </div>
                  <div className="stat-fields">
                    <label>STR: </label>
                    <input
                      type="text"
                      placeholder="STR"
                      id="stat-input"
                      value=""
                      onChange=""
                    />
                  </div>
                  <div className="stat-fields">
                    <label>DEF: </label>
                    <input
                      type="text"
                      placeholder="DEF"
                      id="stat-input"
                      value=""
                      onChange=""
                    />
                  </div>
                </div>
              </td>
            </div>
          </tr>
          <button type="submit" className="upload-new">
            Submit
          </button>
        </table>
      </div>
    </form>
  );
}

export default NewChar;
