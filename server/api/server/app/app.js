import express from 'express';
import cors from 'cors';
import eventRoutes from '../routes/EventRoutes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/api/v1/events', eventRoutes);

// when a random route is inputed
app.get('*', (req, res) => res.status(400).send({
  message: 'Welcome to this API but you are using a route that is not correct. :(',
}));

module.exports = app;