# Project 4: TIC-TAC-TOE with Reinforcement Learning

This project implements an advanced Tic Tac Toe game using various reinforcement learning algorithms including Monte Carlo method, Q-learning, Deep Q-Network (DQN), and Double Deep Q-Network (DDQN).

## 📁 Project Structure

- `Copy_of_Project_4_TicTacToe_(1) (1).ipynb` - Complete Jupyter notebook with all implementations
- `task.txt` - Original project requirements and tasks
- `Project4_Answers.md` - Analysis document showing completed work and TODO items
- `.vscode/` - VS Code settings

## 🎯 Project Goals

Train AI agents to master Tic Tac Toe using different reinforcement learning approaches:

1. **Monte Carlo Method** - Learn through complete episode experiences
2. **Q-Learning** - Value-based learning with Bellman equation
3. **DQN (Deep Q-Network)** - Neural network-based Q-learning
4. **DDQN (Double DQN)** - Improved DQN to reduce overestimation bias

## ✅ Completed Features

- ✅ Complete Tic Tac Toe game environment
- ✅ Monte Carlo implementation with configurable parameters
- ✅ Q-learning with epsilon-greedy strategy and Bellman equation
- ✅ DQN/DDQN neural network agents
- ✅ Experience replay and target networks
- ✅ Training loops and model persistence
- ✅ Game visualization and statistics

## 🔧 Implementation Highlights

### Monte Carlo Method
- Epsilon-greedy action selection
- Episode-based Q-table updates
- Configurable learning parameters

### Q-Learning
- Bellman equation implementation
- State-action value table
- Dynamic epsilon decay

### Deep Q-Networks
- Neural network function approximation
- Experience replay buffer
- Target network stabilization
- Support for both DQN and DDQN algorithms

## 🚀 Getting Started

1. Open the Jupyter notebook: `Copy_of_Project_4_TicTacToe_(1) (1).ipynb`
2. Install required dependencies:
   ```python
   import pickle, numpy as np, random
   from tqdm import tqdm
   from collections import deque
   import matplotlib.pyplot as plt
   from keras.models import Sequential
   from keras.layers import Dense, Flatten, Conv2D, Conv1D
   ```
3. Run cells sequentially to train and test the agents

## 📊 Results

The project demonstrates successful training of RL agents that can:
- Learn optimal Tic Tac Toe strategies
- Adapt to different parameter configurations
- Achieve high win rates against random opponents

## 🔍 Analysis Status

See `Project4_Answers.md` for detailed breakdown of completed work and remaining analysis tasks.

## 🤝 Contributing

This is an academic project. Feel free to explore the implementations and adapt them for your own learning purposes.

## 📝 License

This project is for educational purposes as part of a reinforcement learning course.
