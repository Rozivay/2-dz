// class Thenable {
//     constructor(num) {
//       this.num = num;
//     }
//     then(resolve, reject) {
//       alert(resolve); 
//       setTimeout(() => resolve(this.num * 2), 1000); 
//     }
//   }
  
//   new Promise(resolve => resolve(1))
//     .then(result => {
//       return new Thenable(result); 
//     })
//     .then(alert); 


new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000);
  
  }).then(function(result) {
  
    alert(result); 
  
    return new Promise((resolve, reject) => { 
      setTimeout(() => resolve(result * 2), 1000);
    });
  
  }).then(function(result) { 
  
    alert(result); 
  
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  
  }).then(function(result) {
  
    alert(result); 
  
  });