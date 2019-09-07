const Post = require('../models/post.model');
const uuid = require('uuid');

exports.getPost = async (req, res) => {

    try {
        res.status(200).json(await Post.findOne({id: req.params.id}))
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getPosts = async (req, res) => {

    try {
        res.status(200).json(await Post.find());
    } catch (e) {
        res.status(500).json(err);
    }
};

exports.addPost = async (req, res) => {

    try {
        const {title, author, content} = req.body;
        let newPost = new Post();   /*todo*/
        newPost.title = title;      //or let newPost = new Post(req.body);
        newPost.author = author;    // newPost.id = uuid();
        newPost.content = content;
        newPost.id = uuid();

        let postSaved = await newPost.save();
        res.status(200).json(postSaved);

    } catch (err) {
        res.status(500).json(err);
    }
};

exports.updatePost = async (req, res) => {

    try {
        const {id, title, author, content} = req.body;
        let post = await Post.findOne({id});
        post.title = title;
        post.author = author;
        post.content = content;
        let updated = await post.save();
        res.status(200).json(updated)

    } catch (err) {
        res.status(500).json(err)
    }
};

exports.getPostsByRange = async (req, res) => {
    let {startA, limit} = req.params;
    startA = parseInt(startA);
    limit = parseInt(limit);

    try {
        let posts = await Post.find().skip(startA).limit(limit);
        let amount = await Post.countDocuments();
        res.status(200).json({
            posts,
            amount
        });
    } catch (err) {
        res.status(500).json(err);
    }
};
