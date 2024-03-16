""" from script import *

resta = Rectangle(6,3)
print("Caractéristiques de resta" , end=" : ")
print(f"la surface est : {resta.surface()} et le périmètre est : {resta.perimetre()}") """

#création d'une classe Personne avec deux attributs
class Personne:     
     def __init__(self,nom,age):         
         self.nom = nom         
         self.age=age

# La classe  Etudiant hérite de la classe mère Personne

class Etudiant(Personne): 
    # définition des attributs
    def __init__(self,nom,age,filiere):
        # héritage des attributs depuis la classe mère Personne        
        Personne.__init__(self,nom,age)         

        # ajout d'un nouvel attribut filiere à la classe Etudiant
        self.filiere = filiere
   
etudiant1 = Etudiant("Albert",27,"math") 
print("nom, âge, filière : " ,etudiant1.nom, " ", etudiant1.age, " " ,etudiant1.filiere)
print(type(etudiant1))

#modifier les attributs d'un objet
etudiant1.nom ="Alberta"
etudiant1.age = 28

#créer d'une nouvelle instance de la classe Etudiant
etudiant2 =Etudiant("Isabelle",21,"informatique")
print("nom, âge, filière : " ,etudiant2.nom, " ", etudiant2.age, " " ,etudiant2.filiere)
print(type(etudiant2))
