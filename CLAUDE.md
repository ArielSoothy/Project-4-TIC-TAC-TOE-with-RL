# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an academic reinforcement learning project implementing Tic Tac Toe using various RL algorithms:
- Monte Carlo method
- Q-learning with Bellman equation
- Deep Q-Network (DQN)
- Double Deep Q-Network (DDQN)

The main implementation is in Jupyter notebooks with Python code for training AI agents to master Tic Tac Toe.

## Development Commands

### Environment Setup
```bash
# Option 1: Automatic setup (recommended)
python setup_local.py

# Option 2: Manual setup
pip install -r requirements.txt
mkdir models
```

### Running the Project
```bash
# Start Jupyter notebook server
jupyter notebook

# Open the main notebook
# File: Project_4_TicTacToe_(1).ipynb or Copy_of_Project_4_TicTacToe_(1) (1).ipynb
```

### Dependencies
Core Python packages required:
- numpy>=1.21.0
- matplotlib>=3.5.0  
- tqdm>=4.64.0
- pandas>=1.4.0
- tensorflow>=2.8.0
- scikit-learn>=1.1.0

## Architecture

### Core Components

**TicTacToe Game Engine** (`Project_4_TicTacToe_(1).ipynb` cells 6-7):
- `TicTacToe` class: Game environment with configurable board size
- Methods: `make_move()`, `winner()`, `available_moves()`, `print_board()`
- State representation: List of characters (' ', 'X', 'O')

**Monte Carlo Implementation** (cells 8-13):
- `TicTacToeMonteCarlo` class with epsilon-greedy action selection
- Q-table stored as nested dictionary: `{'state_string': {action: q_value}}`
- Episode-based learning with configurable learning rate, discount factor, epsilon

**Q-Learning Implementation** (cells 14-34):
- Traditional Q-learning with Bellman equation updates
- Separate functions: `state_to_str()`, `select_action()`, `update_q_table()`
- Experience replay and epsilon decay during training

**Deep Q-Networks** (cells 35-50):
- `DQNAgent` class using Keras/TensorFlow
- Neural network architecture: Dense layers (64→32→16→action_size)
- Experience replay buffer (deque with maxlen=2000)
- Target network updates every 10 episodes
- Support for both DQN and DDQN algorithms

### File Structure
- `models/`: Directory for saved trained models (Q-tables, neural networks)
- `*.h5`: Keras model files for DQN/DDQN agents
- `*.pkl`: Pickle files for Q-learning tables
- `*.csv`: Training statistics and game results
- `*.jpg`: Generated plots and visualizations

### State Representation
- **Game state**: 9-element list for 3x3 board
- **Neural network input**: Reshaped to `[0, 1, -1]` for `[' ', 'X', 'O']`
- **Q-table keys**: Concatenated string representation of board state

### Training Parameters
Default configurations optimized for local execution:
- Monte Carlo: 10,000 episodes (reduced from 100,000)
- Q-Learning: 50,000 episodes (reduced from 1,000,000)  
- DQN: 100 episodes (reduced from 1,000)
- Learning rates: 0.001-0.01 depending on algorithm
- Epsilon decay: 0.995 with minimum 0.01

## Key Implementation Notes

- All Google Colab dependencies have been removed for local execution
- Models save to `./models/` directory automatically created by `setup_local.py`
- Training episodes reduced for faster local testing while maintaining learning effectiveness
- Reward structure: Win=+1, Lose=-10 (Q-learning) or 0 (Monte Carlo), Tie=0.5, Step=0.0001
- Random opponent used for training and evaluation across all algorithms

## Working with the Codebase

- The notebook is self-contained with all classes and functions defined inline
- Each algorithm section can be run independently after loading required libraries
- Model persistence allows saving/loading trained agents for continued experimentation
- Visualization functions generate plots for training progress and game statistics