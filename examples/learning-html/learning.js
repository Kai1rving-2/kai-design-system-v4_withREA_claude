const paddingControl = document.querySelector('#padding-control');
const paddingValue = document.querySelector('#padding-value');
const demoPadding = document.querySelector('#demo-padding');
const practiceForm = document.querySelector('#practice-form');
const feedback = document.querySelector('#feedback');

paddingControl.addEventListener('input', () => {
  const value = `${paddingControl.value}px`;
  demoPadding.style.padding = value;
  paddingValue.value = value;
});

practiceForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const selected = new FormData(practiceForm).get('answer');
  feedback.dataset.result = selected === 'farther' ? 'correct' : 'other';
  feedback.textContent = !selected
    ? '先选一个答案，再检查。'
    : selected === 'farther'
      ? '答对了。padding 增加时，内容与边框的距离会变远。'
      : '还差一点。再拖动上方的滑块，观察内容与边框之间的空间。';
});
