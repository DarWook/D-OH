const sender = document.getElementById("sender").value;
console.log("메시지 보내는 사람 : ",sender);
const receiver = document.getElementById("receiver").textContent;
console.log("메시지 받는 사람 : ",receiver)
let MessageDTO = {
    sender : sender,
    receiver : receiver,
    content :null
}

const stompClient = new StompJs.Client({
    brokerURL: 'ws://localhost:8083/chat',

    heartbeatIncoming: 10000, 
    heartbeatOutgoing: 10000, 

    reconnectDelay: 5000, 
});


stompClient.onConnect = (frame) => {
    console.log('Connected: ' + frame);

    stompClient.subscribe(`/queue/messages/${sender}`, (message) => {
        const parsedMessage = JSON.parse(message.body);
        console.log(sender+'가 받은 메시지 : ' + parsedMessage)
        addMessageToChat(parsedMessage,'received');
    });
};

stompClient.onWebSocketError = (error) => {
    console.error('Error with websocket', error);
};

stompClient.onStompError = (frame) => {
    console.error('Broker reported error: ' + frame.headers['message']);
    console.error('Additional details: ' + frame.body);
};

function connect() {
    stompClient.activate();
}

function disconnect() {
    stompClient.deactivate();
    setConnected(false);
    console.log("Disconnected");
}

function sendMesssage() {
    const chatInput = document.getElementById('chatInput');
    MessageDTO.content = chatInput.value
    stompClient.publish({
        destination: "/app/message",
        body: JSON.stringify(MessageDTO)
    });
     addMessageToChat(MessageDTO.content,'sent')
}

// 페이지 로드 시 웹소켓 연결 자동 시작
window.onload = function () {
  connect();
  getAllMessages();
};

const sendButton = document.getElementById("sendButton").addEventListener("click",sendMesssage);

function addMessageToChat(content, messageType) {

    const chatBody = document.getElementById('chatBody');

    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', messageType);

    const messageBubble = document.createElement('div');
    messageBubble.classList.add('message-bubble',messageType);
    messageBubble.textContent = content;

    messageDiv.appendChild(messageBubble);

    chatBody.appendChild(messageDiv);

    chatBody.scrollTop = chatBody.scrollHeight;
}

//전체 메시지 가져오기
function getAllMessages() {
  $.ajax({
    url: `/chat/messages/${sender}`,
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(MessageDTO),
    success: function (data) {
      const sentMessages = data.sentMessages;
      const receivedMessages = data.receivedMessages;

      console.log(sentMessages, receivedMessages);
    },
    error: function (xhr, status, error) {
      console.error("Error fetching messages: ", error);
    },
  });
}
