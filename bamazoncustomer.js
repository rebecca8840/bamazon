var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "root",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  start();
});

function start() {
	inquirer.prompt(
    {
	    name: "decision",
      type: "list",
      message: "Hello! How would you like to proceed?",
      choices: ["View items", "Buy item[s]", "Cancel"]
    })

  .then(function(answer) {

      if (answer.decision === "View items") {
        selectAll();
      } 

      else if (answer.decision === "Buy item[s]") {
        buy();
      } 

      else if (answer.decision === "Cancel") {
      	connection.end();
      }

    });

};

function buy() {

    inquirer
    .prompt([
        {
          type: "input",
          name: "item_id",
          message: "Select the Item ID you'd like to purchase."
        },
        {
          type: "input",
          name: "quantity",
          message: "How many of the items would you like to purchase?"
        }
      ])

    .then(function(answer) {

        var currentItem = answer.item_id;
        var currentAmount = answer.quantity;

        connection.query('select * from products where ?', {

          item_id: answer.item_id

        }, function(err,results) {
          if (currentAmount > results[0].stock_quantity) {
            console.log("Sorry, we do not have enough of this item in stock!");
            buyItem();
          } 

          else {
            console.log("Thank you!");


            var newQuantity = (results[0].stock_quantity - currentAmount);

            var totalCost = (results[0].price * currentAmount);

            connection.query('update products set ? where ?',[{

              stock_quantity: newQuantity

            },

            {
              
              item_id: currentItem

            }], 

            function(err,results) {
              console.log("Thank you!  You were charged $" + totalCost + ".");
              start();
            })

          }

        })

      })

    }

function selectAll() {

	connection.query("select * from products", function(err, results) {
		for (var i = 0; i < results.length; i++) {
			console.log(results[i].item_id + " | " + results[i].product_name + " | " + results[i].department_name + " | " + results[i].price + " | " + results[i].stock_quantity);

		}

		start();

	});

};