const Flow = require('../../models/flow');

module.exports = {
    index,
    create
};

async function index(req, res) {
    const flows = await Flow.find({});
    res.status(200).json(flows);
}

async function create(req, res) {
    const newFlow = await Flow.create(req.body);
    res.status(201).json(newFlow);
}
