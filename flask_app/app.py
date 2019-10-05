from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/v1/evaluate/<text>')
def evaluate(text):
    #TODO: Canviar logica per execució de la IA 
    value = True
    if len(text) > 150:
        value = False
    return jsonify(result=value)