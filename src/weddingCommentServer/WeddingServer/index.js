const express = require('express');
const app = express();
const db = require('./db')
const api = require('./api');
const { Image1Comment, Image2Comment, Image3Comment } = require('./api')
app.use(express.urlencoded({extended: true}))
app.use(express.json());
const cors = require('cors');
// app.use(cors());


app.use(cors());

// Create a new comment for a specific image
app.post('/comments/:imageId', async (req, res) => {
    const { comment, commentator } = req.body;
    const { imageId } = req.params;

    try {
        let newComment;
        if (imageId === 'image1') {
            newComment = await Image1Comment.create({ comment, commentator });
        } else if (imageId === 'image2') {
            newComment = await Image2Comment.create({ comment, commentator });
        } else if (imageId === 'image3') {
            newComment = await Image3Comment.create({ comment, commentator });
        } else {
            return res.status(400).json({ error: 'Invalid image ID' });
        }

        res.json(newComment);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Retrieve comments for a specific image
app.get('/comments/:imageId', async (req, res) => {
    const { imageId } = req.params;

    try {
        let comments;
        if (imageId === 'image1') {
            comments = await Image1Comment.find();
        } else if (imageId === 'image2') {
            comments = await Image2Comment.find();
        } else if (imageId === 'image3') {
            comments = await Image3Comment.find();
        } else {
            return res.status(400).json({ error: 'Invalid image ID' });
        }

        res.json(comments);
    } catch (error) {
        res.status(500).send(error);
    }
});

// new routes with specific image id above 

// new routes below 

// Create a new comment
// app.post('/comments', async (req, res) => {
//     const { comment, commentator, imageId } = req.body;

//     try {
//         const newComment = await api.create({ comment, commentator, imageId });
//         res.json(newComment);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// Retrieve comments for a specific image
// app.get('/comments/:imageId', async (req, res) => {
//     const { imageId } = req.params;

//     try {
//         const comments = await api.findByImageId(imageId);
//         res.json(comments);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// new routes above 

// Crud application


// app.post('/', async(req, res) => {
//     const {comment, commentator} = req.body;

//     try {
//         const newPost = await api.create({comment, commentator});
//         res.json(newPost);
//     } catch (error) {
//         res.status(500).send(error)
//     }
// });

// app.get('/', async (req, res) => {
//     try {
//         const posts = await api.find();
//         res.json(posts);
//     } catch (error) {
//         res.status(500).send(error)
//     }
// });

// // new routes below 

// // Create a new comment
// app.post('/comments', async (req, res) => {
//     const { comment, commentator, imageId } = req.body;

//     try {
//         const newComment = await api.create({ comment, commentator, imageId });
//         res.json(newComment);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// // Retrieve comments for a specific image
// app.get('/comments/:imageId', async (req, res) => {
//     const { imageId } = req.params;

//     try {
//         const comments = await api.findByImageId(imageId);
//         res.json(comments);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// // new route above

// app.get('/:id', async(req, res) => {
//     const {id} = req.params;
//     try {
//         const post = await api.findById(id);
//         res.json(post);
//     } catch (error) {
//         res.status(500).send(error)

//     }
// })

// app.put("/:id", async(req, res) => {
//     const {id} = req.params;
//     const {comment, commentator} = req.body;
//     try {
//         const post = await api.findByIdAndUpdate(id, {comment, commentator});
//         res.json(post)

//     } catch (error) {
//         res.status(500).send(error)
//     }
// })

// app.delete("/:id", async(req, res) => {
//     const {id} = req.params;
//     const {comment, commentator} = req.body;
//     try {
//         const post = await api.findByIdAndDelete(id, {comment, commentator});
//         await post.remove();
//         res.json( "deleted the comment")

//     } catch (error) {
//         res.status(500).send(error)
//     }
// })

app.listen(3012, () => {
    console.log('Listening on 3012')
})


// require('dotenv').config()
// const {connect} = require('./db')
// const express = require('express')
// const commentsController = require('./controllers/comments')
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// const app = express()

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true}))


// app.get("/", (_, res) => {
//     res.send("What's good, API");
// });

// app.get("/comments", commentsController.all)
// app.post("/comments", commentsController.create)
// app.put("/comments/:id", commentsController.update)
// app.delete("/comments/:id", commentsController.delete)

// const startServer = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         app.listen(3012, () => {
//             console.log('API running, mane');
//         });
//     } catch (err) {
//         console.error(err);
//     }
// };

// startServer();


// const startServer = async () => {
//     await connect(process.env.MONGODB_URI);
    
//     app.listen(3012, () => {
//         console.log('API running, mane')
//     });
// };

// startServer();