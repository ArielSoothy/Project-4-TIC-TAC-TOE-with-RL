// TicTacToe — playable demo (Easy = random, Hard = Minimax) + win-rate chart.
// Safe DOM APIs (no innerHTML on user-derived content).

(function () {
  'use strict';

  // ---------- Game state ----------
  let board = ['', '', '', '', '', '', '', '', ''];
  let currentPlayer = 'X';
  let gameActive = true;
  let difficulty = 'hard';
  const stats = { win: 0, loss: 0, draw: 0 };

  const winLines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];

  function getEmpty(b) { return b.map((c, i) => c === '' ? i : -1).filter(i => i >= 0); }

  function winner(b, player) {
    return winLines.some(line => line.every(i => b[i] === player));
  }

  // ---------- Minimax (Hard) ----------
  function minimax(b, depth, isMax, ai, hu) {
    if (winner(b, ai)) return 10 - depth;
    if (winner(b, hu)) return depth - 10;
    if (!getEmpty(b).length) return 0;
    if (isMax) {
      let best = -Infinity;
      for (const i of getEmpty(b)) {
        b[i] = ai;
        best = Math.max(best, minimax(b, depth + 1, false, ai, hu));
        b[i] = '';
      }
      return best;
    } else {
      let best = Infinity;
      for (const i of getEmpty(b)) {
        b[i] = hu;
        best = Math.min(best, minimax(b, depth + 1, true, ai, hu));
        b[i] = '';
      }
      return best;
    }
  }

  function bestMove(ai) {
    const hu = ai === 'O' ? 'X' : 'O';
    let bestVal = -Infinity, bestIdx = -1;
    for (const i of getEmpty(board)) {
      board[i] = ai;
      const v = minimax(board, 0, false, ai, hu);
      board[i] = '';
      if (v > bestVal) { bestVal = v; bestIdx = i; }
    }
    return bestIdx;
  }

  // ---------- Render ----------
  let cells, statusEl, diffSel, newBtn;

  function setCell(i, mark) {
    const el = cells[i];
    el.replaceChildren(document.createTextNode(mark));
    el.classList.toggle('x', mark === 'X');
    el.classList.toggle('o', mark === 'O');
    el.setAttribute('aria-label', 'Cell ' + (i + 1) + ' ' + (mark || 'empty'));
  }

  function setStatus(text, kind) {
    statusEl.textContent = text;
    statusEl.dataset.kind = kind || '';
  }

  function updateStats() {
    document.getElementById('stat-win').textContent = String(stats.win);
    document.getElementById('stat-loss').textContent = String(stats.loss);
    document.getElementById('stat-draw').textContent = String(stats.draw);
  }

  function reset() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    cells.forEach((_, i) => setCell(i, ''));
    setStatus('Your turn (X) — pick any cell.', '');
  }

  // ---------- Turn flow ----------
  function userMove(i) {
    if (!gameActive || board[i] !== '' || currentPlayer !== 'X') return;
    board[i] = 'X';
    setCell(i, 'X');
    if (winner(board, 'X')) {
      gameActive = false;
      stats.win++; updateStats();
      setStatus('You won! 🎉', 'win');
      return;
    }
    if (!getEmpty(board).length) {
      gameActive = false;
      stats.draw++; updateStats();
      setStatus("Draw 🤝 — that's the optimal outcome vs Minimax.", 'draw');
      return;
    }
    currentPlayer = 'O';
    setStatus('Thinking…', '');
    setTimeout(aiMove, 250);
  }

  function aiMove() {
    let i;
    if (difficulty === 'hard') {
      i = bestMove('O');
    } else {
      const empty = getEmpty(board);
      i = empty[Math.floor(Math.random() * empty.length)];
    }
    if (i < 0) return;
    board[i] = 'O';
    setCell(i, 'O');
    if (winner(board, 'O')) {
      gameActive = false;
      stats.loss++; updateStats();
      setStatus(difficulty === 'hard'
        ? 'AI won — but Minimax forces a draw against optimal play. Try again.'
        : 'AI won (random got lucky 🎲). New game?', 'loss');
      return;
    }
    if (!getEmpty(board).length) {
      gameActive = false;
      stats.draw++; updateStats();
      setStatus(difficulty === 'hard'
        ? "Draw — that's the perfect outcome vs Minimax."
        : 'Draw 🤝', 'draw');
      return;
    }
    currentPlayer = 'X';
    setStatus('Your turn (X).', '');
  }

  // ---------- Keyboard nav ----------
  function handleKey(e) {
    const active = document.activeElement;
    if (!active || !active.classList.contains('cell')) return;
    const idx = parseInt(active.dataset.index, 10);
    const row = Math.floor(idx / 3), col = idx % 3;
    let target = idx;
    switch (e.key) {
      case 'ArrowRight': target = row * 3 + ((col + 1) % 3); break;
      case 'ArrowLeft':  target = row * 3 + ((col + 2) % 3); break;
      case 'ArrowDown':  target = ((row + 1) % 3) * 3 + col; break;
      case 'ArrowUp':    target = ((row + 2) % 3) * 3 + col; break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        userMove(idx);
        return;
      default: return;
    }
    const next = document.querySelector('.cell[data-index="' + target + '"]');
    if (next) next.focus();
  }

  // ---------- Win-rate chart ----------
  function cssVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }
  let chart = null;
  function buildChart() {
    const el = document.getElementById('winrateChart');
    if (!el || !window.Chart) return;
    if (chart) chart.destroy();
    const p = {
      text: cssVar('--text-muted'),
      grid: cssVar('--border'),
      good: cssVar('--success'),
      warn: cssVar('--warning'),
    };
    chart = new Chart(el, {
      type: 'bar',
      data: {
        labels: ['Q-Learning', 'Monte Carlo', 'DQN (100ep)', 'DDQN (100ep)'],
        datasets: [{
          label: 'Win % vs random opponent',
          data: [92, 91, 60, 60],
          backgroundColor: [p.good, p.good, p.warn, p.warn],
          borderRadius: 6,
          borderSkipped: false,
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: c => c.formattedValue + '% vs random' } }
        },
        scales: {
          x: { grid: { display: false }, ticks: { color: p.text, font: { size: 13 } } },
          y: { min: 0, max: 100, grid: { color: p.grid }, ticks: { color: p.text, callback: v => v + '%' } }
        }
      }
    });
  }

  // ---------- Init ----------
  function init() {
    cells = Array.from(document.querySelectorAll('.cell'));
    statusEl = document.getElementById('game-status');
    diffSel = document.getElementById('difficulty');
    newBtn = document.getElementById('new-game-btn');
    if (!cells.length || !statusEl) return;

    cells.forEach(c => {
      c.addEventListener('click', () => userMove(parseInt(c.dataset.index, 10)));
      c.addEventListener('keydown', handleKey);
    });
    if (diffSel) {
      diffSel.addEventListener('change', e => {
        difficulty = e.target.value;
        reset();
      });
    }
    if (newBtn) newBtn.addEventListener('click', reset);

    updateStats();
    buildChart();

    if (window.PortfolioTheme) {
      window.PortfolioTheme.onThemeChange(() => buildChart());
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
