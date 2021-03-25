import {
    GET_TRIPS_REQUEST, GET_TRIPS_SUCCESS, GET_TRIPS_FAILURE,
    GET_TRIP_REQUEST, GET_TRIP_SUCCESS, GET_TRIP_FAILURE,
    ADD_TRIP_REQUEST, ADD_TRIP_SUCCESS, ADD_TRIP_FAILURE
} from "./actionTypes";

const initialState = {
    isLoading: false,
    error: null,
    trips: [],
    trip:""
}

export const tripsReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_TRIPS_REQUEST:
            return {
                ...state,
                isLoading: true,                
                error: null
            }
        case GET_TRIPS_SUCCESS:  
        console.log(payload)          
            return {
                ...state,
                trips: payload,                
                isLoading: false
            }

        case GET_TRIPS_FAILURE:
            return {
                ...state,
                error: true,
                isLoading: false
            }


        case GET_TRIP_REQUEST: {
            // console.log("request")
            return {
                ...state,
                isLoading: true,
                error: null
            }
        }

        case GET_TRIP_SUCCESS: {
            return {
                ...state,
                trip: payload,
                isLoading: false
            }
        }

        case GET_TRIP_FAILURE:
            return {
                ...state,
                error: true,
                isLoading: false
            }



        default: return state
    }
}
