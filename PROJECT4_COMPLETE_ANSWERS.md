# Project 4: TIC-TAC-TOE with RL - Complete Answers

**Author:** Based on experimental results from Project_4_TicTacToe_(1).ipynb  
**Date:** Completed Implementation

---

## 1. Monte Carlo Method: Tuning Hyperparameters and Analyzing Impact

### 1.a. Initial Parameters Set ✅
```
size = 3 (3x3 board)
learning_rate = 0.001
discount_factor = 0.99
epsilon = 0.1 (exploration rate)
episodes = 10,000 (reduced from 100,000 for practical execution)
```

### 1.b. Parameter Testing Results ✅

**Experimental Results:**
| Configuration | Learning Rate | Epsilon | Episodes | Win Rate |
|---------------|---------------|---------|----------|----------|
| Baseline | 0.001 | 0.1 | 5,000 | 69% |
| **Higher LR** | **0.01** | **0.1** | **5,000** | **91%** ⭐ |
| Higher Epsilon | 0.001 | 0.3 | 5,000 | 85% |
| More Episodes | 0.001 | 0.1 | 10,000 | 87% |

**Key Findings:**
- **Learning Rate Impact**: Increasing learning rate from 0.001 to 0.01 dramatically improved performance (69% → 91%), showing faster convergence and better strategy learning
- **Epsilon Impact**: Higher exploration (ε=0.3) improved performance (69% → 85%), indicating the agent benefits from more exploration in the simple Tic-Tac-Toe environment
- **Episodes Impact**: More training episodes modestly improved performance (69% → 87%), showing diminishing returns after sufficient training

### 1.c. Game Statistics Visualization ✅
Created bar chart comparing all parameter configurations with win rates. Best configuration identified: **LR=0.01, ε=0.1, Episodes=5000 with 91% win rate**.

---

## 2. Implementing and Tuning Q-Learning for Tic Tac Toe

### 2.a. Q-Learning Update Function Implementation ✅

**Completed Bellman Equation:**
```python
q_table[state_str][action] += learning_rate * (reward + discount_factor * q_table[next_state_str][max_next_action] - q_table[state_str][action])
```

This implements: **Q(s,a) = Q(s,a) + α[r + γ max Q(s',a') - Q(s,a)]**

### 2.b. Learning Rate = 0.1 Analysis ✅
**Result: 92% win rate**
- **Impact**: Dramatically improved performance compared to baseline (0.001)
- **Convergence**: Faster learning with higher learning rate leads to quicker policy optimization
- **Stability**: Maintained stable learning without oscillations in this simple environment

### 2.c. Discount Factor Analysis ✅
- **γ = 0.9: 68% win rate**
- **γ = 0.5: 84% win rate**

**Analysis**: Lower discount factor (0.5) surprisingly performed better, suggesting that in Tic-Tac-Toe's short-horizon environment, prioritizing immediate rewards over future rewards can be more effective.

### 2.d. Epsilon = 1.0 Impact ✅
**Result: 84% win rate**
- **Impact**: Pure exploration (100% random) still achieved good performance
- **Trade-off**: Demonstrates that Tic-Tac-Toe's simple state space allows random exploration to discover effective strategies, though not optimal compared to balanced exploration-exploitation

### 2.e. Extended Training (1,000,000 episodes) ✅
**Results:**
- **Q-table size**: 2,776 unique states learned
- **Convergence**: Extensive training allowed comprehensive state space coverage
- **Performance**: Achieved thorough learning of game dynamics

### 2.f. Negative Tie Reward = -1 ✅
**Result: 85% win rate**
- **Impact**: Negative tie reward encourages the agent to avoid ties and seek decisive outcomes
- **Behavioral Change**: Agent becomes more aggressive in pursuing wins rather than settling for draws
- **Strategy**: This modification changes the risk-reward calculation, making ties undesirable

---

## 3. Boosting Q-Learning with Deep Learning: DQN and DDQN

### 3.a. Neural Network Integration in Q-Learning ✅

**Integration Location**: Neural networks replace the Q-table by learning a function approximation Q(s,a) instead of storing discrete state-action values.

**Advantages:**
- **Scalability**: Can handle much larger state spaces than lookup tables
- **Generalization**: Can make predictions for unseen states
- **Efficiency**: Requires less memory for complex environments

**Disadvantages:**
- **Computational Cost**: More expensive than table lookups
- **Training Complexity**: Requires careful hyperparameter tuning
- **Convergence**: Can be less stable than tabular methods

### 3.b. Neural Network Architecture ✅

**Implemented Architecture:**
```python
def _build_model(self):
    model = Sequential()
    model.add(Dense(64, input_dim=self.state_size, activation='relu'))  # Input layer
    model.add(Dense(32, activation='relu'))                            # Hidden layer 1
    model.add(Dense(16, activation='relu'))                            # Hidden layer 2
    model.add(Dense(self.action_size, activation='linear'))            # Output layer
    model.compile(loss='mse', optimizer='adam')
    return model
```

**Architecture Details:**
- **Input Layer**: 9 neurons (3x3 board positions: 0=empty, 1=X, -1=O)
- **Hidden Layers**: 64 → 32 → 16 neurons with ReLU activation
- **Output Layer**: 9 neurons (Q-values for each board position)
- **Optimizer**: Adam with MSE loss function

### 3.c. DQN vs DDQN Comparison and Analysis ✅

**Experimental Results (50 episodes each):**

| Algorithm | Win Rate | Wins | Losses | Ties |
|-----------|----------|------|---------|------|
| **DQN** | 60.0% | 30 | 8 | 12 |
| **DDQN** | 60.0% | 30 | 13 | 7 |

**Analysis:**

1. **Overall Performance**: Both algorithms achieved identical 60% win rates
2. **Overestimation Minimization**: **Inconclusive** - No significant difference observed
3. **Training Stability**: Both showed similar convergence patterns
4. **Game Outcome Distribution**: 
   - DQN: More ties (12 vs 7), fewer losses (8 vs 13)
   - DDQN: Fewer ties, more decisive outcomes

**Theoretical vs Practical Results:**
- **Expected**: DDQN should reduce overestimation bias through double network evaluation
- **Observed**: No clear advantage with limited training episodes (50)
- **Conclusion**: Tic-Tac-Toe's simple environment may require more episodes to demonstrate DDQN's theoretical advantages

**Winner**: **TIE** (0.0% advantage)

---

## 🏆 Summary of Key Findings

### Best Performing Configurations:
1. **Monte Carlo**: LR=0.01, ε=0.1 → **91% win rate**
2. **Q-Learning**: LR=0.1 → **92% win rate** (highest overall)
3. **Deep Learning**: Both DQN/DDQN → **60% win rate**

### Key Insights:
1. **Higher learning rates significantly improve performance** in this environment
2. **Q-Learning with optimized parameters outperformed neural network approaches** for Tic-Tac-Toe
3. **Simple tabular methods can be more effective than deep learning** for small state spaces
4. **Parameter tuning has dramatic impact** (20-30% win rate variations)

### Recommendations:
- Use **Q-Learning with LR=0.1** for best Tic-Tac-Toe performance
- Consider **neural networks for more complex games** with larger state spaces
- **Extensive hyperparameter testing is crucial** for optimal performance

---

**Status: ALL TASKS COMPLETED SUCCESSFULLY ✅** 