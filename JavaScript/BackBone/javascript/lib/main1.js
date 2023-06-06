var model=Backbone.Model.extend({
    initialize:function(){
        console.log("Model Created")
    }
});


 var mymodel=new model({
    name:"Mihir",
    company:"Valtech"
 })
 document.write(mymodel.get("name"))










////updated codes for Assignment

//  var MyModel = Backbone.Model.extend({
//     defaults: {
//         name: "",
//         email: "",
//         role: "",
//         location: ""
//     },
//     validate: function(attrs) {
//         if (!attrs.name) {
//              return "Name is required";
//             // $("#name-alert").text("Name is Required")
//         }
//         if (!attrs.email) {
//             return "Email is required.";
        
//         }
//         if (!attrs.role) {
//             return "Role is required.";
//         }
//         if (!attrs.location) {
//             return "Location is required.";
//         }
       
//     }
// });

// var mymodel = new MyModel();

// var FirstView = Backbone.View.extend({
//     el: '#demo',
//     model: mymodel,
//     events: {
//         "submit": "onClick",
//         "click #det":"showBox"

//     },

//     onClick: function(e) {
//         e.preventDefault();
//         var data = {
//             name: this.$("#name").val(),
//             email: this.$("#email").val(),
//             role: this.$("#role").val(),
//             location: this.$("#location").val()
//         };
//         this.model.set(data);
       
//             console.log(this.model.toJSON());
//             this.addToTable(data);
//             this.clearForm();
    
//     },
//     showBox:function(){
//         $(".tablebox").toggle()

//     },
//     template: _.template($("#form-view").html()),
//     initialize: function() {
//         this.render();
//         this.renderTable();
//     },
//     render: function() {
//         this.$el.html(this.template(this.model.toJSON()));
//         return this;
//     },
//     renderTable: function() {
//         this.$tbody = this.$("#my-table tbody");
//     },
//     addToTable: function(data) {
//         var row = $("<tr>");
//         $("<td>").text(data.name).appendTo(row);
//         $("<td>").text(data.email).appendTo(row);
//         $("<td>").text(data.role).appendTo(row);
//         $("<td>").text(data.location).appendTo(row);
//         this.$tbody.append(row);
//     },
//     clearForm: function() {
//         this.$("#name").val("");
//         this.$("#email").val("");
//         this.$("#role").val("");
//         this.$("#location").val("");
//     }
    
// });

// var firstview = new FirstView();