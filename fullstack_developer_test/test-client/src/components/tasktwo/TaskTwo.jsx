import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import dao from '@services/dao';

import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../globalStyles";
import { lightTheme, darkTheme } from "../themes";

// This is a functional component

const TaskTwo = ({ message }) => {

  const userApiRequest = url => {
  
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      dao.GET(`${url}`)
      .then((res) => {
        setData(res);
        setIsLoaded(true);
      })
      .catch(() => {
        setHasError(error);
      });
    }, [url]);
  
    return { error, isLoaded, data };
  };

  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const [User, setUser] = useState('');

  const handleChange = (e) => {
    setUser(e.target.value);
  }

  const { data, error, isLoaded } = userApiRequest(
    "http://127.0.0.1:8082/api/todos/" + `${User}`
  );

  if (error !== null) {
    return <div>Error: {error.message}</div>;
  }
  
  return (

    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>

      <div className="task">
        
        <button id="toggle" onClick={themeToggler}>Switch Theme</button>

        <h1>Task Two</h1>
        <div className="content">

            <input
                type="text"
                placeholder="Type in a user, e.g. Bret"
                value={User.trim()} 
                onChange={handleChange}
            />

            <h2>User Profile</h2>

            <h3 className="userRequested">
              {User.trim()}
            </h3>

            {error && (<span>| Server error...</span>)}
            {!isLoaded && (<span>| Loading...</span>)}
            {(data.code === 404 || (data.length < 1)) && (
              <span>User not found</span>
            )}

            {!data.code && data.length >= 1 && (
              <>
                <div>
                  {data.map((item) => (
                    <div key={item.id}>
                      <ul>
                        <li><strong>User ID:</strong> {item.id}</li>
                        <li><strong>Email:</strong> {item.email}</li>
                        <li><strong>Website:</strong> {item.website}</li>
                      </ul>
                      <h3>Todo List</h3>
                      <h4>Complete</h4>
                      {item.todos
                        .filter(t => t.completed)
                        .map((t) => (
                            <div key={t.id}>
                              {t.id}: {t.title}
                            </div>
                      ))}
                      <h4>Incomplete</h4>
                      {item.todos
                        .filter(t => !t.completed)
                        .map((t) => (
                            <div key={t.id}>
                              {t.id}: {t.title}
                            </div>
                      ))}
                      </div>
                  ))}
                </div>
              </>
            )}

          </div>
     </div>

      </>
    </ThemeProvider>

    );
};

TaskTwo.propTypes = {
  message: PropTypes.string,
};

TaskTwo.defaultProps = {
  message: 'Adthena',
};

export default TaskTwo;
