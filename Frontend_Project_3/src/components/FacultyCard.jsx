const FacultyCard = ({ faculty }) => {
  return (
    <div className="faculty-card">
      <img
        src={faculty.image}
        alt={faculty.name}
        className="faculty-image"
      />

      <div>
        <h3>{faculty.name}</h3>
        <p className="designation">{faculty.designation}</p>
        <p>{faculty.expertise}</p>
        <p>{faculty.email}</p>
      </div>
    </div>
  );
};

export default FacultyCard;
