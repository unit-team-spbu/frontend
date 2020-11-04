import axios from 'axios'


const registr = async(email,password) => {
    try{
    const response = await axios.post("http://ec2-3-84-0-5.compute-1.amazonaws.com:8000/register", {
        email,
        password 
    })
    alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }
   
}

export default registr;