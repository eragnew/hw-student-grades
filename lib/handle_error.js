module.exports = function(err, res) {
  res.status(500).json({msg: 'internal server error'});
};
