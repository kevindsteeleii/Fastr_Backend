const express = require('express'),
          app = express(),
         PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`listening for app on port ${PORT}...`))