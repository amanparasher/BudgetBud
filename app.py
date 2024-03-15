from flask import Flask, render_template, request
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

app = Flask(__name__)

# Render index.html
@app.route('/')
def index():
    return render_template('hero.html')

# Perform analysis
@app.route('/analyze', methods=['POST'])
def analyze():
    file = request.files['csvFile']
    data = pd.read_csv(file)

    total_expenses = data['Amount'].sum()
    average_expense = data['Amount'].mean()
    max_expense = data['Amount'].max()
    min_expense = data['Amount'].min()

    X = data[['Date']] # Assuming 'Date' is the predictor variable
    y = data['Amount'] # Expense amount is the target variable

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)

    model = LinearRegression()
    model.fit(X_train, y_train)

    future_dates = [[2024], [2025]] # Example future dates for prediction
    future_expenses = model.predict(future_dates)

    return render_template('result.html', total=total_expenses, average=average_expense, 
                           maximum=max_expense, minimum=min_expense, future=future_expenses)

if __name__ == '__main__':
    app.run(debug=True)
