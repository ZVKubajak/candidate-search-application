import { useState, useEffect } from "react";
import { searchGithub, searchGithubUser } from "../api/API.tsx";

import { Candidate } from "../interfaces/Candidate.interface.tsx";
import CandidateCard from "../components/CandidateCard.tsx";

import "./CandidateSearch.css";

const CandidateSearch = () => {

  const [index, setIndex] = useState<number>(0);
  const [candidateList, setCandidateList] = useState<Candidate[]>([]);
  const [savedUsers, setSavedUsers] = useState<Candidate[]>([]);
  const [users, setUsers] = useState<Candidate[]>([]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const candidates: Candidate[] = await searchGithub();
        setCandidateList(candidates);

        const getUserDetails = await Promise.all(
          candidates.map(async (user: Candidate) => searchGithubUser(user.login))
        );

        setUsers(getUserDetails);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getUserData();
  }, []);

  /*
  useEffect(() => {
    searchGithub().then((results) => {
      setCandidateList(results);
      console.log(results);
    });
  }, []);
  */

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
  // console.log(currentUser);

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