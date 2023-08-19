module.exports = function check(str, bracketsConfig) {
  let newArr = bracketsConfig.map((x)=>x.join(''));
  while (str!='' && newArr.some(e => str.includes(e))){
    for(let j =0; j<newArr.length; j++){
      str = str.replaceAll(newArr[j], "");
    }
  }
  return (str === "");
}
