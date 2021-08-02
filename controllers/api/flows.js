const Flow = require('../../models/flow');

module.exports = {
    index
};

async function index(req, res) {
    const flows = await Flow.find({});
    res.status(200).json(flows);
}

