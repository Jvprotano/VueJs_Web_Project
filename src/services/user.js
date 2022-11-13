import {http} from './config'
export default{
    salvar:(user) => {
        return http.post('account/register-user', user)
    },
    instructorCourse:() => {
        return http.get('instructor/my-courses');
    },
    mySales: () => {
        return http.get('instructor/my-sales')
    },
    students: (courseId) => {
        return http.get('instructor/list-students?courseId=' + courseId)
    },
    ConcludeCourse:(courseId) => {
        return http.put('instructor/course-complete', courseId)
    },
    myCourses: () => {
        return http.get('student/my-courses');
    },
    ratingCourse: (rating) => {
        return http.post('student/rating', rating)
    },
}