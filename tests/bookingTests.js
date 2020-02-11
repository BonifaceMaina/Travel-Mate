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
        .get('/bookings/availableTrips')
        .end((error, response) => {
            assert.equal(response.statusCode, 200);
            expect(response).to.be.an('object');
            if(error) done(error);
            done();
        });
    });   

    it('retrieves one trip', (done)=>{
        chai.request(app)
        .get('/bookings/oneTrip/2')
        .end((error, response) => {
            assert.equal(response.statusCode, 200);
            expect(response).to.be.an('object');
            if(error) done(error);
            done();
        });
    });    
});