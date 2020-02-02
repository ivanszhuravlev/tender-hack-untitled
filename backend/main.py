from datetime import datetime
from flask import Flask, jsonify, request, render_template
from flask_cors import CORS, cross_origin
from elasticsearch import Elasticsearch
from utils import create_index


es = Elasticsearch()

app = Flask(__name__, template_folder='dist')
CORS(app)


@app.route('/')
def root():
    return render_template('index.html')


@app.route('/search', methods=['GET'])
def search():
    q = request.args.get('q')
    res = es.search(index="items", doc_type="products", q=q)
    res = [r['_source'] for r in res['hits']['hits']]
    return jsonify(res)


@app.route('/search2', methods=['GET'])
def search2():
    q = request.args.get('q')
    params = dict(request.args)
    params.pop('q')
    res = es.search(index="items", doc_type="products", q=q, params=params)
    res = [r for r in res['hits']['hits']]
    return jsonify(res)


create_index(es)
