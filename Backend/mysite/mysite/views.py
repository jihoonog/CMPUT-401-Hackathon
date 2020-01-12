from __future__ import unicode_literals
from django.shortcuts import render, redirect
from django.template import loader
from django.http import HttpResponse
from django.http import JsonResponse as jr
from django.views import generic
import json

json_data = open('full_format_recipes.json')
recipes = json.load(json_data)

# These are helper functions to get certain data
def getFat(recipe):
  value = recipe.get("fat", 0)
  if value is None:
    return 0
  return value

def getCalories(recipe):
  value = recipe.get("calories", 0)
  if value is None:
    return 0
  return value

def getProtein(recipe):
  value = recipe.get("protein", 0)
  if value is None:
    return 0
  return value

def getSodium(recipe):
  value = recipe.get("sodium", 0)
  if value is None:
    return 0
  return value

def getRating(recipe):
  value = recipe.get("rating", 0)
  if value is None:
    return 0
  return value

func_list = [getFat, getCalories, getProtein, getSodium]
func_name_list = ["fat", "calories", "protein", "sodium"]

"""
nutrition is what we are going to sort by
top == max get the max
top == min get the min 

return the top 10 that match the parameter sorted by rating
"""
def getData(request, nutrition, top):
  func_index = func_name_list.index("calories")

  sorted_recipes = sorted(recipes, key=func_list[func_index], reverse=top == "true")
  subset = sorted_recipes[:10]
  subset = sorted(subset, key=getRating, reverse=True)

  return jr(subset, safe=False)