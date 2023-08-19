module.exports = function check(str, bracketsConfig) {
  let newArr = bracketsConfig.map((x)=>x.join(''));
  while (newArr.some(e => str.includes(e))){
    newArr.forEach(function(item){
      str = str.replaceAll(item, "");
    });
  }
  return (str === "");
}