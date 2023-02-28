const newTeam = require('../models');

const createTeam = (teamName, teamList) => {
  newTeam.createTeam(teamName, teamList);
};

module.exports = createTeam;
