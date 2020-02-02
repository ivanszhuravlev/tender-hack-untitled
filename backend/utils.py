from csv import DictReader


def fill_data_from_csv(es, filename, index='items'):
    with open(filename, newline='') as csv_file:
        reader = DictReader(csv_file)
        for row in reader:
            data = {
                'index': index,
                'id': row['Id'],
                'doc_type': 'products',
                'body': row
            }
            es.create(**data)


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
    }
    try:
        if not es.indices.exists(index_name):
            # Ignore 400 means to ignore "Index Already Exist" error.
            es.indices.create(index=index_name, ignore=400, body=settings)
            print('Created Index')
        created = True
        fill_data_from_csv(es, filename='full_data.csv')
    except Exception as ex:
        print(str(ex))
    finally:
        return created
