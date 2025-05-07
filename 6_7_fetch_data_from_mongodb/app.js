const mongoose = require('mongoose');
const express = require('express');
app = express();


mongoose.connect('mongodb://localhost:27017/my_database_yo').then(()=> console.log('database is connected')).catch(err => console.log(err));

const bookSchema = new mongoose.Schema({
    book_name: String,
    author_name: String,
});


const bookModel = new mongoose.model('bookModel', bookSchema);


app.get('/fetch-books', async (req, res) => {
    try{
        const fetched_books = await bookModel.find();
        const first_book = await bookModel.findOne();
        res.send({
            all_books: fetched_books,
            first_book: first_book,
        });
        
    } catch (err){
        res.send('err fetching books')
    }
});


app.listen(9000, ()=>{
    console.log('server is running!');
});