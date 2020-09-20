import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

const EditBook = (props) => {
    const [changed, setChanged] = React.useState(false);
    let id = props.match.params.id;
    let book = props.books.find(elem => elem.id === id)
    let inputImage = React.useRef();
    let inputAuthor = React.useRef();
    let inputName = React.useRef();
    let inputYear = React.useRef();
    let statusChanged = React.useRef();

    React.useEffect(()=>{
       statusChanged.current.addEventListener("transitionend",()=>{
            props.history.push('/');
       })
    })

    function changeInfo(){
        props.changeInfoBook({
            author: inputAuthor.current.value,
            name: inputName.current.value,
            year: inputYear.current.value,
            img: inputImage.current.value,
            id: book.id
        })
        setChanged(true);
    }
    return (
        <div className="edit-book">
            <div className={`status-change ${changed ? 'show' : ''}`} ref ={statusChanged}>
                Информация успешно изменена!
            </div>
            <div className='edit-book-title'>
                Редактирование книги
            </div>
            <div className='edit-book-info'>
                <div className='image'>
                    <span>Картинка</span> <input ref ={inputImage} type="text" defaultValue={book.img} />
                </div>
                <div className='author'>
                    <span>Автор</span> <input  ref ={inputAuthor} type="text" defaultValue={book.author} />
                </div>
                <div className='name'>
                    <span>Название</span> <input  ref ={inputName} type="text" defaultValue={book.name} />
                </div>
                <div className='yaer'>
                    <span>Год издания</span> <input  ref ={inputYear} type="text" defaultValue={book.year} />
                </div>
            </div>
            <div className='edit-book-btn'>
            <Link to = '/'>
                <button className='btn-red cansel'>Отменить</button>
             </Link>
                <button className='btn btn-blue confirm' onClick ={ changeInfo}>Подтвердить</button>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        books: state.books
    }
}

function mapDispatchToProps(dispatch){
    return {
        changeInfoBook: (info)=> dispatch({
            type:'changeInfoBook',
            newInfo:info
        })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditBook)