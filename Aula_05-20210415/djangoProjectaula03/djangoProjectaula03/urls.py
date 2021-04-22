"""djangoProjectaula03 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.urls import path
from App import views
urlpatterns = [
    path('', views.menu, name="menu"),
    path('admin/', admin.site.urls),
    path('books/', views.books, name="books"),
    path('books/<str:title>',views.book_details, name="bookdetail"),

    path('authors/', views.authors, name="authors"),
    path('authors/<str:name>',views.author_details, name="bookdetail"),
    path('authors/books/<str:name>', views.author_books, name="authorbooks"),

    path('publishers/', views.publishers, name="publishers"),
    path('publishers/<str:name>',views.publisher_details, name="publisherdetails"),
    path('publishers/authors/<str:name>', views.publisher_authors, name="publisherauthors"),


    path('booksearch/',views.booksearch, name='booksearch'),
    path('bookquery/',views.bookquery, name='bookquery'),
    path('authorquery/',views.authorquery,name='authorquery'),
    path('bookqueryby/',views.bookqueryby, name='bookquery'),

    path('login/',auth_views.LoginView.as_view(template_name='login.html'),name='login'),
    path('logout/',auth_views.LogoutView.as_view(template_name='menu.html'),name='logout')
]
