import { useEffect, useState } from 'react';
import './App.css';
import SignUpForm from './SignUpForm';
import axiosInstance from './axiosInstance';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Sign Up</h1>
      <SignUpForm />
    </div>
  );
}

export default App;
