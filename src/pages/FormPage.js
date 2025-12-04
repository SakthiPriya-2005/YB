import { useState } from "react";

function FormPage({ bio, setBio }) {
  const [formData, setFormData] = useState(bio);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBio(formData);
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label><br/>
        <label>
          Age: <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </label><br/>
        <label>
          Email: <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label><br/>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default FormPage;
