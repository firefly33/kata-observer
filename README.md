#kata-observer
Le sous-marin français L'Effroyable est passé en zone blanche et a perdu les communications auprès de la base militaire de commandement.
Après avoir découvert un signal interprété comme une attaque envers la france par les russes, L'Effroyable a décidé de se mettre en mode contre-offenssive.

##Partie 1
Notre objectif va être de développer une interface de communication entre des sous-marins et la base de commandement.

- Un sous-marin comporte un code secret unique
- Un sous-marin a la possibilté de se rendre visible à la base de commandement, qui gardera de son côté le code unique du SM


Pour ne pas que les sous-marins français se tirent dessus entre-eux, il est important que le centre de commandement les garde informés de leur présence entre-eux.

- Lorsqu'un sous-marin se révèle au poste de commandement, ce dernier informe les sous-marins alliés alentours de sa présence
- Lorsqu'un sous-marin décide de se camoufler, il informe de sa disparition au centre, qui en informe les sous-marins alentours
