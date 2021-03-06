 import axios from "axios"
 import axiosWithAuth from '../../utils/axiosWithAuth';

 export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
 export const LOGIN_ERROR = "LOGIN_ERROR";

//  gets
 export const GET_POTLUCKS_START = "GET_POTLUCKS_START";
 export const GET_POTLUCKS_SUCCESS = "GET_POTLUCKS_SUCCESS";
 export const GET_POTLUCKS_ERROR = "GET_POTLUCKS_ERROR";

 export const GET_INVITES_START = "GET_INVITES_START";
 export const GET_INVITES_SUCCESS = "GET_INVITES_SUCCESS";
 export const GET_INVITES_ERROR = "GET_INVITES_ERROR";

 export const GET_FOODS_START = "GET_FOODS_START";
 export const GET_FOODS_SUCCESS = "GET_FOODS_SUCCESS";
 export const GET_FOODS_ERROR = "GET_FOODS_ERROR";

 export const CREATE_POTLUCKS_SUCCESS = "CREATE_POTLUCKS_SUCCESS";
 export const CREATE_POTLUCKS_ERROR = "CREATE_POTLUCKS_ERROR";

 export const POST_INVITES_SUCCESS = "POST_INVITES_SUCCESS";
 export const POST_INVITES_ERROR = "POST_INVITES_ERROR";

 export const POST_FOODS_SUCCESS = "POST_FOODS_SUCCESS";
 export const POST_FOODS_ERROR = "POST_FOODS_ERROR";

//  PUTS
export const RSVP_SUCCESS = "RSVP_SUCCESS";
export const RSVP_ERROR = "RSVP_ERROR";

 export const handleLogin = (user) => (dispatch) => {
    axios.post('https://ft-potluck-planner-7-server.herokuapp.com/api/auth/login', user)
        .then(res => {
            dispatch({type: LOGIN_SUCCESS, payload: res.data})
            localStorage.setItem('token', res.data.token)
        })
        .catch(err => {
            dispatch({type: LOGIN_ERROR, payload: err})
        })
    }

export const getPotlucks = () => (dispatch) => {
    dispatch({ type: GET_POTLUCKS_START})

    return axiosWithAuth()
        .get('https://ft-potluck-planner-7-server.herokuapp.com/api/potlucks')
            .then(res => {
                dispatch({type: GET_POTLUCKS_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({type: GET_POTLUCKS_ERROR, payload: err})
            })
}

export const getFoods = () => (dispatch) => {
    dispatch({ type: GET_FOODS_START})

    return axiosWithAuth()
        .get('https://ft-potluck-planner-7-server.herokuapp.com/api/foods')
            .then(res => {
                dispatch({type: GET_FOODS_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({type: GET_FOODS_ERROR, payload: err})
            })
}

export const getInvites = () => (dispatch) => {
    dispatch({ type: GET_INVITES_START})

    return axiosWithAuth()
        .get('https://ft-potluck-planner-7-server.herokuapp.com/api/invites')
            .then(res => {
                dispatch({type: GET_INVITES_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({type: GET_INVITES_ERROR, payload: err})
            })
}

export const createPotluck = (potluck) => (dispatch) => {
        axiosWithAuth()
        .post('https://ft-potluck-planner-7-server.herokuapp.com/api/potlucks', potluck)
            .then(res => {
                dispatch({type: CREATE_POTLUCKS_SUCCESS})
            })
            .catch(err => {
                dispatch({type: CREATE_POTLUCKS_ERROR, payload: err})
            })
}

export const postInvites = (invite) => (dispatch) => {
    axiosWithAuth()
        .post('https://ft-potluck-planner-7-server.herokuapp.com/api/invites', invite)
            .then(res => {
                dispatch({type: POST_INVITES_SUCCESS})
            })
            .catch(err => {
                dispatch({type: POST_INVITES_ERROR, payload: err})
            })
}

export const postFoods = (food) => (dispatch) => {
    axiosWithAuth()
        .post('https://ft-potluck-planner-7-server.herokuapp.com/api/foods', food)
            .then(res => {
                dispatch({type: POST_FOODS_SUCCESS})
            })
            .catch(err => {
                dispatch({type: POST_FOODS_ERROR, payload: err})
            })
}

export const putInvites = (id, RSVP) => (dispatch) => {
    axiosWithAuth()
        .put(`https://ft-potluck-planner-7-server.herokuapp.com/api/invites/${id}`, {has_rsvped: RSVP})
            .then(res => {
                dispatch({type: RSVP_SUCCESS})
            })
            .catch(err => {
                dispatch({type: RSVP_ERROR, payload: err})
            })
}