const POST = require('../modules/posts');

/* post Endpoint */
module.exports.post = async (req, res, next) => {
    console.log(req.query.id);
    await POST.findOne({where: {id: req.query.id}}).then((post) => {
        res.status(200).render('post' , {post: post});
    }).catch((err) => {
        next(err);
    })
};

/* new post page Endpoint */
module.exports.newBlog = async (req, res, next) => {
 res.status(200).render('new');
};


/* home Endpoint */
module.exports.home = async (req, res, next) => {
await POST.findAll().then((data) => {
        res.status(200).render('index', {posts: data})
    }).catch((err) => {
        next(err);
    })
};