from __future__ import unicode_literals
from django.shortcuts import render, redirect
from django.template import loader
from django.http import HttpResponse
from django.http import JsonResponse as jr
from django.views import generic
# from .forms import getNutritionURL
import json

# def getQuery(request):
#   if request.method == 'POST':
#     form = getNutritionURL(request.POST)
    # if form.is_valid():
      


json_data = open('full_format_recipes.json')
recipes = json.load(json_data)

# These are helper functions to get certain data
def getFat(recipe):
  value = recipe.get("fat", 0)
  return value

def getCalories(recipe):
  value = recipe.get("calories", 0)
  if value is None:
    return 0.0001
  return value + 0.0001

def getProtein(recipe):
  value = recipe.get("protein", 0)
  return value

def getSodium(recipe):
  value = recipe.get("sodium", 0)
  return value

def getCarb(recipe):
  fat = recipe.get("fat", 0)
  if fat is None:
    fat = 0
  calories = recipe.get("calories", 0)
  if calories is None:
    calories = 0
  protein = recipe.get("protein", 0)
  if protein is None:
    protein = 0
  return (calories - fat*9 - protein*4)/4

def pruneNull(recipes, nutrition):
  pruned = []
  for recipe in recipes:
    if nutrition is "carbohydrates":
      recipe = addCarb(recipe)
      pruned.append(recipe)
      continue
    if recipe.get(nutrition, None) is None:
      continue
    pruned.append(recipe)
  return pruned

def addCarb(recipe):
  fat = recipe.get("fat", 0)
  if fat is None:
    fat = 0
  calories = recipe.get("calories", 0)
  if calories is None:
    calories = 0
  protein = recipe.get("protein", 0)
  if protein is None:
    protein = 0
  recipe["carbohydrates"] = (calories - fat*9 - protein*4)//4
  return recipe

def getRating(recipe):
  value = recipe.get("rating", 0)
  if value is None:
    return 0
  return value

func_list = [getFat, getCalories, getProtein, getSodium, getCarb]
func_name_list = ["fat", "calories", "protein", "sodium", "carbohydrates"]

"""
nutrition is what we are going to sort by
top == max get the max
top == min get the min 

return the top 10 that match the parameter sorted by rating
"""
def getData(request, nutrition, top):
  func_index = func_name_list.index(nutrition)

  pruned_recipes = pruneNull(recipes, nutrition)
  sorted_recipes = []
  if nutrition == "calories":
    sorted_recipes = sorted(pruned_recipes, key=lambda x: func_list[func_index](x), reverse=top == "true")
  else:
    sorted_recipes = sorted(pruned_recipes, key=lambda x: func_list[func_index](x)/getCalories(x), reverse=top == "true")
  subset = sorted_recipes[:10]
  subset = sorted(subset, key=getRating, reverse=True)

  return jr(subset, safe=False)
