import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';


// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});

  let callApi = (requestParams) => {
    // mock output
    const data = {
      count: 2,
      results: [
        { name: 'fake thing 1', url: 'http://fakethings.com/1' },
        { name: 'fake thing 2', url: 'http://fakethings.com/2' },
      ],
    };
    setData(data);
    setRequestParams(requestParams);
  }
  
  useEffect(() => {
async function fetchData(){
  if (requestParams.method === 'GET'){
    await axios.get(requestParams.url).then((res) => {
      setData(res)
      console.log('>>>>>', res)
    })
    .catch((err) => console.log(err))
  }
  if (requestParams.method === 'POST'){
    await axios.post(requestParams.url, requestParams.json).then((res) => {
      setData(res)
      console.log('>>>>>', res)
    })
    .catch((err) => console.log(err))
  }
  if (requestParams.method === 'PUT'){
    await axios.put(requestParams.url).then((res) => {
      setData(res)
      console.log('>>>>>', res)
    })
    .catch((err) => console.log(err))
  }
  if (requestParams.method === 'DELETE'){
    await axios.delete(requestParams.url).then((res) => {
      setData(res)
      console.log('>>>>>', res)
    })
    .catch((err) => console.log(err))
  }
}
  fetchData()
  }, [requestParams])


  return (
    <React.Fragment>
      <Header />
      <div data-testid='app-div-method'>Request Method: {requestParams.method}</div>
      <div data-testid='app-div-url'>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  )
}

export default App;
