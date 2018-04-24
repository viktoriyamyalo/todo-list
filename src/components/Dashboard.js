import React from 'react';


import TodoCreateForm from './TodoCreateForm';
import TodoList from './TodoList';
import Header from './Header';
import TodoSearchForm from './TodoSearchForm';

export const Dashboard = () => {
    return (
        <div>
            <Header/>
            <div style={styles.containerStyle}>
                <TodoCreateForm />
                <TodoSearchForm />
            </div>
            <TodoList />
          </div>
    );
}

const styles = {
    containerStyle: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    }
}
