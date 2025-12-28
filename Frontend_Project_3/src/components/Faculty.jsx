import FacultyCard from "./FacultyCard";
import "../styles/Faculty.css";
import avatar from "../assets/icon.png";

const facultyData = [
  {
    name: "Dr. Jaiteg Singh Khaira",
    designation: "Professor & HOD",
    expertise: "AI, Machine Learning",
    email: "jaiteg.singh@chitkara.edu.in",
    image: avatar,
  },
  {
    name: "Dr. Maninderjit Singh",
    designation: "Associate Professor",
    expertise: "DSA, DBMS",
    email: "maninderjit.singh@chitkara.edu.in",
    image: avatar,
  },
  {
    name: "Dr. Deepika Chaudhary",
    designation: "Professor",
    expertise: "Cybersecurity",
    email: "deepika.chaudhary@chitkara.edu.in",
    image: avatar,
  },
];

const Faculty = () => {
  return (
    <div className="faculty-page">
      <h1>Faculty - Computer Applications</h1><br />

      <div className="faculty-grid">
        {facultyData.map((f, i) => (
          <FacultyCard key={i} faculty={f} />
        ))}
      </div>
    </div>
  );
};

export default Faculty;
