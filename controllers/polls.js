const express = require('express');
var router = express.Router();
var pollModel = require('../models/polls');

router.route('/')
    .get((req, res) => {
        
        var pollObject = new pollModel();
        //call model function to get all polls
        pollObject.getAllPolls((err, pollResponse) => {
            if (err) {
                return res.json({"responseCode":1,"responseDesc":pollResponse});
            }
            res.json({"responseCode":0,"responseDesc":"Success","data":pollResponse});
        });

    })
    .post((req, res) => {

        var pollObject = new pollModel();
        // --- need to validate payload here ---
        pollObject.addNewPolls(req.body, (err, pollResponse) => {
            if (err) {
                return res.json({"responseCode":1,"responseDesc":pollResponse});
            }
            res.json({"responseCode":0,"responseDesc":"Success","data":pollResponse});
        });

    })
    .put((req, res) => {

        var pollObject = new pollModel();
        // --- also need to validate payload here ---
        pollObject.votePollOption(req.body, (err, pollResponse) => {
            if (err) {
                return res.json({"responseCode":1,"responseDesc":pollResponse});
            }
            res.json({"responseCode":0,"responseDesc":"Success","data":pollResponse});
        });

    });

module.exports = router;