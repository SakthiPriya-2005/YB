import { useState } from "react";

function FormPage({ bio, setBio }) {
  const [formData, setFormData] = useState(bio);
  const [ageError, setAgeError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'age') {
      if (isNaN(value)) {
        setAgeError('Age must be a number.');
      } else {
        setAgeError('');
      }
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBio(formData);
  };

  const handleClear = () => {
    setFormData({ name: '', age: '', email: '', education: '' });
    setAgeError('');
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label><br/>
        <label>
          Age: <input type="text" name="age" value={formData.age} onChange={handleChange} style={{ borderColor: ageError ? 'red' : 'initial' }} />
        </label><br/>
        {ageError && <div style={{ color: 'red' }}>{ageError}</div>}
        <label>
          Email: <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label><br/>
        <label>
          Education: <input type="text" name="education" value={formData.education} onChange={handleChange} />
        </label><br/>
        <button type="submit">Update</button>
      </form>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default FormPage;
