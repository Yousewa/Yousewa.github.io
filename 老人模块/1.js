document.getElementById('emergency').addEventListener('click', function() {
  window.location.href = 'tel:120'; // 这里填写紧急电话号码
});

var currentProduct = null;

document.getElementById('chat-send').addEventListener('click', function() {
  var input = document.getElementById('chat-input');
  var messages = document.getElementById('chat-messages');
  if (input.value.trim() !== '') {
      var message = document.createElement('p');
      message.textContent = input.value;
      messages.appendChild(message);
      input.value = '';
  }
});

function showModal() {
  document.getElementById('login-modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('login-modal').style.display = 'none';
}

function login(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;

  // 修改欢迎信息元素的内容
  var welcomeMessage = document.getElementById('welcome-message');
  welcomeMessage.textContent = '您好！' +'用户 '+ username;

  // 关闭登录窗口
  closeModal();
}

document.getElementById('login-form').addEventListener('submit', login);

// 检查元素是否在视口中
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// 滚动事件监听器
window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade').forEach(element => {
    if (isInViewport(element)) {
      element.classList.add('fadeIn');
      element.classList.remove('fadeOut');
    } else {
      element.classList.add('fadeOut');
      element.classList.remove('fadeIn');
    }
  });
});

// JavaScript 用于打开和关闭弹出窗口
function openModal(imgSrc, title, intro) {
  document.getElementById('modalImg').src = imgSrc;
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('serviceIntro').textContent = intro; // 设置服务介绍文字
  document.getElementById('myModal').style.display = "block";

  // 当用户点击添加服务按钮时，关闭弹出窗口
  document.getElementById('addServiceBtn').addEventListener('click', closeModal);
}

// 关闭弹出窗口的函数
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

// 当用户点击窗口外的区域时关闭弹出窗口
window.onclick = function(event) {
  var modal = document.getElementById('myModal');
  if (event.target == modal) {
    closeModal();
  }
}
