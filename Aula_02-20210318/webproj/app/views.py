from django.shortcuts import render
from datetime import datetime
import json
import glob
import  os
# Create your views here.

def home(request):
    tparams = {
        'title': 'Home Page',
        'year': datetime.now().year,
    }
    return render(request, 'index.html', tparams)


def contact(request):
    tparams = {
        'title': 'Contact',
        'message': 'Your contact page.',
        'year': datetime.now().year,
    }
    return render(request, 'contact.html', tparams)


def about(request):
    tparams = {
        'title': 'About',
        'message': 'Your application description page.',
        'year': datetime.now().year,
    }
    return render(request, 'about.html', tparams)

def eurocv(request,number):
    path='app/data/'
    dados=None;
    print("Número : "+ str(number))
    for filename in glob.glob(os.path.join(path,'*.json')):
        with open(os.path.join(os.getcwd(),filename),) as f:
            data = json.loads(f.read())
            n=data["eurocv"]["personalInfo"]["contact"]["phone"]["number"]
            if number==int(n):
                dados=data
                break

    #with open('app/data/eurocv.json',) as f:
    #        dados= json.loads(f.read())
    #        print(data)
    return render(request,'eurocv.html',dados)
