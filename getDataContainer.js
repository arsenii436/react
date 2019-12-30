import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import GetData from "../components/getdata"
import getdata from "../api/api"
import getDataObject from "../reducers/reducer"

class GetDataContaine extends React.Component {
    componentDidMount() {
       let data = getdata()
           .then((data)=>{console.log(data.data)})

    }

    render() {

        return <>
            <GetData props={this.props}/>
        </>
    }

}
let mapStateToProps = (state) => {
    return {
        pageapp: state.pageapp
    }
}
/*let mapDispatchToProps = (dispatch) => {
    return {
        thunk: getDataObject,
        sendMessage: (newMessageBody) => {
            dispatch({type:"SET_VISIBILITY_FILTER", text:newMessageBody});
        }
    }
}*/

const test = () => {
    return (dispatch)=>{dispatch({type:"SET_VISIBILITY_FILTER"});}
    
}

let GetDataContainer = connect(mapStateToProps, {getDataObject, test})(GetDataContaine)

export default GetDataContainer