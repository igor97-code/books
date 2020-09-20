import React from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

const Book = ({ item, delbook }) => {
   
    const wrapperDelBook = ()=>{
        delbook(item.id)
    }
    return (
        <div className='book'>
            <img src={item.img} alt="book" />
            <div className='book-description'>
                <div className='book-author'>
                    <div>Автор:</div> <div>{item.author}</div>
                </div>

                <div className='book-name'>
                    <div> Название:</div>
                    <div>{item.name}</div>
                </div>
                <div className='book-year'>
                    <div>Год издания:</div>
                    <div> {item.year}</div>
                </div>
            </div>
            <div className='book-btn dflex'>
                <Link to={{ 'pathname': `/book/${item.id}` }}>
                    <button className='btn btn-blue'>Редактировать</button>
                </Link>
                <button className='btn btn-red' onClick={wrapperDelBook}>Удалить</button>
            </div>
        </div>
    )
}
const mapDispatchToProps = (dispatch)=>{
    return {
        delbook: (id)=>{
            dispatch({
                type:'delBook',
                id
            });
        }
    }
} 
export default connect(null,mapDispatchToProps)(Book)