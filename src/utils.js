const getRandomMessageFromArray = arrayMessages => {
  const randomNumber = Math.floor(Math.random() * arrayMessages.length);

  return arrayMessages[randomNumber];
};

module.exports = {
  getRandomMessageFromArray
};
