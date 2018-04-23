import React from 'react';


import TodoCreateForm from './TodoCreateForm';
import TodoList from './TodoList';
import { Header } from './Header';
import TodoSearchForm from './TodoSearchForm';

export const Dashboard = () => {
    return (
        <div>
            <Header/>
            <TodoCreateForm />
            <TodoSearchForm />
            <TodoList />
          </div>
    );
}
