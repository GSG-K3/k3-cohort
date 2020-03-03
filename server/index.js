const app = require('./app.js');
const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`The things, the things are happening on ${port}!!`);
  console.log('You can also do this... to show the port %d', port);
});