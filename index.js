const server = require("./api/server.js");

// for heroku PORT variable for enviornment
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
