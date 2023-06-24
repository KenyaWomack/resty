// import React, { useEffect, useReducer, useState } from 'react';
// import axios from 'axios';
// import './App.scss';

// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import Form from './Components/Form';
// import Results from './Components/Results';
// import History from './Components/History';

// // Define initial state
// const initialState = {
//   loading: false,
//   data: null,
//   history: [],
// };

// // Define reducer function
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_LOADING':
//       return { ...state, loading: action.payload };
//     case 'SET_RESULTS':
//       return { ...state, data: action.payload };
//     case 'ADD_TO_HISTORY':
//       return { ...state, history: [...state.history, action.payload] };
//     default:
//       return state;
//   }
// };

// function App() {
  
//   const [requestParams, setRequestParams] = useState({});
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const callApi = (requestParams) => {
    
//     console.log('<<<<<<request a call to requestParams>>>>>', requestParams)
//     setRequestParams(requestParams);
//   }

//   const handleHistoryClick = (index) => {
//     const selectedHistory = state.history[index];
//     setRequestParams({
//       method: selectedHistory.method,
//       url: selectedHistory.url,
//       json: selectedHistory.json,
//     });
//     dispatch({ type: 'SET_RESULTS', payload: selectedHistory.results });
//   };
  
//   useEffect(() => {
// async function fetchData(){
//   if (requestParams.method === 'GET'){
//     dispatch({type: 'SET_LOADING', payload: true})
//     await axios.get(requestParams.url).then((res) => {
//       dispatch({type: 'SET_RESULTS', payload:res})
//       dispatch({type: 'SET_LOADING', payload: false});
//             console.log('>>>>>', res)
//     })
//     .catch((err) => console.log(err))
//   }
//   if (requestParams.method === 'POST'){
//     await axios.post(requestParams.url, requestParams.json).then((res) => {
//       dispatch({type: 'SET_RESULTS', payload:res});  
//           console.log('>>>>>', res)
//     })
//     .catch((err) => console.log(err))
//   }
//   if (requestParams.method === 'PUT'){
//     await axios.put(requestParams.url).then((res) => {
//       dispatch({type: 'SET_RESULTS', payload:res});
//             console.log('>>>>>', res)
//     })
//     .catch((err) => console.log(err))
//   }
//   if (requestParams.method === 'DELETE'){
//     await axios.delete(requestParams.url).then((res) => {
//       dispatch({type: 'SET_RESULTS', payload:res});
//             console.log('>>>>>', res)
//     })

    

//     .catch((err) => console.log(err))
//   }
// }
//   fetchData()
//   }, [requestParams])


//   return (
//     <React.Fragment>
//       <Header />
//       <div data-testid='app-method'>Request Method: {requestParams.method}</div>
//       <div data-testid='app-url'>URL: {requestParams.url}</div>
//       <Form handleApiCall={callApi} />
//       <Results data={state.data} loading={state.loading} />
//       <History history={state.history} handleHistoryClick={callApi} />
//       <Footer />
//     </React.Fragment>
//   )
// }


// export default App;

import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import './App.scss';

 reducer-hook

// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// Why is this source of truth beneficial when spread across a global organization?
 main
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import History from './Components/History';

// Define initial state
const initialState = {
  loading: false,
  data: null,
  history: [],
};

// Define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_RESULTS':
      return { ...state, data: action.payload };
    case 'ADD_TO_HISTORY':
      return { ...state, history: [...state.history, action.payload] };
    default:
      return state;
  }
};

function App() {
  const [requestParams, setRequestParams] = useState({});
  const [state, dispatch] = useReducer(reducer, initialState);

 reducer-hook
  const callApi = async (requestParams) => {

  const [loading, setLoading] = useState(false);

  let callApi = (requestParams) => {
    // // mock output
    // const data = {
    //   count: 2,
    //   results: [
    //     { name: 'fake thing 1', url: 'http://fakethings.com/1' },
    //     { name: 'fake thing 2', url: 'http://fakethings.com/2' },
    //   ],
    // };
    setData(requestParams);
    console.log('<<<<<<request a call to requestParams>>>>>', requestParams)
 main
    setRequestParams(requestParams);
  };

  const handleHistoryClick = (index) => {
    const selectedHistory = state.history[index];
    setRequestParams({
      method: selectedHistory.method,
      url: selectedHistory.url,
      json: selectedHistory.json || {},
    });
    dispatch({ type: 'SET_RESULTS', payload: selectedHistory.results });
  };

  useEffect(() => {
 reducer-hook
    async function fetchData() {
      if (requestParams.method) {
        dispatch({ type: 'SET_LOADING', payload: true });
        try {
          let response;
          if (requestParams.method === 'GET') {
            response = await axios.get(requestParams.url);
          } else if (requestParams.method === 'POST') {
            response = await axios.post(requestParams.url, requestParams.json);
          } else if (requestParams.method === 'PUT') {
            response = await axios.put(requestParams.url);
          } else if (requestParams.method === 'DELETE') {
            response = await axios.delete(requestParams.url);
          }

async function fetchData(){
  if (requestParams.method === 'GET'){
    setLoading(true)
    await axios.get(requestParams.url).then((res) => {
      setData(res)
      setLoading(false)
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
 main

          const historyItem = {
            method: requestParams.method,
            url: requestParams.url,
            json: requestParams.json,
            results: response.data,
          };

          dispatch({ type: 'SET_RESULTS', payload: response.data });
          dispatch({ type: 'ADD_TO_HISTORY', payload: historyItem });
        } catch (error) {
          console.log(error);
        }

        dispatch({ type: 'SET_LOADING', payload: false });
      }
    }
    fetchData();
  }, [requestParams]);

  return (
    <React.Fragment>
      <Header />
      <div data-testid='app-method'>Request Method: {requestParams.method}</div>
      <div data-testid='app-url'>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
 reducer-hook
      <Results data={state.data} loading={state.loading} />
      <History history={state.history} handleHistoryClick={handleHistoryClick} />

      <Results data={data} loading={loading} />
 main
      <Footer />
    </React.Fragment>
  );
}

export default App;

