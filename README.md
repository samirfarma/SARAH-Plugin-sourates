SARAH-Plugin-sourates
=====================

Plugin pour l'écoute des sourates du Coran à partir de commandes vocales de S.A.R.A.H

Permet de lancer l'écoute des sourates du Coran en utilisant le logiciel VLC et les commandes vocales de S.A.R.A.H.

Les commandes vocales sont définies dans le fichier de grammaire XML sourates.xml.

Exemple de commandes :

" Sarah, démarre le Coran" (Cette commande lancera l'écoute de la première sourate) " Sarah ferme le Coran" " Sarah, fait moi écouter la sourate numéro un" " Sarah, fait moi écouter la sourate la caverne"

On peut appeler une sourate par son nom traduit en français, en phonétique arabe, ou par son numéro dans le Coran.

Les commandes vocales permettent aussi de contrôler la lecture en avançant ou en reculant le temps de lecture, ainsi que le niveau sonore

Exemples : " Sarah avance de 10 secondes le Coran" " Sarah recule de 30 secondes le Coran" " Sarah met en pause le Coran" " Sarah remet en lecture le Coran"

Sur correspondance, le script sourate.js est ensuite exécuté.

Toutes les sourates sont rangées le répertoire mp3 par numéro, la première est appelée 1.mp3, la deuxième 2.mp3 et ainsi de suite ...

Seules la première sourate, ainsi que deux autres (sourate numéro 1, 18 et 67) ont été mises dans le répertoire mp3 pour ne pas dépasser la limite de 10 méga pour le plugin.

Pour enrichir le répertoire de sourate, il suffit de mettre la sourate correspondante dans le répertoire mp3 en la renommant pour que son nom corresponde à son numéro de sourate.

Par exemple, si l'on veut ajouter la sourate "la table servie", comme c'est la cinquième sourate du Coran, il faudra donc la renommer 5.mp3 et la mettre dans le dossier mp3.

Bonne méditation sur ces nobles versets

