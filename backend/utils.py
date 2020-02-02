from csv import DictReader

def test():
    import requests
    res = {}
    # res = ''
    with open('new_text.txt') as f:
        texts = f.read()
    for text in texts.split('\n'):
        r = requests.get('https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20200202T024200Z.57aea9ef284eb035.3ccbc1ae7e661280d08d4f2933334549998569f1&lang=ru-ru&text={}'.format(text))
        syns = r.json()['def'] and r.json()['def'][0]['tr']
        syns = [s['text'] for s in syns if s]
        res[text] = syns
        # break

def fill_data_from_csv(es, filename, index='items'):
    with open(filename, newline='') as csv_file:
        reader = DictReader(csv_file)
        i = 0
        for row in reader:
            # if i % 2 == 1:
            #     continue
            i+=1
            data = {
                'index': index,
                'id': row['Id'],
                'doc_type': 'products',
                'body': row
            }
            es.create(**data)
            print(i)


def load_synonyms(filename='synonyms.txt'):
    with open(filename) as f:
        synonyms = f.read().split('\n')
    synonyms = [s for s in synonyms if len(s.split(',')[0].split(' ')) == 1]


def create_index(es, index_name='items'):
    created = False
    # index settings
    with open('syns.txt') as f:
        syns = f.read().split('\n')
    print(syns)
    settings = {
        "settings": {
            "analysis": {
                "filter": {
                    "ru_stop": {
                        "type": "stop",
                        "stopwords": "_russian_"
                    },
                    "ru_stemmer": {
                        "type": "stemmer",
                        "language": "russian"
                    },
                    "synonym": {
                        "type": "synonym",
                        "synonyms": ['блокировка, крепость, замок',
 'комок, переплетение, шкотовый угол, клубок',
 'раздолье, пространство, ширь, простор',
 'муниципальный, горожанин, городской',
 'конструкционный, железобетонный, строевой, строительный',
 'бриллиантовый, адамантовый, алмазный',
 'виола, контральто, инструмент, альт',
 'семья, серия, семейство',
 'тематический, вещественный, многопредметный, предметный',
 'очаровательный, блестящий, гламурный',
 'блестящий, лоснящийся, глянцевый',
 'пушинка, кристаллик, снежинка',
 'желтоватый, лимонный, золотистый',
 'клавиша, интерфейс, кнопка',
 'мопед, байк, мотоцикл',
 'корабль, яхта, махаон, парусник',
 'латунь, медный, бронза',
 'гвалт, шум, гам',
 'смачивание, полив, пароувлажнение, увлажнение',
 'интонация, предложение, нота',
 'токарный, фрезеровочный, фрезерный',
 'царский, ферзевый, богатый, королевский',
 'ирида, фиалковый корень, ирис',
 'жвачка, ластик, резинка',
 'грифельный карандаш, графит, стержень, грифель',
 'перелет, маршрут, вояж, рейс',
 'шуруповерт, винтоверт, перфоратор, дрель, отвертка',
 'ограничитель, спейсер, разделительный символ, разделитель',
 'апельсиновый, морковный, оранжевый',
 'древесный, неподвижный, деревянный',
 'ландшафт, циклорама, панорамный прицел, панорама',
 'форма, микрогеометрия, геометрия',
 'каштановый, темнокрасный, бордовый',
 'эмаль, лакец, лак']

                    }
                },
                "analyzer": {
                    "default": {
                        "tokenizer": "standard",
                        "filter": [
                            "lowercase",
                            "ru_stop",
                            "ru_stemmer",
                            "synonym"
                        ]
                    }
                }
            }
        }
    }
    try:
        if not es.indices.exists(index_name):
            # Ignore 400 means to ignore "Index Already Exist" error.
            print('Creating index')
            es.indices.create(index=index_name, ignore=400, body=settings)
            print('Index is created')
            print('Filling data')
            fill_data_from_csv(es, filename='full_data.csv')
            print('Data is filled')
        created = True
    except Exception as ex:
        print(str(ex))
    finally:
        return created
