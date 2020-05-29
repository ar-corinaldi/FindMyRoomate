var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // No se debería manejar esta ruta renderizando una plantilla.
  res.render('index', { title: 'Express' });
});

module.exports = router;
