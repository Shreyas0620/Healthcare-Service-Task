import React, { useState } from 'react';
import ServiceList from './Component/ServiceList';
import ServiceForm from './Component/ServiceForm';

const App = () => {
  const [services, setServices] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrUpdate = (service) => {
    if (editIndex !== null) {
      const updatedServices = services.map((s, index) =>
        index === editIndex ? service : s
      );
      setServices(updatedServices);
      setEditIndex(null);
      alert("Service updated successfully..")
    } else {
      setServices([...services, service]);
      alert("Service added successfully..")
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedServices = services.filter((_, i) => i !== index);
    setServices(updatedServices);
    alert("Service deleted successfully..")
  };

  return (
    <div>
      <h1 className='mt-3 '>Healthcare Services Management</h1>
      <ServiceForm onSubmit={handleAddOrUpdate} editService={services[editIndex]} />
      <ServiceList  services={services} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
