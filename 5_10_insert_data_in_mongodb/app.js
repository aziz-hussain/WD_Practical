const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/my_database_yo').then(()=> {
    console.log('database is connected')
}).catch(err => console.log(err));

const bookSchema = new mongoose.Schema({
    book_name: String,
    author_name : String,
});

const bookModel = new mongoose.model('bookModel', bookSchema);

async function insert_db(){
    newBook = new bookModel({
        book_name: 'Lord of the Rings',
        author_name: 'J.R.R. Tolkien'
    });

    try{
        savedBook = await newBook.save();
        console.log(`Book was saved. Book Object: \n ${savedBook}`);
    } catch(err) {
        console.log(err);
    } finally {
        mongoose.connection.close();
    }
}

insert_db();



