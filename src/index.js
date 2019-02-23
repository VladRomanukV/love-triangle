/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  	var sum = 0;
    preferences.unshift(0);
   
   for(var i = 1; i < preferences.length; i++){
       var b = preferences[i];
       var c = preferences[b];
       
       sum += i == preferences[c];
   }
   sum = sum/3
   return Math.round(sum);
};
