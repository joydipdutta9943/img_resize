const express = require('express');

const app = express();

const resizeRoute = require('./router');
// routes
app.use('/api/v1', resizeRoute);

const port = 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();