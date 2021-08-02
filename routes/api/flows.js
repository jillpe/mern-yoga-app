const express = require('express');
const router = express.Router();
const flowsCtrl = require('../../controllers/api/flows');

router.get('/', flowsCtrl.index);
router.post('/', flowsCtrl.create);

module.exports = router;