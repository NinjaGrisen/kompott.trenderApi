const express = require('express');
const router = express.Router();
const googleTrends = require('google-trends-api');

router.get('/trend/:query', (req, res) => {
    googleTrends.interestOverTime({
        keyword: req.params.query, 
        startTime: new Date('2017-01-01'),
        endTime: new Date('2017-12-20'), 
        geo: 'SE'})
        .then((data) => {
            data = JSON.parse(data);

            res.send(data.default.timelineData[0].value);
        })
        .catch((err) => {
            console.log(err);
        })
});

module.exports = router;