const chai = require('chai');
const chaiHttp = require("chai-http");

const expect = chai.expect;

chai.use(chaiHttp);
const server = require('../app');


describe('TODO', function () {
    let id = null;
    describe('POST /', function () {
        it('should return the object', function (done) {
            chai.request(server)
                .post('/api/v1/todos/create')
                .send({title: 'Princ', body: 'Princ of Armenia'})
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('object');
                    expect(res.body.data).to.have.property('_id');
                    id = res.body.data._id
                    expect(res.body.data).to.have.property('title');
                    expect(res.body.data.title).to.be.string;
                    expect(res.body.data).to.have.property('body');
                    expect(res.body.data.body).to.be.string;
                    done();
                });
        });
    });
    describe('GET /', function () {
        it('should return the object', function (done) {
            chai.request(server)
                .get('/api/v1/todos')
                .end((err, res) => {
                    expect(res).to.have.status(200)
                    expect(res.body).to.be.a('object');
                    done();
                });
        });
    });
    describe('PATCH /', function () {
        it('should return the object', function (done) {
            chai.request(server)
                .patch('/api/v1/todos/' + id)
                .send({title: 'Alen Marutyan', body: 'author Alen Marutyan'})
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('object');
                    expect(res.body.data).to.have.property('title');
                    expect(res.body.data).to.have.property('body')
                    done();
                });
        });
    });
    describe('GET /:id', function () {
        it('should return the object', function (done) {
            chai.request(server)
                .get('/api/v1/todos/' + id)
                .end((err, res) => {
                    expect(res).to.have.status(200)
                    expect(res.body).to.be.a('object');
                    expect(res.body.data).to.have.property('title');
                    expect(res.body.data).to.have.property('body');
                    done();
                });
        });
    });
    describe('DELETE /', function () {
        it('should return the object', function (done) {
            chai.request(server)
                .delete('/api/v1/todos/' + id)
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('object');
                    expect(res.body).to.have.property('data');
                    expect(res.body.data).to.equal('Success');
                    done();
                });
        });
    });
});
