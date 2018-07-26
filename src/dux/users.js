const initialState = {
  user:{},
  username:'',
  age:'',
  email:'',
  user_pic:'',
  address:'',
}

const USER_DATA = 'USER_DATA'
const USERNAME = 'USERNAME'
const AGE = 'AGE'
const EMAIL = 'EMAIL'
const USER_PIC = 'USER_PIC'
const ADDRESS = 'ADDRESS'

export function getUserData(user){
  return{
    type: USER_DATA,
    payload: user
  }
}

export default function reducer( state = initialState, action ){
  switch (action.type){
    case USER_DATA:
      return Object.assign({}, state, {user: action.payload})

    case USERNAME:
      return Object.assign({}, state, {username:action.payload})

    case AGE:
      return Object.assign({}, state, {age: action.payload})
    
    case EMAIL:
      return Object.assign({}, state, {email: action.payload})
    
    case USER_PIC:
      return Object.assign({}, state, {user_pic: action.payload})

    case ADDRESS:
      return Object.assign({}, state, {address: action.payload})

    default:
      return state
  }
}

export function updateUsername(username){
  return{
    type:USERNAME,
    payload: username
  }
}

export function updateAge(age){
  return{
    type:AGE,
    payload:age
  }
}

export function updateEmail(email){
  return{
    type:EMAIL,
    payload:email
  }
}

export function updateUser_Pic(user_pic){
  return{
    type:USER_PIC,
    payload: user_pic
  }
}

export function updateAddress(address){
  return{
    type: ADDRESS,
    payload: address
  }
}

