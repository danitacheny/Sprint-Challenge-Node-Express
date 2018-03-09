const express = require('express');
const router = express.Router();

const { getValues } = require('../models/model.js');

router.get('/compare', (req, res) => {
	getValues()
		.then(values => {
			const currentValue = values[0].bpi.USD.rate_float;
			const ydayValue = Object.values(values[1].bpi)[0];
			res.send(String( currentValue - ydayValue ));
		})
})

module.exports = router;
