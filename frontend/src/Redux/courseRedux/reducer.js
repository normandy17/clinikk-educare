import {
    GET_COURSES_REQUEST, GET_COURSES_SUCCESS, GET_COURSES_FAILURE,
    GET_COURSE_REQUEST, GET_COURSE_SUCCESS, GET_COURSE_FAILURE
} from "./actionTypes";

const initialState = {
    isLoading: false,
    error: null,
    courses: [],
    myCourses:[],    
    course:""
}

export const courseReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_COURSES_REQUEST:
            return {
                ...state,
                isLoading: true,                
                error: null
            }
        case GET_COURSES_SUCCESS:     

            return {
                ...state,
                courses: payload,                
                isLoading: false
            }

        case GET_COURSES_FAILURE:
            return {
                ...state,
                error: true,
                isLoading: false
            }


        case GET_COURSE_REQUEST: {
            // console.log("request")
            return {
                ...state,
                isLoading: true,
                error: null
            }
        }

        case GET_COURSE_SUCCESS: {
            return {
                ...state,
                course: payload,
                isLoading: false
            }
        }

        case GET_COURSE_FAILURE:
            return {
                ...state,
                error: true,
                isLoading: false
            }



        default: return state
    }
}
