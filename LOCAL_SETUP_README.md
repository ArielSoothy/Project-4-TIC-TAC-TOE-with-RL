# Tic Tac Toe Reinforcement Learning - Local Setup Guide

This project implements various reinforcement learning algorithms (Monte Carlo, Q-Learning, DQN, DDQN) to train agents that can play Tic Tac Toe.

## 🚀 Quick Start

### Option 1: Automatic Setup (Recommended)

1. **Run the setup script:**
   ```bash
   python setup_local.py
   ```

2. **Start Jupyter Notebook:**
   ```bash
   jupyter notebook
   ```

3. **Open the notebook:**
   - Open `Copy_of_Project_4_TicTacToe_(1) (1).ipynb`

### Option 2: Manual Setup

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Create models directory:**
   ```bash
   mkdir models
   ```

## 📋 Requirements

- Python 3.7+
- Jupyter Notebook
- Required packages (see `requirements.txt`)

## 🎯 Project Structure

```
Project-4-TIC-TAC-TOE-with-RL/
├── Copy_of_Project_4_TicTacToe_(1) (1).ipynb  # Main notebook
├── task.txt                                    # Project requirements
├── requirements.txt                           # Python dependencies
├── setup_local.py                             # Automatic setup script
├── models/                                    # Directory for saved models
└── LOCAL_SETUP_README.md                      # This file
```

## 🔧 Key Changes Made for Local Execution

1. **Removed Google Colab dependencies** - No more drive mounting
2. **Fixed local file paths** - Models save to `./models/` directory
3. **Reduced training episodes** - For faster local testing:
   - Monte Carlo: 100,000 → 10,000 episodes
   - Q-Learning: 1,000,000 → 50,000 episodes
   - DQN: 100 → 1,000 episodes
4. **Completed DQN architecture** - Added proper neural network layers
5. **Fixed bugs** - Corrected `random.choise` → `random.choice`
6. **Added TensorFlow compatibility** - Works with both standalone Keras and TensorFlow

## 🧪 What You'll Learn

### 1. Monte Carlo Method (Task 1)
- Hyperparameter tuning and analysis
- Performance impact of different parameters
- Plotting win/loss/draw rates

### 2. Q-Learning (Task 2)
- Complete the `update_q_table` function
- Experiment with learning rate, discount factor, epsilon
- Analyze the impact of different reward structures

### 3. Deep Q-Networks (Task 3)
- DQN vs DDQN comparison
- Neural network architecture for Tic Tac Toe
- Deep learning approaches to reinforcement learning

## 🏃‍♂️ Running the Experiments

1. **Start with Monte Carlo (Cell 10):**
   - Run the default parameters
   - Experiment with different hyperparameters
   - Compare results

2. **Move to Q-Learning (Cell 21):**
   - Train the Q-learning agent
   - Test different parameter settings
   - Analyze the Q-table

3. **Try Deep Q-Networks (Cell 37):**
   - Train DQN agent
   - Switch to DDQN and compare
   - Evaluate performance differences

## 📊 Expected Outputs

- **Training Progress:** Progress bars showing training status
- **Game Statistics:** Win/loss/tie rates for each algorithm
- **Visualizations:** Plots showing training progress and game outcomes
- **Saved Models:** Trained models saved in `./models/` directory

## 🔍 Troubleshooting

### Common Issues:

1. **ModuleNotFoundError:**
   - Run `python setup_local.py` to install dependencies
   - Or manually: `pip install -r requirements.txt`

2. **TensorFlow/Keras Issues:**
   - Install TensorFlow: `pip install tensorflow`
   - Restart Jupyter kernel after installation

3. **Memory Issues:**
   - Reduce training episodes if your system runs out of memory
   - Close other applications while training

4. **Slow Training:**
   - Training episodes have been reduced for local testing
   - You can further reduce them in the respective cells if needed

## 🎮 Playing Against Trained Agents

After training, you can watch the agents play:
- **Monte Carlo agent** (Cell 12)
- **Q-Learning agent** (Cell 30)
- **DQN/DDQN agent** (Cell 44)

## 📈 Performance Tips

- **For faster training:** Reduce episode counts further
- **For better performance:** Increase episodes and tune hyperparameters
- **For analysis:** Enable plotting and save results

## 🤝 Contributing

Feel free to experiment with:
- Different neural network architectures
- Alternative reward structures
- New hyperparameter configurations
- Additional RL algorithms

Happy learning! 🎓 