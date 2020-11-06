import * as axios from 'axios'


const auth = (login,password) => {
    debugger
    return async dispatch => {
            try{
                const response = await axios.post("http://ec2-3-91-232-201.compute-1.amazonaws.com:8000/login", {
                login,
                password 
            })  
            console.log(response.data)

        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export default auth;