
class Util{
    formatObject (obj){
      return JSON.parse(JSON.stringify(obj));
   }
   
}

module.exports = new Util();