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
          candidates.map(async (user: Candidate) => {
            const userDetails = await searchGithubUser(user.login);
            // console.log(userDetails);

            

            return userDetails;
          })
        );

        setUsers(getUserDetails);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getUserData();
  }, []);

  useEffect(() => {
    console.log("Candidate List:", candidateList);
    console.log("User Details:", users);
  }, [users]);

  useEffect(() => {
    const storedUsers = localStorage.getItem('savedUsers');
    if (storedUsers) { setSavedUsers(JSON.parse(storedUsers)); }
  }, []);

  const currentUser = users[index];
  // console.log(currentUser);

  const nextUser = () => {
    setIndex((prevIndex) => (prevIndex + 1) % users.length);
  };

  const saveUser = () => {
    const updatedSavedUsers = [...savedUsers, currentUser];
    setSavedUsers(updatedSavedUsers);

    localStorage.setItem('savedUsers', JSON.stringify(updatedSavedUsers));

    nextUser();
  };

  return (
    <div>
      <h1>Candidate Search</h1>

      <div className="candidate-card">
        {users.length > 0 && <CandidateCard user={currentUser} />}
      </div>

      <div className="button-container">
        <button id="next-button" onClick={nextUser}>Next</button>
        <button id="save-button" onClick={saveUser}>Save</button>
      </div>
    </div>
  );
};

export default CandidateSearch;
