import { useState, useEffect } from "react";
import { searchGithub, searchGithubUser } from "../api/API";

import "./CandidateSearch.css";

const CandidateSearch = () => {
  return (
    <div>
      <h1>Candidate Search</h1>

      <div className="candidate-card">
        <div className="candidate-info">
          <div className="candidate-image-container">
            <img
              className="candidate-image"
              src="https://placehold.co/150x150"
            ></img>
          </div>
          <p className="candidate-name">John Doe</p>
          <p className="candidate-location">Tokyo, Japan</p>
          <p className="candidate-email">
            Email: <a href="mailto:zvkubajak@gmail.com">zvkubajak@gmail.com</a>
          </p>
          <p className="candidate-company">Company: GitHub</p>
          <p className="candidate-bio">Bio: Hello world!</p>
        </div>
      </div>
    </div>
  );
};

export default CandidateSearch;
