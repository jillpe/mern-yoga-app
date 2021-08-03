const Flow = require('../../models/flow');

module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteOne
};

async function index(req, res) {
    const flows = await Flow.find({});
    res.status(200).json(flows);
}

async function create(req, res) {
    const newFlow = await Flow.create(req.body);
    res.status(201).json(newFlow);
}

async function show(req, res) {
    console.log('Hitting Show Function')
    const flow = await Flow.findById(req.param.id);
    res.status(200).json(flow);
}

async function update(req, res) {
    const updatedFlow = await Flow.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        {
        new: true,
        }
    );
    res.status(200).json(updatedFlow);
}

async function deleteOne(req, res) {
    const deletedFlow = await Flow.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedFlow);
}
