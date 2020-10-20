const express = require('express');
const router = express.Router();
const mongoose = require('../db/connection');
// Require the Cookbook MODEL
const Cookbook = require('../models/Cookbook');

// Route to list all cookbooks
router.get('/', async (req, res) => {
	res.json(await Cookbook.find({}));
});
// Route to get cookbook by title
router.get('/title/:title', async (req, res) => {
	const cookbook = await Cookbook.find({ title: req.params.title });
	res.json({ status: 200, data: cookbook });
});
// Route to get cookbook by year published
router.get('/year/:year', async (req, res) => {
	const cookbook = await Cookbook.find({ yearPublished: req.params.year });
	res.json({ status: 200, data: cookbook });
});
// Route to create a cookbook
router.post('/', async (req, res) => {
	res.json(await Cookbook.create(req.body));
});
// Route to update a cookbook
router.put('/:id', async (req, res) => {
	res.json(
		await Cookbook.findByIdAndUpdate(req.params.id, req.body, { new: true })
	);
});
// Route to delete the cookbook by title
router.delete('/:id', async (req, res) => {
	res.json(await Cookbook.findByIdAndRemove(req.params.id));
});
module.exports = router;
