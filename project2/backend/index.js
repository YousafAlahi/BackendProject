import express from 'express';


const app = express();

const port = process.env.PROT || 3000 ;



app.get('/', (req, res) => {
    res.send('hello')
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id : 1,
            title: "One Joke",
            content: "This is a One Jokes"
        },
       {
            id : 2,
            title: "Two Joke",
            content: "This is a Two Jokes"
        },
       {
            id : 3,
            title: "Three Joke",
            content: "This is a Three Jokes"
        },
       {
            id : 4,
            title: "Four Joke",
            content: "This is a Four Jokes"
        },
       {
            id : 5,
            title: "Five Joke",
            content: "This is a Five Jokes"
        },
       {
            id : 6,
            title: "Six Joke",
            content: "This is a Six Jokes"
        },
       
    ]
    res.send(jokes)
});


app.listen(port, console.log(`server is running on port ${port}`));