var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/recent', function (req, res, next) {
  res.render('post_list', { title: 'Recent Posts' });
});

module.exports = router;
