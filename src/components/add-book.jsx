import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const AddBook = (props) =>{
    const [changed, setChanged] = React.useState(false);
    let inputAuthor = React.useRef();
    let inputName = React.useRef();
    let inputYear = React.useRef();
    let inputImage = React.useRef();
    let statusChanged = React.useRef();
    
    React.useEffect(()=>{
        statusChanged.current.addEventListener("transitionend",()=>{
             props.history.push('/');
        })
     })
     
    const wrapperAddBook = ()=>{
        props.addBook({
            author: inputAuthor.current.value,
            name: inputName.current.value,
            year: inputYear.current.value,
            img: inputImage.current.value,
        })
        setChanged(true);
    }
    return(
        <div className="edit-book">
            <div className={`status-change ${changed ? 'show' : ''}`} ref ={statusChanged}>
                Книга успешно добавлена!
            </div>
            <div className='edit-book-title'>
               Добавление Книги
            </div>
            <div className='edit-book-info'>
                <div className='image'>
                    <span>Путь до картинка</span> <input ref ={inputImage} type="text"  />
                </div>
                <div className='author'>
                    <span>Автор</span> <input  ref ={inputAuthor} type="text" />
                </div>
                <div className='name'>
                    <span>Название</span> <input  ref ={inputName} type="text" />
                </div>
                <div className='yaer'>
                    <span>Год издания</span> <input  ref ={inputYear} type="text" />
                </div>
            </div>
            <div className='edit-book-btn'>
            <Link to = '/'>
                <button className='btn-red cansel'>Отменить</button>
             </Link>
                <button className='btn-blue confirm' onClick ={ wrapperAddBook}>Добавить</button>
            </div>
        </div>
    )
}


const mapDispatchToProps = (dispatch)=>{
    return {
        addBook: (info)=>{
            dispatch({
                type: 'addBook',
                info
            });
        }
    }
}

export default connect(null,mapDispatchToProps)(AddBook)
