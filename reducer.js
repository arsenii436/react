import getdata from "../api/api";

/*export const getDataObject = () => {
    return async (dispatch) => {
        const response = await getdata()
        const datas = response.data.date;
        dispatch({type: "DATE_FROM_SERVER", data:datas})
          /*  .then((responce)=>{
                dispatch({type: "DATE_FROM_SERVER", data:responce.data.date})
                console.log(responce.data)
            })
    }
}*/
export const getDataObject = ()=>{
    return (dispatch) => {
    const response = getdata().then((response)=>{
        const datas = response.data.date;                       /* eror in the thunk  */
    dispatch({type: "DATE_FROM_SERVdrggER", data:datas})
    console.log(response.data)
    })
    
}}
//const DATE_FROM_SERVER = "DATE_FROM_SERVER"
//export const actionCreatorDateChange = (date) => ({type: DATE_FROM_SERVER, date})
var initialState = [
    {
        weather:null,
        date:null
    }
];

/*
export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}
 */

const reducer = function (state = initialState, action) {
switch (action.type) {
    case "DATE_FROM_SERVdrggER":
        return{...state, date: action.data}
    case "SET_VISIBILITY_FILTER":
        return{...state, date:"eodigy"}
    default:
        return state
}

};

/*export const getDataObject = () => async (dispatch) => {
    getdata()
        .then((responce)=>{
            dispatch(actionCreatorDateChange(responce.data))
            console.log(responce.data)
        })
}*/



/*switch (action.type) {
            case SET_VISIBILITY_FILTER:
                return Object.assign({}, state, {
                    visibilityFilter: action.filter
                })
            case ADD_TODO:
                return Object.assign({}, state, {
                    todos: [
                        ...state.todos,
                        {
                            text: action.text,
                            completed: false
                        }
                    ]
                })
            default:
                return state
        }*/

export default reducer