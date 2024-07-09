const tf = require("@tensorflow/tfjs-node");

function loadModel() {
    return tf.loadGraphModel(process.env.MODEL_URL);
}

module.exports = loadModel;
