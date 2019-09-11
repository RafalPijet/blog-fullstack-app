const express = require('express');
const router = express.Router();
const PostController = require('../controllers/post.controller');

router.route('/posts').get(PostController.getPosts);
router.route('/posts/:id').get(PostController.getPost);
router.route('/posts/range/:startA/:limit').get(PostController.getPostsByRange);
router.route('/posts').post(PostController.addPost);
router.route('/posts').put(PostController.updatePost);
router.route('/posts/votes/:id/:isUp').put(PostController.updateVotes);

module.exports = router;
