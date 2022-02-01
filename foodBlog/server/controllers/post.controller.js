const Post = require("../models/post.model");

const createPost = (req, res) => {
    // Create a new Post
    console.log(req.body);
    Post.create(req.body)
        .then((newPost) => {
            console.log(newPost);
            res.json(newPost);
        })
        .catch((err) => {
            console.log(`Error with createPost function: ${err}`);
            res.status(400).json(err);
        });
};

const getAllPosts = (req, res) => {
    // Get all posts
    Post.find()
        .then((allPosts) => {
            console.log(allPosts);
            res.json(allPosts);
        })
        .catch((err) => {
            console.log(`Error with getAllPosts function: ${err}`);
            res.status(400).json(err);
        });
};

const getOnePost = (req, res) => {
    // Get a post
    console.log(req.params.id);
    Post.findById(req.params.id)
        .then((singlePost) => {
            console.log(singlePost);
            res.json(singlePost);
        })
        .catch((err) => {
            console.log(`Error with getOnePost function: ${err}`);
            res.status(400).json(err);
        });
};

const updatePost = (req, res) => {
    // Update a post
    // use id in url to query document want to update
    // second arg is the info from that queried doc to change
    console.log(req.params.id);
    console.log(req.body);
    Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedPost) => {
            console.log(updatedPost);
            res.json(updatedPost);
        })
        .catch((err) => {
            console.log(`Error with updatePost function: ${err}`);
            res.status(400).json(err);
        });
};

const deletePost = (req, res) => {
    // Delete a post
    console.log(req.params.id);
    Post.findByIdAndDelete(req.params.id)
        .then((deletedPost) => {
            console.log(deletedPost);
            res.json(deletedPost);
        })
        .catch((err) => {
            console.log(`Error with deletePost function: ${err}`);
            res.status(400).json(err);
        });
};

module.exports = {
    createPost,
    getAllPosts,
    getOnePost,
    updatePost,
    deletePost,
};