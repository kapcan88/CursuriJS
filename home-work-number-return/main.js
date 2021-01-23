function estePARsauIMPAR() {
  const numarnou = document.getElementById('leta').value;

  if (numarnou % 2 === 0) {
    alert("este par");
  } else {
    alert("este impar");
  }
}


function ridicalaputere() {
  const numarul = document.getElementById('numar').value;
  const puterea = document.getElementById('putere').value;
  const rezultat = document.getElementById('rezultatnumarpar');

  console.log(numarul, puterea)
  let result = Math.pow(numarul, puterea);
  rezultat.value = result;
}

function minormax() {
  const numar1 = document.getElementById('num1').value;
  const numar2 = document.getElementById('num2').value;

  console.log(numar1, numar2);
  let result = Math.min(numar1, numar2);

  alert(result)
}

function maximFthree() {
  const number1 = document.getElementById('numb1').value;
  const number2 = document.getElementById('numb2').value;
  const number3 = document.getElementById('numb3').value;

  console.log = (number1, number2, number3);
  let result = Math.max(number1, number2, number3);
  alert(result);
}
