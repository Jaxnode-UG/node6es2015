'use strict';

function listAnimalsES2015(...animals) {
  animals.forEach(item => {
    console.log(item);
  });
}

listAnimalsES2015('dog', 'cat', 'platipus');
