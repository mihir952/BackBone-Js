
var valtech=Backbone.Model.extend({
    show:function(){
        console.log("Office Location is in Bangalore")
    }
})
var valtech2=valtech.extend();
var valtech3=new valtech2();



//changing the event
// var Employee=Backbone.Model.extend({
//     initialize:function(){
//         // for particular you can use this.bind('change:name',function(){})
//        this.bind('change',function(){
//         console.log("model changed")
//        })
//     }

// })

// var mihir=new Employee({
//     name:'Mihir kumar'
// })
// mihir.set('name','Mihir')
// mihir.set('EmpID',5439)



///////storing data in input field

var MyModel = Backbone.Model.extend({
    defaults: {
      name: "",
      email: "",
      role: "",
      location: ""
    },
    validate: function(attrs, options) {
      var errors = {};
      if (!attrs.name) {
        errors.name = "Name is required.";
      }
      if (!attrs.email) {
        errors.email = "Email is required.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(attrs.email)) {
        errors.email = "Invalid email format.";
      }
      if (!attrs.role) {
        errors.role = "Role is required.";
      }
      if (!attrs.location) {
        errors.location = "Location is required.";
      }
      if (Object.keys(errors).length) {
        return errors;
      }
    }
  });
  
  var MyCollection = Backbone.Collection.extend({
    model: MyModel
  });
  
  var myCollection = new MyCollection();
  
  var FirstView = Backbone.View.extend({
    el: '#my-form',
    collection: myCollection,
    events: {
      "submit": "onClick",
    },
    onClick: function(e) {
      e.preventDefault();
      var data = {
        name: this.$("#name").val(),
        email: this.$("#email").val(),
        role: this.$("#role").val(),
        location: this.$("#location").val()
      };
      var model = new MyModel(data);
      var errors = model.validate(data);
      if (errors) {
        console.log(errors);
      } else {
        this.collection.add(model);
        console.log(model.toJSON());
        this.renderTable();
      }
    },
    template: _.template($("#form-view").html()),
    initialize: function() {
      this.render();
      this.renderTable();
    },
    render: function() {
      this.$el.html(this.template());
      return this;
    },
    renderTable: function() {
      var $tbody = this.$("#my-table tbody");
      $tbody.empty();
      this.collection.each(function(model) {
        var $tr = $("<tr>");
        $tr.append($("<td>").text(model.get("name")));
        $tr.append($("<td>").text(model.get("email")));
        $tr.append($("<td>").text(model.get("role")));
        $tr.append($("<td>").text(model.get("location")));
        $tbody.append($tr);
      });
    }
  });
  
  var firstview = new FirstView();
  




  ///////////////////////////////
  var FirstView = Backbone.View.extend({
    el: '#demo',
    model: mymodel,
    events: {
        "submit": "onClick",
    },
    onClick: function(e) {
        e.preventDefault();
        var data = {
            name: this.$("#name").val(),
            email: this.$("#email").val(),
            role: this.$("#role").val(),
            location: this.$("#location").val()
        };
        this.model.set(data);
        var errors = this.model.validate(data);
        if (errors) {
            console.log(errors);
        } else {
            console.log(this.model.toJSON());
            this.addToTable(data);
            this.clearForm();
        }
    },
    template: _.template($("#form-view").html()),
    initialize: function() {
        this.render();
        this.renderTable();
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
    renderTable: function() {
        this.$tbody = this.$("#my-table tbody");
    },
    addToTable: function(data) {
        var row = $("<tr>");
        $("<td>").text(data.name).appendTo(row);
        $("<td>").text(data.email).appendTo(row);
        $("<td>").text(data.role).appendTo(row);
        $("<td>").text(data.location).appendTo(row);
        this.$tbody.append(row);
    },
    clearForm: function() {
        this.$("#name").val("");
        this.$("#email").val("");
        this.$("#role").val("");
        this.$("#location").val("");
    }
});

var firstview = new FirstView();
