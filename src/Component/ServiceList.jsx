import React from 'react'

function ServiceList({ services, onEdit, onDelete }) {
  return (
    <>
     <div className="me-4">
      <h2 className='text-center'>Healthcare Services</h2>
      <ul >
        {services.map((service, index) => (
          <li className='bg-secondary' key={index}>
            <h3 className='mt-4'>{service.name}</h3>
            <p className='text-white'>{service.description}</p>
            <p>Price:  &#8377; {service.price}</p>
            <button className='bg-warning' onClick={() => onEdit(index)}>Edit</button>
            <button className='bg-danger' onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    
    
    
    
    </>
  )
}

export default ServiceList