import database from '../src/models';

class EventService {
  static async getAllEvents() {
    try {
      return await database.Event.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addEvent(newEvent) {
    try {
      return await database.Event.create(newEvent);
    } catch (error) {
      throw error;
    }
  }

}

export default EventService;