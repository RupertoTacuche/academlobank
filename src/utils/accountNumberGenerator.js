const accountNumberGenerator = () => {
    const date = new Date();
    const now = 
      date.getSeconds().toString() +
      date.getDate().toString() +
      date.getDay().toString() +
      date.getFullYear().toString() +
      date.getHours().toString();

      const randomNumber = Math.floor(
        Math.random() * (900 - 111 + 1) + 111
      ).toString();
      //console.log(randomNumber);
      return +(now + randomNumber);
      
};

module.exports = accountNumberGenerator;