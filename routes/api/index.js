const router = require('express').Router();
const categoryRoutes = require('./category-routes');

router.use('/catergory', categoryRoutes);

module.exports = router;