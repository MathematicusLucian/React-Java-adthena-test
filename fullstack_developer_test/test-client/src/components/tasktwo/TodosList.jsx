import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// This is a functional component

const TodosList = ({ todos }) => {
  
  return (
    <div className="todoList">
        {todos
            .map((t) => (
                <div className="todoItem" key={t.id}>
                    {t.id}: {t.title}
                </div>
            ))              

        }
    </div>)
};

TodosList.propTypes = {
    todos: PropTypes.any,
};

TodosList.defaultProps = {
    message: 'Adthena',
};

export default TodosList;
