import React from 'react'
import {connect} from 'react-redux'
import Book from './Book'
import {Link} from 'react-router-dom'

const BookList = (props) =>{
    
    const books = props.books.map((item,index) => <Book item ={item} key ={index} /> )
    return(
        <div className='book-list'>
            <div className='book-list-header dflex'>
                <div className='book-list-title'>
                    Список книг
                </div>
                <Link  to = '/add-book'>
                    <div className='book-list-btn'>
                        <button className='btn btn-blue'>Добавить книгу</button>
                    </div>
                </Link>
            </div>
            <div className='book-list-books dflex'>
            {books}
            </div>
        </div>
    )
}
function mapStateToProps(state){
    return {
        books:state.books
    }
}

export default connect(mapStateToProps)(BookList)


