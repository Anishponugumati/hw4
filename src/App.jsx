import { useEffect, useState } from 'react'
import './App.css'
const apiKey = '1ab9b1b47eaf5bb8e1912d5a0562462a';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Oklahoma&appid=${apiKey}`);
      const data = await res.json();

      setData(data);
    }

    fetchData();
  }, []);

  return (
    <div className="card">
      <p>Today's Date is: { new Date().toDateString() }</p>
      <p>Your City is: {data?.name}</p>
      <p>Today's recorded temperature is: {data?.main?.temp} K</p>
    </div>
  )
}

export default App
