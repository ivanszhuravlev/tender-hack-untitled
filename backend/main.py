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


# @app.route('/search', methods=['GET'])
# def search():
#     q = request.args.get('q')
#     params = dict(request.args)
#     params.pop('q')
#     res = es.search(index="items", doc_type="products", q=q, params=params)
#     res = [r['_source'] for r in res['hits']['hits']]
#     return jsonify(res)


@app.route('/search', methods=['GET'])
def search():
    q = request.args.get('q')
    params = dict(request.args)
    params.pop('q')
    body = {
        "query": {
            "match": {
                "Наменование" : {
                    "query" : q,
                    "fuzziness": "AUTO"
                }
            }
        },
    }
    # print(body)
    res = es.search(index="items", doc_type="products", body=body, params=params)
    res = [r['_source']  for r in res['hits']['hits']]
    return jsonify(res)


@app.route('/autocomplete', methods=['GET'])
def autocomplete():
    q = request.args.get('q')
    params = dict(request.args)
    params.pop('q')
    body = {
        "suggest": {
            "text" : q,
            "autocomplete" : {
                "term" : {
                    "field" : "Наменование"
                }
            }
        },
        "size": 7
    }
    # print(body)
    res = es.search(index="items", doc_type="products", body=body, params=params)
    res = [r['text'] for r in res['suggest']['autocomplete'][0]['options']]
    return jsonify(res)




@app.route('/create_indexes')
def create_indexes():
    create_index(es)
    return ''
