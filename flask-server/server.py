from flask import Flask, request, jsonify 
from sklearn.linear_model import LinearRegression
import joblib

app = Flask(__name__)
model = joblib.load('Player-value-predictor.joblib')

@app.route('/members')
def members():
  return{'members': ["member1", "member2", "member3"]}

@app.route('/predict', methods=['POST'])
def predict():
  data = request.get_json()
  age = int(data['age'])
  goals = int(data['goals'])
  assists = int(data['assists'])
  league = int(data['league'])
  games = int(data['games'])
  starts = int(data['starts'])
  ppg = int(data['ppg'])
  print(starts)
  prediction = model.predict([[age, goals, assists, league, 5, games, starts, ppg]])
  print(prediction)
  prediction_data = {'value': prediction[0]}
  print(prediction_data)

  return(prediction_data)

if __name__=='__main__':
  app.run(debug=True)