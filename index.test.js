
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const users = require('./route/users')
const app = require('./src/app');
const users = require("./route");
const { Json } = require('sequelize/types/utils');


describe('./fruits endpoint', () => {
    // Write your tests here
    const request = require("supertest");
    test("Testing fruits endpoint", async () => {
        // Send request to `/fruits` endpoint
        const res = await req(app).get("/fruit");

    });
    test("Testing fruits endpoint", async() => {
        // Send request to `/fruits`endpoint
        const res = await request(app).get("/fruits");
        expect(res.statusCode).toBe(200);

    })
    test("Testing fruit endpoint", async() => {
        //Send request to `/fruits`endpoint
        const res = await request(app).get("/fruits");
        const responseData = Json.parse(res.text)
        expect(res).toBe(responseData)
    })
    test("Testing musicians1 endpoint", async => {
        // Send request to `/fruits/1` endpoint 
        const musicianOne =  request(app).get("/fruits/1");
        expect(res).toBe(musicianOne)
  
    })

    test("Should return a list of fruits", async => { 
        const musicianArray = request(app).get("/fruits/1");
        expect(res.body).toBe(musicianArray);

    })
    
    test('should return an error when "name" field is empty', async (done) => {
        response = await request(app).post('/fruits').send({ fruit: 'Apple' }) 
        .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property('error');
            done();
          });
      });
    
      test('should return an error when "fruit" field is empty', async (done) => {
        filedEmpty = request(app).post('/fruits').send({ name: 'John' }) 
        .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property('error');
        done();
          });

    test('should return an error when "name" is too short', async (done) => {
    nameShort = request(app).post('/fruits').send({ name: 'C', fruit: 'Apple'}) 
    .end((err, res) => {
    expect(res).to.have.status(400);
    expect(res.body).to.have.property('error');
    done();
        })

    test('should return an error when "name" is too long', async (done) => {
    namelong = request(app).post('/fruits').send({ name: 'NameIsTooLong', fruit: 'Apple'}) 
    .end((err, res) => {
    expect(res).to.have.status(400);
    expect(res.body).to.have.property('error');
    done();
        })
})