/* Angular-sovelluksen sisääntulevan datan tulee olla vahvasti tyypitettyä,
jotta ei tule mitään väärinkäsityksiä sen suhteen, miten sisään tulevaa dataa
käsitellään. Niinpä sovelluksen datalle tehdään tietomalli, joka kertoo millaista
se on. Tietomalli esitetään luokassa. Luokissa kerrotaan millaisia ominaisuuksia
datan sisältävillä olioilla tulee olla. Luokkien propertyillä on ts-tietotyypit. 
Tässä tapauksessa luokat ovat samanlaisia, joten yhdellä pärjättäisiin, mutta mikäli
niitä halutaan myöhemmin muokata, on hyvä olla kaikille oma. 
*/

class MyData {
  id: number;
  info: string;
}
class Study {
  id: number;
  info: string;
}
class Hobby {
  id: number;
  info: string;
}

export{ MyData, Study, Hobby};