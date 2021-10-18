const pool = require('./../config/db');
const Post = require('./../models/Post')

exports.getAllPosts = async (req, res, next) => {
    try {
        const [posts,_] = await Post.findAll();
        res.status(200).json({ posts });

    } catch (err) {
        console.log(err);
        next(error)
    }
};

exports.createNewPost = async (req, res, next) => {
    try {
        let post = new Post(req.body.id, req.body.name, req.body.zone);
        post = await post.save();
        res.status(200).json({ message: "post created"})
    } catch (err) {
        console.log(err);
        next(error)
    }

};

exports.getPostbyId = async (req, res, next) => {
    try {
        const [post,_] = await Post.findByID(req.params.id);
        res.status(200).json({ post :post[0] });

    } catch (err) {
        console.log(err);
        next(error)
    }
};