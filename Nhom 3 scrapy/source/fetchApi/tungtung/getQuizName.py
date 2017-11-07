import json
import codecs, os
import urllib3
from multiprocessing import Pool, Process

http = urllib3.PoolManager()

folderData = '/Volumes/DATA/STUDY/Vandehiendai/git/tungtung/data/'
pathQuizLists = folderData + 'quizLists.json'
apiRelative = 'http://sv1.tungtung.co:1902/quiz-lists/'
count = 0


def collect_information(quiz):
    slug = quiz.get('slug')
    # save to file json
    export_to_file(data=quiz, outputPath=folderData + '/' + slug + '/info.json')


def collect_questions(quiz):
    slug = quiz.get('slug')
    response = http.request(method='get', url=apiRelative + slug + '/only-view')
    export_to_file(json.loads(response.data.decode('utf-8')),
                   outputPath=folderData + '/' + slug + '/questions_answers.json')

def collect_key(quiz):
    slug = quiz.get('slug')

    response = http.request(method='get', url=apiRelative + slug + '/correct-answers',
                            headers={
                                'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwiX2lkIjoiNTgwNjE2YmE4YzFiZjYwYjUyZDM4YWMwIiwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsiZm9sbG93ZWRfdXNlcnMiOiJpbml0IiwiZm9sbG93ZWRfdGFncyI6ImluaXQiLCJjcmVhdGVkX2F0IjoiaW5pdCIsInVwZGF0ZWRfYXQiOiJpbml0IiwiYWRtaW4iOiJpbml0IiwiYmFsYW5jZSI6ImluaXQiLCJhdmF0YXIiOiJpbml0IiwiX192IjoiaW5pdCIsInBhc3N3b3JkIjoiaW5pdCIsInVzZXJuYW1lIjoiaW5pdCIsImZhY2Vib29rSUQiOiJpbml0IiwiZ2VuZGVyIjoiaW5pdCIsImZ1bGxuYW1lIjoiaW5pdCIsImVtYWlsIjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7ImFkbWluIjp0cnVlLCJiYWxhbmNlIjp0cnVlLCJ1cGRhdGVkX2F0Ijp0cnVlLCJjcmVhdGVkX2F0Ijp0cnVlLCJhdmF0YXIiOnRydWUsIl9fdiI6dHJ1ZSwiZm9sbG93ZWRfdXNlcnMiOnRydWUsImZvbGxvd2VkX3RhZ3MiOnRydWUsInBhc3N3b3JkIjp0cnVlLCJ1c2VybmFtZSI6dHJ1ZSwiZmFjZWJvb2tJRCI6dHJ1ZSwiZ2VuZGVyIjp0cnVlLCJmdWxsbmFtZSI6dHJ1ZSwiZW1haWwiOnRydWUsIl9pZCI6dHJ1ZX0sIm1vZGlmeSI6e30sInJlcXVpcmUiOnt9fSwic3RhdGVOYW1lcyI6WyJyZXF1aXJlIiwibW9kaWZ5IiwiaW5pdCIsImRlZmF1bHQiLCJpZ25vcmUiXX0sInBhdGhzVG9TY29wZXMiOnt9LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsiZm9sbG93ZWRfdXNlcnMiOltdLCJmb2xsb3dlZF90YWdzIjpbXSwiY3JlYXRlZF9hdCI6IjIwMTYtMDktMTJUMTQ6MTY6MzIuNTI2WiIsInVwZGF0ZWRfYXQiOiIyMDE3LTAzLTA1VDExOjMwOjQwLjEzOFoiLCJpc1BhcnRuZXIiOmZhbHNlLCJhZG1pbiI6ZmFsc2UsImJhbGFuY2UiOjAsImF2YXRhciI6IjU4MDYxNmJhOGMxYmY2MGI1MmQzOGFjMC5qcGciLCJfX3YiOjAsInBhc3N3b3JkIjoiJDJhJDEwJE95bnFqVDRzbmlnNWhRdTNXUFkzOGVhL0xCMDhoa1hCZGNvTEpNWkx2NERzZDVuTVVOek11IiwidXNlcm5hbWUiOiJ0dWFudG0xOTk2IiwiZmFjZWJvb2tJRCI6IjE2MDc4MTc5MDk1MjAzNjIiLCJnZW5kZXIiOiJtYWxlIiwiZnVsbG5hbWUiOiJUcuG6p24gTWluaCBUdeG6pW4iLCJlbWFpbCI6InR1YW50bXRiQG91dGxvb2suY29tIiwiX2lkIjoiNTgwNjE2YmE4YzFiZjYwYjUyZDM4YWMwIn0sIiRpbml0Ijp0cnVlLCJpYXQiOjE1MDgwNTA1OTIsImV4cCI6MTUxMDY0MjU5Mn0.2LL51vASMqR9D8Uptk3hBDjIsm7kqwTd9_mRlgBGLiM'
                            })

    export_to_file(json.loads(response.data.decode('utf-8')),
                   outputPath=folderData + '/' + slug + '/key.json')


def export_to_file(data, outputPath):
    os.makedirs(os.path.dirname(outputPath), exist_ok=True)
    with codecs.open(outputPath, 'w', 'utf8') as f:
        f.write(json.dumps(data, sort_keys=True, ensure_ascii=False))


def get_all_from_quiz(quiz):
    print(count, '- ' + quiz.get('slug'))
    collect_information(quiz)
    collect_questions(quiz)
    collect_key(quiz)


with codecs.open(pathQuizLists, "r", "utf-8") as quizLists:
    quizs = json.load(quizLists)

    # collect infomation quiz
    for quiz in quizs.get('quiz_list'):
        count += 1

        p = Process(target=get_all_from_quiz, args=(quiz,))
        p.start()
        p.join()
