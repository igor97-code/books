let initialBooks = [
    {
        author:'Н.В.Гоголь',
        name: 'Тарас Бульба',
        year: '1835',
        img:'/img/TarasBulba.png',
        id:'1'
    },
    {
        author:'Л.Н.Толстой',
        name: 'Война и мир',
        year: '1865',
        img:'/img/VoinaiMir.png',
        id:'2'
    },
    {
        author:'Л.Н.Толстой',
        name: 'Анна Каренина',
        year: '1875',
        img:'/img/AnnaKarenina.png',
        id:'3'
    },
    {
        author:'Ф.М.Достоевский',
        name: 'Преступление и наказание',
        year: '1866',
        img:'/img/PrestuplenieiNakazanie.png',
        id:'4'
    }
]

function books(state = initialBooks,action){
    switch(action.type){
        case 'changeInfoBook':
            let copyBook =[
                ...state
            ]
            copyBook.forEach( (elem,index) =>{
               if(elem.id === action.newInfo.id){
                 copyBook[index] = action.newInfo
               }
            })
            return copyBook
        case 'addBook':
            let info = action.info;
            info.id = toString(state.length);
            let newArrayBooks = [
                ...state,
                info
            ]
            return newArrayBooks
        case 'delBook':
            let withoutDelBook = [
                ...state
            ].filter((item)=>{
                return item.id !== action.id
            })
            return withoutDelBook 
        default:
            return state
    }
    return state
} 

export default books;