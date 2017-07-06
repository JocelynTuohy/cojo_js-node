module.exports = function (){
  return {
    add: function(num1, num2) { 
         // add code here 
         return num1 + num2;
    },
    multiply: function(num1, num2) {
         // add code here
         return num1 * num2;
    },
    square: function(num) {
         // add code here 
         return num * num;
    },
    random: function(num1, num2) {
         // add code here
         let greater = Math.max(num1, num2);
         let lesser = num1 + num2 - greater;
         return Math.floor(Math.random() * (greater - lesser + 1)) + lesser;

    }
  }
};
