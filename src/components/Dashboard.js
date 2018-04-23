import React from 'react';


import TodoCreateForm from './TodoCreateForm';
import TodoList from './TodoList';
import { Header } from './Header';

export const Dashboard = () => {
    return (
        <div>
            <Header/>
            <TodoCreateForm />
            <TodoList />
          </div>
    );
}
