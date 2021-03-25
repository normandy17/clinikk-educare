import axios from "axios";
import {
    GET_COURSES_REQUEST, GET_COURSES_SUCCESS, GET_COURSES_FAILURE,
    GET_COURSE_REQUEST, GET_COURSE_SUCCESS, GET_COURSE_FAILURE
} from "./actionTypes";

const getCourse_Request = (payload) => ({
    type: GET_COURSE_REQUEST,
    payload
})

const getCourse_Success = (payload) => ({
    type: GET_COURSE_SUCCESS,
    payload
})

const getCourse_Failure = (payload) => ({
    type: GET_COURSE_FAILURE,
    payload
})

const getCourses_Request = (page,limit) => ({
    type: GET_COURSES_REQUEST,
    payload:{page:page,limit:limit}
})

const getCourses_Success = (payload) => ({
    type: GET_COURSES_SUCCESS,
    payload
})

const getCourses_Failure = (payload) => ({
    type: GET_COURSES_FAILURE,
    payload
})



export const getCourses = () => dispatch => {
    dispatch(getCourses_Request())
        const  config = {
            method: 'get',
            url: `http://localhost:8001/api/courses`
        }

    return axios(config)
        .then((res) => {
             console.log(res.data)
            dispatch(getCourses_Success(res.data))
            return true
        }).catch((err) => {
             console.log(err)
            dispatch(getCourses_Failure(err))
        });
}

export const getCourse = (id) => dispatch => {
    dispatch(getCourse_Request)
    const config = {
        method: 'get',
        url: `http://localhost:8001/api/courses/course/${id}`
    }
    return axios(config)
        .then((res) => {
            // console.log(res.data)
            dispatch(getCourse_Success(res.data))
            return true
        }).catch((err) => {
            // console.log(err)
            dispatch(getCourse_Failure(err))
        });
}

