import React, { Component } from "react";
import StudentService from "../services/StudentService";

class CreateStudentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2
      id: this.props.match.params.id,
      firstName: "",
      lastName: "",
      emailId: "",
      course: "",
      courses: [],
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeCourseHandler = this.changeCourseHandler.bind(this);
    this.saveOrUpdateStudent = this.saveOrUpdateStudent.bind(this);
  }

  // step 3
  componentDidMount() {
    StudentService.getCourses().then((res) => {
      this.setState({ course: res.data });
    });

    // step 4
    if (this.state.id === "_add") {
      return;
    } else {
      StudentService.getStudentById(this.state.id).then((res) => {
        let student = res.data;
        this.setState({
          firstName: student.firstName,
          lastName: student.lastName,
          emailId: student.emailId,
          course: student.courseName,
        });
      });
    }
  }
  saveOrUpdateStudent = (e) => {
    e.preventDefault();
    let student = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
      course: this.state.courseName,
    };
    console.log("student => " + JSON.stringify(student));

    // step 5
    if (this.state.id === "_add") {
      StudentService.createStudent(student).then((res) => {
        this.props.history.push("/students");
      });
    } else {
      StudentService.updateStudent(student, this.state.id).then((res) => {
        this.props.history.push("/students");
      });
    }
  };

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };

  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

  changeEmailHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };

  changeCourseHandler = (event) => {
    this.setState({ courseName: event.target.value });
  };

  cancel() {
    this.props.history.push("/students");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add Student</h3>;
    } else {
      return <h3 className="text-center">Update Student</h3>;
    }
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> First name: </label>
                    <input
                      placeholder="First name"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Last name: </label>
                    <input
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Email: </label>
                    <input
                      placeholder="Email Id"
                      name="emailId"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeEmailHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label> Course: </label>
                    <input
                      placeholder="Course"
                      name="course"
                      className="form-control"
                      value={this.state.courseName}
                      onChange={this.changeCourseHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateStudent}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateStudentComponent;
