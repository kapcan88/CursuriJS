function showchat() {
  const cardfooter = document.getElementById('card-footer');
  const chatbody = document.getElementById('chat-body', 'border-red');
  chatbody.className = 'chat-body';
  cardfooter.className = 'card-footer';
  const btn = document.getElementById("btn-chat");
  btn.setAttribute('onclick', 'hidechat()');
}

function hidechat() {
  const cardfooter = document.getElementById('card-footer');
  const chatbody = document.getElementById('chat-body', 'border-blue');
  chatbody.className = chatbody.className + " d-none";
  cardfooter.className = cardfooter.className + " d-none";
  const btn = document.getElementById("btn-chat");
  btn.setAttribute('onclick', 'showchat()');
}
const header = document.getElementById("chat-header");
