const uuid = require("uuid");
const randomURLId = () => {
  return uuid.v4().split("-")[0];
};

module.exports.randomURLId = randomURLId;
