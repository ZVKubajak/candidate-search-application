import { useState, useEffect } from "react";
import { searchGithub, searchGithubUser } from "../api/API";

import CandidateCard from "../components/CandidateCard.tsx";

import "./CandidateSearch.css";

const CandidateSearch = () => {

  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState(0);
  const [savedUsers, setSavedUsers] = useState([]);

  useEffect(() => {
    searchGithub().then((results) => {
      setUsers(results);
      console.log(results);
    });
  }, []);

  const nextUser = () => {
    setIndex((prevIndex) => (prevIndex + 1) % users.length);
  };

  const saveUser = () => {
    const currentUser = users[index];
    setSavedUsers([...savedUsers, currentUser]);

    nextUser();
  };

  useEffect(() => {
    console.log(savedUsers);
  }, [savedUsers]);

  const currentUser = users[index] || {};

  return (
    <div>
      <h1>Candidate Search</h1>

      <div className="candidate-card">
        {users.length > 0 && (
          <CandidateCard user={currentUser} />
        )}
      </div>

      <button onClick={nextUser}>Next</button>
      <button onClick={saveUser}>Save</button>
    </div>
  );
};

export default CandidateSearch;