var team=Backbone.Model.extend()
var player1=new team({
    name:"Dhoni",
    country:'India',
    Rating:'5'
})
var player2=new team({
    name:"Virat Kholi",
    country:'India',
    Rating:'4.9'
})

var teams=Backbone.Collection.extend()
var p=new teams([
    player1,
    player2
])
//adding new models
p.add(new team({name:'Yuvraj',country:'India'}))
//unshift store models at first index
p.unshift(new team({name:'Rohit sharma',country:'India',rating:'4.9'}))

//add at certain index then
p.add(new team({name:'Yuvraj',country:'India'}),{at:2});

// shift is used to remove the starting element
// pop() is used to return the last element and it remove the last element
// p.findWhere({name:'dhoni'}) return the model having name dhoni

//each function
// p.each(function(){
//     console.log('heyy')
// })

//for logical and conditional statement always try to use filter








/**************************** */
var MyModel = Backbone.Model.extend({
    defaults: {
        name: "",
        email: "",
        role: "",
        location: ""
    },
    validate: function(attrs) {
        if (!attrs.name) {
            alert("Name is required");
        }
        if (!attrs.email) {
            alert("Email is required.");
        
        }
        if (!attrs.role) {
            alert("Role is required.");
        }
        if (!attrs.location) {
            alert("Location is required.");
        }
       
    }
});

var mymodel = new MyModel();
var collection=Backbone.Collection.extend()
 var mycollection=new collection(
    [
        mymodel
    ]
 )

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
       
            console.log(this.model.toJSON());
            this.addToTable(data);
            this.clearForm();
    
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




/**************************** */
var MyModel = Backbone.Model.extend({
    defaults: {
        name: "",
        email: "",
        role: "",
        location: ""
    },
    validate: function(attrs) {
        if (!attrs.name) {
            alert("Name is required");
        }
        if (!attrs.email) {
            alert("Email is required.");
        
        }
        if (!attrs.role) {
            alert("Role is required.");
        }
        if (!attrs.location) {
            alert("Location is required.");
        }
       
    }
});

// var mymodel = new MyModel();
var collection=Backbone.Collection.extend()
 var mycollection=new collection(
    [
        MyModel,
    ]
 )

var FirstView = Backbone.View.extend({
    el: '#demo',
    collection:mycollection,    
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
        // this.model.set(data);
        var mymodel = new MyModel(data);
        this.collection.add(mymodel)
       
            console.log(this.model.toJSON());
            this.addToTable(data);
            this.clearForm();
    
    },
    template: _.template($("#form-view").html()),
    initialize: function() {
        this.render();
        this.renderTable();
    },
    render: function() {
        this.$el.html(this.template());
        var tbody=$('#my-table tbody')
        tbody.empty();
        this.collection.each(function(mymodel){
                var tr="<tr><td>"+mymodel.name+"</td> <td>"+mymodel.email+"</td><td>"+mymodel.role +"</td><td>"+mymodel.location+"</td></tr>"
                tbody.append(tr)
            })
        return this;
    },
    renderTable: function() {
        this.$tbody = this.$("#my-table tbody");
    },
    // addToTable: function(data) {
    //     var row = $("<tr>");
    //     $("<td>").text(data.name).appendTo(row);
    //     $("<td>").text(data.email).appendTo(row);
    //     $("<td>").text(data.role).appendTo(row);
    //     $("<td>").text(data.location).appendTo(row);
    //     this.$tbody.append(row);
    // },
    clearForm: function() {
        this.$("#name").val("");
        this.$("#email").val("");
        this.$("#role").val("");
        this.$("#location").val("");
    }
    
});

var firstview = new FirstView();

