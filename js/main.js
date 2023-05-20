var cart_value = JSON.parse(localStorage.getItem('cart')); // Загрузка из локального хранилища
if (cart_value == null) {cart_value = []};
let shopping_cart = new Vue({
  el: '#shopping_cart',
  data: {
    list: '',
    cart: cart_value,
    choice: null
  },
  methods: {
    remove(index) {
      // Удаление элемента
      this.cart.splice(index, 1);
      // Добавление в локальное хранилище
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    // Выбор модального окна
    add(chc) {
      this.choice = chc;
    },
    addList: function() {
      // Замена элемента
      if (this.list.toLowerCase() == 'песок') {
        this.list = 'сахар';
      }
      // Добавление элемента
      this.cart.push(this.list);
      // Добавление в локальное хранилище
      localStorage.setItem('cart', JSON.stringify(this.cart));
      this.list = '';
    }
  },
});
let lists = new Vue({
  el: '#MyList',
  methods: {
    addMyList(theme) {
      localStorage.setItem(theme, JSON.stringify(shopping_cart.cart));
      //console.log('добавили мой список в локальное хранилище');
    },
    loadMyList(theme) {
      shopping_cart.cart = JSON.parse(localStorage.getItem(theme));
      localStorage.setItem('cart', JSON.stringify(shopping_cart.cart));
      //console.log('загрузили мой список из локального хранилища');
    }
  },
})

// Дата, часы
/* функция добавления ведущих нулей */
/* (если число меньше десяти, перед числом добавляем ноль) */
const element = document.getElementById('current_date_time')
function zero_first_format(value)
{
  if (value < 10) { value='0' + value }
  return value
}
/* функция получения текущей даты и времени */
function date_time()
{
  let current_datetime = new Date()
  let day = zero_first_format(current_datetime.getDate())
  let month = zero_first_format(current_datetime.getMonth()+1)
  let year = current_datetime.getFullYear()
  let hours = zero_first_format(current_datetime.getHours())
  let minutes = zero_first_format(current_datetime.getMinutes())
  let seconds = zero_first_format(current_datetime.getSeconds())

  return day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds
}
/* каждую секунду получаем текущую дату и время */
/* и вставляем значение в блок с id "current_date_time" */
setInterval(function () { element.innerHTML = date_time() }, 1000)

// Кнопка прокрутки страницы вверх
window.onload = function() {
  const topBtn = document.getElementById('up');
  topBtn.onclick = () => window.scroll({ top: 0, behavior: "smooth" });
  window.onscroll = () => window.scrollY > 50 ? topBtn.style.opacity = 0.75 : topBtn.style.opacity = 0
}

// Анимация
document.getElementById("anim").animate([
  { transform: 'translateX(0vw)' }, 
  { transform: 'translateX(104vw)' }
], {
  duration: 30000,
  iterations: Infinity
})