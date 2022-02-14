function getVal() {
  const val = document.querySelector('input').value;
  var chap = val.replace(/http\S+/g, "");
  var kss = Math.round((parseInt(chap.length) / 1000 + Number.EPSILON) * 10) / 10;
  
  console.log(kss);
}
