from flask import Flask, request, jsonify 
from flask_cors import CORS , cross_origin
from sklearn.linear_model import LinearRegression
import joblib

app = Flask(__name__, static_folder='../client/build', static_url_path='')
CORS(app)
model = joblib.load('Player-value-predictor.joblib')

@app.route('/members')
def members():
  return{'members': ["member1", "member2", "member3"]}

@app.route('/predict', methods=['POST'])
@cross_origin()
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

@app.route('/')
@cross_origin()
def serve():
  return send_from_directory(app.static_folder, 'index.html')

if __name__=='__main__':
  app.run(debug=True, port='5000')