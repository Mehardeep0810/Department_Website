import { useState } from "react";
import "../styles/AdmissionForm.css";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
    qualification: "",
    percentage: "",
    school: "",
    year: "",
    course: "",
    specialization: "",
    campus: "",
    intake: "",
    declaration: false,
    updates: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let newErrors = {};

   if (!formData.firstName.trim()) 
     newErrors.firstName = "First name is required";
    else if (!/^[A-Za-z\s]+$/.test(formData.firstName)) 
      newErrors.firstName = "First name must contain only letters";

    if (!formData.lastName.trim()) 
       newErrors.lastName = "Last name is required";
   else if (!/^[A-Za-z\s]+$/.test(formData.lastName)) 
     newErrors.lastName = "Last name must contain only letters";

    if (!formData.email)
      newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.phone)
      newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone must be 10 digits";

    if (!formData.dob)
      newErrors.dob = "Date of birth is required";

    if (!formData.gender)
      newErrors.gender = "Please select gender";

    if (!formData.address.trim())
      newErrors.address = "Address is required";

    if (!formData.qualification)
      newErrors.qualification = "Select qualification";

    if (!formData.percentage)
      newErrors.percentage = "Percentage / CGPA required";
    else if (isNaN(formData.percentage))
      newErrors.percentage = "Must be a number";

    if (!formData.school.trim())
      newErrors.school = "School / College name required";

   if (!formData.year) 
      newErrors.year = "Passing year required";
  else if (!/^\d+$/.test(formData.year)) 
      newErrors.year = "Passing year must be a number";

    if (!formData.course)
      newErrors.course = "Select a course";

    if (!formData.specialization)
      newErrors.specialization = "Select specialization";

    if (!formData.campus)
      newErrors.campus = "Select campus";

    if (!formData.intake)
      newErrors.intake = "Select intake";

    if (!formData.declaration)
      newErrors.declaration = "You must accept the declaration";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Application Submitted Successfully!");
      console.log(formData);
      handleReset();
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dob: "",
      gender: "",
      address: "",
      qualification: "",
      percentage: "",
      school: "",
      year: "",
      course: "",
      specialization: "",
      campus: "",
      intake: "",
      declaration: false,
      updates: false,
    });
    setErrors({});
  };

  return (
    <div className="form-container">
      <h1>Admission Form</h1>
      <p>Department of Computer Applications – Chitkara University</p>

      <form onSubmit={handleSubmit}>
        <h2>Personal Information</h2>

        <div className="form-row">
          <div>
            <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
          </div>

          <div>
            <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
            {errors.lastName && <span className="error">{errors.lastName}</span>}
          </div>
        </div>

        <div className="form-row">
          <div>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div>
            <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
        </div>

        <div className="form-row">
          <div>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
            {errors.dob && <span className="error">{errors.dob}</span>}
          </div>

          <div>
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            {errors.gender && <span className="error">{errors.gender}</span>}
          </div>
        </div>

        <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
        {errors.address && <span className="error">{errors.address}</span>}

        <h2>Academic Information</h2>

        <div className="form-row">
          <div>
            <select name="qualification" value={formData.qualification} onChange={handleChange}>
              <option value="">Qualification</option>
              <option>High School</option>
              <option>Intermediate</option>
              <option>Bachelor</option>
              <option>Master</option>
            </select>
            {errors.qualification && <span className="error">{errors.qualification}</span>}
          </div>

          <div>
            <input name="percentage" placeholder="Percentage / CGPA" value={formData.percentage} onChange={handleChange} />
            {errors.percentage && <span className="error">{errors.percentage}</span>}
          </div>
        </div>

        <div className="form-row">
          <div>
            <input name="school" placeholder="School / College" value={formData.school} onChange={handleChange} />
            {errors.school && <span className="error">{errors.school}</span>}
          </div>

          <div>
            <input name="year" placeholder="Passing Year" value={formData.year} onChange={handleChange} />
            {errors.year && <span className="error">{errors.year}</span>}
          </div>
        </div>

        <h2>Course Selection</h2>

        <div className="form-row">
          <div>
            <select name="course" value={formData.course} onChange={handleChange}>
              <option value="">Course</option>
              <option>BCA</option>
              <option>MCA</option>
            </select>
            {errors.course && <span className="error">{errors.course}</span>}
          </div>

          <div>
            <select name="specialization" value={formData.specialization} onChange={handleChange}>
              <option value="">Specialization</option>
              <option>AI & ML</option>
              <option>Cloud Computing</option>
              <option>Cyber Security</option>
            </select>
            {errors.specialization && <span className="error">{errors.specialization}</span>}
          </div>
        </div>

        <div className="form-row">
          <div>
            <select name="campus" value={formData.campus} onChange={handleChange}>
              <option value="">Campus</option>
              <option>Punjab</option>
              <option>Himachal Pradesh</option>
            </select>
            {errors.campus && <span className="error">{errors.campus}</span>}
          </div>

          <div>
            <select name="intake" value={formData.intake} onChange={handleChange}>
              <option value="">Intake</option>
              <option>Spring 2025</option>
              <option>Summer 2025</option>
              <option>Fall 2025</option>
            </select>
            {errors.intake && <span className="error">{errors.intake}</span>}
          </div>
        </div>

        <div className="checkbox">
          <label>
            <input type="checkbox" name="declaration" checked={formData.declaration} onChange={handleChange} />
            I declare the information is correct
          </label>
          {errors.declaration && <span className="error">{errors.declaration}</span>}

          <label>
            <input type="checkbox" name="updates" checked={formData.updates} onChange={handleChange} />
            Receive updates
          </label>
        </div>

        <div className="actions">
          <button type="button" onClick={handleReset}>Reset</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
