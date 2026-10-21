const subnets = [
  { title: '办公室 A · 32 个地址', address: '17.12.14.0/27', mask: '255.255.255.224', broadcast: '17.12.14.31', usable: '17.12.14.1 – .30（30 个）', range: '17.12.14.0 – .31', explain: '32 = 2⁵，因此保留 5 位主机位，前缀是 32 − 5 = /27。' },
  { title: '办公室 B · 16 个地址', address: '17.12.14.32/28', mask: '255.255.255.240', broadcast: '17.12.14.47', usable: '17.12.14.33 – .46（14 个）', range: '17.12.14.32 – .47', explain: '16 = 2⁴，保留 4 位主机位，前缀为 /28。A 用完 .0–.31，下一块从 .32 开始。' },
  { title: '办公室 C · 16 个地址', address: '17.12.14.48/28', mask: '255.255.255.240', broadcast: '17.12.14.63', usable: '17.12.14.49 – .62（14 个）', range: '17.12.14.48 – .63', explain: '继续从 .48 开始，/28 覆盖连续 16 个地址，到 .63 为止，刚好用完原来的 /26。' }
];

const blocks = document.querySelectorAll('.address-block');
const buttons = document.querySelectorAll('#step-buttons button');
function showSubnet(index) {
  const subnet = subnets[index];
  document.querySelector('#allocation-position').value = `${index + 1} / 3`;
  for (const [id, value] of Object.entries({
    'allocation-title': subnet.title,
    'allocation-address': subnet.address,
    'allocation-explain': subnet.explain,
    'allocation-mask': subnet.mask,
    'allocation-broadcast': subnet.broadcast,
    'allocation-usable': subnet.usable,
    'allocation-range': subnet.range
  })) document.getElementById(id).textContent = value;
  buttons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
  blocks.forEach((block, i) => {
    block.classList.toggle('is-complete', i < index);
    if (i === index) block.setAttribute('aria-current', 'step');
    else block.removeAttribute('aria-current');
  });
}
buttons.forEach((button) => button.addEventListener('click', () => showSubnet(Number(button.dataset.step))));
showSubnet(0);

document.querySelector('#subnet-quiz').addEventListener('submit', (event) => {
  event.preventDefault();
  const answer = new FormData(event.currentTarget).get('subnet');
  const feedback = document.querySelector('#quiz-feedback');
  feedback.dataset.result = answer === 'b' ? 'correct' : 'other';
  feedback.textContent = !answer
    ? '先选择一个答案，再检查。'
    : answer === 'b'
      ? '对。16 个地址需要 4 位主机位，对应 /28；从 .48 到 .63，正好填满最后一段。'
      : '再看一眼地址轨道：C 从 .48 开始，要连续 16 个地址，所以需要 /28，而不是覆盖 32 个地址的 /27。';
});
