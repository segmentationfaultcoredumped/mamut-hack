from flask import Flask, jsonify
from joblib import load 

app = Flask(__name__)

@app.route('/api/v1/evaluate/<text>')
def evaluate(text):
    print(text)
    clf = load('clf_v2.joblib')
    
    print("text: " + text)
    predict = clf.predict([text])


    return jsonify(result=predict)
    # return jsonify(result=predict)
