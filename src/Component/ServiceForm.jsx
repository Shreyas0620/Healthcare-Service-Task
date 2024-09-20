import React, { useState, useEffect } from 'react'
import './style.css'

function ServiceForm({ onSubmit, editService }) {

    const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (editService) {
      setName(editService.name);
      setDescription(editService.description);
      setPrice(editService.price);
    }
  }, [editService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description, price });
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
   <>

<form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Service Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control mb-2"
        required
      />
      <textarea
        placeholder="Service Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="form-control mb-2"
        required
      ></textarea>
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="form-control mb-2"
        required
      />
      <button type="submit" className="btn btn-success">
        {editService ? 'Update' : 'Add'} Service
      </button>
    </form>

   
   
   
   </>
  )
}

export default ServiceForm