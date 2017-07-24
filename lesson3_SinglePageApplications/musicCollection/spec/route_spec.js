let request = require('request');
let root = "http://localhost:3000/";
let albums;

describe('JSON Routes', function() {
  describe('/albums.json', function() {
    it('returns an array of albums', function(done) {
      request(`${root}/albums.json`, function(e, res, body) {
        albums = JSON.parse(body);
        expect(albums[0].artist).toBeDefined();
        done();
      });
    });
  });

  describe('/albums/<album>.json', function() {
    it('returns an array of tracks', function(done) {
      let path = `${root}albums/${albums[0].title}.json`;
      request(path, function(e, res, body) {
        expect(JSON.parse(body)[0].title).toBeDefined();
        done();
      });
    });
  });
});
