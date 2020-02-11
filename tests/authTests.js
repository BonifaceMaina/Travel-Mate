import chai from 'chai';
import assert from 'assert';
import chaiHttp from 'chai-http';
import app from '../index';
chai.use(chaiHttp);
chai.should();
const expect = chai.expect;

// registration tests
describe('Validates user endpoints', ()=>{
    it('registers a new user', (done)=>{
        chai.request(app)
        .post('/auth/signup')
        .send({
            email: 'collin@buupass.com', 
            password: 'collo@123',
        })
        .end((error, response) => {
            expect(response).to.be.an('object');
            if(error) done(error);
            done();
        });
    });    

    it('should not allow empty email', (done)=>{
        chai.request(app)
        .post('/auth/signup')
        .send({
            email: 'collins@buupass.com', 
            password: 'collo@123',
        })
        .end((error, response) => {
            assert.equal(response.statusCode, 400);
            expect(response).to.be.an('object');
            if(error) done(error);
            done();
        });
    });    
});