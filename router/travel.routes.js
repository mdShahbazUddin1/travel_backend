const express = require("express");
const { TravelModel } = require("../models/travel.model");
const travelRouter = express.Router()



travelRouter.post("/post", async (req, res) => {
  try {
    const { name, email, destination, travelers, budget } = req.body;

    const newtravelModel = new TravelModel({
      name,
      email,
      destination,
      travelers,
      budget,
    });
    await newtravelModel.save();
    res.status(200).send(newtravelModel);
  } catch (error) {}
});
travelRouter.get("/retrieve", async (req, res) => {
  try {
    const allData = await TravelModel.find();
    res.status(200).json(allData);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving data", error });
  }
});

travelRouter.delete("/delete/:id", async (req, res) => {
  try {
    const deletedData = await TravelModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedData);
  } catch (error) {
    res.status(500).json({ message: "Error deleting data", error });
  }
});

travelRouter.get("/filter/:destination", async (req, res) => {
  try {
    const filteredData = await TravelModel.find({
      destination: req.params.destination,
    });
    res.status(200).json(filteredData);
  } catch (error) {
    res.status(500).json({ message: "Error filtering data", error });
  }
});

travelRouter.get("/sort/:sortBy", async (req, res) => {
  try {
    const sortBy = req.params.sortBy;
    const sortField = sortBy === "budget" ? "budget" : "createdAt";
    const sortedData = await TravelModel.find().sort({ [sortField]: 1 });
    res.status(200).json(sortedData);
  } catch (error) {
    res.status(500).json({ message: "Error sorting data", error });
  }
});

module.exports = {
    travelRouter
}