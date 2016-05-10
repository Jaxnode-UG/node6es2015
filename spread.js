'use strict';

var parts = ['shoulders', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes']; 

lyrics.forEach(word => {
   console.log(word); 
});
