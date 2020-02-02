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
            },
            "ngram" : {
                "term" : {
                    "string_distance": "ngram",
                    "field" : "Наменование"
                }
            },
            "levenshtein" : {
                "term" : {
                    "string_distance": "levenshtein",
                    "field" : "Наменование"
                }
            },
            "damerau_levenshtein" : {
                "term" : {
                    "string_distance": "damerau_levenshtein",
                    "field" : "Наменование"
                }
            },
            "jaro_winkler" : {
                "term" : {
                    "string_distance": "jaro_winkler",
                    "field" : "Наменование"
                }
            },
        },
        "size": 7,
    }
    r = es.search(index="items", doc_type="products", body=body, params=params)
    print(r)
    q = []
    for k,v in body['suggest'].items():
        if k == 'text':
            continue
        

        res = r['suggest'][k]
        if len(res):
            r_opt = [r['text'] for r in res[0]['options']]
        else:
            r_opt = []
        r_text = [z['text'] for z in res]
        q.extend(r_opt + r_text)
    return jsonify(list(set(q)))




@app.route('/create_indexes')
def create_indexes():
    create_index(es)
    return ''
