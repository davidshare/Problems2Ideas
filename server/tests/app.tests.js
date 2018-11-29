import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../../app';

const { expect } = chai;

chai.use(chaiHttp);

describe('Home route ', () => {
  describe('GET /', () => {
	  it('It should get the home route', (done) => {
			chai.request(app)
			.get('/')
		  .end((error, response) => {
          expect(response).to.have.status(200);
          expect(response.body).to.be.an('object');
          expect(response.body.message).to.equal('Welcome to Problem2Ideas');
          done();
		  });
	  });
	});

	describe('GET *', () => {
	  it('It should get the 404 route if a requested route does not exist', (done) => {
			chai.request(app)
			.get('/david')
		  .end((error, response) => {
          expect(response).to.have.status(404);
          expect(response.body).to.be.an('object');
          expect(response.body.message).to.equal('The URL you are trying to access does not exist. Please enter a valid url');
          done();
		  });
	  });
  });
});
