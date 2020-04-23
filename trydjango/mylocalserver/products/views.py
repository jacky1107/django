from django.shortcuts import render, get_object_or_404, redirect
from django.http import Http404
from django.views import View

from .forms import productForm
from .models import Product

# Create your views here.


class objectMixin(object):
    model = Product
    keywords = 'product_id'

    def getObject(self):
        obj = None
        product_id = self.kwargs.get(self.keywords)
        if product_id is not None:
            obj = get_object_or_404(Product, id=product_id)
        return obj


class listView(View):
    template_name = "product/list.html"

    def get(self, request, *args, **kwargs):
        context = {}
        obj = Product.objects.all()
        context["obj"] = obj
        return render(request, self.template_name, context)


class kmeansView(View):
    template_name = "product/kmeans.html"

    def get(self, request, *args, **kwargs):
        context = {}
        return render(request, self.template_name, context)


class quickSortingView(View):
    template_name = "product/quickSorting.html"

    def get(self, request, *args, **kwargs):
        context = {}
        return render(request, self.template_name, context)

    def post(self, request, *args, **kwargs):
        context = {}
        return render(request, self.template_name, context)


class createView(View):
    template_name = "product/create.html"

    def get(self, request, *args, **kwargs):
        form = productForm()
        context = {"form": form}
        return render(request, self.template_name, context)

    def post(self, request, *args, **kwargs):
        form = productForm(request.POST)
        if form.is_valid():
            form.save()
            form = productForm()

        context = {"form": form}
        return render(request, self.template_name, context)


class detailView(objectMixin, View):
    template_name = "product/detail.html"

    def get(self, request, product_id=None, *args, **kwargs):
        context = {"obj": self.getObject()}
        return render(request, self.template_name, context)


class updateView(objectMixin, View):
    template_name = "product/create.html"

    def get(self, request, *args, **kwargs):
        obj = self.getObject()
        form = productForm(instance=obj)
        context = {"form": form}
        return render(request, self.template_name, context)

    def post(self, request, *args, **kwargs):
        obj = self.getObject()
        form = productForm(request.POST, instance=obj)
        if form.is_valid():
            form.save()
            return redirect("../")
        context = {"form": form}
        return render(request, self.template_name, context)


class deleteView(objectMixin, View):
    template_name = "product/delete.html"

    def get(self, request, *args, **kwargs):
        context = {"obj": self.getObject()}
        return render(request, self.template_name, context)

    def post(self, request, *args, **kwargs):
        obj = self.getObject()
        if obj is not None:
            obj.delete()
            return redirect("../../")
        context = {"obj": obj}
        return render(request, self.template_name, context)