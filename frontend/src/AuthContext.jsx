import React, { createContext, useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const BASE_URL = import.meta.env.VITE_API_URL;

    const navigate=useNavigate();
    const [details, setDetails] = useState({
        username: '',
        email: '',
        password: ''
    })

    const [user,setUser]=useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);


    const handleSignup = async () => {
        try {
            const response = await axios.post(`${BASE_URL}/signup`, details);
            if(response.status===200){
                const userData=response.data;
                setUser(userData);
                localStorage.setItem('user', JSON.stringify(userData));
                navigate('/intro');
                
            }
            
        } catch (error) {
            if(error.response.status===400){
                alert('User has been already created')
            }
            else if (error.response.status===401){
                alert('Please Enter all the credentials');

            }
            else{
                alert('An error occurred during signup');
            }
        }
    }

    const handleSignIn=async()=>{
        try{
            const response= await axios.post(`${BASE_URL}/login`,details);
            if(response.status===200){
                const userData=response.data;
                setUser(userData);
                localStorage.setItem('user', JSON.stringify(userData));
                navigate('/intro')
                
                
            }
            
        }catch(error){
            if(error.response.status===402){
                alert('Please Sign UP');
            }
            else if(error.response.status===401){
                alert('Incorrect Password')
            }
            else{
                alert('Please enter all the credentials');
            }
        }
    }

    const logout=()=>{
      localStorage.setItem('user',null);
      navigate('/')
    }

    return (
        <AuthContext.Provider value={{user, details, setDetails, handleSignup,handleSignIn,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };

