import React, { Component } from "react";
import StudentService from "../services/StudentService";

class ViewStudentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      student: {
        course: {}, // Initialize course to avoid undefined error
      },
    };
  }

  componentDidMount() {
    StudentService.getStudentById(this.state.id).then((res) => {
      this.setState({ student: res.data });
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View Student Details</h3>
          <div className="card-body">
            <div className="row">
              <label style={{ marginRight: "10px" }}> First Name: </label>
              <div> {this.state.student.firstName}</div>
            </div>
            <div className="row">
              <label style={{ marginRight: "10px" }}> Last Name: </label>
              <div> {this.state.student.lastName}</div>
            </div>
            <div className="row">
              <label style={{ marginRight: "10px" }}> Email: </label>
              <div> {this.state.student.emailId}</div>
            </div>
            <div className="row">
              <label style={{ marginRight: "10px" }}> Course Name: </label>
              <div> {this.state.student.course.name}</div>
            </div>
            <div className="row">
              <label style={{ marginRight: "10px" }}> Department head: </label>
              <div> {this.state.student.course.deptHead}</div>
            </div>
            <div className="row">
              <label style={{ marginRight: "10px" }}> Department code: </label>
              <div> {this.state.student.course.deptCode}</div>
            </div>

            <div className="row">
              <label style={{ marginRight: "10px" }}> Department: </label>
              <div> {this.state.student.course.department}</div>
            </div>

            <div className="row">
              <label style={{ marginRight: "10px" }}> Subjects: </label>
              <div> {this.state.student.course.subjects}</div>
            </div>

            <div className="row">
              <label style={{ marginRight: "10px" }}> GPA: </label>
              <div> {this.state.student.gpa}</div>
            </div>

            {/* <div className="row">
              <label style={{ marginRight: "10px" }}> Dept Name: </label>
              <div> {this.state.student.course.name}</div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ViewStudentComponent;
