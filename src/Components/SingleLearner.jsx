import React, { useState } from 'react';
import NavbarComponent from './Navbar';

const SingleLearner = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [batch, setBatch] = useState('');
  const [course, setCourse] = useState('');
  const [placementStatus, setPlacementStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('name: ', name);
    console.log('email: ', email);
    console.log('batch: ', batch);
    console.log('course: ', course);
    console.log('placementStatus: ', placementStatus);
  };

 return(
  <>
  <NavbarComponent/>
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <h2 style={{textAlign:"center",fontFamily:'cursive'}}>Add Learner</h2>
        <form
      style={{
        width: '70%',
        height: '400px',
        boxShadow: '2px 2px 2px gray',
        margin: '5% auto',
        borderRadius: '5px',
        border:'1px solid black'

      }}
      onSubmit={handleSubmit}
    >
      <div className="form-row">
      <div className="form-group col-md-6" style={{marginLeft:'10px'}}>
          <label htmlFor="inputName" style={{marginLeft:'30%'}}>Name</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group col-md-6" style={{marginLeft:'10px'}} >
          <label htmlFor="inputEmail4" style={{marginLeft:'30%'}}>Email</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
       
      </div>
      <div className="form-row col-md-6" style={{marginLeft:'10px'}}>
        <div className="form-group col-md-6">
          <label htmlFor="inputBatch" style={{marginLeft:'30%'}}>Batch</label>
          <input
            type="text"
            className="form-control"
            id="inputBatch"
            placeholder="Batch"
            value={batch}
            onChange={(event) => setBatch(event.target.value)}
          />
        </div>
        <div className="form-group col-md-6" style={{marginLeft:'10px'}}>
          <label htmlFor="inputCourse"style={{marginLeft:'30%'}}>Course</label>
          <select
            id="inputCourse"
            className="form-control"
            value={course}
            onChange={(event) => setCourse(event.target.value)}
          >
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
      </div>
      <div className="form-group col-md-6" style={{marginLeft:'10px'}}>
        <label htmlFor="inputPlacementStatus" style={{marginLeft:'30%'}}>Placement Status</label>
        <select
          id="inputPlacementStatus"
          className="form-control"
          value={placementStatus}
          onChange={(e) => setPlacementStatus(e.target.value)}
          >
          <option value="">Choose...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
      </div>
    </div>
    </>
 )
};
         

export default SingleLearner;
