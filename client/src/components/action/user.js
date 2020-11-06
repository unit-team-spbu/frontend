import * as axios from 'axios'

const registr = (email,password) => {
    debugger
    axios.post("http://ec2-3-91-232-201.compute-1.amazonaws.com:8000/register",{ email,
    password }).then(res => {debugger}, error => {debugger} )



    /*try{
    debugger
    const response = await axios.post("http://ec2-3-91-232-201.compute-1.amazonaws.com:8000/register", {
   
        email,
        password 
    
    })

    alert(response.data.message)
    } catch (e) {
        debugger
        alert(e.response.data.message)
    }*/
   
}

export default registr;