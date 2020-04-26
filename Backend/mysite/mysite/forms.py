from django import forms

class getNutritionURL(forms.Form):
    nutrition = forms.ChoiceField(choice=[(x,x) for x in ["fat", "calories", "protein", "sodium"]])
    get_top = forms.ChoiceField(choice=[(x,x) for x in ["top", "bottom"]])