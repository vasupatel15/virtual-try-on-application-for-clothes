import React from 'react'
import Header from './Header';

const Contact = () => {
    const contacts = [
        { name: 'Tapan Khanpara', phoneNumber: '+91 9428873751' },
        { name: 'Vasu Depani', phoneNumber: '+91 8866677074' },
        { name: 'Rimal Makawana', phoneNumber: '+91 9558142127' }
      ];
  return (
    <>
    <Header/>
       <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card mt-5">
            <div className="card-header">
              <h3>Contact Us</h3>
            </div>
            <div className="card-body">
              <ul className="list-group">
                {contacts.map((contact, index) => (
                  <li key={index} className="list-group-item">
                    <strong>{contact.name}</strong>: {contact.phoneNumber}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card mt-5">
            <div className="card-header">
              <h3>Guided By</h3>
            </div>
            <div className="card-body">
              <ul className="list-group">
                
                  <li  className="list-group-item">
                    <strong>Prof. Mittal Darji</strong>: +91 9537555096
                  </li>
            
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact
