from datetime import datetime
from flask import Flask, jsonify, request
from elasticsearch import Elasticsearch
from utils import fill_data_from_csv


es = Elasticsearch(send_get_body_as='GET')

app = Flask(__name__)


@app.route('/', methods=['GET'])
def index():
    results = es.get(index='items', doc_type='products', id='1172027')
    return jsonify(results['_source'])


def create_index(es, index_name='items'):
    created = False
    # index settings
    settings = {
        "settings": {
            "number_of_shards": 1,
            "number_of_replicas": 0,
            "analysis" : {
                "analyzer" : {
                    "whitespace_lowercase" : {
                        "tokenizer" : "whitespace",
                        "filter" : ["lowercase", "porter_stem"]
                    }
                }
            }
        },
        "mappings": {
        },
    }
    try:
        if not es.indices.exists(index_name):
            # Ignore 400 means to ignore "Index Already Exist" error.
            es.indices.create(index=index_name, ignore=400, body=settings)
            print('Created Index')
        created = True
        fill_data_from_csv(es, filename='test.csv')
    except Exception as ex:
        print(str(ex))
    finally:
        return created


@app.route('/search', methods=['GET'])
def search():
    q = request.args.get('q')
    res = es.search(index="items", doc_type="products", q=q)
    return jsonify(res['hits']['hits'])


create_index(es)
app.run(port=5000, debug=True)
