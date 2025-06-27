#!/usr/bin/env python3
"""
Setup script for Tic Tac Toe Reinforcement Learning Project
This script installs the required dependencies for local execution.
"""

import subprocess
import sys
import os

def install_package(package):
    """Install a package using pip."""
    try:
        subprocess.check_call([sys.executable, "-m", "pip", "install", package])
        print(f"✅ Successfully installed {package}")
        return True
    except subprocess.CalledProcessError:
        print(f"❌ Failed to install {package}")
        return False

def check_and_install_dependencies():
    """Check and install required dependencies."""
    required_packages = [
        "numpy>=1.21.0",
        "matplotlib>=3.5.0", 
        "tqdm>=4.64.0",
        "pandas>=1.4.0",
        "tensorflow>=2.8.0",
        "scikit-learn>=1.1.0"
    ]
    
    print("🚀 Setting up Tic Tac Toe RL Environment...")
    print("=" * 50)
    
    failed_packages = []
    
    for package in required_packages:
        print(f"Installing {package}...")
        if not install_package(package):
            failed_packages.append(package)
    
    # Create models directory
    os.makedirs("models", exist_ok=True)
    print("📁 Created models directory")
    
    print("=" * 50)
    if failed_packages:
        print(f"❌ Failed to install: {', '.join(failed_packages)}")
        print("Please install them manually using:")
        for package in failed_packages:
            print(f"   pip install {package}")
        return False
    else:
        print("✅ All dependencies installed successfully!")
        print("🎮 You can now run the Jupyter notebook locally!")
        return True

if __name__ == "__main__":
    success = check_and_install_dependencies()
    sys.exit(0 if success else 1) 