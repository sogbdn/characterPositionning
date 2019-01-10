function positioningLetters(str) {
  // Generate an array
  var letterArray = str.split(' ').join('').split('');
  console.log(letterArray);

  var obj = {};

  var index1 = letterArray.forEach(function(letter, index){
  // si la lettre existe deja, rajouter le nv index
    if (obj[letter]) {
      obj[letter].push(index);
    }
  // si la lettre n'existe pas, indiquer le premier index trouvé
    else {obj[letter] = [index] }

  });

  return obj;

};

console.log(positioningLetters("lighthouse in the house"));

