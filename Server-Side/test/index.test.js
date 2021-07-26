const request = require("supertest");
const app = require("../server");

describe('main server endpoints thats are not available at all', () => {
    test('should return 404', () => {
      request(app).get("/nothing" , (err , response) =>{
        
      });
    });
});