const Data = require("../models/Data")

exports.getAllData = async () => {
    return await Data.find()
}

exports.getDataByTimestampSandwich = async(start_time, end_time) => {
    const starttime = start_time
    const endtime = end_time

    return await Data.find({$timestamp: {$gte: starttime, $lte: endtime}})
}

exports.getDataById = async (id) => {
    return await Data.findById(id);
};

exports.createData = async(data) => {
    return await Data.create(data)
}

exports.updateDataById = async (id, newData) => {
    return await Data.findByIdAndUpdate(id, newData, { new: true });
};

exports.deleteDataById = async (id) => {
    return await Data.findByIdAndRemove(id);
};
