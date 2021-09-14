import config from 'dotenv';

config.config();

import app from './server/app/app';

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});