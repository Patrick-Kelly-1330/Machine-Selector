const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/machine');

const teamSchema = mongoose.Schema({
    name: String,
    team: Array
});

const Machine = mongoose.model('Machine', teamSchema, 'Machine');

module.exports = {
  createTeam: (teamName, teamList) => {
    return Machine.create({
      name: teamName,
      team: teamList
    })
  },
  getTeam: (teamName) => Machine.find({name: teamName})
}

