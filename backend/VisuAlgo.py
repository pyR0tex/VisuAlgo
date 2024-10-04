# visuAlgo.py
'''
Main API Script using Flask
'''

from flask import Flask, jsonify, request
from algorithms.sort import sorting_algorithm
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/sort', methods=['POST'])
def sort():
    print("Sort")
    data = request.get_json()
    array = data['array']
    algorithm = data.get('algorithm')
    
    if algorithm == 'sorting_algorithm':
        steps = sorting_algorithm(array)
    else:
        return jsonify({'error:' 'Unknown algorithm'}), 400
    return jsonify({'steps': steps})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
