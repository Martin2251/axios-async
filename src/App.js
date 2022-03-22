import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const getData = async() => {
      const data = await axios.get("https://jsonplaceholder.typicode.com/todos/1"
      );
      setFetchedData(data);
    };
    getData();
  }, []);

  console.log("data: ", fetchedData);


  return (
    <div className="App">
      <h1>Test</h1>
   {fetchedData.data && <h2>{fetchedData.data.title}</h2>}

    </div>
  );
}

export default App;
