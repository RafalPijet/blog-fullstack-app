const Post = require('../models/post.model');

exports.getPosts = async (req, res) => {
    
    try {
        res.status(200).json(await Post.find());
    } catch (e) {
        res.status(500).json(err);
    }
};
