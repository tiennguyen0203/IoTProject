const dataService = require('../service/data_service');

exports.getAllData = async (req, res) => {
    try {
        const allData = await dataService.getAllData();
        res.json(allData);
    } catch (error) {
        console.error('Error fetching all data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getDataByTimestampSandwich = async (req, res) => {
    try {
        const { start_time, end_time } = req.body;
        const dataInRange = await dataService.getDataByTimestampSandwich(start_time, end_time);
        res.json(dataInRange);
    } catch (error) {
        console.error('Error fetching data by timestamp:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getDataById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await dataService.getDataById(id);
        if (!data) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.json(data);
    } catch (error) {
        console.error('Error fetching data by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.createData = async (req, res) => {
    try {
        const newData = req.body;
        const createdData = await dataService.createData(newData);
        res.status(201).json(createdData);
    } catch (error) {
        console.error('Error creating data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.updateDataById = async (req, res) => {
    try {
        const { id } = req.params;
        const newData = req.body;
        const updatedData = await dataService.updateDataById(id, newData);
        if (!updatedData) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.json(updatedData);
    } catch (error) {
        console.error('Error updating data by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.deleteDataById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedData = await dataService.deleteDataById(id);
        if (!deletedData) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.json({ message: 'Data deleted successfully' });
    } catch (error) {
        console.error('Error deleting data by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
