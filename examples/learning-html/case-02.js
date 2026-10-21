(() => {
  'use strict';

  const steps = [
    {
      title: '浏览器写下 HTTP 内容',
      description: '浏览器生成 HTTP 请求。接下来，内容会被交给下层；每一层将它视作需要承载的上层数据。',
      tip: '从上到下：应用层 → 传输层 → 网络层 → 链路层。',
      equation: 'HTTP PDU = HTTP 内容',
      segments: [{ kind: 'http', label: 'HTTP 内容', sub: '浏览器请求' }]
    },
    {
      title: 'TCP 加入自己的头部',
      description: '传输层把整个 HTTP 内容当作载荷，在外侧加入 TCP 头部，形成此层的 PDU；上层内容仍在里面。',
      tip: 'TCP 头部可以包含源、目的端口及序号等控制信息；图中不代表实际字节比例。',
      equation: 'TCP PDU = TCP 头部 + HTTP 内容',
      segments: [{ kind: 'tcp', label: 'TCP 头部', sub: '传输层' }, { kind: 'http', label: 'HTTP 内容', sub: '上层载荷' }]
    },
    {
      title: 'IP 再包一层',
      description: '网络层不拆开 TCP 的内容，而是把「TCP 头部 + HTTP 内容」整体包进 IP PDU，并添加 IP 头部。',
      tip: '看外层：新的头部总是出现在前面，旧的 PDU 作为完整载荷留在里面。',
      equation: 'IP PDU = IP 头部 + [TCP 头部 + HTTP 内容]',
      segments: [{ kind: 'ip', label: 'IP 头部', sub: '网络层' }, { kind: 'tcp', label: 'TCP 头部', sub: '传输层' }, { kind: 'http', label: 'HTTP 内容', sub: '上层载荷' }]
    },
    {
      title: '802.11 把它带到无线链路',
      description: '在讲义的无线主机示例中，链路层在最外侧加入 802.11 的信息，承载整份 IP PDU；封装就像给已有信封再套一层。',
      tip: '802.11 是无线链路的一个例子，并非互联网所有链路都采用它；实际帧也可能带尾部。',
      equation: '802.11 PDU（简化）= 802.11 头部 + [IP 头部 + TCP 头部 + HTTP 内容]',
      segments: [{ kind: 'wifi', label: '802.11 头部', sub: '链路层示例' }, { kind: 'ip', label: 'IP 头部', sub: '网络层' }, { kind: 'tcp', label: 'TCP 头部', sub: '传输层' }, { kind: 'http', label: 'HTTP 内容', sub: '上层载荷' }]
    }
  ];

  const packet = document.getElementById('packet');
  const canvas = document.getElementById('packet-description');
  const next = document.getElementById('next-step');
  const progress = Array.from(document.querySelectorAll('[data-step]'));
  let current = 0;

  function render(index) {
    current = index;
    const step = steps[index];
    packet.replaceChildren();
    step.segments.forEach(({ kind, label, sub }) => {
      const segment = document.createElement('div');
      segment.className = `enc-segment ${kind}`;
      const heading = document.createElement('span');
      heading.className = 'seg-label';
      heading.textContent = label;
      const caption = document.createElement('span');
      caption.className = 'seg-sub';
      caption.textContent = sub;
      segment.append(heading, caption);
      packet.append(segment);
    });
    canvas.setAttribute('aria-label', `第 ${index + 1} 步。${step.equation}。外层是左侧新增头部；上层数据留在右侧内部。`);
    document.getElementById('step-number').textContent = String(index + 1).padStart(2, '0');
    document.getElementById('step-count').textContent = `${String(index + 1).padStart(2, '0')} / 04`;
    document.getElementById('step-title').textContent = step.title;
    document.getElementById('step-description').textContent = step.description;
    document.getElementById('step-tip').textContent = step.tip;
    document.getElementById('equation').textContent = step.equation;
    progress.forEach((button, buttonIndex) => {
      if (buttonIndex === index) button.setAttribute('aria-current', 'step');
      else button.removeAttribute('aria-current');
    });
    next.disabled = index === steps.length - 1;
    next.textContent = next.disabled ? '已完成封装 ✓' : '封装下一层 →';
  }

  progress.forEach(button => button.addEventListener('click', () => render(Number(button.dataset.step))));
  next.addEventListener('click', () => render(Math.min(current + 1, steps.length - 1)));
  document.getElementById('reset-step').addEventListener('click', () => render(0));

  document.getElementById('quiz-form').addEventListener('submit', event => {
    event.preventDefault();
    const selected = document.querySelector('input[name="answer"]:checked');
    const feedback = document.getElementById('quiz-feedback');
    if (!selected) {
      feedback.removeAttribute('data-result');
      feedback.textContent = '先选择一个答案，再检查。';
      return;
    }
    if (selected.value === 'b') {
      feedback.dataset.result = 'correct';
      feedback.textContent = '答对了。下层把上层整个 PDU 当作载荷：IP PDU = IP 头部 + [TCP 头部 + HTTP 内容]。逻辑 peer 关系不等于越层直接传输。';
    } else {
      feedback.dataset.result = 'incorrect';
      feedback.textContent = selected.value === 'a'
        ? '再想想：IP 不会删除 TCP 的信息。它添加自己的头部，把 TCP PDU 整体当作载荷，正确答案是 B。'
        : '再想想：HTTP 两端是逻辑上的 peer；实际数据仍要逐层经过 TCP、IP 及链路层，正确答案是 B。';
    }
  });

  render(0);
})();
