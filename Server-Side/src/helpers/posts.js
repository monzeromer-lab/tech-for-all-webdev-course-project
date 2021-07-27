const POST = require('../modules/posts');

/* New Post Endpoint */
module.exports.newPost = (req, res, next) => {
  POST.create({title: req.body.title, body: req.body.body, image: req.file.path}).then((state) => {
      POST.findAll().then((data) => {
          res.status(200).render('index', {posts: data})
      }).catch((err) => {
          next(err);
      })
  }).catch((err) => {
      next(err);
  })
};

/* delete post Endpoint */

module.exports.deletePost = (req, res, next) => {
    POST.destroy({where: {id: req.params.id}}).then((state) => {
        POST.findAll().then((data) => {
            res.status(200).render('index', {posts: data})
        }).catch((err) => {
            next(err);
        })
    }).catch((err) => {
        next(err);
    });
};