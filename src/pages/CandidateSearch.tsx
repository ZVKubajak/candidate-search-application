import { useState, useEffect } from "react";
import { searchGithub, searchGithubUser } from "../api/API";

import Candidate from "../interfaces/Candidate.interface.tsx";

import "./CandidateSearch.css";

const CandidateSearch = () => {

  const [gitHubUser, setGitHubUser] = useState([]);

  useEffect(() => {
    searchGithub().then((results) => {
      console.log(results);
      setGitHubUser(results)
    });
  }, []);

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
          {/* <p className="candidate-name">{name}</p>
          <p className="candidate-location">{location}</p>
          <p className="candidate-email">
            Email: <a href={`mailto:${email}`}>{email}</a>
          </p>
          <p className="candidate-company">Company: {company}</p>
          <p className="candidate-bio">Bio: {bio}</p> */}
        </div>
      </div>
    </div>
  );
};

export default CandidateSearch;