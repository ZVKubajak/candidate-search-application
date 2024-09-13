import { Candidate } from "../interfaces/Candidate.interface";

interface CandidateCardProps {
  user: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ user }) => {
  return (
    <section>
      <div className="candidate-info">
        <div className="candidate-image-container">
          <img
            className="candidate-image"
            src={`${user.image}`}
          ></img>
        </div>
        <p className="candidate-name">{user.name}</p>
        <p className="candidate-location">{user.location}</p>
        <p className="candidate-email">
          Email: <a href={`mailto:${user.email}`}>{user.email}</a>
        </p>
        <p className="candidate-company">Company: {user.company}</p>
        <p className="candidate-bio">Bio: {user.bio}</p>
      </div>
    </section>
  );
};

export default CandidateCard;