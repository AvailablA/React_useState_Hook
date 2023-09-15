import React, { useState } from 'react';
import { ReactDOM } from 'react';
import FormComponent from './FormComponent';
import DisplayComponent from './DisplayComponent';

const App = () => {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div>
      <FormComponent onFormSubmit={handleFormSubmit} />
      {formData && <DisplayComponent data={formData} />}
    </div>
  );
};

export default App;
