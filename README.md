# mycoach
Just an little application to help to organize and improve runner training sessions

## Fonctionnalités
----------------- 
V0.1.0
----------------- 
- un plan d'entrainement standard ISO excel
    - [] vue simple avec des données fictive
    - [] configurer son plan d'entrainement (distance, date, nb week)
    - [] stocker les données
    - [] CRUD sur un plan d'entrainement
----------------- 
V0.2.0
----------------- 
- [] authentification et gestion ident
----------------- 
V1.0.0
----------------- 
- [] industrilisation
- [] audit sécurité
- [] UX/UI analyse de l'application web
- [] déploiement
----------------- 
V1.1.0
----------------- 
- [] afficher sur sorte de tendance par session (+ ou - d'effort)
- [] un générateur d'évènement agenda (ICS ou directement lié à Google)
- [] un petit widget par plan contenant les données ( VMA, allure)
----------------- 
V1.2.0
-----------------

- [] réaliser un lien avec Strava
- [] google analytics
- [] pouvoir partagé le plan avec ses amis
- [] collaborer avec ses amis
- [] à l'aide de la description, générer un entrainement Garmin

## Les données

### Les Date
Les dates seront toutes stockées et transférées sous la forme ISO : 2019-02-03T09:00:00.000Z
Si besoin d'un autre format, la conversion se fera côté client.

### Allure / Vitesse
Afin de faciliter les échanges, le format vitesse est gardée.
Si besoin de l'allure, la conversion sera réalisée côté client.
La vitesse est représentée en km/h (kilometre par heure)

### Distance
Les distances sont toutes stcokées et transférées en km.

