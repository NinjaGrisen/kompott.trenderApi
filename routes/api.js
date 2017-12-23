const express = require('express');
const router = express.Router();
const googleTrends = require('google-trends-api');

router.get('/trend/:query', (req, res) => {
    let requestQuery = req.params.query;

    if(requestQuery.includes('+')) {
        requestQuery = requestQuery.replace('+', " ");
    }   

    googleTrends.interestOverTime({
        keyword: requestQuery, 
        startTime: new Date('2017-01-01'),
        endTime: new Date('2017-12-20'), 
        geo: 'SE'})
        .then((data) => {
            data = JSON.parse(data);
            if(!data.default.timelineData[0]) {
                res.send('err');
            } else {
                res.send(data.default.timelineData[0].value);
            }
        })
        .catch((err) => {
            console.log(err);
        })
});

router.get('/trends', (req, res) => {

    const requestQuery = req.query.array;

    if(requestQuery.length == 0) {
        res.send(JSON.parse('err'));
        retun;
    }
   
    googleTrends.interestOverTime({
        keyword: requestQuery, 
        startTime: new Date('2017-01-01'),
        endTime: new Date('2017-12-20'), 
        geo: 'SE'})
        .then((data) => {
            data = JSON.parse(data);
            if(!data.default.timelineData[0]) {
                res.send('err');
            } else {
                res.send(data.default.timelineData[0].value);
            }
        })
        .catch((err) => {
            console.log(err);
        })
});

module.exports = router;