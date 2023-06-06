$(document).ready(function(){
    var FirstView=Backbone.View.extend({
        el:'#demo',
        template:_.template($("#temp-fview").html()),
        // template:_.template("hello Welcome to Our Template"),    
        initialize:function(){
            this.render();
        },
        render:function(){
            //  var template=_.template($("#temp-fview").html());
             this.$el.html(this.template());
             return this;
    
        }
    })
        var firstview=new FirstView({
        
    })
    }) 
    
    //or template:$("#temp-fview").html()
    //var template=_.template(this.template);
    //this.$el.html(template());
    //return this;



    // $(document).ready(function(){
    //     var firstview=Backbone.View.extend({
    //         el:"#demo",
    //         template:_.template($("#temp-fview").html()),
    //         initialize:function(){
    //             this.render();
    //         },
    //         render:function(){
    //             this.$el.html(this.template());
    //             return this;
    //         }
    //     })
    //      var fview=new firstview;
        
        
        
        
        
    //     })