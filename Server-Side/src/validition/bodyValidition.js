let value = {};
module.exports= {
  test: function(bodyValue){
      value.input = bodyValue;
      return this;
  },
  mustBe: function(condition , error){
      if(value.input !== condition){
        throw new Error (error)
      } else {
          return this;
      }
  }
}