import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [list, setList] = useState(["titolo 1", "titolo 2", "titolo 3", "titolo 4"]);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      setList([...list, title]);
    }
  };

  const handleDelete = (indexToDelete) => {
    setList(list.filter((title, index) => index !== indexToDelete));
  };

  return (
    <>
      <div className="container">
        <h1>To Do List</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" className='m-3 btn btn-primary'>invia</button>
        </form>
        <div>
          <ul className="list-group">
            {list.map((title, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {title}
                <button
                  className="badge bg-primary rounded-pill"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;

