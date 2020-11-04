import axios from 'axios'


const auth = (email,password) => {
    return async dispatch => {
            try{
    alert(response.data.message)
                const response = await axios.post("http://ec2-3-84-0-5.compute-1.amazonaws.com:8000/login", {
                email,
                password 
            })  
            console.log(response.data)

        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export default auth;