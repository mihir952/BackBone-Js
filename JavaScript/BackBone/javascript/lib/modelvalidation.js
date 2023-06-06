
var valtech= Backbone.Model.extend({
    validate:function(attr){
      if(!attr.name){
        return "Name is Required";
      }
    }
  });
    // console.log(himani.isValid())

  var himani= new valtech({
    name:'Himani Sahoo'
  })
  himani.set({
    college:"Dr Ait"
  });
  // console.log(himani.isValid())

