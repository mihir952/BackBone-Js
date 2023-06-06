// var Tutorial=Backbone.Model.extend({
//     defaults:{
//       College:"Dr Ait"
//     }
//   });
//   var mihir=new Tutorial({
//     name:'Mihir Kumar',
//     company:"Valtech",
//     Role:"Associate"
//   });
  
//   mihir.set({location:"Bangalore"})
//   mihir.toJSON();
//   var harsh=new Tutorial({
//     name:"Aashiq",
//     Company:"Flipkart"
//   })
$(document).ready(function(){
    var FirstView=Backbone.View.extend({
        el:'#demo',
        template:_.template($("#form-view").html()),
        initialize:function(){
            this.render();
        },
        render:function(){
             this.$el.html(this.template());
             return this;
    
        }
    })
        var firstview=new FirstView({
        
    })
    }) 
  