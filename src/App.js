import React from 'react';
import './scss/main.scss'
import Layout from './hoc/Layout'
import BookList from './components/BookList'
import editingBooks from './components/editBook'
import addBook from './components/add-book'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Layout>
        <Route exact path ='/' component={BookList}/>
        <Route path ='/add-book' component={addBook}/>
        <Route path ='/book/:id' component ={editingBooks} />
      </Layout>
    </div>
  );
}

export default App;
