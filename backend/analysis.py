import numpy as np
import pandas as pd

def remove_comma(string):
    return string.replace(',','')

def find_month(string):
    month_dict = {1:'January',2:'February',3:'March',4:'April',5:'May',6:'June',7:'July',8:'August',9:'September',10:'October',11:'November',12:'December'}
    month = int(string.split('/')[1])
    return month_dict[month]

data = pd.read_csv('../spending.csv')
data['description'] = data['description'].fillna('misc')

data['amount'] = data['amount'].map(remove_comma).copy()
data['amount'] = data['amount'].astype(int)

data['month'] = data['date'].apply(find_month)
data_by_month = data.groupby('month',sort=False)['amount'].sum() * -1