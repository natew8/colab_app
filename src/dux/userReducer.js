const initialState = {
    username: '',
    profilePic: '',
    userId: 0
}

const UPDATE_USER = 'UPDATE_USER'
const LOGOUT_USER = 'LOGOUT_USER'

export function updateUser(user) {
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export function logOut() {
    return {
        type: LOGOUT_USER
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER:
            const { username, profile_pic, id } = action.payload
            return { ...state, username: username, profilePic: profile_pic, userId: id }
        case LOGOUT_USER:
            return initialState
        default:
            return state
    }
}