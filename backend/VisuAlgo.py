# visuAlgo.py
'''
Main API Script using Flask
'''

from flask import Flask, jsonify, request
import algorithms.sort as sort

app = Flask(__name__)

@app.route('/sort', methods=['POST'])
def sort():
    print("Sort")
    data = request.get_json()
    array = data.get('array')
    algorithm = data.get('algorithm')
    
    if algorithm == 'sorting_algorithm':
        steps = sort.sorting_algorithm(array)
    else:
        return jsonify({'error:' 'Unknown algorithm'}), 400
    return jsonify({'steps': steps})

if __name__ == '__main__':
    app.run(debug=True)
