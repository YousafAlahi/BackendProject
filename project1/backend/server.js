
import express from 'express';

const app = express();
const port = process.env.PORT || 3000 ;

// app.get('/', (req, res) => {
//     res.send('Hello')
// });

// get list of 5 jokes ;;;;;

app.get('/api/jokes', (req, res) => {
    const jokes = [
        { id: 1,
        title : "One Joke",
        content : "This is a One Joke"
        },
        { id: 2,
        title : "Two Joke",
        content : "This is a Second Joke"
        },
        { id: 3,
        title : "Third Joke",
        content : "This is a Third Joke"
        },
        { id: 4,
        title : "fourth Joke",
        content : "This is a fourth Joke"
        },
        { id: 5,
        title : "fiveth Joke",
        content : "This is a fivth Joke"
        },
    ];
    res.send(jokes);
})


app.listen(port, () => {
    console.log(`server is running on port ${port}`);

})