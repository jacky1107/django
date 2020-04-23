from django import forms


class htmlContext(forms.Form):
    title = forms.CharField(widget=forms.TextInput(attrs={
        "placeholder": "Your title",
    }))

    # validation
    def clean_title(self, *args, **kwargs):
        error_msg = "This is not a vaild"
        title = self.cleaned_data.get("title")
        if "Jacky" not in title:
            raise forms.ValidationError(error_msg)
        return title