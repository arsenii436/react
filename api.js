import axios from 'axios'
import {whenMapDispatchToPropsIsFunction} from "react-redux/lib/connect/mapDispatchToProps";



function getdata(){
    let url = "http://data.fixer.io/api/latest?access_key=c93fb21a646bb3793900d98ce4aaaec4"
   return axios.get(url)
        .then((response)=>{
            return response
        })
}
export default getdata