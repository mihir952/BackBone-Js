$(document).ready(function(){
    var EventView=Backbone.View.extend({
        el:'#demo',
        template:_.template($('#event-view').html()),
        events:{
             "click  #btnclick":"onClick"
        },
        onClick:function(){
            alert("click is working")
        },
        initialize:function(){
            this.render();
        },
        render:function(){
            this.$el.html(this.template());
        }

    })

    var eventview=new EventView();
})



//inline events
$(document).ready(function(){
    var EventView=Backbone.View.extend({
        el:'#demo',
        template:_.template("<button>Click Me<button>"),
        events:{
             "click  button":"onClick"
        },
        onClick:function(){
            var a=10;
            var b=20;
            var sum=a+b;
            alert(sum);
        },
        initialize:function(){
            this.render();
        },
        render:function(){
            this.$el.html(this.template());
        }

    })

    var eventview=new EventView();
})





//model with view



var Tutorial = Backbone.Model.extend({
    defaults: {
        College: "Dr Ait",
    },
});
var mihir = new Tutorial({
    name: "Mihir Kumar",
    company: "Valtech",
    Role: "Associate",
});

mihir.set({ location: "Bangalore" });
mihir.toJSON();
//   var harsh = new Tutorial({
    //     name: "Aashiq",
    //     Company: "Flipkart",
    //   });
    
    
    
    var EventView = Backbone.View.extend({
    model: mihir,
    el: "#demo",
    template: _.template("<button>Click Me<button>"),
    events: {
        "click  button": "onClick",
    },
    onClick: function () {
        var a = 10;
        var b = 20;
        var sum = a + b;
        alert(sum);
    },
    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.html(this.template());
        console.log(this.model.toJSON());
    },
});


var eventview = new EventView({});

