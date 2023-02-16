import React from 'react';
import NavbarComponent from './Navbar';


const students = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    batch: '2022',
    course: 'Computer Science',
    qualified: true,
    placed: true,
  },
  {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    batch: '2022',
    course: 'Electronics and Communication Engineering',
    qualified: true,
    placed: false,
  },
  {
    name: 'Jim Brown',
    email: 'jim.brown@example.com',
    batch: '2021',
    course: 'Mechanical Engineering',
    qualified: false,
    placed: false,
  },
];

const StudentList = () => (
  <>
  <NavbarComponent/>
  <div className="container">
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-cl-12 col-xxl-12">
        <div className="row g=3">
           <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-cl-12 col-xxl-12">
           <table className="table table-striped table-responsive" style={{ marginTop:'20px' ,background: 'rgba(255, 255, 255, 0.8)', border: '1px solid #ccc', borderRadius: '10px' }}>
                    <thead>
                      <tr>
                      <th style={{ width: '5%',borderRight: "1px solid black" }}>#</th>
                      <th style={{ borderRight: "1px solid black" }}>Name</th>
                      <th style={{ borderRight: "1px solid black" }}>Email</th>
                      <th style={{ borderRight: "1px solid black" }}>Batch</th>
                      <th style={{ borderRight: "1px solid black" }}>Course</th>
                      <th style={{ borderRight: "1px solid black" }}>Qualified</th>
                      <th >Placement Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((student, index) => (
                        <tr key={index}>
                          <td style={{ borderRight: "1px solid black" }}>{index + 1}</td>
                          <td style={{ borderRight: "1px solid black" }}>{student.name}</td>
                          <td style={{ borderRight: "1px solid black" }}>{student.email}</td>
                          <td style={{ borderRight: "1px solid black" }}>{student.batch}</td>
                          <td style={{ borderRight: "1px solid black" }}>{student.course}</td>
                          <td style={{ borderRight: "1px solid black" }}>{student.qualified ? 'Yes' : 'No'}</td>
                          <td >{student.placed ? 'Placed' : 'Not Placed'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
           </div>
         </div>
      </div>
    </div>
  </div>
 </>
);

export default StudentList;
