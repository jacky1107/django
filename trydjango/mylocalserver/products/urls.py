
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from .views import (
    kmeansView,
    quickSortingView,

    listView,
    detailView,
    createView,
    updateView,
    deleteView
    )


app_name = 'products'
urlpatterns = [
    path('', listView.as_view(), name="home"),

    path('create/', createView.as_view(), name="create"),
    path('<int:product_id>/bubbleSorting/', detailView.as_view(),name="bubbleSorting"),
    path('<int:product_id>/quickSorting/', quickSortingView.as_view(),name="quickSorting"),
    path('<int:product_id>/kmeans/', kmeansView.as_view(),name="kmeans"),
    path('<int:product_id>/update/',updateView.as_view(),name="update"),
    path('<int:product_id>/delete/',deleteView.as_view(),name="delete")
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
