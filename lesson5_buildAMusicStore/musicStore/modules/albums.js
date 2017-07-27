const path = require('path');
const fs = require('fs');
const filePath = path.resolve(path.dirname(__dirname), 'data/albums.json');

module.exports = () => {
  const readFile = () => JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return {
    getLastID() {
     return readFile().lastID;
   },
   get() {
      return readFile().data;
   },
   set(data) {
      data.id = this.getLastID() + 1;
      fs.writeFileSync(filePath, JSON.stringify({
        lastID: data.id,
        data: data
      }), 'utf8');
   }
  };
};
