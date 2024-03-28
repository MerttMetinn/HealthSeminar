import { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../img/spot-lights-background-concept_23-2148661853.jpg';



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const formData = new FormData();
    formData.append('username', 'baum.cc');
    formData.append('pass', 'ChangeMe@1');
    formData.append('username', username);
    formData.append('pass', password);
    

    try {
      //const response = await axios.post('http://185.92.2.229:8281/login_ldap', formData, { //okul dışından bağlanırken burası aktif olacak
      const response = await axios.post('http://192.168.2.16:8181/login_ldap', formData, { // okuldan bağlanırken burası aktif olacak
        header: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
      if (username === 'baum.cc' && password === 'ChangeMe@1') {
        navigate('/home');
      }
      else if (username === 'admin' && password === 'admin') {
        navigate('/admin');
      }
       else {
        toast.error('Login failed!');
      }
    } catch (error) {
      console.error('Error:', error.message);
      toast.error('Login failed!');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="bg-transparent border shadow-md rounded-md px-12 pt-6 pb-8 mb-4">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-400 focus:placeholder-gray-300 focus:border-blue-500"
              placeholder="Username"
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-400 focus:placeholder-gray-300 focus:border-blue-500"
              placeholder="*****"
            />
          </div>
          <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-64 py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
        </div>
        <ToastContainer/>
      </div>
    </div>
    )};
  
export default Login;
