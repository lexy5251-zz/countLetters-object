function countLetters(string){
  var letterKey = '';
  var letterValue = '';
  var result = {};
  var noSpaceString = string.replace(/\s/g, '')
  console.log("no space:",noSpaceString);
  for (var i = 0; i < noSpaceString.length; i++){
    result[noSpaceString[i]]= (result[noSpaceString[i]] || 0) +1;

  }

  return result;
}
console.log(countLetters('lighthouse in the house'));