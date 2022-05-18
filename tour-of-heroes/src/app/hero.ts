/*
Rajapintaluokka Hero määrittää millainen sankarin täytyy olla.
Hero-oliolla on pakko olla id, joka on numero ja name, joka on 
merkkijono.
Tämä on dovelluksen modelin eli tietomallin osa. Varsinainen data
muodostaa loput modelista.
*/

export interface Hero {
  id: number;
  name: string;
}