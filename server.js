const express = require('express');
const app = express();
const port = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send('Bot 7/24 Aktif!');
});

app.listen(port, () => {
  console.log(`Web sunucusu ${port} portunda baslatildi.`);
});
