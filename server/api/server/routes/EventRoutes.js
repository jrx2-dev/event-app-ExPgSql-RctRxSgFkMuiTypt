import { Router } from 'express';
import { validationResult } from 'express-validator';
import EventController from '../controllers/EventController';
import { EventPostValidations } from '../validations/EventValidation';
import Util from '../utils/Utils';

const util = new Util();

const router = Router();

router.get('/', EventController.getAllEvents);

router.post('/', EventPostValidations, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      util.setError(400, errors.array()[0].msg);
      return util.send(res);
    } else {
      EventController.addEvent(req, res);
    }
  });

export default router;