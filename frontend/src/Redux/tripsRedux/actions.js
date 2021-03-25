import axios from "axios";
import {
    GET_TRIPS_REQUEST, GET_TRIPS_SUCCESS, GET_TRIPS_FAILURE,
    GET_TRIP_REQUEST, GET_TRIP_SUCCESS, GET_TRIP_FAILURE,
    ADD_TRIP_REQUEST, ADD_TRIP_SUCCESS, ADD_TRIP_FAILURE
} from "./actionTypes";

const addTrip_Request = (payload) => ({
    type: ADD_TRIP_REQUEST,
    payload
})

const addTrip_Success = (payload) => ({
    type: ADD_TRIP_SUCCESS,
    payload
})

const addTrip_Failure = (payload) => ({
    type: ADD_TRIP_FAILURE,
    payload
})

const getTrip_Request = (payload) => ({
    type: GET_TRIP_REQUEST,
    payload
})

const getTrip_Success = (payload) => ({
    type: GET_TRIP_SUCCESS,
    payload
})

const getTrip_Failure = (payload) => ({
    type: GET_TRIP_FAILURE,
    payload
})

const getTrips_Request = () => ({
    type: GET_TRIPS_REQUEST    
})

const getTrips_Success = (payload) => ({
    type: GET_TRIPS_SUCCESS,
    payload
})

const getTrips_Failure = (payload) => ({
    type: GET_TRIPS_FAILURE,
    payload
})



export const getTrips = (id) => dispatch => {
    dispatch(getTrips_Request())
    const config = {
        method: 'get',
        url: `http://localhost:8001/api/trips?&vid=${id}`
    }
console.log(id)
    return axios(config)
        .then((res) => {
             console.log(res.data)
            dispatch(getTrips_Success(res.data))
            return true
        }).catch((err) => {
             console.log(err)
            dispatch(getTrips_Failure(err))
        });
}

// export const getTrip = (id) => dispatch => {
//     dispatch(getTrip_Request)
//     const config = {
//         method: 'get',
//         url: `http://localhost:8001/api/trips/trip/${id}`
//     }
//     return axios(config)
//         .then((res) => {
//             // console.log(res.data)
//             dispatch(getTrip_Success(res.data))
//             return true
//         }).catch((err) => {
//             // console.log(err)
//             dispatch(getTrip_Failure(err))
//         });
// }

export const addTrip = (data) => dispatch => {
    dispatch(addTrip_Request)
    const config = {
        method: 'post',
        url: `http://localhost:8001/api/trips`,
        data:data
    }
    return axios(config)
        .then((res) => {
             console.log(res.data)            
            dispatch(addTrip_Success(res.data))
            alert("trip Added Successfully")
            return true
        }).catch((err) => {
             console.log(err)
            alert("New trip Could not be added, please Retry")
            dispatch(addTrip_Failure(err))
        });
}

export const editTrips = (id,data) => dispatch => {
    
    const config = {
        method: 'put',
        url: `http://localhost:8001/api/trips/${id}`,
        data:data
    }
    return axios(config)
        .then((res) => {
             console.log(res.data)
            //dispatch(editTrips_Success(res.data))
            alert("Trip Editted Successfully")
            return true
        }).catch((err) => {
             console.log(err)
            alert("Trip edit Failed")
            //dispatch(editTrips_Failure(err))
        });
}

export const deleteTrip = (id) => (dispatch) => {
    const config = {
        method: 'delete',
        url: `http://localhost:8001/api/trips/${id}`,

    }

    return axios(config)
}