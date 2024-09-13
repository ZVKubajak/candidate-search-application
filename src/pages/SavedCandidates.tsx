import { useState } from "react";

import { Candidate } from "../interfaces/Candidate.interface.tsx";

import "./SavedCandidates.css";

const SavedCandidates = () => {
  const [users, setUsers] = useState<Candidate[]>(() => {
    const savedUsers = localStorage.getItem("savedUsers");

    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const rejectUser = (index: number) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    localStorage.setItem("savedUsers", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  const rows: JSX.Element[] = [];
  users.forEach((user, index) => {
    rows.push(
      <tr className="user-row" key={index}>
        <td>
          <img
            className="user-image"
            src={`${user.avatar_url}`}
            alt="No image found."
          />
        </td>
        <td>{user.login}</td>
        <td>{user.location}</td>
        <td>
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </td>
        <td>{user.company}</td>
        <td>{user.bio}</td>
        <td>
          <button id="reject-user" onClick={() => rejectUser(index)}>
            Reject
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <h1>Potential Candidates</h1>

      <main>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Bio</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </main>
    </>
  );
};

export default SavedCandidates;
