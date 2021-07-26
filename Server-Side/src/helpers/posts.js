/* New Post Endpoint */
module.exports.new = (req, res, next) => {
  res.status(200).json({error : false , message : "success!" , data : []});
};