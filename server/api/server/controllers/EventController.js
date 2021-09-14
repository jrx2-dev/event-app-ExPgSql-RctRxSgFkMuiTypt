import { EventControllerMessages } from '../messages/EventMessages';
import EventService from '../services/EventService';
import Util from '../utils/Utils';

const util = new Util();

class EventController {
  static async getAllEvents(req, res) {
    try {
      const allEvents = await EventService.getAllEvents();
      if (allEvents.length > 0) {
        util.setSuccess(200, 'Events retrieved', allEvents);
      } else {
        util.setSuccess(200, 'No Event found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addEvent(req, res) {
    const newEvent = req.body;
    try {
      const createdEvent = await EventService.addEvent(newEvent);
      util.setSuccess(201, EventControllerMessages.Post201, createdEvent);
      return util.send(res);
    } catch (error) {
      console.log({error})
      util.setError(500, EventControllerMessages.Post500);
      return util.send(res);
    }
  }

}

export default EventController;