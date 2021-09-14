import supertest from "supertest";
import app from "../server/app/app";
import {
  EventPostValidationMessages,
  EventControllerMessages,
} from "../server/messages/EventMessages";

const newEvent = {
  firstName: "testFirstName",
  lastName: "testLastName",
  email: "testEmail@example.com",
  eventDate: "2021-09-08 09:45:15",
};

describe("Test event endpoint", () => {
  test("GET /api/v1/events", async () => {
    await supertest(app)
      .get("/api/v1/events")
      .expect("Content-Type", /json/)
      .expect(200);
  });

  test("POST /api/v1/events with valid data", (done) => {
    const event = { ...newEvent };
    supertest(app)
      .post("/api/v1/events")
      .expect("Content-Type", /json/)
      .send(event)
      .expect((res) => {
        expect(res.body.message).toBe(EventControllerMessages.Post201);
      })
      .expect(201, done);
  });

  test("POST /api/v1/events without firstName property", (done) => {
    const event = { ...newEvent };
    delete event.firstName;
    supertest(app)
      .post("/api/v1/events")
      .expect("Content-Type", /json/)
      .send(event)
      .expect((res) => {
        expect(res.body.message).toBe(EventPostValidationMessages.firstName);
      })
      .expect(400, done);
  });

  test("POST /api/v1/events with numeric firstName value", (done) => {
    const event = { ...newEvent };
    event.firstName = 32;
    supertest(app)
      .post("/api/v1/events")
      .expect("Content-Type", /json/)
      .send(event)
      .expect((res) => {
        expect(res.body.message).toBe(EventPostValidationMessages.firstName);
      })
      .expect(400, done);
  });

  test("POST /api/v1/events with undefined firstName value", (done) => {
    const event = { ...newEvent };
    event.firstName = undefined;
    supertest(app)
      .post("/api/v1/events")
      .expect("Content-Type", /json/)
      .send(event)
      .expect((res) => {
        expect(res.body.message).toBe(EventPostValidationMessages.firstName);
      })
      .expect(400, done);
  });

  test("POST /api/v1/events with invalid email property", (done) => {
    const event = { ...newEvent };
    event.email = "invalidEmail";
    supertest(app)
      .post("/api/v1/events")
      .expect("Content-Type", /json/)
      .send(event)
      .expect((res) => {
        expect(res.body.message).toBe(EventPostValidationMessages.email);
      })
      .expect(400, done);
  });
});
