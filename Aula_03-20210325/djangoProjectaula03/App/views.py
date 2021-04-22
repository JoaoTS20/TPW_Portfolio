from django.shortcuts import render

# Create your views here.
from App.models import Publisher, Book, Author


def books(request):
    t_parms={
        'books': Book.objects.all()
    }
    return render(request,'book_list.html', t_parms)

def book_details(request,title):
    t_parms={
        'book':Book.objects.get(title=title)
    }
    print(t_parms)
    return render(request,'book_details.html',t_parms)


def authors(request):
    t_parms={
        'authors': Author.objects.all(),
        'books': Book.objects.all()
    }
    print(Book.objects.filter(authors=1))
    return render(request,'authors.html', t_parms)

def author_details(request,name):
    t_parms={
        'author':Author.objects.get(name=name)
    }
    print(t_parms)
    return render(request,'author_details.html',t_parms)


def author_books(request,name):
    t_parms={
        'books':Book.objects.filter(authors__name=name),
        'author': name
    }
    print(t_parms)
    return render(request,'books_by_author.html',t_parms)




def publishers(request):
    t_parms={
        'publishers': Publisher.objects.all()
    }
    return render(request,'publishers.html', t_parms)

def publisher_details(request,name):
    t_parms={
        'publisher':Publisher.objects.get(name=name)
    }
    print(t_parms)
    return render(request,'publisher_details.html',t_parms)

def publisher_authors(request,name):

    t_parms={
        'authors':set(Author.objects.filter(book__publisher__name=name)),
        'publisher': name
    }
    print(t_parms)
    return render(request,'authors_by_publisher.html',t_parms)