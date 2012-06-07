#Számítógép hálózatok tesztprogram

Az online teszthez kattints [ide](http://bmejegyzet.github.com/szghalok-teszt)

Ez a projekt a BME VIK Számítógép hálózatok tantárgyához készült tesztprogramjának projektoldala.
Ez egy kezdetleges próbálkozás arra, hogy a tesztprogramokat jobban lehessen javítani.

###Tartalomjegyzék

- [Letöltés](#1)
- [Indítás](#2)
- [Hibák javítása](#3)
- [Új kérdés hozzáadása](#4)

---

####<a href="" name="1" id="1" />Letöltés

Ha le akarod tölteni zip-ben kattints [ide](https://github.com/bmejegyzet/szghalok-teszt/zipball/master) vagy kattints a ZIP ikonra az oldal tetején.

---

####<a href="" name="2" id="2" />Indítás

A tesztprogram indításához csomagold ki a zip file-t és indítsd el az index.html-t

A tesztet el lehet indítani online is [itt](http://bmejegyzet.github.com/szghalok-teszt)

---

####<a href="" name="3" id="3" />Hibák javítása

Ha hibát találsz a tesztprogramban, kattints az [Issues](https://github.com/bmejegyzet/szghalok-teszt/issues) gombra,
és keress rá, hátha már valaki megtalálta. Ha nemtalálod nyiss egy új Issue-t a `New Issue` gombbal.

#####Formázása:

Hogy megkönnyítsd a javítást kérlek formázzad az Issue-dat az alábbiak szerint.

Cím: `'BUG:' <path>/<filename>.<fileextension> ':' <line number a kerdes mezőnek>`  
Tartalom: `<original kérdés> \n <corrected kérdés> \n <referencia, például előadás dia linkje, oldalszáma>`

#####Példa

Cím: `'BUG:' teszt1.js:1`  
Tartalom: 

<pre><code>{ kerdes: "Hogyan kell hibát bejelenteni?",
  tipus: "tobbet_jelolo",
  valaszok: [
    { valasz: "trollkodok", jo: false },
  ]
}</code></pre>

<pre><code>{ kerdes: "Hogyan kell hibát bejelenteni?",
  tipus: "tobbet_jelolo",
  valaszok: [
    { valasz: "Rákeresek az Issue-k ban", jo: true },
    { valasz: "Ha már valaki megtalálta, akkor nem nyitok új Issue-t", jo: true },
    { valasz: "Elolvason a README-t a formázásról", jo: true },
    { valasz: "Megformázom a címet és a tartalmat is", jo: true }
  ]
}</code></pre>

Referencia: [Hibák javítása](https://github.com/bmejegyzet/szghalok-teszt/blob/master/README.md#3)

---

####<a href="" name="4" id="4" />Új kérdés hozzáadása

Ha új kérdést szeretnél hozzáadni, kattints az [Issues](https://github.com/bmejegyzet/szghalok-teszt/issues) gombra,
és keress rá, hátha már valaki hozzá akarja adni. Ha nemtalálod nyiss egy új Issue-t a `New Issue` gombbal.

Fontos hogy ha több kérdést szeretnél hozzáadni, akkor csak egy Issue-t nyiss, és egymás után írd bele a tartalomba őket `\n --- \n` -el elválasztva

#####Formázása:

Cím: `'NEW:' <path>/<filename>.<fileextension>`  
Tartalom: `(<new kérdés> \n <referencia, például előadás dia linkje, oldalszáma> [\n --- \n])+`


