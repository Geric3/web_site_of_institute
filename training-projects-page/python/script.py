""" print("Hello World")

nom="dupon"
prenom="jean"
age= 32

print(f"je m'appelle {nom} {prenom} et j'ai {age} ans")

a=input("entrer une valeur")
print(a) """
import requests


from bs4 import BeautifulSoup

# url = "https://www.gov.uk/search/news-and-communications"
# page = requests.get(url)


""" url = "http://books.toscrape.com/"
page = requests.get(url) """

# Voir le code html source
# print(page.content)
""" soup = BeautifulSoup(page.content, 'html.parser')
desc= soup.find_all("p")

print(desc)

fichier = open("hello.csv", "a" ,encoding='utf-8', newline='')
fichier.write("bonjour")
fichier.close() """

class Rectangle:     
    def __init__(self,L,l):         
        self.Longueur=L         
        self.Largeur=l
     # méthodes de classe  ci-dessous 
    def surface(self):         
        return self.Longueur*self.Largeur
    def perimetre(self):         
        return (self.Longueur* 2) + (self.Largeur*2)
# création d'une instance de Rectangle
rect1 = Rectangle(7,5)
print("Caractéristiques de rect1" , end=" : ")
print(f"la surface est : {rect1.surface()} et le périmètre est : {rect1.perimetre()}")

# modifier les attributs de l'instance r1
rect1.Longueur = 6
rect1.largeur = 2
print (f"Nouveaux périmètre et surface de rect1 : {rect1.surface()} et  {rect1.perimetre()}")

#création d'un objet Rectangle
rect2 = Rectangle(6,6)
print("Caractéristiques de rect2" , end=" : ")
print(f"la surface est : {rect2.surface()} et le périmètre est : {rect2.perimetre()}")