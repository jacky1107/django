from django.http import HttpResponse
from django.shortcuts import render

from .forms import htmlContext


# Create your views here.
def homeView(request, *args, **kwargs):
    context = {}
    return render(request, "home.html", context)


def myProjectView(request, *args, **kwargs):
    initial_data = {"title": "Jacky"}
    forms = htmlContext(request.POST or None, initial=initial_data)
    if request.method == "POST":
        if "run" in request.POST:
            print(request.POST["run"])
            with open("./static/a.txt", "r") as f:
                print(f.read())
        if forms.is_valid(): print(forms.cleaned_data)

    context = {"forms": forms}
    return render(request, "pages/javascript.html", context)