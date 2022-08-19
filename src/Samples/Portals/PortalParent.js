import React from 'react'
import ReactDOM from "react-dom";

function PortalParent({ show, closeModal }) {
    if (!show) return null;
    return (
      <div className="modal">
        <div className="overlay"></div>
        <div className="content">
          <h2>Simple Modal</h2>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    );
}

export default PortalParent
