
// alert("salut");

function showchat() {
  const cardfooter = document.getElementById('card-footer');
  const chatbody = document.getElementById('chat-body');
  chatbody.className = 'chat-body';
  cardfooter.className = 'card-footer';
  const btn = document.getElementById("btn-chat");
  btn.setAttribute('onclick', 'hidechat()');

  const header = document.getElementById("chat-header");
  header.className = "card border-blue";
}

function hidechat() {
  const cardfooter = document.getElementById('card-footer');
  const chatbody = document.getElementById('chat-body');
  chatbody.className = chatbody.className + " d-none";

  cardfooter.className = cardfooter.className + " d-none";
  const btn = document.getElementById("btn-chat");
  btn.setAttribute('onclick', 'showchat()');

  const header = document.getElementById("chat-header");
  header.className = "card border-red";
}
hidechat();

function sum() {

  const a = document.getElementById('leta').value;
  const b = document.getElementById('letb').value;

  let result = Number(a) + Number(b);

  if (numarbun(result)) {
    alert("numar bun s-a facut");
  }


  // if (result >= 100) {
  //   alert("100+");
  // } else if (result >= 70) {
  //   alert("70+");
  // } else if (result >= 50) {
  //   alert("50+");
  // } else if (result >= 10) {
  //   alert("10+");
  // } else if (result >= 0) {
  //   alert("0+");
  // }
}


function numarbun(result) {
  // alert(result);
  return result > 10 && result < 100;
}