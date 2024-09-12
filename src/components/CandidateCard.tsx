

export default function CandidateCard(props: any) {
  return (
    <section>
      <div className="candidate-info">
        <div className="candidate-image-container">
          <img
            className="candidate-image"
            src="https://placehold.co/150x150"
          ></img>
        </div>
        <p className="candidate-name">{props.name}</p>
        <p className="candidate-location">{props.location}</p>
        <p className="candidate-email">
          Email: <a href={`mailto:${props.email}`}>{props.email}</a>
        </p>
        <p className="candidate-company">Company: {props.company}</p>
        <p className="candidate-bio">Bio: {props.bio}</p>
      </div>
    </section>
  );
}