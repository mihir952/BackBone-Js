var Firstview=Backbone.View.extend({
    initialize : function(){
        this.render();
    },
    render : function(){
        this.$el.html('BackBone JS Demo')
    }
})

var firstview=new Firstview({
    el:"#demo"
})
// firstview.render()



// $(document).ready(function(){
//     var FirstView=Backbone.View.extend({
//         tagName:"span",
//         id:"demo",      
//         initialize:function(){
//             this.render();
//         },
//         render:function(){
//             console.log("heyy ")
//              this.$el.html("Hello Wlcome to DOM")
//             console.log(this.el);
//         }
//     })
//         var firstview=new FirstView({
//         // el:"#demo"
    
    
//     })    
//     }) 
