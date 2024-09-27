const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')

burger.onclick = () => {
    menu.classList.toggle('open')
}

const modalBtn = document.querySelector('#modalBtn')
const closeBtn = document.querySelector('#closeBtn')
const modal = document.querySelector('.modal')

modalBtn.onclick = () => {
    modal.classList.add('open-modal')
}

closeBtn.onclick = () => {
    modal.classList.remove('open-modal')
}

modal.onclick = (e) => {
    // modal.classList.remove('open-modal')
    console.log(e.target);

    if(!e.target.closest('.modal__box')) {
        modal.classList.remove('open-modal')
    }
}

document.getElementById('telegramForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const token = '8081495516:AAG9kqCrBGILziohVGWrpmBz8YpyY5tmOYs';  // Замените на ваш токен
    const chat_id = '-4549545670';  // Замените на ваш chat_id
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    // Формируем сообщение
    const message = `Name: ${name}\nPhone: ${phone}`;

    const data = {
      chat_id: chat_id,
      text: message
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        alert("Message sent!");
      } else {
        alert("Error sending message.");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Error sending message.");
    });
  });
