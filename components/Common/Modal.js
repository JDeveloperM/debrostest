import React, { useEffect, useState } from "react";
import HashLink from "./HashLink";
import sal from "sal.js";

import ModalProps from "../Header/HeaderProps/ModalProps";

const Modal = () => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleChange = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedValues(selectedOptions);
  };

  useEffect(() => {
    sal();
  }, []);

  return (
    <>
      {/* ==== New Chat Section Modal ==== */}
      <div
        id="newchatModal"
        className="modal rbt-modal-box copy-modal fade"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content wrapper">
            <div
              className="section-title text-center mb--30 sal-animate"
              data-sal="slide-up"
              data-sal-duration="400"
              data-sal-delay="150"
            >
              <h3 className="title mb--0 w-600">Unlock the power of AI</h3>
            </div>
            <div className="genarator-section">
              <ul className="genarator-card-group">
                <ModalProps />
              </ul>
            </div>
            <button className="close-button" data-bs-dismiss="modal">
              <i className="fa-sharp fa-regular fa-x"></i>
            </button>
          </div>
        </div>
      </div>

      {/* ==== Like Section Modal ==== */}
      <div
        id="likeModal"
        className="modal rbt-modal-box like-modal fade"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content wrapper">
            <h5 className="title">Provide additional feedback</h5>
            <div className="chat-form">
              <div className="text-form">
                <textarea rows="6" placeholder="Send a message..."></textarea>
              </div>
            </div>
            <div className="bottom-btn mt--20">
              <HashLink className="btn-default btn-small round" href="#">
                Send Feedback
              </HashLink>
            </div>
            <button className="close-button" data-bs-dismiss="modal">
              <i className="feather-x"></i>
            </button>
          </div>
        </div>
      </div>

      {/* ==== DisLike Section Modal ==== */}
      <div
        id="dislikeModal"
        className="modal rbt-modal-box dislike-modal fade"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content wrapper">
            <h5 className="title">Why do you like this response?</h5>
            <select
              className="form-select"
              multiple
              aria-label="multiple select example"
              value={selectedValues}
              onChange={handleChange}
            >
              <option value="1">Irrelevant</option>
              <option value="2">Offensive</option>
              <option value="3">Not Correct</option>
            </select>
            <div className="chat-form">
              <h6 className="title">Provide your feedback</h6>
              <div className="text-form">
                <textarea rows="6" placeholder="Send a message..."></textarea>
              </div>
            </div>
            <div className="bottom-btn mt--20">
              <HashLink className="btn-default btn-small round" href="#">
                Send Feedback
              </HashLink>
            </div>
            <button className="close-button" data-bs-dismiss="modal">
              <i className="feather-x"></i>
            </button>
          </div>
        </div>
      </div>

      {/* ==== Share Section Modal ==== */}
      <div
        id="shareModal"
        className="modal rbt-modal-box share-modal fade"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content wrapper modal-small">
            <h5 className="title">Share</h5>
            <ul className="social-icon social-default transparent-with-border mb--20">
              <li
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="200"
              >
                <HashLink href="https://www.facebook.com/" target="_blank">
                  <i className="feather-facebook"></i>
                </HashLink>
              </li>
              <li
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="300"
              >
                <HashLink href="https://www.twitter.com" target="_blank">
                  <i className="feather-twitter"></i>
                </HashLink>
              </li>
              <li
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="400"
              >
                <HashLink href="https://www.instagram.com/" target="_blank">
                  <i className="feather-instagram"></i>
                </HashLink>
              </li>
              <li
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="500"
              >
                <HashLink href="https://www.linkdin.com/" target="_blank">
                  <i className="feather-linkedin"></i>
                </HashLink>
              </li>
            </ul>
            <div className="chat-form">
              <div className="text-form d-flex align-items-center">
                <input
                  type="text"
                  className="copy-link-input"
                  defaultValue="https://www.youtube.com/"
                  readOnly
                />
                <button className="btn-default bg-solid-primary" type="submit">
                  Copy
                </button>
              </div>
            </div>
            <button className="close-button" data-bs-dismiss="modal">
              <i className="fa-sharp fa-regular fa-x"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
