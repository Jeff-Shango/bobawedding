const Comments = require('../models/comments')

const normalizeComment = doc => {
    const comment = {...doc}
    comment.id = doc._id;
    delete comment._id
    return comment;
}

exports.getComments = async (req, res, next) => {
    const { imageId } = req.params;
    try {
        // retrieving based on image
        const comments = await ImageComment.find({ imageId });
        res.json(comments);
    } catch (err) {
        next(err);
    }
}

exports.addComment = async (req, res, next) => {
    const { imageId } = req.params;
    const { text, commentator } = req.body;
    try {
        // creating and saving a new comment associated with the specified pic
        const newComment = new ImageComment({ imageId, text, commentator })
        const doc = await newComment.save();
        res.json(doc);
    } catch (err) {
        next(err)
    }
}

exports.all = async (req, res, next) => {
    try {
        const docs = await Comments.all();
        const response = docs.map(doc => normalizeComment(doc))
        res.send(response);
    } catch (err) {
        next(err)
    }
}

exports.create = async (req, res, next) => {
    try {
        const comment = {
            body: req.body.text,
            parentId: req.body.parentId || null,
            userId: "1",
        };
        const doc = await Comments.create(comment)
        const response = normalizeComment(doc)
        res.send(response);
    } catch (err) {
        next(err)
    }
}

exports.update = async (req, res, next) => {
    try {
        const doc = await Comments.update(req.params.id, {body: req.body.text});
        const response = normalizeComment(doc)
        res.send(response);
    } catch (err) {
        next(err)
    }
}

exports.delete = async (req, res, next) => {
    try {
        await Comments.delete(req.params.id)
        res.sendStatus(200);
    } catch (err) {
        next(err)
    }
}
