import React, { Component } from "react";
import CourseService from "../services/StudentService";

class ListCourseComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [],
    };
    this.addCourse = this.addCourse.bind(this);
    this.editCourse = this.editCourse.bind(this);
    this.deleteCourse = this.deleteCourse.bind(this);
  }

  deleteCourse(id) {
    CourseService.deleteCourse(id).then((res) => {
      this.setState({
        courses: this.state.courses.filter((course) => course.id !== id),
      });
    });
  }
  viewCourse(id) {
    this.props.history.push(`/view-course/${id}`);
  }
  editCourse(id) {
    this.props.history.push(`/add-course/${id}`);
  }

  componentDidMount() {
    CourseService.getCourses().then((res) => {
      this.setState({ courses: res.data });
    });
  }

  addCourse() {
    this.props.history.push("/add-course/_add");
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Courses List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addCourse}>
            {" "}
            Add Course
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Course Name</th>
                <th> Dept Head</th>
                <th> Dept Code</th>
                <th> Dept </th>
                <th> Subjects </th>
                <th> Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.courses.map((course) => (
                <tr key={course.id}>
                  <td> {course.name} </td>
                  <td> {course.deptHead}</td>
                  <td> {course.deptCode}</td>
                  <td> {course.department}</td>
                  <td> {course.subjects}</td>
                  <td>
                    <button
                      onClick={() => this.editCourse(course.id)}
                      className="btn btn-info"
                    >
                      Update{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteCourse(course.id)}
                      className="btn btn-danger"
                    >
                      Delete{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewCourse(course.id)}
                      className="btn btn-info"
                    >
                      View{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListCourseComponent;
