import chai from 'chai';
import assert from 'assert';
import chaiHttp from 'chai-http';
import app from '../index';
chai.use(chaiHttp);
chai.should();
const expect = chai.expect;

// registration tests
describe('Validates booking endpoints', ()=>{
    it('retrieves all trips available', (done)=>{
        chai.request(app)
        .get('/trips/availableTrips')
        .end((error, response) => {
            assert.equal(response.statusCode, 200);
            expect(response).to.be.an('object');
            if(error) done(error);
            done();
        });
    });   

    it('retrieves one trip', (done)=>{
        chai.request(app)
        .get('/trips/2')
        .end((error, response) => {
            assert.equal(response.statusCode, 200);
            expect(response).to.be.an('object');
            if(error) done(error);
            done();
        });
    });    

    it('books a trip', (done)=>{
        chai.request(app)
        .post('/trips/2/book')
        .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNDJhYjY0MTc4NDE3MzA2MGFjOWMxYSIsImVtYWlsIjoia2FpQHNkZ2RjbyIsImlhdCI6MTU4MTQ1MDgwNH0.ytr6gGdMbmThh06vTHTtIgrKc58J2qDL4rmZt62Sy3w')
        .send({
            departure: 'Nakuru',
          arrival:'Kilifi',
          date: '12/12/2020',
          tickets: 3,
          time: '12:00 AM'
        })
        .end((error, response) => {
            assert.equal(response.statusCode, 201);
            expect(response).to.be.an('object');
            if(error) done(error);
            done();
        });
    }); 
});