import { useState } from 'react';
import './Form.scss';
function Form(props) {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('');
  const [json, setJson] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
      json: json,
    };
    props.handleApiCall(formData);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span >URL: </span>
          <input 
            data-testid="form-input"
            name="url"
            type="text"
            onChange={(e) => setUrl(e.target.value)}
          />
          <button data-testid='form-button' type="submit">GO!</button>
        </label>
        <label className="methods">
          <span
            data-testid="form-get"
            id="get"
            onClick={() => setMethod('GET')}
            style={{ backgroundColor: method === 'GET' ? 'green' : 'lightgrey' }}
          >
            GET
          </span>
          <span
            data-testid="form-post"
            id="post"
            onClick={() => setMethod('POST')}
            style={{ backgroundColor: method === 'POST' ? 'green' : 'lightgrey' }}
          >
            POST
          </span>
          <span
            data-testid="form-put"
            id="put"
            onClick={() => setMethod('PUT')}
            style={{ backgroundColor: method === 'PUT' ? 'green' : 'lightgrey' }}
          >
            PUT
          </span>
          <span
            data-testid="form-delete"
            id="delete"
            onClick={() => setMethod('DELETE')}
            style={{ backgroundColor: method === 'DELETE' ? 'red' : 'lightgrey' }}
          >
            DELETE
          </span>
        </label>
        {(method === 'POST' || method === 'PUT') && (
          <textarea onChange={(e) => setJson(e.target.value)} />
        )}
      </form>
    </>
  );
}
export default Form;
