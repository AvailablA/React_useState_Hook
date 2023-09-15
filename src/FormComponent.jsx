import React, { useState } from 'react';

const FormComponent = ({ onFormSubmit }) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit({ name, gender, email, mobile });
  };

  const handleReset = () => {
    setName('');
    setGender('');
    setEmail('');
    setMobile('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">--</option>
        <option value="male">M</option>
        <option value="female">F</option>
      </select>
      <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" name="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
      
    </form>
  );
};

export default FormComponent;





















































{/* <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>Reset Form</button> */}