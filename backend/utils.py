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
