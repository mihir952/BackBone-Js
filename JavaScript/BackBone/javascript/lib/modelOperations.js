// var Note = Backbone.Model.extend({

//     initialize: function() {
//         console.log("Heyy")
//     }
//   });
//   var note=new Note()
// var myModel = new Backbone.Model()

// console.log(myModel)

var Tutorial=Backbone.Model.extend({
    defaults:{
      College:"Dr Ait"
    }
  });
  var mihir=new Tutorial({
    name:'Mihir Kumar',
    company:"Valtech",
    Role:"Associate"
  });
  
  mihir.set({location:"Bangalore"})
  mihir.toJSON();
  var harsh=new Tutorial({
    name:"Aashiq",
    Company:"Flipkart"
  })
  