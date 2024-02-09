/*
 * Mobile Application Development - CPRG303B
 * Lab Assignment 3: Props and State Management
 * Name: Cathy Sun
 * Date: 2024 Feb 09
 */

import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {

  const [tasks, setTasks] = React.useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);
  
  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm />      
    </SafeAreaView>
  );
}

export default App;
