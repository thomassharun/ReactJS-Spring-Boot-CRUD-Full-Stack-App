import React, { Component } from "react";
import StudentService from "../services/StudentService";

class CreateCourseComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2
      id: this.props.match.params.id,
      name: "",
      deptHead: "",
      deptCode: "",
      department: "",
      subjects: "",
      departments: [],
    };
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeDeptHeadHandler = this.changeDeptHeadHandler.bind(this);
    this.changeDeptCodeHandler = this.changeDeptCodeHandler.bind(this);
    this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
    this.changeSubjectsHandler = this.changeSubjectsHandler.bind(this);
    this.saveOrUpdateCourse = this.saveOrUpdateCourse.bind(this);
  }

  // step 3
  componentDidMount() {
    StudentService.getCourses().then((res) => {
      this.setState({ departments: res.data });
    });

    // step 4
    if (this.state.id === "_add") {
      return;
    } else {
      StudentService.getCourseById(this.state.id).then((res) => {
        let course = res.data;
        this.setState({
          name: course.name,
          deptHead: course.deptHead,
          deptCode: course.deptCode,
          department: course.department,
          subjects: course.subjects,
        });
      });
    }
  }
  saveOrUpdateCourse = (e) => {
    e.preventDefault();
    let course = {
      name: this.state.name,
      deptHead: this.state.deptHead,
      deptCode: this.state.deptCode,
      department: this.state.department,
      subjects: this.state.subjects,
    };
    console.log("departments => " + JSON.stringify(course));

    // step 5
    if (this.state.id === "_add") {
      StudentService.createCourse(course).then((res) => {
        this.props.history.push("/courses");
      });
    } else {
      StudentService.updateCourse(course, this.state.id).then((res) => {
        this.props.history.push("/courses");
      });
    }
  };

  changeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  changeDeptHeadHandler = (event) => {
    this.setState({ deptHead: event.target.value });
  };

  changeDeptCodeHandler = (event) => {
    this.setState({ deptCode: event.target.value });
  };

  changeDepartmentHandler = (event) => {
    this.setState({ department: event.target.value });
  };

  changeSubjectsHandler = (event) => {
    this.setState({ subjects: event.target.value });
  };

  cancel() {
    this.props.history.push("/courses");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add Course</h3>;
    } else {
      return <h3 className="text-center">Update Course</h3>;
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
                    <label> Course Name: </label>
                    <input
                      placeholder="Course name"
                      name="name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.changeNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Dept Head: </label>
                    <input
                      placeholder="Department Head"
                      name="deptHead"
                      className="form-control"
                      value={this.state.deptHead}
                      onChange={this.changeDeptHeadHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Department Code: </label>
                    <input
                      placeholder="Department Code"
                      name="deptCode"
                      className="form-control"
                      value={this.state.deptCode}
                      onChange={this.changeDeptCodeHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label> Department: </label>
                    <input
                      placeholder="Department"
                      name="department"
                      className="form-control"
                      value={this.state.department}
                      onChange={this.changeDepartmentHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label> Modules: </label>
                    <input
                      placeholder="Modules"
                      name="subjects"
                      className="form-control"
                      value={this.state.subjects}
                      onChange={this.changeSubjectsHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateCourse}
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

export default CreateCourseComponent;
