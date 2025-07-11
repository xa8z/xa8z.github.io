// 获取存储访问量的本地存储对象
let counter = localStorage.getItem('counter');

// 如果本地存储中没有访问量数据，则初始化为0
if (!counter) {
  counter = 0;
}

// 每次页面加载时，访问量加1
counter++;
localStorage.setItem('counter', counter);

// 将访问量显示在页面上
document.getElementById('visit-count').innerText = counter;