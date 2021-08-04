const express = require('express');
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const router = express.Router();
const flowsCtrl = require('../../controllers/api/flows');

router.get('/', flowsCtrl.index);
router.post('/', ensureLoggedIn, flowsCtrl.create);
router.get('/:id', ensureLoggedIn, flowsCtrl.show);
router.put('/:id', ensureLoggedIn, flowsCtrl.update);
router.delete('/:id', ensureLoggedIn, flowsCtrl.delete);

module.exports = router;