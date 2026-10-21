(() => {
  'use strict';

  const modes = {
    simplex: {
      title: '单工 · 单向通信', counter: '01 / 03',
      label: '单工：只有 A 向 B 发送信息，B 不能通过同一通信方式向 A 回传。',
      caption: 'A → B；只有一个传送方向。',
      description: '单工只能朝一个方向传送信息；接收方不能通过同一通信方式回传。',
      observation: '广播是典型例子：广播站发送，收音机接收；收音机不能沿这条广播链路回话。'
    },
    half: {
      title: '半双工 · 双向轮流', counter: '02 / 03',
      description: '半双工可以双向传送，但同一时刻只能有一方发送；换方向前，要等另一方说完。',
      observation: '像使用对讲机：按键讲话时对方只能听；松开后，对方才可以按键回话。'
    },
    full: {
      title: '全双工 · 同时双向', counter: '03 / 03',
      label: '全双工：A 向 B 发送信息与 B 向 A 发送信息可以同时进行。',
      caption: 'A → B 与 B → A；两个方向同时传送。',
      description: '全双工允许两个方向在同一时刻传送信息；双方可以同时发送，也可以同时接收。',
      observation: '视频通话中，两人可以同时说话并听见对方，不用轮流占用一个发送方向。'
    }
  };

  const buttons = [...document.querySelectorAll('.duplex-mode')];
  const title = document.getElementById('mode-title');
  const counter = document.getElementById('mode-counter');
  const diagram = document.getElementById('direction-diagram');
  const forward = document.getElementById('lane-forward');
  const backward = document.getElementById('lane-backward');
  const caption = document.getElementById('diagram-caption');
  const description = document.getElementById('mode-description');
  const observation = document.getElementById('mode-observation');
  const reverseControl = document.getElementById('reverse-control');
  const reverseButton = document.getElementById('reverse-button');
  let halfDirection = 'forward';
  let currentMode = 'simplex';

  function render() {
    const mode = modes[currentMode];
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.mode === currentMode)));
    title.textContent = mode.title;
    counter.textContent = mode.counter;
    description.textContent = mode.description;
    observation.textContent = mode.observation;
    reverseControl.hidden = currentMode !== 'half';
    backward.hidden = currentMode === 'simplex';
    forward.classList.toggle('is-active', currentMode !== 'half' || halfDirection === 'forward');
    backward.classList.toggle('is-active', currentMode === 'full' || currentMode === 'half' && halfDirection === 'backward');

    if (currentMode === 'half') {
      const goingForward = halfDirection === 'forward';
      diagram.setAttribute('aria-label', goingForward
        ? '半双工：现在 A 向 B 发送信息，B 暂时不能向 A 发送。点击换方向后，可以由 B 向 A 发送，但无法同时双向发送。'
        : '半双工：现在 B 向 A 发送信息，A 暂时不能向 B 发送。可以轮流换方向，但无法同时双向发送。');
      caption.textContent = goingForward ? '此刻 A → B；B → A 暂停，不能同时发送。' : '此刻 B → A；A → B 暂停，不能同时发送。';
      reverseButton.textContent = goingForward ? '换到 B → A' : '换到 A → B';
    } else {
      diagram.setAttribute('aria-label', mode.label);
      caption.textContent = mode.caption;
    }
  }

  buttons.forEach(button => button.addEventListener('click', () => {
    currentMode = button.dataset.mode;
    halfDirection = 'forward';
    render();
  }));

  reverseButton.addEventListener('click', () => {
    halfDirection = halfDirection === 'forward' ? 'backward' : 'forward';
    render();
  });

  const form = document.getElementById('practice-form');
  const feedback = document.getElementById('practice-feedback');
  form.addEventListener('submit', event => {
    event.preventDefault();
    const answer = new FormData(form).get('answer');
    if (!answer) {
      feedback.dataset.result = 'incorrect';
      feedback.textContent = '请先选择一个答案，再检查。';
      form.querySelector('input[name="answer"]').focus();
    } else if (answer === 'full') {
      feedback.dataset.result = 'correct';
      feedback.textContent = '答对了！全双工允许双方同时发送和接收，视频通话就是例子。';
    } else {
      feedback.dataset.result = 'incorrect';
      feedback.textContent = answer === 'half'
        ? '再想想：半双工虽然能双向通信，但同一时刻只能一方发送。'
        : '再想想：单工只能单向传送，另一方不能沿同一链路回话。';
    }
  });

  form.addEventListener('change', () => {
    feedback.textContent = '';
    delete feedback.dataset.result;
  });
})();
