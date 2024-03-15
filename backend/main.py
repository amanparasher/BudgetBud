import pandas as pd
import numpy as np
import os

# Specify the path of the directory you want to open
directory_path = 'backend/data'

# Change the current working directory to the specified directory
os.chdir(directory_path)

data = pd.read_csv("expense.csv")
print(data)