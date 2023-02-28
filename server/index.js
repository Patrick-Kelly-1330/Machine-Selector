const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/models');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));
console.log('DIR ', __dirname);

app.post('/newTeam', (req, res) => {
  db.createTeam(req.body.name, req.body.team)
    .then((response) => {
      res.send('team added!')
    })
    .catch((err) => {
      console.log('unable to create new team, with error: ', err);
    })
});

app.get('/getTeam/:name', (req, res) => {
  console.log('PARAMS ', req.params.name)
  db.getTeam(req.params.name)
    .then((response) => {
      let team = JSON.stringify(response[0].team);
      res.send(team);
    })
    .catch((err) => {
      console.log('unable to get team, with error: ', err);
    })
});

app.get('/getTeams', (req, res) => {
  db.getTeams()
    .then((response) => {
      let teamNames = JSON.stringify(response);
      res.send(response);
    })
    .catch((err) => {
      console.log('unable to get team, with error: ', err);
    })
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
