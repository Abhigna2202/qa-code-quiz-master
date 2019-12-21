const request = require('supertest');
const app = require('./index')
const fs = require('fs');

describe('Test initial request and response', () => {
    test('GET method', (done) => {
        request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.text).toBe('Backend API');
            done();
        });
    });
});
describe('Create account(POST Method)', function() {
    it('Create a new account in account.json', function(done) {
      request(app)
        .post('/user')
        .send({username: 'john', name: 'T', password:'jaffa', favouriteFruit:'Mango', favouriteMovie:'Avengers', favouriteNumber:3})
        .set('Accept', 'application/json')
        .end(function(err, res) {
          if (err) return done(err);
          expect(res.text).toBe('Account Created')
          const accounts = fs.readFileSync('./storage/account.json', 'utf-8');
          const data = JSON.parse(accounts);
          const actual = JSON.stringify(data['john'])        
          expect(actual).toBe('{"name":"T","password":"jaffa","favouriteFruit":"Mango","favouriteMovie":"Avengers","favouriteNumber":3}')
          done();
        });
    });
    it('Check for existing account in account.json', function(done) {
        request(app)
          .post('/user')
          .send({username: 'john', name: 'T', password:'jaffa', favouriteFruit:'Mango', favouriteMovie:'Avengers', favouriteNumber:3})
          .set('Accept', 'application/json')
          .end(function(err, res) {
            if (err) return done(err);
            expect(res.text).toBe('Account Already Exists')
            done();
          });
      });
  });
  
describe('Update account(PUT Method) ', function() {
    it('Update an existing account in account.json', function(done) {
      request(app)
        .put('/user','john')
        .send({username: 'john', name: 'NewT', password:'jaffa', favouriteFruit:'Mango', favouriteMovie:'Avengers', favouriteNumber:3})
        .set('Accept', 'application/json')
        .end(function(err, res) {
          if (err) return done(err);
          expect(res.text).toBe('Account Updated')
          const accounts = fs.readFileSync('./storage/account.json', 'utf-8');
          const data = JSON.parse(accounts);
          const actual = JSON.stringify(data['john'])
          expect(actual).toBe('{"name":"NewT","password":"jaffa","favouriteFruit":"Mango","favouriteMovie":"Avengers","favouriteNumber":3}')
          done();
        });
    });
    it('Update a non-existing account in account.json', function(done) {
        request(app)
          .put('/user')
          .send({username: 'rob', name: 'T', password:'jaffa', favouriteFruit:'Mango', favouriteMovie:'Avengers', favouriteNumber:3})
          .set('Accept', 'application/json')
          .end(function(err, res) {
            if (err) return done(err);
            expect(res.text).toBe('Account Does NOT Exist')
            done();
          });
      });
});
describe('delete account', function() {
    it('Delete a account in account.json', function(done) {
      request(app)
        .del('/user')
        .send({username: 'john'})
        .end(function(err, res) {
          if (err) return done(err);
          expect(res.text).toBe('Account Deleted')
          done();
        });
    });
    it('Delete a non-existing account in account.json', function(done) {
        request(app)
          .del('/user')
          .send({username: 'john'})
          .end(function(err, res) {
            if (err) return done(err);
            expect(res.text).toBe('Account Does Not Exist')
            done();
          });
      });
});
