from django import forms

from .models import Product


class productForm(forms.ModelForm):
    # title = forms.CharField(widget=forms.TextInput(attrs={
    #     "placeholder": "Your title",
    # }))
    # description = forms.CharField(required=False,
    #                               widget=forms.Textarea(
    #                                   attrs={
    #                                       "placeholder": "Tap something",
    #                                       "class": "new-class-name two",
    #                                       "id": "new-id-for-textarea",
    #                                       "rows": 20,
    #                                       "cols": 20
    #                                   }))
    # price = forms.DecimalField()

    class Meta:
        model = Product
        fields = ['title', 'description', 'price']

    def cleanTitle(self, *args, **kwargs):
        title = self.cleaned_data.get("title")
        # error handeling for title