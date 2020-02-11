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
        .post('/auth/signin')
        .send({
            name: 'Collins', 
            email: 'collins@buupass.com', 
            password: 'collo@123',
            number: '071882455'
        })
        .end((error, response) => {
            assert.equal(response.statusCode, 201);
            response.should.have.status(201);
            expect(response).to.be.an('object');
            if(error) done(error);
            done();
        });
    });    

    it('should not allow empty first name', (done)=>{
        chai.request(app)
        .post('/auth/signup')
        .send({
            name: '', 
            email: 'collins@buupass.com', 
            password: 'collo@123',
            number: '071882455'
        })
        .end((error, response) => {
            assert.equal(response.statusCode, 400);
            response.should.have.status(201);
            expect(response).to.be.an('object');
            if(error) done(error);
            done();
        });
    });    
});