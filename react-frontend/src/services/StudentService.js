import axios from 'axios';

const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1/student";
const STUDENT_ID_API_BASE_URL = "http://localhost:8080/api/v1/studentById";
const COURSE_API_BASE_URL = "http://localhost:8080/api/v1/course";

class StudentService { 

    getStudents(){
        return axios.get(STUDENT_API_BASE_URL);
    }

    createStudent(student){
        return axios.post(STUDENT_API_BASE_URL, student);
    }

    getStudentById(studentId){
        return axios.get(STUDENT_API_BASE_URL + '/' + studentId);
    }

    getStudentByIds(studentId){
        return axios.get(STUDENT_ID_API_BASE_URL + '/' + studentId);
    }

    updateStudent(student, studentId){
        return axios.put(STUDENT_API_BASE_URL + '/' + studentId, student);
    }

    deleteStudent(studentId){
        return axios.delete(STUDENT_API_BASE_URL + '/' + studentId);
    }

    createCourse(course){
        return axios.post(COURSE_API_BASE_URL, course);
    }

    getCourseById(courseId){
        return axios.get(COURSE_API_BASE_URL + '/' + courseId);
    }

    updateCourse(course, courseId){
        return axios.put(COURSE_API_BASE_URL + '/' + courseId, course);
    }

    deleteCourse(courseId){
        return axios.delete(COURSE_API_BASE_URL + '/' + courseId);
    }

    getCourses(){
        return axios.get(COURSE_API_BASE_URL);
    }
}
const studentService = new StudentService(); 
export default studentService;