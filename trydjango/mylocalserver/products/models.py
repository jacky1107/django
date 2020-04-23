from django.db import models
from django.urls import reverse

# Create your models here.


class Product(models.Model):
    title = models.CharField(max_length=120)
    price = models.DecimalField(decimal_places=2, max_digits=10000)
    description = models.TextField(blank=True, null=True)
    # featured = models.BooleanField(default=False)
    # summary = models.CharField(max_length=300)

    def getAbsoluteURL(self):
        if self.id == 6:
            return reverse("products:bubbleSorting", kwargs={"product_id": self.id})
        elif self.id == 15:
            return reverse("products:kmeans", kwargs={"product_id": self.id})
        return reverse("products:quickSorting", kwargs={"product_id": self.id})