 var tesztFeladatok = [
            { kerdes: "Mi igaz a termikus zajra általában?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Gaussi eloszlású", jo: true },
                { valasz: "Minden zaj megfelelõ elektromágneses árnyékolással megszüntethetõ", jo: false },
                { valasz: "Várható értéke nulla", jo: true },
                { valasz: "A jelhez hozzáadódik", jo: true },
                { valasz: "Átviteli hibát okozhat", jo: true }
              ]
            },
            { kerdes: "Egy átvitel során a +3 V, +1 V, -1 V és -3 V feszültségszinteket használjuk. Hány volt feszültségnél legyen a döntési küszöb a felsõ két jelszint között, ha a zaj Gauss-eloszlású?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "+5 V", jo: false },
                { valasz: "+3 V", jo: false },
                { valasz: "+2,5 V", jo: false },
                { valasz: "+2 V", jo: true },
                { valasz: "+ pi/2 V", jo: false },
                { valasz: "+1,5 V", jo: false },
                { valasz: "+1 V", jo: false },
                { valasz: "0 V", jo: false }
              ]
            },
            { kerdes: "Mely(ek) a protokollanalizátor szerepe(i) az alábbiak közül?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A hálózati forgalom értelmezése", jo: true },
                { valasz: "A hálózati forgalom megjelenítése.", jo: true },
                { valasz: "A hálózati forgalom rögzítése.", jo: true },
                { valasz: "A hálózati forgalom generálása", jo: true },
                { valasz: "Protokollok szimulált tesztelése.", jo: false, megjegyzes: "Kérdéses" },
                { valasz: "A hálózati forgatom visszajátszása", jo: false }
              ],
			  megjegyzes: "http://alpha.tmit.bme.hu/meresek/5-9.htm"
            },
            { kerdes: "Az alábbi állítások közül mely(ek) igaz(ak) a QPSK-ra?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "WLAN-okban is használják", jo: true, megjegyzes: "802.11a használja a wikipedia szerint" },
                { valasz: "A vivõfrekvenciát változtatjuk", jo: false },
                { valasz: "Minden szimbólumot azonos amplitúdójú jel képvisel", jo: true },
                { valasz: "Egy szimbólummal 4 bit vihetõ át", jo: false, megjegyzes: "biztosan nem jó, mert 2 bit vihetõ át" },
                { valasz: "A vivõhullám fázisát változtatjuk.", jo: true }
              ]
            },
            { kerdes: "Miért nem EGY információtovábbító protokollt használunk?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A fejlesztések során egymástól többé-kevésbé eltérõ megoldások alakultak ki ugyanarra a feladatra, amelyek annyira elterjedtek, hogy nem lehet õket megszüntetni", jo: false },
                { valasz: "Az információtovábbítás olyan összetett tevékenység, hogy célszerû részfeladatokra tördelni, amelyek mindegyike külön protokollal szabályozandó", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Az alábbiak közül mely állítás(ok) igaz(ak) az NRZI kódolásra?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Nem tartalmaz nullafrekvenciás (DC) komponenst.", jo: true },
                { valasz: "A csupa 1 bitsorozat esetén elveszhet a szinkron", jo: false },
                { valasz: "A 0 értéket mindig az alacsony jelszint azonosítja", jo: false },
                { valasz: "A csupa 0 bitsorozat esetén elveszhet a szinkron.", jo: true },
                { valasz: "A jelváltozás frekvenciája kétszerese a bitsebességnek", jo: false }
              ]
            },
            { kerdes: "Az alábbi álltások közül mely(ek) igaz(ak) a 8PSK-ra? ",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A vivõhullám fázisát változtatjuk", jo: true },
                { valasz: "A vivõhullám frekvenciáját változtatjuk", jo: false },
                { valasz: "Egy szimbólummal 8 bit vihetõ át", jo: false },
                { valasz: "Minden szimbólum azonos amplitúdójú", jo: true }
              ]
            },
            { kerdes: "Az ISO OSI referencia modell a protokollarchitektúrák viszonyításának alapvetõ eszköze.",
              tipus: "igazhamis",
              valasz: true
            },
            { kerdes: "Az alábbi állítások közül mely(ek) igaz(ak) az On-Off Keyingre?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A többi válasz egyike sem helyes", jo: false },
                { valasz: "A bitsorozatnak megfelelõen változik a frekvencia", jo: false },
                { valasz: "Könnyû a csatorna foglaltságának érzékelése.", jo: false, megjegyzes: "Az is jel, hogy nincs jel, ez eléggé megnehezíti..." },
                { valasz: "A konstellációs diagramján 2 állapotot jelölõ pont található", jo: true, megjegyzes: "Vagy van jel vagy nincs jel, tehát két állapot van" },
                { valasz: "Ez egyfajta ASK.", jo: true }
              ],
			  megjegyzes: "Az ábráról is látszik-> 2012.02.16_Fizikai1.pdf, 36.o.: http://sdrv.ms/L50CuR"
            },
            { kerdes: "A vezérlõ sík protokolljai fõként az összeköttetések kezeléséért felelõsek.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Az alábbiak közül mely állítás igaz egy PDU beágyazódására?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Csak fejet (header) kap", jo: false },
                { valasz: "Csak farkat (trailer) kap", jo: false },
                { valasz: "Mindig kap fejet (header), de farkat (trailer) csak opcionálisan", jo: true, megjegyzes: "A jegyzetben szögletes zárójelben van a farok" },
                { valasz: "Sem fejet (header), sem farkat (trailer) nem kap", jo: false },
                { valasz: "Mindig kap fejet (header) és farkat (trailer)", jo: false }
              ]
            },
            { kerdes: "Az alábbiak közül mely állítás(ok) igaz(ak) a Manchester kódolásra?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A csupa 1 bitsorozat esetén elveszhet a szinkron", jo: false },
                { valasz: "A csupa 0 bitsorozat esetén elveszhet a szinkron", jo: false },
                { valasz: "Nem tartalmaz nullafrekvenciás (DC) komponenst.", jo: true },
                { valasz: "A jelváltozás frekvenciája kétszerese a bitsebességnek.", jo: true },
                { valasz: "A 0 értéket mindig az alacsony jelszint azonosítja", jo: false }
              ]
            },
            { kerdes: "Az alábbiak közül mely állítás(ok) igaz(ak) az NRZ kódolásra?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A csupa 0 bitsorozat esetén elveszhet a szinkron.", jo: true },
                { valasz: "A 0 értéket mindig az alacsony jelszint azonosítja.", jo: true },
                { valasz: "Tartalmaz nullafrekvenciás (DC) komponenst", jo: false },
                { valasz: "A csupa 1 bitsorozat esetén elveszhet a szinkron.", jo: true },
                { valasz: "A jelváltozás frekvenciája kétszerese a bitsebességnek", jo: false }
              ]
            },
            { kerdes: "Az alábbiak küzül mely állítás igaz a szimbólumra",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egy szimbólumot reprezentálhat egy pont a konstellációs diagramon", jo: true },
                { valasz: "Egy szimbólumot reprezentálhat egy frekvencia", jo: true },
                { valasz: "Egy vagy több bit jelentését hordozó elemi jel", jo: true },
                { valasz: "A szimbólumok csak párósával vihetõk át kommunikácios csatornán", jo: false },
                { valasz: "Egy szimbólumot reprezentálhat egy feszültségszint", jo: true, megjegyzes: "amplitúdókódolás a neve" }
              ]
            },
            { kerdes: "A hálózat csomópontjaiban a protokollarchiktúra a végpontokéval megegyezõ módon- az összes réteg implementálásával- kerül kialakításra",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Az alábbi állítások közül mely igaz az FSK modulációra",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A vivõhullám amplitúdóját változtatjuk", jo: false },
                { valasz: "Elõállítása és demodulálása egyszerû", jo: true },
                { valasz: "A vivõferekvenciát változtatjuk", jo: true },
                { valasz: "vivõhullám fázisát változtatjuk", jo: false }
              ]
            },
            { kerdes: "Mely állítás igaz az alábbiak közül az ISO OSI szerint PDU- elnevezésekkel kapcsolatban ",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A hálózati rétegbeli PDU neve : csomag(packet)", jo: true },
                { valasz: "A fizikai rétegbeli PDU neve : üzenet (message)", jo: false },
                { valasz: "Minden réteg PDU-jára hivatalosan használhó a csomag elnevezés", jo: false },
                { valasz: "A adatkapcsolati rétegbeli PDU neve : keret (frame)", jo: true },
                { valasz: "A szállítási réteg beli PDU neve : szegments (segment)", jo: true }
              ]
            },
            { kerdes: "8PSK esetén mekkora a nullától különbözõ legkisebb pozitív fázistolás mértéke fokban?",
              tipus: "valaszolos",
              valasz: "45"
            },
            { kerdes: "A protokollok lerögzítésénél elõnyben kell részesíteni a természetes nyelven történõ leírását.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Az alábbi állítások közül mely(ek) igaz(ak) a szimbólumsebességre?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Bináris jelátvitel esetén megegyezik a bitsebességgel.", jo: true },
                { valasz: "Mértékegysége: baud vagy Bd", jo: true },
                { valasz: "A jel terjedési sebességgel egyenesen arányos", jo: false },
                { valasz: "Jelzési sebességének is nevezik.", jo: true }
              ]
            },
            { kerdes: "Mi a feltétele annak, hogy egy protokoll-architektúra valamely rétegében a megvalósítást megváltoztassuk?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Csak a felette lévõ réteg - amely szolgáltatást nyújt - hozzájárulására van szükség", jo: false },
                { valasz: "A szomszéd rétégek hozzájárulása szükséges", jo: false },
                { valasz: "Egyik válasz sem jó", jo: true }
              ]
            },
            { kerdes: "Mit értünk azon, hogy a protokollarchitektúra megfelelõ rétegei között virtuális kapcsolat jön létre?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Az egyik végpont n. rétege által küldött PDU közvetlenül átjut a másik végpont n. rétegébe", jo: false },
                { valasz: "Úgy tekinthetünk a végpontok n. rétegei közötti kapcoslatokra - elfedve a n. réteg alatt mûködést -, mintha azok egymással közvetlen kapcsolatban állnának.", jo: true },
                { valasz: "Az ISO OSI referenciamodellben egy virtuális réteg is létrejön", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Azt az elvet és folyamatot, mely során a magasabb rétegbõl érkezõ protokoll-adategység alsóbb rétegek felé haladva kiegészítõ információkkal kerül ellátásra, borítékolásnak, beágyazódásnak (encapsulation) nevezzük.",
              tipus: "igazhamis",
              valasz: true
            },
            { kerdes: "Mi történik, ha egy négyszögjelet sávhatárolt csatornán viszünk át?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A négyszögjel szögletessége megszûnik", jo: true },
                { valasz: "A nagyobb frekvenciájú felharmonikusok eltûnnek", jo: true },
                { valasz: "A kisebb frekvenciájú felharmonikusok eltûnnek", jo: false },
                { valasz: "A többi válasz egyike sem helyes", jo: false },
                { valasz: "A jel invertálódik", jo: false }
              ]
            },
            { kerdes: "Az alábbiak közül melyek NEM szerepel(nek) az ISO OSI referenciamodellben?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Fizikai", jo: false },
                { valasz: "Alkalmazási", jo: false },
                { valasz: "Adatkapcsolati", jo: false },
                { valasz: "Adategyeztetési", jo: true },
                { valasz: "Interfész", jo: true },
                { valasz: "Megjelenítési", jo: false },
                { valasz: "Adatbiztonsági", jo: true },
                { valasz: "Fizikaiközeg-függõ", jo: true },
                { valasz: "Közeghozzáférés-vezérlési", jo: true },
                { valasz: "Menedzsment", jo: true }
              ]
            },
            { kerdes: "64QAM esetén 16 szimbólummal hány bájtot viszünk át?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "6", jo: false },
                { valasz: "12", jo: true, megjegyzes: "64 lehetõséget 6 bit ír le, egy szimbólum tehát 6 bites. 16 szimbólum tehát 6*16=96 bit, ami 96/8=12 bájt" }
              ]
            },
            { kerdes: "Mi jellemezi a felhasználói sík protokolljait?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Biztosítják a felhasználói információnak a legrövidebb úton történõ célba juttatását", jo: false },
                { valasz: "A felhasználók továbbításra szánt információját kezelik (elõállítják, értelmezik).", jo: true },
                { valasz: "Gondoskodnak a felhasználói információ szállításának hibátlanságáról.        ", jo: false },
                { valasz: "Egyik válasz sem jó.    ", jo: false }
              ]
            },
            { kerdes: "A bináris jelátvitelhez képest hányszoros lesz a bitsebesség, ha 8 szintû jelet viszünk át azonos szimbólumsebességgel?",
              tipus: "valaszolos",
              valasz: "3* -- mivel szimbólumonként 3 bit"
            },
            { kerdes: "Hányszorosára nõ a bitsebesség, ha QPSK-ról 16QAM-re váltunk azonos szimbólumsebesség mellett?",
              tipus: "valaszolos",
              valasz: "2"
            },
            { kerdes: "Az alábbi állítások közül mely(ek) igaz(ak) az ASK modulációra?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A vivõhullám fázisát változtatjuk", jo: false },
                { valasz: "A vivõhullám amplitúdóját változtatjuk.", jo: true },
                { valasz: "Lehet két- vagy többszintû.", jo: true },
                { valasz: "A konstellációs diagramon az állapotoknak megfelelõ pontok egy egyenes mentén helyezkednek el", jo: true },
                { valasz: "A vivõhullám frekvenciáját változtatjuk", jo: false }
              ]
            },
            { kerdes: "Mit olvashatunk le egy szemábráról?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A jelterjedési sebességet", jo: false },
                { valasz: "A \"szem\" által meghatározott háromszög szögeit", jo: false },
                { valasz: "Idõzítési hibát.", jo: true },
                { valasz: "A továbbított bitek értékét", jo: false },
                { valasz: "A jelre rakódott zajt.", jo: true }
              ],
            },
			           { kerdes: "Adja meg rövidítéssel azt a hozzáférési technikát, amely ortogonális, rugalmas, de használata során elõfordulhat késleltetés?",
              tipus: "valaszolos",
              valasz: "TDMA"
            },
            { kerdes: "Hány bájt lenne Ethernet esetén a minimális keretméret (elõtag és SFD nélkül), ha tervezéskor 500 m helyett 1 km-es maximális szegmenshosszt engednek meg? (a többi paraméter változatlanul hagyása mellett)?",
              tipus: "valaszolos",
              valasz: "128* - mert a 64 duplázódik a hossz duplázódása miatt"
            },
            { kerdes: "Az alábbiak közül melyek elosztott többszörös hozzáférési módszerek?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Probing (csoportos lekérdezés)", jo: false },
                { valasz: "Egyszerû aloha", jo: true },
                { valasz: "CSMA/CD", jo: true },
                { valasz: "Reservation (helyfoglalás)", jo: false },
                { valasz: "Réselt aloha", jo: true },
                { valasz: "Polling (körbekérdezés)", jo: false }
              ]
            },
            { kerdes: "Az alábbiak közül melyek központilag vezérelt többszörös hozzáférési módszerek?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Probing (csoportos lekérdezés)", jo: true },
                { valasz: "Egyszerû aloha", jo: false },
                { valasz: "CSMA/CD", jo: false },
                { valasz: "Reservation (helyfoglalás)", jo: true },
                { valasz: "Réselt aloha", jo: false },
                { valasz: "Polling (körbekérdezés)", jo: true }
              ]
            },
            { kerdes: "A csillag topológiájú Ethernet csillag-pontjában kapcsolót (switch) is lehet alkalmazni a többkapus ismétlõ (hub) helyett",
              tipus: "igazhamis",
              valasz: true
            },
            { kerdes: "Nevezze meg magyarul vagy spanyolul<!--LOL :D--> azt a sokportos eszközt, amely jellemzõen azonos szabványú hálózatokat köt össze L2 szinten, s a kereteket igyekszik csak a szükséges irányba továbbítani.",
              tipus: "valaszolos",
              valasz: "Switch"
            },
            { kerdes: "Nevezze meg (magyarul vagy angolul) azt a jellemzõen többportos eszközt, amely akár több különféle hálózat között is átjárást biztosíthat újrekeretezéssel anélkül, hogy a hordozott L3-csomagot értelmezné, feldolgozná!",
              tipus: "valaszolos",
              valasz: "Bridge"
            },
            { kerdes: "Ethernet néven számos átviteli közeget, több különbözõ sebességet szabványosítottak.",
              tipus: "valaszolos",
              valasz: "Igaz* - mert van 10/100, 10/100/1000 ethernet"
            },
            { kerdes: "Adja meg rövidítéssel azt a hozzáférési technikát, melynél védõsáv alkalmazása szükséges.",
              tipus: "valaszolos",
              valasz: "FDMA"
            },
            { kerdes: "Melyik OSI réteg tartozik a lokális hálózatok protokoll architektúrájába, és miért?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Csak a fizikai, mert lokális környezetben csak a jel továbbítása a feladat", jo: false },
                { valasz: "A felsoroltak közül egyik sem helyes.", jo: true },
                { valasz: "Az alsó három réteg, mert hálózati funkcióra akkor is szükség van, ha lokális a környezet", jo: false }
              ]
            },
            { kerdes: "Mi a többszörös hozzáférés alapvetõ szerepe?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Rugalmas hálózati elérés biztosítása", jo: true },
                { valasz: "Sikertelen hozzáférési kisérlet ismétlési lehetõségének biztosítása", jo: false },
                { valasz: "Erõforrások többszörös kihasználása", jo: false },
                { valasz: "Források jelének nyalábolása", jo: false },
                { valasz: "Takarékoskodás az átviteli közeggel", jo: true }
              ]
            },
            { kerdes: "Mely tevékenységek jellemzik a CSMA/CD protokollt?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Ha kettõ vagy több állomás ad, abbahagyja az adást", jo: true },
                { valasz: "Valamekkora véletlen késleltetést követõen az állomás újra megpróbálja az adást.", jo: true },
                { valasz: "Az állomás figyeli a csatornát (\"vivõt\")", jo: true },
                { valasz: "Ha az állomás nem érzékel adást a csatornán, elkezdi küldeni a keretet.", jo: true },
                { valasz: "A többi felsorolt válasz közül egyik sem helyes", jo: false }
              ]
            },
            { kerdes: "Milyen megkötések vannak az Ethernet keret hosszára (a felsoroltak közül), és miért? Figyelem, ez dupla kérdés!",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A keret maximális hossza meg van kötve 1500 bájtban, mert ez szövegfájl esetén közel egy képernyõ", jo: false },
                { valasz: "Lényegében egyáltalán nincs megkötés, csak véges hosszú legyen", jo: false },
                { valasz: "A többi felsorolt válasz egyike sem helyes", jo: true },
                { valasz: "A keret minimális hossza is meg van kötve 64 bájtban, hogy senki ne küldözgessen információ nélküli keretet", jo: false }
              ]
            },
            { kerdes: "Ethernet CSMA/CD protokollja szerint az állomás addig folytatja a csomagküldési kísérletet ütközés után, amíg a továbbítás sikeres nem lesz",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Az alábbi protokollok közül melyiknek a legjobb a kihasználtsága?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "CSMA/CD", jo: true },
                { valasz: "A felsoroltak közül mindháromnak egyformán jó a kihasználtsága", jo: false },
                { valasz: "Réselt Aloha", jo: false },
                { valasz: "Egyszerû Aloha", jo: false },
                { valasz: "A felsoroltak közül mindháromnak egyformán rossz a kihasználtsága", jo: false }
              ]
            },
            { kerdes: "Az alábbi protokollok közül melyiknek legrosszabb a kihasználtsága?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Réselt Aloha", jo: false },
                { valasz: "Egyszerû Aloha", jo: true },
                { valasz: "CSMA/CD", jo: false },
                { valasz: "A felsoroltak közül mindháromnak egyformán jó a kihasználtsága", jo: false },
                { valasz: "A felsoroltak közül mindháromnak egyformán rossz a kihasználtsága", jo: false }
              ]
            },
            { kerdes: "Mi a hálózatrészek összekapcsolására szolgáló eszköz általános neve?",
              tipus: "valaszolos",
              valasz: "Router"
            },
            { kerdes: "Az Ethernet hatékonyságát (throughput) lényegesen befolyásolja a keret hossza.",
              tipus: "igazhamis",
              valasz: true
            },
            { kerdes: "Hány bájt lenne Ethernet esetén a minimális keretméret (elõtag és sfd nélkül), ha tervezéskor 10Mbit/s helyett 100Mbit/s adatátviteli sebességet sikerült volna elérni azonos körülmények (maximális szegmensméret, átviteli közeg) között? (csak számot adjon meg!)",
              tipus: "valaszolos",
              valasz: "640"
            },
            { kerdes: "Miért elõnyös switchet (kapcsolót) használni az Ethernet hálózatban hub helyett?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egyáltalán nem elõnyös, hiszen drága", jo: false },
                { valasz: "Azonos adatsebességen a hálózat adatátviteli kapacitása akár a többszörösére növelhetõ.", jo: true },
                { valasz: "A switch segítségével külön ütközési tartományokra bontható a hálózat.", jo: true },
                { valasz: "A többi felsorolt válasz egyike sem helyes", jo: false },
                { valasz: "Így nagy mértékben növelhetõ a hálózat információátviteli képessége, de ehhez persze növelni kell a bitsebességet is", jo: false }
              ]
            },
            { kerdes: "Hány bájt adódik a továbbításra kerülõ felhasználói bitekhez az Ethernet keretben (eltekintve az elõtagtól és a keret elejét jelzõ SFD-tõl, amelyek formailag nem részük a keretnek)?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "18", jo: true },
                { valasz: "48", jo: false },
                { valasz: "16", jo: false },
                { valasz: "12", jo: false },
                { valasz: "20", jo: false },
                { valasz: "64", jo: false },
                { valasz: "egyik elõzõ válasz sem helyes", jo: false }
              ]
            },
            { kerdes: "Az alábbiak közül melyek ismert közös hozzáférési technikák?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "FDMA", jo: true },
                { valasz: "CDMA", jo: true },
                { valasz: "TDMA", jo: true },
                { valasz: "ADMA", jo: false },
                { valasz: "UDMA", jo: false },
                { valasz: "QDMA", jo: false }
              ]
            },
            { kerdes: "Mely(ek) az adatkapcsolati rétegben mûködõ, hálózatrészeket összekapcsoló átjátszó(k)?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "kapcsoló (switch)", jo: true },
                { valasz: "jelismétlõ (repeater)", jo: false },
                { valasz: "híd (bridge)", jo: true },
                { valasz: "átjáró (gateway)", jo: false },
                { valasz: "többkapus jelismétlõ (hub)", jo: false },
                { valasz: "útválasztó (router)", jo: false }
              ]
            },
            { kerdes: "Az alábbiak közül mely állítás(ok) igaz(ak) az Ethernet backoff stratégiájára?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A 3. ütközés után a {0, ... 7} intervallum lesz a sorsolási intervallum.", jo: true },
                { valasz: "A backoff értékét résidõkben számoljuk", jo: true},
                { valasz: "Lehetõvé teszi a hozzáférés bizonyos skálázódását a felhasználók számának változásával.", jo: true },
                { valasz: "Tisztán exponenciális", jo: false },
                { valasz: "Tisztán lineáris", jo: false }
              ]
            },
            { kerdes: "Milyen viszonyban állnak a brigde-ek (hidak) és switchek (kapcsolók)?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A bridge-eket tipikusan régebben, a switcheket tipikusan manapság használják.", jo: true },
                { valasz: "A felsoroltak közül egyik válasz sem helyes", jo: false },
                { valasz: "Annyira különböznek, hogy a viszonyukról értelmetlen beszélni", jo: false },
                { valasz: "A bridge tipikusan több interfésszel rendelkezik, mint a swtich", jo: false },
                { valasz: "A bridge tipikusan több különbözõ L2 technológiájú hálózatot is képes összekapcsolni, míg a switch nem.", jo: true },
                { valasz: "A brigde tipikusan végez újrakeretezés, míg a switch nem.", jo: true },
                { valasz: "Mindkettõ ISO OSI szerint 2. réteg beli funkcionalitású eszköz.", jo: true }
              ]
            },
            { kerdes: "Milyen protokollokat határoz meg az FDDI szabvány?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "MAC: Medium Access Control", jo: true },
                { valasz: "SMT: Station Management", jo: true },
                { valasz: "A felsoroltak közül egyik válasz sem helyes", jo: false },
                { valasz: "PHY: Physical", jo: true },
                { valasz: "PMD: Physical Medium Dependent", jo: true }
              ]
            },
            { kerdes: "Melyek a switchek (kapcsolók) legfõbb jellemzõi az alábbiak közül?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A kerettovábbítást a fejrész vizsgálata után \"szelektíven\" végzi.", jo: true },
                { valasz: "Portjaira csak egyedi állomások csatlakozhatnak", jo: false },
                { valasz: "A felsoroltak közül egyik válasz sem helyes", jo: false },
                { valasz: "A végkészülékeknek figyelembe kell venniük, hogy switchen keresztül mûködnek", jo: false },
                { valasz: "Tárolja és továbbítja a kereteket.", jo: true }
              ]
            },
            { kerdes: "Az alábbiak közül mely(ek) jellemzõ(ek) a réselt (slotted) Alohára?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Jelentõsen nagyobb a késleltetése, mint az egyszerû Alohának", jo: false },
                { valasz: "Jobb a kihasználtsága, mint az egyszerû Alohának.", jo: true },
                { valasz: "A felsoroltak közül egyik válasz sem jellemzõ a réselt Alohára", jo: false },
                { valasz: "Kevesebb ütközés lesz, mint az egyszerû Alohánál azonos forgalom esetén.", jo: true },
                { valasz: "A résidõ határán átnyúlhatnak keretek", jo: false }
              ]
            },
            { kerdes: "Az alábbi állítsok közül melyek igazak az egyszerû Aloha protokollra?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Nem igényel szervezést.", jo: true },
                { valasz: "Ütközés esetén az összes ütközõ keret elvész.", jo: true },
                { valasz: "Az állomások tudják, összesen hány állomás van", jo: false },
                { valasz: "Ütközésmentes", jo: false },
                { valasz: "Minden állomás tetszõleges idõpontban adhat.", jo: true },
                { valasz: "Ütközés esetén az állomás újrapróbálkozhat", jo: true }
              ]
            },
            { kerdes: "Nevezze meg (magyarul vagy angolul) azt az eszközt, ami akár alkalmazásrétegbeli protokollkonverziót is végezhet!",
              tipus: "valaszolos",
              valasz: "gateway"
            },
            { kerdes: "A sokkapus ismétlõre (hub) csatlakozó állomások adása nem ütközik, ha egy-egy portra csak egyetlen állomást csatlakoztatunk.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Milyen tulajdonságok jellemzik az egyszerû Aloha hozzáférési eljárást?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Késleltetése korlátos", jo: false },
                { valasz: "Kihasználtsága igen alacsony", jo: true },
                { valasz: "A többi felsorolt válasz közül egyiksem helyes", jo: false },
                { valasz: "Stabilitása nagyon jó", jo: false },
                { valasz: "Az igazságosságot (egyenlõsdit) hosszú idõszakra teljesíti.", jo: true }
              ]
            },
            { kerdes: "Mi az elõnye az információtovábbító hálózatok kiterjedés szerinti csoportosításának?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Semmi elõnye, ez csak egy szokás", jo: false },
                { valasz: "A különbözõ méretek eltérõ technika, technológia alkalmazását tehetik elõnyössé", jo: true }
              ]
            },
            { kerdes: "Az IEEE 802.3 szabvány lefedi a _teljes_ fizikai és adatkapcsolati rétegeket",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Az alábbiak közül mit tesznek lehetõvé a hálózatrészeket összekapcsoló ismétlõk (repeater)?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Áthidalható távolság növelését", jo: true },
                { valasz: "Különbözõ típusú hálózatok használatát", jo: false },
                { valasz: "Ütközési tartomány méretének csökkentését", jo: false },
                { valasz: "A jel erõsítését", jo: true },
                { valasz: "A többi felsorolt válasz egyike sem helyes", jo: false }
              ]
            },
            { kerdes: "Nevezze meg (magyarul vagy angolul) azt a jellemzõen sokportos eszközt, ami fizikai jelek értelmezése nélkül azokat továbbítja, és ezáltal több gép illetve hálózat összekötését is lehetõvé teszi!",
              tipus: "valaszolos",
              valasz: "hub"
            },
			      { kerdes: "Az alábbiakban a !WiFi csatornák a frekvenciatartomány beli sorrendnek megfelelõ sorszámmal adottak. Mely eset(ek)ben nem lesz átlapolódó csatorna, ha egyszerre az adott csatornákat kívánjuk használni? (A feladatban a 2,4 GHz-es sávban 13 csatornát feltételezünk.)",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "1; 2 ; 3", jo: false },
                { valasz: "Minden felsorolt konfiguráció esetén lesz átlapolódás", jo: false },
                { valasz: "2; 5; 11", jo: false },
                { valasz: "1; 6; 13", jo: true },
                { valasz: "4; 8; 13", jo: false }
              ]
            },
            { kerdes: "Melyek az áramkörkapcsolás legfontosabb jellemzõi?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Nincs forgalom-torlódás csak kiszolgálás elõtti esetleges blokkolás.", jo: true },
                { valasz: "A kommunikáló végpontok között kiépülõ fizikai csatorna dedikált használatú.", jo: true },
                { valasz: "Fizikai kapcsolat épül ki a kommunikáló végpontok között.", jo: true },
                { valasz: "A többi válasz egyike sem helyes", jo: false },
                { valasz: "A csomópontok tárolás-mentesen továbbítják a felhasználói információt.", jo: true }
              ]
            },
            { kerdes: "Az alábbiak közül mely(ek) WLAN mûködési módok?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Kiegyenlített", jo: false },
                { valasz: "Logikai gyûrû", jo: false },
                { valasz: "Mesh", jo: true },
                { valasz: "Infrastruktuális", jo: true },
                { valasz: "Ad-hoc", jo: true }
              ]
            },
            { kerdes: "Mikor lehet érdemes használni az RTS/CTS módszert?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Csak hibakereséshez", jo: false },
                { valasz: "Ha sok a nagy forgalmú állomás.", jo: true },
                { valasz: "Ha a WLAN-állomások egymáshoz nagyon közel vannak", jo: false },
                { valasz: "Ha elõfordulhat a rejtett állomás probláma.", jo: true },
                { valasz: "A többi válasz küzül egyik sem helyes", jo: false }
              ]
            },
            { kerdes: "Mi okozza a blokkolást az áramkörkapcsolt hálózat csomópontjában (kapcsolójában) forgalmi túlterheléskor?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A csomópont valamennyi tárolója már megtelt", jo: false },
                { valasz: "A kívánt kimenet már használatban van egy másik csatorna számára.", jo: true },
                { valasz: "A többi válasz egyike sem helyes", jo: false },
                { valasz: "Nincs szabad út a kapcsolóban az összekötni kívánt be- és kimenet között.", jo: true }
              ]
            },
            { kerdes: "Az alábbi szabványok közül mely(ek) használhat(nak) FHSS-t?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A felsoroltak közül egyik sem használhat FHSS-t", jo: false },
                { valasz: "802.11", jo: true },
                { valasz: "802.3", jo: false },
                { valasz: "802.15.1", jo: true },
                { valasz: "802.16", jo: false }
              ]
            },
            { kerdes: "Az alábbi szabványos technológiák közül mely(ek) használhat(nak) FHSS-t?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "WiFi", jo: true },
                { valasz: "Bluetooth", jo: true },
                { valasz: "!WiMAX", jo: false },
                { valasz: "Ethernet", jo: false },
                { valasz: "A felsoroltak közül egyiksem használhat FHSS-t", jo: false }
              ]
            },
            { kerdes: "Az összeköttetés-mentes módon mûködõ csomagkapcsolt hálózatban nincs a kommunikáló végpontok között elõre \"kiépített\" (lerögzített) összeköttetés, minden csomagot valamennyi érintett csomópont \"emlékezet nélkül\" megvizsgál és csomagonként egyedi döntést hozva továbbít.",
              tipus: "igazhamis",
              valasz: true
            },
            { kerdes: "A 802.15 WPAN és a 802.16 WMAN szabványok egyaránt magukba foglalják a logikai link-vezérlést is.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Az alábbiak közül milyen modulációt alkalmazhat egy 802.11-es szabványt megvalósító eszköz?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A többi felsorolt válasz egyike sem helyes", jo: false },
                { valasz: "DSSS", jo: true, megjegyzes: "802.11b, 802.11-1997, ..." },
                { valasz: "FHSS", jo: true, megjegyzes: "802.11-1997" },
                { valasz: "OFDM", jo: true, megjegyzes: "802.11a, ..." },
                { valasz: "FM (frekvenciamoduláció)", jo: false }
              ]
            },
            { kerdes: "Miért használnak 4 MAC címet a 802.11 protokollban?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A cím megismétlésére használják, hogy a rádiós közegen elõforduló gyakoribb bithiba miatt sérülõ cím biztosan ép maradjon", jo: false },
                { valasz: "A többi válasz közül egyik sem helyes", jo: false },
                { valasz: "Ezáltal lehet egyértelmûvé tenni, hogy a keret honnan hová megy.", jo: true },
                { valasz: "Jelenleg csak 2 címet használnak belõle, de a jövõbeli funkciók számára hoztak létre további 2 címmezõt", jo: false }
              ]
            },
            { kerdes: "A 802.11-nek melyik közeg-hozzáférési módszere használja a Network Allocation Vectort?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Az RTS/CTS használja.", jo: true },
                { valasz: "A PCF használja", jo: false },
                { valasz: "A 802.11-ben a Network Allocation Vectort nem használják", jo: false },
                { valasz: "A többi válasz közül egyik sem helyes", jo: false }
              ]
            },
            { kerdes: "Mely állítás igaz blokkolással kapcsolatban a csomagkapcsolók esetén?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A csomagkapcsolás velejárója a forgalmi túlterhelésnél bekövetkezõ csomag(forgalom)torlódás.", jo: true },
                { valasz: "A többi válasz egyike sem helyes", jo: false },
                { valasz: "A torlódás eredménye az átlagosnál nagyobb csomagkésleltetés, esetleg csomagvesztés.", jo: true },
                { valasz: "Az áramkörkapcsolással megegyezõ módon nem jön létre blokkolás.", jo: true }
              ]
            },
            { kerdes: "Melyek a hálózatok alapvetõ mûködési módjai?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "áramkör-kapcsolt mûködésmód", jo: true },
                { valasz: "összeköttetés-mentes mûködés", jo: false },
                { valasz: "összeköttetés alapú mûködés", jo: false },
                { valasz: "csomagkapcsolt mûködésmód", jo: true },
                { valasz: "A többi válasz küzül egyik sem helyes", jo: false }
              ],
			  megjegyzes: "A másik kettõ is lehetne akár jó, de azok szerintem nem alapvetõek, mivel a csomagkapcsolt egy-egy esetei."
            },
            { kerdes: "Mi a viszonya az IEEE 802.11 szabványcsaládnak és a Wi-Fi Alliance-nek egymáshoz?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A Wi-Fi Alliance lényegében együttmûködés a gyártók és a piaci szereplõk között a szabvány bevezetésére", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Gyakorlatilag ugyanaz a \"viszony\", mint a 802.16 szabvány és a !WiMAX forum között", jo: true, megjegyzes: "2010_03_09-BWA - 23. oldal" }
              ]
            },
            { kerdes: "Az alábbiak közül mely WLAN-szabány(ok) elméleti maximális sebessége 54 Mbit/s?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "802.11g", jo: true },
                { valasz: "802.11a", jo: true },
                { valasz: "802.11b", jo: false },
                { valasz: "802.11n", jo: false },
                { valasz: "A többi válasz küzül egyik sem helyes", jo: false }
              ]
            },
            { kerdes: "Az alábbiak közül mely módszer(ek) segítségével lehet az ütközéseket elkerülni a 802.11 protokollban?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "RTS/CTS módszerrel.", jo: true },
                { valasz: "DCF móddal.", jo: true },
                { valasz: "A többi felsorolt válasz közül egyiksem helyes", jo: false },
                { valasz: "Ütközésdetektálásal", jo: false },
                { valasz: "PCF móddal.", jo: true }
              ]
            },
            { kerdes: "A Bluetooth piconetben egyidejûleg legfeljebb 255 Slave állomás lehet aktív.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Az alábbiak közül mely állítás(ok) igaz(ak) az adatszóró (broadcast) hálózatokkal kapcsolatban?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Lényegében áramkörkapcsolást végeznek", jo: false },
                { valasz: "Nem alkalmaznak kapcsolást a végpontok közötti kommunikációs csatornák létrehozására.", jo: true },
                { valasz: "A többi válasz egyike sem helyes", jo: false },
                { valasz: "Jellegzetesen lokális környezetben mûködnek.", jo: true }
              ]
            },
            { kerdes: "A 802.11-es WLAN-ok a kódosztású többszörös hozzáférés következtében váltak hatékonnyá.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Miért nincs ütközésdetektálás a 802.11 közeghozzáférési protokollban? ",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Nincs rá szükség a kódosztású többszörös hozzáférés miatt", jo: false },
                { valasz: "A többi válasz közül egyik sem helyes", jo: false },
                { valasz: "Mert a rádiócsatornán nem tudja az aktív állomás detektálni, hogy egyedül használja-e a csatornát.", jo: true },
                { valasz: "Van ütközésdetektálás a 802.11 protokollban", jo: false }
              ]
            },
            { kerdes: "Milyen üzenet(eke)t használ az RTS/CTS módszer?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A többi válasz közül egyik sem helyes", jo: false },
                { valasz: "DCF", jo: false },
                { valasz: "PCF", jo: false },
                { valasz: "RTS", jo: true },
                { valasz: "CTS", jo: true },
                { valasz: "Az RTS/CTS nem használ üzeneteket", jo: false }
              ]
            },
            { kerdes: "Mely állítás(ok) igaz(ak) az alábbiak közül a WLAN mesh-sel kapcsolatban?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A hálózatban szereplõ csomópontok egyenrangúak.", jo: true },
                { valasz: "A többi válasz küzül egyik sem helyes", jo: false },
                { valasz: "A csomópontok egymáson keresztül is továbbíthatnak információt.", jo: true },
                { valasz: "A 802.11s szabvány írja le.", jo: true },
                { valasz: "Az adatsebesség nem függ attól, hogy átlagosan hány ugráson (hop) keresztül kerül továbbításra az információ", jo: false }
              ]
            },
            { kerdes: "Mire kell gondosan ügyelni WLAN-ok alkalmazása esetén?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egy WLAN hálózatban mindig csak páros számú eszköz található", jo: false },
                { valasz: "Nem szabad külön gyártótól származó !WiFi jelzéssel eszközöket használni, mert azok általában nem kompatibilisek", jo: false },
                { valasz: "A többi válasz egyike sem helyes", jo: false },
                { valasz: "A titkosítás nélküli rádiócsatornán keresztül bárki könnyen lehallgathatja az üzeneteinket.", jo: true },
                { valasz: "Ne legyenek azonos frekvencián üzemelõ AP-k egymáshoz túl közel.", jo: true }
              ]
            },
            { kerdes: "Melyek lehetnek az alábbiak közül a !WiMAX fontosabb alkalmazási területei?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Otthoni felhasználók Internet-elérésének biztosítása.", jo: true },
                { valasz: "A többi válasz egyike sem helyes", jo: false },
                { valasz: "Wi-Fi hotspotok, mobil bázisállomások gerinchálózatakénti mûködés.", jo: true },
                { valasz: "Egyetemi campusok, ipari telephelyek lefedése.", jo: true }
              ]
            },
            { kerdes: "A 802.16 számára a !WiMAX olyan, mint a 802.11 számára a ....",
              tipus: "valaszolos",
              valasz: "WiFi"
            },
            { kerdes: "Az adás után legkorábban mennyi idõvel késõbb adhat újra egy ad-hoc módú WLAN-állomás?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "DIFS", jo: true },
                { valasz: "CIFS", jo: false },
                { valasz: "SIFS", jo: false },
                { valasz: "PIFS", jo: false }
              ]
            },
            { kerdes: "Mi jelenti a legfõbb különbséget az áramkör- és a csomagkapcsolás között a csatornahasználat szempontjából?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A csomagkapcsolás dedikált csatornákat alkalmaz", jo: false },
                { valasz: "Az áramkörkapcsolás osztottan használja a csatornákat", jo: false },
                { valasz: "A többi válasz közül egyik sem helyes.", jo: true }
              ]
            },
            { kerdes: "Milyen lényeges eltérések vannak a 802.11 és a 802.3 keretek között?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Nincsen semmi különbség a 802.11 és a 802.3 keretek között", jo: false },
                { valasz: "Az FCS mezõben használt CRC hosszabb a 802.11-ben, mert a rádiós közegen sokkal nagyobb védelem kell", jo: false },
                { valasz: "A többi válasz közül egyik sem helyes.", jo: true },
                { valasz: "A 802.11 MAC címei sokkal rövidebbek, mert kevesebb eszközt kell csak megcímezni", jo: false }
              ]
            },
            { kerdes: "Melyek a fõ jellemzõi a Bluetooth fizikai rétegének (\"rádiós interfész\")?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A többi válasz egyike sem helyes", jo: false },
                { valasz: "Frequency Division Duplex (FDD) módszer az adás-vétel megvalósítására", jo: false },
                { valasz: "FHSS modulációs eljárást használ.", jo: true },
                { valasz: "A 2,4 GHz-es ISM sávban mûködik.", jo: true }
              ]
            },
            { kerdes: "Az alábbiak közül mely állítás(ok) igaz(ak) a scatternetre?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Több piconet alkotja.", jo: true },
                { valasz: "Több Master is lehet benne.", jo: true },
                { valasz: "A többi válasz egyike sem helyes", jo: false },
                { valasz: "Lehet olyan eszköz, mely egyszerre lehet Master és Slave szerepben is.", jo: true },
                { valasz: "A Bluetooth szabvány tartalmazza a scatternetek kialakításának és mûködésének leírását", jo: false }
              ]
            },
            { kerdes: "A 802.11-ben a PCF közeg-hozzáférési módszer lényegében lekérdezést használ a többszörös hozzáférés vezérlésére.",
              tipus: "igazhamis",
              valasz: true
            },
            { kerdes: "Melyek a 802.15.1 szabvány protokoll architektúrájának a jellemzõi?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Csak a fizikai réteg leírását tartalmazza", jo: false },
                { valasz: "Saját rétegezett architektúrája van.", jo: true },
                { valasz: "A \"Transport protocols\" néven egy alsó réteget, és \"middleware protocols\" néven egy felsõ réteget definiál", jo: true },
                { valasz: "A többi válasz egyike sem helyes", jo: false }
              ]
            },
            { kerdes: "Milyen mûködési fázisokat alkalmaznak az összeköttetés alapú módon mûködõ hálózatokban?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "összeköttetés felépítése", jo: true },
                { valasz: "felhasználói információ-átvitel", jo: true, megjegyzes: "mi értelme lenne egyébként??" },
                { valasz: "forgalom lekérdezése", jo: false },
                { valasz: "A többi válasz egyike sem helyes", jo: false },
                { valasz: "összeköttetés lebontása", jo: true }
              ]
            },
            { kerdes: "Miért elõnyös a csomagkapcsolásban a továbbított adategységek méretének korlátozása?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A többi válasz egyike sem helyes", jo: false },
                { valasz: "Nem okoz beláthatatlan idõtartamú foglaltságot a továbbítási útvonalon egy-egy adategység (komplett üzenet).", jo: true },
                { valasz: "Mert így csökken a keretezésbõl adódó késleltetés.", jo: true },
                { valasz: "A továbbított csomag meghibásodása esetén kedvezõbb lehet a csatorna kihasználtsága.", jo: true }
              ]
            },
            { kerdes: "Az infrastruktúra alapú WLAN hálózati elrendezés csak egy Basic Service Setet használhat.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Az alábbiak közül mely frekvenciát használhat egy !WiFi-eszköz?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "3,5 GHz", jo: false },
                { valasz: "2,4 GHz", jo: true },
                { valasz: "A többi felsorolt válasz közül egyiksem helyes", jo: false },
                { valasz: "900 MHz", jo: false },
                { valasz: "5 GHz", jo: true }
              ]
            },
            { kerdes: "Az alábbi szabványos technológiák közül mely(ek) használhat(nak) OFDM-et?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "WiMAX", jo: true },
                { valasz: "Ethernet", jo: false },
                { valasz: "A felsoroltak közül egyiksem használhat OFDM-et", jo: false },
                { valasz: "WiFi", jo: true },
                { valasz: "Bluetooth", jo: false }
              ]
            },
            { kerdes: "Jelölje meg a hamis állítás(oka)t az alábbiak közül!",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Az áramkörkapcsolt hálózat mûködése csak összeköttetés-mentes módon lehetséges.", jo: true },
                { valasz: "A csomagkapcsolt hálózat csak összeköttetés-mentes módon mûködhet.", jo: true },
                { valasz: "Az áramkörkapcsolt hálózat csak összeköttetés alapú módon mûködhet", jo: false },
                { valasz: "Az áramkörkapcsolt hálózat mûködhet összeköttetés alapú és összeköttetés-mentes módon.", jo: true }
              ]
            },
            { kerdes: "A 802.11-ben alkalmazott ütközéselkerülés (Collision Avoidance) sokkal nagyobb hálózati kihasználtságot tesz lehetõvé, mint az ütközésdetektálás.",
              tipus: "igazhamis",
              valasz: true
            },
            { kerdes: "Milyen alapvetõ módokon lehet továbbítani a felhasználói jelzéseket a hálózatban?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A többi válasz közül egyik sem helyes", jo: false },
                { valasz: "Sávon kívüli (out-of-band) módszerrel.", jo: true },
                { valasz: "Sávon belüli (in-band) módszerrel.", jo: true }
              ]
            },
            { kerdes: "Milyen absztrakt alkotóelemekbõl építhetõk fel az információtovábbító hálózatok?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "fényvezetõkbõl", jo: false },
                { valasz: "végpontokból (end system)", jo: true },
                { valasz: "csomópontokból (node)", jo: true },
                { valasz: "rádiócsatornákból", jo: false },
                { valasz: "többi válasz egyike sem helyes", jo: false },
                { valasz: "összeköttetésekbõl (link)", jo: true }
              ]
            },
            { kerdes: "Mi a lényeges eltérés az IEEE 802.11-es WLAN szabványváltozatok között?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Csak némelyikük kompatibilis az új 802.16 szabvánnyal", jo: false },
                { valasz: "Eltérõ módon alakítják ki a kereteket", jo: false },
                { valasz: "Más a logikai link-vezérlésük", jo: false },
                { valasz: "A többi válasz egyike sem helyes.", jo: true }
              ]
            },
            { kerdes: "A 802.16 fizikai rétegbeli jellemzõit úgynevezett profilok írják le.",
              tipus: "igazhamis",
              valasz: true
            },
            { kerdes: "Az alábbiak közül mely(ek) jelölhet(nek) mobil !WiMAX szabványt? ",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "802.15.3", jo: false },
                { valasz: "802.3z", jo: false },
                { valasz: "802.15.1", jo: false },
                { valasz: "802.16d", jo: false },
                { valasz: "802.11a", jo: false },
                { valasz: "802.16e", jo: true },
                { valasz: "802.11s", jo: false }
              ]
            },
			       { kerdes: "Milyen kiegészítésekre van szükség a széles értelemben vett routingot illetõen, ha mobil végpontokat is meg akarjuk engedni a hálózatban?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Idegen (foreign) ügynök", jo: true },
                { valasz: "Otthoni (home) ügynök", jo: true },
                { valasz: "A mobil végpont felkészítése az ügynökkel való párbeszédre", jo: true },
                { valasz: "A mobil végpont mozgási jellemzõinek korlátozása", jo: false }
              ]
            },
            { kerdes: "Milyen információt gyûjthetünk a hálózat állapotáról az útvonaltáblák kitöltéséhez?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Hol helyezkednek el földrajzilag a csomópontok", jo: false },
                { valasz: "Az egyes csomópontok melyik másik csomópontokkal vannak összekötve", jo: true },
                { valasz: "Az egyes csomópontok melyik végpontokat (beleértve a LAN-okat) szolgálják ki", jo: true }
              ]
            },
            { kerdes: "Routing csak összeköttetésmentes csomagkapcsolt hálózatban van, mert az áramkörkapcsolt hálózatok dedikált átviteli csatornákat használnak, az összeköttetés alapú csomagkapcsolás pedig lényegében virtuális áramkörkapcsolás",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Milyen információt juttatnak el a csomópontok és kiknek a link state (összeköttetés-alapú) routing módszer esetén?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A csomópontok elomdják a szomszédaiknak a velük kapcsolatos tapasztalataikat", jo: false },
                { valasz: "A csomópontok elmondják a hálózatról alkotott elképzeléseiket mindenkinek", jo: false },
                { valasz: "Egyik válasz sem jó", jo: true, megjegyzes: "mindenkinek elmondják a szomszédaikkal kapcsolatos tapasztalataikat" }
              ]
            },
            { kerdes: "Milyen tulajdonságai vannak a routing centralizált megoldásnak?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Nem biztosítható, hogy a hálózati csomópontok egységesen \"lássák\" a hálózatot", jo: false },
                { valasz: "A hálózat mûködésének ez a legbiztonságosabb módja", jo: false },
                { valasz: "Így biztosítható a legkönnyebben, hogy a hálózati csomópontok egységesen \"lássák\" a hálózatot", jo: true },
                { valasz: "Nagy kockázatot jelent az egész hálózat mûködését biztosító centrum meghibásodása", jo: true }
              ]
            },
            { kerdes: "Milyen szerepet játszanak az Autonóm Rendszerek (AS) Internet útvonalirányításában?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Megnehezítik a gerincrouterek dolgát, hogy helyesen állapítsák meg a végpontok felé vezetõ legalkalmasabb utat", jo: false },
                { valasz: "Lehetõvé teszik a hálózat gerinc részében mûködõ routerek számára, hogy a felhasználói végpontok nagyszámú csoportjait csak egy-egy bejegyzésként kezeljék az útvonaltábláikban", jo: true },
                { valasz: "Lehetõvé teszik a routing feladatok hierarchikus megosztását a világméretû hálózatban", jo: true },
                { valasz: "Megnehezítik az egységes (konzisztens) kép kialakítását a hálózatról, mert a belsejükben szabadon dönthetnek az alkalmazott routing protokollról", jo: false }
              ]
            },
            { kerdes: "Melyik állításokat tartja helyesnek az alábbiak közül?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A routing kizárólag a csomagtovábbítást jelenti az összeköttetésmentes hálózatokban", jo: false },
                { valasz: "A routing alatt kizárólag az útvonaltáblák létrehozását értjük", jo: false },
                { valasz: "A routingra nincs szükség az összeköttetés-alapú hálózatokban", jo: false },
                { valasz: "A routing a végpontok közötti alkalmas útvonal kiválasztását és az így kiválasztott útvonalon a csomagtovábbítást jelenti", jo: true }
              ]
            },
            { kerdes: "Milyen routing feladatokat jelent a mozgó (a hálózatban csatlakozási pontot változtató) felhasználónak érkezõ csomag eljuttatása a címzetthez?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A mobil felhasználó értesíti a partnereit, hogy melyik hálózatot szándékozik meglátogatni, és így azok már a megfelelõ hálózati címre küldik az üzeneteiket", jo: false },
                { valasz: "A mobil felhasználó igényel egy úgynevezett mozgó IP címet, és ezen a hálózati protokoll megtalálja, bárhol van a hálózatban", jo: false },
                { valasz: "A hazai ügynököt (home agent) értesítenie kell az idegen ügynöknek (foreign agent), hogy egy mobil felhasználó van a hálózatban", jo: true },
                { valasz: "Az idegen ügynök a hozzá érkezõ, belsejében a mobil felhasználónak szóló csomagot kézbesíti a hozzá bejelentkezett mobil felhasználónak", jo: true },
                { valasz: "A hazai ügynöknek át kell csomagolnia a mobil felhasználó részére érkezett üzenetet, és elküldeni azt az idegen ügynökhöz?", jo: true, megjegyzes: "IPv4-ben biztosan" }
              ]
            },
            { kerdes: "A távolság-vektor (routing) módszer végtelenségig számolását oly módon szüntethetjük meg, hogy végesre korlátozzuk a hálózatban lehetséges távolságokat",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "A távolság-vektor (routing) módszer a Dijkstra algoritmust használja a hálózatról összegyûjtött információból az útvonaltáblák kitöltéséhez.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Mit neveznek az útvonalválasztásnál autonóm rendszernek?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egy önmûködõen, felügyelet nélkül dolgozó rendszert", jo: false },
                { valasz: "Olyan hálózat, amely maga dönti el a használt hálózati protokollt", jo: false },
                { valasz: "Egy olyan hálózatrészt, amely nem kapcsolódik további hálózatokhoz", jo: false },
                { valasz: "Egy olyan hálózatrész, amelyen belül egységes útvonalválasztási módszert alkalmaznak", jo: true }
              ]
            },
            { kerdes: "Az alábbiak közül mely(ek) routing feladat(ok)?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Megismerni a hálózatot alkotó csomópontok és összekötések (linkek) aktuális struktúráját, állapotát", jo: true },
                { valasz: "Megoldani az aktuálisan fellépõ útvonal-kijelölési vagy útválasztási feladatokat", jo: true },
                { valasz: "A hálózat aktuális állapotának ismeretében mindegyik csomópontban olyan információs bázist generálni, amelynek használatával meg lehet oldani az útvonal-kijelölési vagy útválasztási feladatokat", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false }
              ],
			  megjegyzes: "Nem egyértelmû a diák alapján, hogy ezek lehet-e vagy sem, tehát itt van egy bizonytalansági tényezõ. Mindenesetre néhány hivatkozási alap: http://tools.ietf.org/html/rfc760 http://tools.ietf.org/html/rfc1058 http://en.wikipedia.org/wiki/Routing"
            },
            { kerdes: "Elosztott routing esetén a csomópontok általában önállóan, saját kezdeményezésként közölnek routing információt a többiek részére.",
              tipus: "igazhamis",
              valasz: true
            },
            { kerdes: "Milyen eszközt használnak a csomópontok az útvonal-kijelölés, illetve az útválasztás elvégzésére?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Keresési algoritmusokat", jo: true },
                { valasz: "Számítási algoritmusokat", jo: false },
                { valasz: "Táblázatokban nyilvántartott adatokat", jo: true }
              ]
            },
            { kerdes: "A távolságvektor routing módszernél a csomópontok a többi csomóponttól ÁLTALUK MÉRT TÁVOLSÁGUKAT közlik a szomszédaikkal.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Milyen nagyságrendû számítást igényel a legrövidebb út meghatározása egy olyan hálózatban, amelynek N csomópontja és E összeköttetése van? (egy összefüggést, \"képletet\", kifejezést kell megadni)",
              tipus: "valaszolos",
              valasz: "O(!ElogE)"
            },
            { kerdes: "Mi a szerepe, jelentõsége a _multicast routing_-nak, és melyek a jellemzõi?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A címzetteket az egyedi címeik alapján, azok ügyes tömörítésével azonosítja", jo: false },
                { valasz: "A címzettek azonosítására nem a csoporttagok egyedi címeinek listáját használja, hanem egy csoportcímet", jo: true },
                { valasz: "Lehetõvé teszi különbözõ csomagoknak ugyanahhoz a címzetthez való hatékony eljuttatását", jo: false },
                { valasz: "Lehetõvé teszi ugyanannak a csomagnak több címzetthez való hatékony eljuttatását", jo: true }
              ]
            },
			    { kerdes: "Teljesítménykorlátok megadása, vagyis kiszolgálási garancia rögzítése csak determinisztikusan lehet értelmes, mert semmi haszna azt lerögzíteni, hogy valamilyen kiszolgálási jellemzõ milyen valószínûséggel teljesül.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Hogyan közli az IPv4 a hasznos teher (payload) méretét?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Csak közvetve.", jo: true },
                { valasz: "Egyáltalán nem közli", jo: false },
                { valasz: "A Payload Length mezõben, 32 bites egységekben", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Mi a jellemzõje a max-min igazságos erõforrás-megosztásnak?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "A jogosultságuk felett kérõk nem kapnak semmit", jo: false },
                { valasz: "Akkor lép \"mûködésbe\", ha az igények túllépik a lehetõségeket", jo: true },
                { valasz: "Mindazok, akik a jogosultságuk alatti kiszolgálást kérnek, megkapják a teljes kiszolgálást", jo: true }
              ]
            },
            { kerdes: "Minimum milyen hosszú (hány bájt) az IPv4 PDU fejrészének a mérete?",
              tipus: "valaszolos",
              valasz: "20"
            },
            { kerdes: "Mit nevezünk alapértelmezett útvonalnak vagy alapértelmezett átjárónak?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Errefelé mindegyik csomagot el kell küldeni", jo: false },
                { valasz: "Egyik válasz sem jó.", jo: true },
                { valasz: "Elõször erre kell megkísérelni a csomag továbbítását", jo: false }
              ]
            },
            { kerdes: "Miért nem lehet minden esetben egyetlen adatkapcsolati keretben továbbítani egy IP csomagot?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Mert az adatkapcsolati protokollok általában nem engednek meg akkora adatmennyiséget a keretben, mint amekkora egy IP csomag lehet", jo: true, megjegyzes: "pl.: Ethernet max 1500" },
                { valasz: "Mert gyorsabban ér célba, ha kisebb részekre tördelve továbbítjuk", jo: false },
                { valasz: "Mert biztonságosabb, ha részekben továbbítjuk", jo: false },
                { valasz: "Egyik felsorolt válasz sem jó", jo: false },
                { valasz: "Mert ez javítja a csatorna kihasználtságát", jo: false }
              ]
            },
            { kerdes: "Hogyan csoportosíthatók az információtovábbító hálózatokban a kiszolgálással szemben támasztott igények?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Az összes igény mindig azonnali kiszolgálásra törekszik", jo: false },
                { valasz: "Egyik válasz sem jó", jo: true },
                { valasz: "Valamennyi igény egyformán csak kiszolgálást akar", jo: false },
                { valasz: "Az összes igény a hibamentes átvitelt tartja a legfontosabbnak", jo: false },
                { valasz: "Bizonyos igények annak örülnek, ha ki sem szolgálják õket", jo: false }
              ]
            },
            { kerdes: "Mi jelentése és a szerepe a TTL mezõnek?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Megmondja, hogy mikorra kell a csomagnak célba érni", jo: false },
                { valasz: "A csomagok élettartamát korlátozza", jo: true, megjegyzes: "Time to live - http://hu.wikipedia.org/wiki/Time_To_Live" },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Megmondja, hogy a csomagot mikor indította útjára a feladó", jo: false }
              ]
            },
            { kerdes: "Mit tekinthetünk a TCP/IP protokollarchitektúra legfontosabb eltéréseinek az ISO-OSI modelltõl?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Nem rendelkezik az adatkapcsolati és a fizikai rétegekrõl, csak a csatlakozást (interfész) írja elõ a fontos adatkapcsolati protokollokhoz.", jo: true },
                { valasz: "Nem választja szét az alkalmazási rétegtõl a megjelenítési és a viszony rétegeket.", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Milyen jellemzõkkel teljesíti az IP a fõ funkcióit?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A csomagtovábbítást a lehetõ legjobb szándékkal (best effort jeleggel) hajtja végre.", jo: true },
                { valasz: "A csomagokat a küldésük sorrendjében juttatja a címzetthez", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Gondoskodik az elveszett csomagok megkeresésérõl", jo: false },
                { valasz: "Összeköttetés-mentes csomagkapcsolást valósít meg.", jo: true },
                { valasz: "A hibás csomagokat kijavítja", jo: false }
              ]
            },
            { kerdes: "Az IP fejrész Protocol nevû mezõje azt mondja meg, hogy milyen protokoll adategysége tölti meg az IP csomag payload-ját.",
              tipus: "igazhamis",
              valasz: true
            },
            { kerdes: "Miért kell az IP fejléc Header Checksum mezõjének a tartalmát minden továbbítási lépésben újraszámolni?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Mert a fejlécben esetleg megváltoztatunk valamit a továbbítás során.", jo: true },
                { valasz: "Egyáltalán nem kell, sõt hibát okozhat", jo: false },
                { valasz: "Mert menetközben a csomag sérülhetett", jo: false },
                { valasz: "Csupán biztonsági okból, hogy frissítsük a biteket", jo: false }
              ]
            },
            { kerdes: "Az IP által meghatározott módon a 32 bites címekkel több mint négymilliárd hálózati végzõdés azonosítható.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Mikor lép fel ütemezési feladat?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Ha az egyik igényt sem akarjuk elõnyben részesíteni", jo: false },
                { valasz: "Ha hosszabb idõre átlagolva sem tudja az erõforrás a feladatot ellátni", jo: false },
                { valasz: "Ha egy osztott használatú erõforrásra idõnként túl sok igény jelentkezik", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Mire utal a \"forró krumpli\" (hot potato) módszernek a neve csomagtovábbításban?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A forró krumpli éget, tehát meg kell várniu, amíg kihûl", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "A forró krumplit a legjobb, ha gyorsan tovább dobjuk.", jo: true }
              ]
            },
            { kerdes: "Hogyan közli az IPv4 a hasznos teher (payload) méretét?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyáltalán nem közli", jo: false },
                { valasz: "Csak közvetve", jo: true },
                { valasz: "A Payload Length mezõben, 32 bites egységekben", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "A \"nem-munka-megõrzõ\" ütemezés csak elvi lehetõség, valójában semmi értelme egy igényt várakoztatni, amikor lehetõség van a kiszolgálására.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Mit tesz egy IP router, ha a tördelés Flags mezõjének második bitjében (DF bit) 1-es értéket talál?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Ha az MF bit is 1-es, akkor tördeli a csomagot", jo: false },
                { valasz: "Egyik válasz sem jó", jo: true },
                { valasz: "Mindenképpen tördelés nélkül továbbítja", jo: false },
                { valasz: "Feljegyzi, hogy ki küldte a csomagot", jo: false }
              ]
            },
            { kerdes: "Mi a CIDR alkalmazásának legfõbb célja?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Ne kelljen figyelni a címek elején lévõ prefixre", jo: false },
                { valasz: "A címtartomány növelése", jo: false },
                { valasz: "A címtartomány kihasználásának javítása.", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Az Internet Protocol a hálózati végpontok azonosítására NEM hierarchikus címeket használ",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Mit azonosít az IP fejrész ötödik (Identification) mezõje?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A küldõ programot", jo: false },
                { valasz: "Nincs ilyen mezõ", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Az IP csomag töredékszámát", jo: true },
                { valasz: "A címzettet", jo: false }
              ]
            },
            { kerdes: "Az IP fejléc hetedik (Fragment Offset) mezõje megmondja, hogy hová csúszott el a töredék az eredeti helyérõl",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Mekkora egységekben változhat az IP PDU fejrészének mérete?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Fél bájtokban", jo: false },
                { valasz: "Egyik válasz sem jó", jo: true, megjegyzes: "32 bites szavakban" },
                { valasz: "16 bites szavakban", jo: false },
                { valasz: "Oktettekben", jo: false },
                { valasz: "Bájtokban", jo: false }
              ]
            },
            { kerdes: "Mikor beszélünk statisztikus nyereségrõl?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Ha szerencsejátékban többször nyerünk, mint vesztünk", jo: false },
                { valasz: "Egyik válasz sem jó", jo: true, megjegyzes: "ha az erõforrást az igények csúcsértéke helyett kb. az átlagos értékre méretezzük" },
                { valasz: "Ha az erõforrást az igények csúcsértéke helyett annak a felére méretezzük", jo: false }
              ]
            },
            { kerdes: "Mit jelent tartalmában a Classless Inter-Domain Routing?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Osztálynélküli tartományközi útválasztás", jo: false },
                { valasz: "Az A, B és C osztályú címek merev !NetID/HostID osztásának megszüntetését", jo: true, megjegyzes: "az Osztálynélküli tartományközi útválasztás nem tartalmában jelenti ezt...de ízlés szerint változhat" },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Milyen összetevõket alkalmaz a feladatütemezési módszer céljai elérésére?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Meghatározza a kiszolgálásra jogosultak körét", jo: true, megjegyzes: "implicit benne van a diákban, de nem egyértelmû, mert a jogosultság kérdése nem teljesen ez a feladatkör" },
                { valasz: "Meghatározza a kiszolgálásból kiesõket telített erõforrás esetén", jo: true },
                { valasz: "Meghatározza a kiszolgálásért fizetendõ díjakat", jo: false },
                { valasz: "Meghatározza a kiszolgálási sorrendet", jo: true }
              ]
            },
            { kerdes: "Mely erõforrások iránti túlzott igény miatt van szükség feladatütemezésre az információtovábbító hálózatokban?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A jelátviteli összeköttetések (linkek) átviteli képessége miatt", jo: true },
                { valasz: "A csomópontok elhelyezkedése miatt", jo: false },
                { valasz: "Elsõsorban az emberi erõforrások miatt", jo: false },
                { valasz: "A csomópontok véges tárolóképessége miatt", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Mi a funkciója az IP-nek az alábbiak közül?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egyik felsorolt válasz sem jó", jo: false },
                { valasz: "A hálózati csomópontokon a cél irányába továbbítja a csomagokat.", jo: true },
                { valasz: "Címzést biztosít a hálózati végpontok azonosítására.", jo: true },
                { valasz: "Gondoskodik az adatkapcsolati keretek méretét meghaladó csomagok kezeléséról.", jo: true }
              ]
            },
            { kerdes: "Van-e lényegi (alapvetõ) különbség a csomagtovábbításban, ha a célhálózat közvetlenül csatlakozik a csomagot továbbító csomóponthoz, illetve, ha a célhálózat távoli?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Nincs, mert mindkét esetben a következõ (esetleg végpont) adatkapcsolati címével ellátott keretbe kell helyezni a továbbítandó csomagot, és a megfelelõ porton keresztül továbbítani.", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Igen, mert az utóbbi esetben a csomagot a következõ csomópont IP címével ellátva kell továbbítani", jo: false }
              ]
            },
            { kerdes: "Hogyan valósítja meg a WFQ az általános erõforrás-megosztás (GPS) elvét?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: true, megjegyzes: "azért, mert a WFQ a GPS szerinti kiszolgálásának a végét számolja ki..." },
                { valasz: "Kiszámítja a csomagok kiszolgálásának a GPS szerinti kezdetét, és annak sorrendjében valósítja meg a kiszolgálást", jo: false },
                { valasz: "A kiszolgálási sorrendet a csomagok hossza szerint állapítja meg", jo: false }
              ]
            },
            { kerdes: "Mi az MTU?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: true, megjegyzes: "Maximum Transmission Unit" },
                { valasz: "Minimum Transmission Unit", jo: false },
                { valasz: "Mean-Time Utilization", jo: false },
                { valasz: "Music Television Underground", jo: false }
              ]
            },
            { kerdes: "Milyen választási lehetõségeink (szabadsági fok) vannak az ütemezési módszerek tervezésénél?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Az egyes szinteken belül betartjuk-e a megõrzési törvényt (conservation law)", jo: false },
                { valasz: "Milyen kiszolgálási sorrendet követünk az egyes szinteken belül", jo: true },
                { valasz: "Hány különbözõ prioritási szinten kezeljük az igényeket", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Az egyes szinteken belül milyen mértékben vonjuk össze (aggregáljuk) az igényeket", jo: true }
              ]
            },
            { kerdes: "Milyen kategóriájú IPv4 címek vannak?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Felhasználói csoportot biztosító azonosító (multicast).", jo: true },
                { valasz: "Egyik felsorolt válasz sem jó", jo: false },
                { valasz: "Az összes (al)hálózatot azonosító", jo: false },
                { valasz: "Egyedi hálózati csatlakozást azonosító (unicast).", jo: true }
              ]
            },
            { kerdes: "Mi a szerepe az ARP-nek?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Egy adatkapcsolati címhez tartozó IP címet lehet vele lekérdeznia RARP szervertõl", jo: false },
                { valasz: "Meghatározza, hogy milyen üzenetváltással kell megtudni egy adott IP címmel rendelkezõ csatlakozási ponton lévõ eszköz adatkapcsolati azonosítóját (fizikai címét, MAC címét)", jo: true },
                { valasz: "Lehetõvé teszi egy IP címmel nem rendelkezõ végkészüléknek, hogy IP címet szerezzen egy szervertõl", jo: false }
              ]
            },
            { kerdes: "A csomópontok milyen információ(k) alapján végzik a csomagtovábbítást?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "A kimenõ porton használt adatkapcsolati protokoll keretmérete alapján.", jo: true },
                { valasz: "A továbbítandó csomag kiszolgálási igényei alapján.", jo: true },
                { valasz: "A csomag Payload mezõje alapján", jo: false },
                { valasz: "A továbbítandó csomag célcímének hálózatazonosító része alapján.", jo: true },
                { valasz: "A csomópont útvonaltáblájának bejegyzései alapján.", jo: true }
              ]
            },
            { kerdes: "Melyik PDU-knak (protokollüzenetek) a végpontok közötti továbbítását képes az IP elvégezni?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Csak az ARP PDU-két", jo: false },
                { valasz: "Csak az IP PDU-két.", jo: true },
                { valasz: "Az IP és FPE PDU-két", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Csak az ICMP PDU-két", jo: false }
              ]
            },
            { kerdes: "Hány bájt adat (payload) lehet maximum egy IP csomagban?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "1500", jo: false },
                { valasz: "Egyik sem jó", jo: true, megjegyzes: "mert (2^13-1)×8=65528 > 65515  bajt max (jegyzet alapján jávítottam)" },
                { valasz: "2^16-1", jo: false }
              ]
            },
            { kerdes: "Mit csinál egy IPv4 router, ha akkora töredékekben érkezik hozzá egy csomag, amelyek kicsit nagyobbak, mint a kimenõ porton használt adatkapcsolati keret payloadjának mérete?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: true, megjegyzes: "tördeli, ha lehet, de soha nem illeszti össze, ezt csak a címzett végezheti el" },
                { valasz: "Összerakja a töredékeket az eredeti csomaggá, és újratördeli a megfelelõ méretre.", jo: false },
				{ valasz: "Eldobja a csomagot, mert töredékeket nem szabad tovább tördelni", jo: false },
				{ valasz: "Megnöveli az adatkapcsolati réteg payloadjának méretét.", jo: false }
              ],
            },
			       { kerdes: "Az alábbiak közül melyik igaz a háromszög route-olásra?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Route Optimization alkalmazásával elkerülhetõ.", jo: true },
                { valasz: "IPv6-ban elkerülhetetlen", jo: false },
                { valasz: "Feloldása a fix állomások kooperációját igényli", jo: true, megjegyzes: "Mert a HA-nak kell a küldõt egy Binding Update (BU) üzenettel értesítenie a mobil CoA? címérõl" },
                { valasz: "A többi megadott válasz közül egyik sem helyes", jo: false },
                { valasz: "IPv4-ben elkerülhetetlen", jo: false }
              ]
            },
            { kerdes: "Miért szükséges az IP kiegészítése a mobilitást biztosító módszerrel?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A többi válasz egyike sem helyes", jo: false },
                { valasz: "Hogy ne kelljen ideiglenes IP címet kiosztani egy hálózatot meglátogató vándorló terminálnak", jo: false },
                { valasz: "Hogy a vándorló (nomád) terminálok elérhetõk legyenek egy állandó címen.", jo: true }
              ]
            },
            { kerdes: "Az alábbiak közül mely cím(ek) lehet(nek) formailag IPv6-os cím(ek)? ",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "ABCD:EFGH:0123:4567:8910:1112:1314:1516", jo: false },
                { valasz: "1234::5678:9ABC::EF01", jo: false },
                { valasz: "Egyik megadott IPv6 cím sem helyes", jo: false },
                { valasz: "::A:B:C:D", jo: true }
              ]
            },
            { kerdes: "Milyen alagutazás (tunnelling) lehetséges IPv4-IPv6 vegyes hálózatban?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Csak IPv6-ba ágyazott IPv4, mert az IPv6 funkciókban gazdagabb, így IPv4 felett nem vihetõ át", jo: false },
                { valasz: "Csak IPv4-be ágyazott IPv6, mert az IPv4 eszközök csak ez tudják", jo: false },
                { valasz: "IPv6 IPv4-be ágyazva, illetve IPv4 IPv6-ba ágyazva is lehetséges.", jo: true }
              ]
            },
            { kerdes: "Miért nincsen szükség ellenõrzõösszegre az IPv6 fejlécében?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "De van szükség", jo: false },
                { valasz: "Mert kicsi a hiba valószínûsége", jo: true },
                { valasz: "Mert a fejléc mérete nem változik", jo: false },
                { valasz: "Mert nem tördelünk a közbensõ csomópontokban", jo: false }
              ]
            },
            { kerdes: "Mik azok az újítások az IPv6 csomag fejrészében amelyek az IPv4 fejrészben semmilyen formában nem szerepeltek?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A Flow Label, azaz a folyam azonosító címke bevezetése.", jo: true },
                { valasz: "A Traffic Class, azaz a forgalmi osztály mezõ alkalmazása", jo: false },
                { valasz: "A Hop Limit mezõ használata", jo: false },
                { valasz: "A többi válasz egyike sem helyes", jo: false }
              ]
            },
            { kerdes: "Mi a szerepe az IPv6 anycast címének?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A többi válasz egyike sem helyes", jo: true, megjegyzes: "Csoportot azonosít, így biztosított, hogy a csoport EGY csomópontja megkapja az erre a címre küldött üzenetet" },
                { valasz: "Így az \"érdeklõdõ\" választhatja ki, hogy kell-e neki valamely csomag", jo: false },
                { valasz: "Így nem kell eldobni csomagokat, mert valahová minden csomagot el lehet juttatni", jo: false }
              ]
            },
            { kerdes: "Milyen nagyságrendû hozzáférési pont váltási sebességet kezel még elfogadhatóan a !MobilIP?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "1-2 váltás / másodperc", jo: true },
                { valasz: "1-2 vátás / perc", jo: false },
                { valasz: "1-2 váltás / óra", jo: false },
                { valasz: "Tetszés szerinti gyors helyváltoztatásra", jo: false },
                { valasz: "1-2 váltás / mikroszekundum", jo: false }
              ]
            },
            { kerdes: "Mely állítás igaz az a Binding List-re?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Ebbõl tudja a mobil állomás, kinek kell Binding Update üzeneteket küldeni", jo: true, megjegyzes: "kutfo.hit.bme.hu/oktatas/MOBILIP.pdf alapján ez igaz: idegen hálózat váltáskor a Binding List alapján tájékoztatja a Mobile Node a vele kommunikáló eszközöket, hogy új IP címet kapott" },
                { valasz: "Ebbõl a listából válaszja az idegen ügynök (Foreign Agent) a lehetséges Care-of címeket", jo: false },
                { valasz: "Az otthoni ügynök (Home Agent) ebben tárolja a mobil állomás pillanatnyi care-of címét", jo: false }
              ]
            },
            { kerdes: "Honnan lehet tudni, hogy hol van a hasznos teher, és melyik protokoll adategységét tartalmazza, ha kiegészítõ fejrészt helyezünk az IPv6 csomagba?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Ezt nem lehet tudni, ezért ekkor nem szállít hasznos terhet a csomag", jo: false },
                { valasz: "A többi válasz egyike sem helyes", jo: true, megjegyzes: "A Next Header mezõbõl" },
                { valasz: "Ezt úgy oldották meg, hogy az elõzõ csomagban közlik a kérdéses információt, amit a Flow Label azonosíthatóvá tesz", jo: false },
                { valasz: "A fejléc Protocol mezõjébõl mindez kiderül", jo: false }
              ]
            },
            { kerdes: "Milyen célt szolgál a Path MTU Discovery?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A végpont-végpont átlagos késleltetés felderítése az adott végpont felé", jo: false },
                { valasz: "Nem létezik ilyen", jo: false },
                { valasz: "A leghosszabb tördeletlenül átvihetõ csomag méretének felderítése az adott végpont felé", jo: true, megjegyzes: "http://www.szabilinux.hu/trendek/trendek71.html - Alulról a 3. bekezdés" }
              ]
            },
            { kerdes: "Milyen módon képzelhetõ el az áttérés az IPv4-rõl az IPv6-ra?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Kijelölt idõpontban a felkészített csomópontok és végpontok befejezik a régi és megkezdik az új protokoll használatát", jo: false },
                { valasz: "A többi válasz egyike sem helyes", jo: false },
                { valasz: "Mind a csomópontok, mind a végpontok mindkét protokoll használatára felkészülnek és szinte beláthatatlan ideig együtt fog élni a kettõ.", jo: true }
              ]
            },
            { kerdes: "Hány részt (mezõt) határoztak meg az aggregálható egyedi címekben az IPv6 esetén? (számmal adja meg!)",
              tipus: "valaszolos",
              valasz: "6"
            },
            { kerdes: "Az alábbiak közül mely állítások igazak az IPv4 !MobileIP-re",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egy állomás a mobil állomást az otthoni címén (Home Address) érheti el.", jo: true, megjegyzes: "(Nem csak ott, ha route optimizationt használunk. Ott biztos elérheti, de nekem nem egyértelmû hogy most arra rákérdeznek-e hogy csak ott." },
                { valasz: "Kötelezõ a Route Optimization", jo: false },
                { valasz: "Automatikusan elkerüli a háromszög route-olást", jo: false },
                { valasz: "A többi megadott válasz közül egyik sem helyes", jo: false }
              ]
            },
            { kerdes: "Mivel lehetett az IPv4 címtartományának kimerülését elodázni az alábiak közül?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Subnetting", jo: true },
                { valasz: "A többi válasz egyike sem helyes", jo: false },
                { valasz: "A kiosztott címek használatának korlátozásával", jo: false },
                { valasz: "CIDR", jo: true },
                { valasz: "Privát IP-cím tartományok használata.", jo: true }
              ]
            },
            { kerdes: "Honnan tudja a Mobil IP otthoni ügynök, hogy hol tartózkodik a mobil állomás (mobile node)?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Nem tudja", jo: false },
                { valasz: "A Location Directoryból", jo: false, megjegyzes: "Ilyen nem létezik :)" },
                { valasz: "A többi válasz egyike sem helyes", jo: true, megjegyzes: "Ha a mobil node távol van, akkor regisztrálnia kell a care-of [távoli] címét az otthoni ügynöknél" },
                { valasz: "Lekérzedi a mobil állomást", jo: false, megjegyzes: "Ha nem tudja hol van, hogy tudná lekérdezni?" }
              ]
            },
            { kerdes: "Adja meg a ::12:0:0:15 címet teljes, rövidítetlen IPv6 cím alakjában!",
              tipus: "valaszolos",
              valasz: "0000:0000:0000:0000:0012:0000:0000:0015"
            },
            { kerdes: "Honnan tudja meg a csomagot küldõ végpont az IPv6-ban, hogy mekkora az út mentén a legnagyobb adatkapcsolati keret payload mérete?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A kapcsolati réteg ezt közli", jo: false },
                { valasz: "Beállítja a csomagban a Dont Fragment bitet, és a csomópont erre válaszként megküldi az MTU értékét", jo: false },
                { valasz: "A többi válasz egyike sem helyes", jo: false },
                { valasz: "A Path MTU Discovery protokoll használatával.", jo: true }
              ]
            },
            { kerdes: "IPv4 !MobilIP esetén mi lehet az ideiglenes címe (Care-of Address) egy mobil terminálnak a meglátogatott hálózatban?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Az idegen ügynök kioszt neki egy &#8211; a meglátogatott alhálózathoz tartozó &#8211; címet.", jo: true },
                { valasz: "Nem kap külön Care-of Address címet, hanem az idegen ügynök címén érik utol az otthoni címére érkezõ csomagok.", jo: true },
                { valasz: "A többi válasz egyike sem helyes", jo: false },
                { valasz: "Megegyezik az otthoni címével", jo: false }
              ]
            },
            { kerdes: "Miért nem megoldható IPv4 !MobilIP esetén, hogy a kezdeményezõ állomásnak a mobil állomás (mobile node) közvetlenül válaszoljon?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A többi válasz egyike sem helyes", jo: true, megjegyzes: "megoldható, de nem minden esetben" },
                { valasz: "Mert más címrõl érkezne a válasz, mint amire a kezdeményezõ fél számít", jo: false, megjegyzes: "Ha megkapja, akkor az otthoni IP címrõl kapja meg" },
                { valasz: "Mert meg kellene hamisítani az mobil állomásnak (mint feladónak) az IP-címét, s így e csomagok biztonsági okokból nem kerülnének továbbításra.", jo: false },
                { valasz: "De megoldható - minden esetben", jo: false }
              ],
              megjegyzes: "IPv4 esetben a mobile node mindenképp az otthoni címével küldi el a csomagot (így meghamisítva a küldõ igazi IP címét). Ezt a routerek észrevehetik és eldobhatják a csomagot. Mivel az otthoni IP címrõl próbál küldeni, ezért ha a routerek átengedik a csomagot, akkor a kezdeményezõ arról az IP címrõl kapja meg a csomagot, amire számít [az otthoniról]. IPv6 esetén már minden esetben a care-of címrõl küldi a csomagot, így a routerek átengedik, de a kezdeményezõnek a Binding Cache segítségével tudnia kell fogadni a care-of címrõl érkezõ, de home addressrõl várt csomag fogadását."
            },
            { kerdes: "Miért alkalmazzák a Dont Fragment bitet az IPv6-ban?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Nehogy valamelyik router tördelje a csomagot", jo: false, megjegyzes: "Elvileg ez a jó válasz. 1 esetén nem lehet tördelni a csomagot, 0 esetén lehet" },
                { valasz: "A többi válasz egyike sem helyes", jo: true, megjegyzes: "nincs is Don\'t fragment bit ipv6-ban, az ipv6 nem tördeli a csomagokat, csak a feladó ördelheti" },
                { valasz: "Így lehet megtudni, hogy mekkora az út mentén az MTU", jo: false }
              ],
              megjegyzes: "Eredetileg ez volt a helyes válasznak megjelölve: \'Így lehet megtudni, hogy mekkora az út mentén az MTU.\', DE IPv6 esetén nincs Dont Fragment bit, IPv4 esetén van csak."
            },
            { kerdes: "Mire jó az IPv6 fejléc Flow Label mezõje?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Áramkörkapcsolás hozható vele létre", jo: false },
                { valasz: "A többi megadott válasz közül egyik sem helyes", jo: false },
                { valasz: "QoS támogatására alkalmas.", jo: true }
              ]
            },
            { kerdes: "Hogyan oldja meg az IPv6, ha a csomagnak különleges kezelést kíván a feladója?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A többi válasz egyike sem helyes", jo: false },
                { valasz: "A kötelezõ fejrész után, a \"hasznos teher\" elé helyezünk kiegészítõ fejet, amit a Next Header mezõben \"megjelölünk\".", jo: true },
                { valasz: "A Next Header mezõben lehet elhelyezni a különleges kezelésre vonatkozó információt", jo: false },
                { valasz: "Erre nincs lehetõség, mert megszûnt a fej hosszának opcionális változtatása", jo: false }
              ]
            },
            { kerdes: "Hogyan képezzük a csatlakozási pont azonosítójának egyedi részét (host ID, interfész ID) az IPv6-ban, és ott hány oktett (bájt) hosszú?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A pillanatnyi dátum alapján", jo: false },
                { valasz: "A MAC címbõl, és 6 bájt a hossza", jo: false },
                { valasz: "Az adatkapcsolati címbõl, és nyolc oktett a hossza", jo: true, megjegyzes: "IPv6, 16.oldal alja" },
                { valasz: "A többi válasz egyike sem helyes", jo: false }
              ]
            },
            { kerdes: "Melyik címtípus nem létezik IPv6-ban?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Broadcast", jo: true },
                { valasz: "Unicast", jo: false },
                { valasz: "Multicast", jo: false },
                { valasz: "Anycast", jo: false }
              ]
            },
            { kerdes: "Adja meg a lehetõ legrövidebb formában az alábbi IPv6-os címet: FF01:0000:0020:0FEA:0000:0000:A50A:0001",
              tipus: "valaszolos",
              valasz: "FF01:0:20:FEA::A50A:1"
            },
            { kerdes: "Melyek a legfõbb egyszerûsítések az IPv6 csomagtovábbításában?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Nem kell ellenõrzõ összeget számolni a csomagfejre.", jo: true },
                { valasz: "A többi válasz egyike sem helyes", jo: false },
                { valasz: "Nem kell tördelni a csomagokat a közbensõ csomópontokon.", jo: true },
                { valasz: "Nem kell ellenõrizni a csomag fejrészének a hosszát.", jo: true }
              ]
            },
            { kerdes: "Milyen megoldás segítségével továbbítja a Mobil IP otthoni ügynök az idegen ügynöknek a csomagokat?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Nem továbbít az otthoni ügynök egyetlen csomagot sem az idegen ügynöknek", jo: false },
                { valasz: "Becsomagolás (encapsulation) másnéven alagutazás (tunelling) segítségével.", jo: true },
                { valasz: "Hálózati címfordítás (NAT) segítségével", jo: false },
                { valasz: "Csak IPv6 segíségével", jo: false }
              ]
            },
            { kerdes: "A címtartomány hányadrészét jelölték ki az IPv6-ban egyedi (unicast) címek részére?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A felét", jo: false },
                { valasz: "A nyolcad részét", jo: true, megjegyzes: "elsõ 3 bitbõl derül ki, ami csak 001 lehet a 8 lehetõségbõl" },
                { valasz: "A többi válasz egyike sem helyes", jo: false },
                { valasz: "A tizenhatod részét", jo: false },
                { valasz: "A negyed részét", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Az IPv6 fejlécének egyes részei hasonló funkciókat látnak el, mint az IPv4 bizonyos részei. Az alábbiakban (IPv4 -> IPv6 alakban) megadott összerendelések közül melyek helyesek?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Hop Limit -> TTL", jo: false, megjegyzes: "ugyan megegyezik, de IPv6 -> IPv4 alakban írták" },
                { valasz: "A többi megadott válasz közül egyik sem helyes", jo: false },
                { valasz: "ToS -> Traffic Class", jo: true },
                { valasz: "Flow Label -> Identification", jo: false }
              ]
            },
            { kerdes: "Jelölje be az alábbi architekturális/protokoll elemek közül azokat, amelyek a !MobilIP IPv4 és IPv6 verziójában is szerepelnek!",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Speciális idegen ügynök (Foreign Agent) router", jo: false },
                { valasz: "Care-of Address", jo: true },
                { valasz: "A többi megadott lehetõség közül egyik sem", jo: false },
                { valasz: "Home Address", jo: true },
                { valasz: "Otthoni Ügynök (Home Agent)", jo: true }
              ]
            },
            { kerdes: "Miért kell az otthoni ügynöknek alagúton továbbítania az elvándorolt node részére érkezõ csomagokat?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Ez biztosítja, hogy a feladó csomagjai változatlanul, csak újfent becsomagolva jutnak el a címzetthez", jo: false },
                { valasz: "Mert a címzetthez csak úgy juthatnak el a csomagok, ha a továbbításban résztvevõ csomópontok a node ideiglenes (care-of address) címét látják", jo: true },
                { valasz: "A többi válasz egyike sem helyes", jo: false }
              ]
            },
            { kerdes: "Hányszor nagyobb a legrövidebb legális IPv6 fejrész a legrövidebb legális IPv4 fejrészhez képest? Az eredményt számmal adja meg!",
              tipus: "valaszolos",
              valasz: "2"
            },
			        { kerdes: "Miért szükséges a TCP összeköttetés létrehozásánál a \"háromutas kézfogás\" harmadik lépése?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Valójában nem szükséges, csak az \"egységes\" eljárás miatt használják", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Mert így a \"hívott\" fél megtudja, hogy a válasza megérkezett a kezdeményezõhöz.", jo: true },
                { valasz: "Nincsen harmadik lépése a \"háromutas kézfogásnak\"", jo: false }
              ]
            },
            { kerdes: "Milyen feladatokat ró a hálózati csomópontokra a TCP összeköttetés alapú mûködése?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó.", jo: true },
                { valasz: "Az összeköttetés mentén érintett csomópontokon fel kell jegyezni az összeköttetés paramétereit", jo: false },
                { valasz: "Az összeköttetés mentén érintett csomópontokon erõforrásokat kell foglalni az összeköttetés kiszolgálására", jo: false },
                { valasz: "A kapcsolat paramétereit a szomszédos csomópontokkal közölni kell", jo: false }
              ],
              megjegyzes: "Pl. a routerek, mint hálózati csomópontok, a hálózati rétegben helyezkednek el, így nem is tudják, hogy TCP vagy nem TCP szállítási rétegen történik a kommunikáció. Így nem is tudnak emiatt plusz feladatokat elvégezni miatta."
            },
            { kerdes: "Mik között valósít meg logikai kapcsolatot a szállítási réteg?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A hálózati címekkel azonosított hálózati csatlakozási pontok között", jo: false },
                { valasz: "Az adatkapcsolati címekkel azonosított hálózati csatolóeszközök között", jo: false },
                { valasz: "Egyik válasz sem jó.", jo: true }
              ],
              megjegyzes: "Szállítási réteg: alkalmazások (process) közötti logikai kapcsolatok (tehát programok közötti kapcsolatot hoz létre)"
            },
            { kerdes: "Mit ellenõriz az UDP-datagramm hibaellenõrzõ kódja (checksum)? ",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Az UDP- és az IP-fejrészt együttesen", jo: false, megjegyzes: "IPbõl csak 3 mezõt ellenõriz, nem mindet" },
                { valasz: "Az egész UDP-datagrammot", jo: false, megjegyzes: "IPbõl is ellenõriz részeket, de nem mindent" },
                { valasz: "Csak az UDP-fejrészt", jo: false, megjegyzes: "IPbõl is ellenõriz részeket" },
                { valasz: "Az UDP-fejrészt és az IP-címeket", jo: false, megjegyzes: "Az IPbõl még a protocol mezõt is" },
                { valasz: "Egyik válasz sem jó", jo: true }
              ],
              megjegyzes: "A következõkbõl generálódik a checksum: IP[Source Address, Dest Address, Protocol], UDP[Length], UDP csomag TELJES tartalma. Tehát egyik sem jó."
            },
            { kerdes: "Hogyan lehet használni a port-számokat az alkalmazások azonosítására?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Mindig le kell kérdezni az alkalmazást, hogy milyen számú porton fogad üzeneteket", jo: false },
                { valasz: "Sorsolni kell egy azonosítót, és azt szabadon lehet használni bármely alkalmazás elérésére", jo: false },
                { valasz: "Egyik válasz sem jó", jo: true }
              ]
            },
            { kerdes: "Az alábbiak közül mely(ek) nem a TCP feladata(i)?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Forgalomszabályozás", jo: false },
                { valasz: "A felsoroltak közül egyik sem feladata", jo: false },
                { valasz: "Útvonalválasztás.", jo: true },
                { valasz: "Váltás a karakterkészletek között.", jo: true },
                { valasz: "Sorrendhelyes átvitel", jo: false }
              ]
            },
            { kerdes: "Mi azonosítja egy UDP adatmezõjének feladóját és címzettjét?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó.", jo: true },
                { valasz: "Kizárólag az IP címek, mivel az UDP pszeudo fejen keresztül beleszólnak az ellenõrzõ összegbe", jo: false },
                { valasz: "Az ellenõrzõ összeg, mivel az igen nagy valószínûséggel egyedi", jo: false },
                { valasz: "Kizárólag a port-számok, mivel azok egyediek", jo: false }
              ]
            },
            { kerdes: "A TCP/IP architektúra esetén a hálózatnak mely elemei vesznek részt a szállítási rétegbeli feladatok ellátásában?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "A végpontok és a közbensõ csomópontok is.", jo: false },
                { valasz: "Csak a közbensõ csomópontok", jo: false },
                { valasz: "Csak a végpontok", jo: true }
              ],
			  megjegyzes: "SZÁLLÍTÁSI rétegrõl kérdez!"
            },
            { kerdes: "Milyen szolgáltatás(oka)t nyújt az UDP?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik felsorolt szolgáltatást sem nyújtja", jo: false },
                { valasz: "Portkezelést.", jo: true },
                { valasz: "Hibavédõ kódolást a teljes UDP PDU-ra", jo: false },
                { valasz: "Torlódásvezérlést", jo: false },
                { valasz: "Sorrendhelyes átvitelt", jo: false }
              ]
            },
            { kerdes: "Hogyan viszonyul a TCP/IP protokoll-architektúra az adatkapcsolati réteghez?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Részletesen meghatározza annak protokolljait", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Egyáltalán nem foglalkozik az adatkapcsolati réteggel", jo: false },
                { valasz: "Csak az adatkapcsolati rétegben használt protokollokhoz történõ csatlakozásról (interfészelésrõl) rendelkezik", jo: true }
              ]
            },
            { kerdes: "Hogyan határozható meg a go-back-n által elérhetõ csatornakihasználás?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Viszonyítani kell a hibás csomagok gyakoriságát a hibás + ismételt csomagok gyakoriságához", jo: false },
                { valasz: "Viszonyítani kell a sikeres csomagok gyakoriságát a sikeres + ismételt csomagok gyakoriságához", jo: true },
                { valasz: "Viszonyítani kell a hibás csomagok gyakoriságát a sikeres + ismételt csomagok gyakoriságához", jo: false },
                { valasz: "A többi válasz közül egyik sem helyes", jo: false },
                { valasz: "Viszonyítani kell a sikeres csomagok gyakoriságát a hibás + ismételt csomagok gyakoriságához", jo: false }
              ]
            },
            { kerdes: "Miért dolgoztak ki két szállítási protokollt a TCP/IP architektúrában?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Az elsõ használatánál nyert tapasztalatok alapján javítottak", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Mindkét protokoll ugyanazt a szolgáltatást nyújtja, így lényegében versenytársai egymásnak", jo: false },
                { valasz: "Lényegében kidolgoztak egy bonyolultabb (jobb szolgáltatást nyújtó), és egy egyszerûbb protokollt kevés szolgáltatással.", jo: true }
              ]
            },
            { kerdes: "Mit kell érteni azon, hogy a TCP pufferelt átvitelt valósít meg?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A TCP tárolja az adatokat, és csakis az alkalmazás parancsára továbbítja azokat", jo: false },
                { valasz: "Egyik válasz sem jó.", jo: true },
                { valasz: "Az alkalmazásnak kell tároli a még nem nyugtázott adatokat", jo: false }
              ]
            },
            { kerdes: "Mit jelent a TCP bájt-stream szállítási szolgáltatásában a struktúrálatlanság?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó.", jo: false },
                { valasz: "Nem veszi tekintetbe az alkalmazás által használt tördelést", jo: true },
                { valasz: "Nincs tekintettel a bájt-sorrendre", jo: false }
              ],
              megjegyzes: "With stream data transfer,TCP delivers an unstructured stream of bytes identified by sequence numbers. This service benefits applications because that the application does not have to chop data into blocks before handing it off to TCP. TCP can group bytes into segments and passes them to IP for delivery. -vagyis az alkalmazásnak nem is kell tördelnie."
            },
            { kerdes: "Milyen \"eszközök\" állnak rendelkezésre a csomaghibák kezelésére?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Pozitív nyugta hiánya vagy negatív nyugta küldése", jo: true },
                { valasz: "Konvolúciós kód alkalmazása", jo: true, megjegyzes: "(egy fajta hibajavító kód)" },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Hibafelderítõ kódolással ellenõrizhetõ a csomag \"épsége\"", jo: true },
                { valasz: "Pozitív nyugta küldése", jo: false, megjegyzes: "(Csak ennek hiánya segít bennünket)" }
              ],
            },
            { kerdes: "Mi a szerepük a forgalomszabályozásban a forgalomleíróknak (traffic descriptors)?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Lehetõvé teszik a hálózat megfelelõ méretezését", jo: false },
                { valasz: "Lehetõvé teszik, megalapozzák szolgáltatási szerzõdések megkötését", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Lehetõvé teszik a szolgáltató részére a hálózati szolgáltatás igénybevételének ellenõrzését", jo: true }
              ]
            },
            { kerdes: "A csomagok sorszámozásával az alábbiak közül mely hibák javíthatóak további hibajavító módszerek alkalmazása nélkül?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Csomagok sorrendjének megváltozása", jo: true },
                { valasz: "Csomagok többszörözõdése", jo: true },
                { valasz: "A többi válasz közül egyik sem helyes", jo: false },
                { valasz: "Csomagvesztés", jo: false }
              ]
            },
            { kerdes: "Mely állítások igaz a Forward Error Correction hibajavító eljárásra?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A fogadó továbbítja a hibás üzenetet a küldõnek, hogy az a javítást elvégezhesse", jo: false, megjegyzes: "Ez volt jónak megjelölve, hát WTF... 1: helyben javítja, így nem küldd vissza semmit, 2: azért küldjük vissza, hogy a KÜLDÕ megjavítsa!? :D akkor nem lenne egyszerûbb a küldõnek újraküldenie?" },
                { valasz: "Hatékonysága függ a körülfordulási idõtõl", jo: false, megjegyzes: "Nem, mert ilyenkor a vétel helyén történik a javítás, nem kell semmit se visszaküldeni" },
                { valasz: "Csak hibajelzõ kódolást használ", jo: false, megjegyzes: "!HibaJAVÍTÓ kódolást használ" },
                { valasz: "A többi válasz közül egyik sem helyes.", jo: true }
              ],
              megjegyzes: "Forward Error Correction (FEC) = megelõzõ hibajavítás == hibajavító kódolás. A vevõ megpróbálja kijavítani a hibákat a redundáns, hibajavító kód segítségével, amit a küldõ belerakott a csomagba."
            },
            { kerdes: "Miért használ a TCP 32 bit hosszú sorszámot?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Mert így több, mint négymilliárd szegmenst el lehet küldeni anélkül, hogy a szám körbefordulna", jo: true, megjegyzes: "Wikiben ez van, de ez nem biztos lásd alul" },
                { valasz: "Semmi jelentõsége, csak kedvelt a 4 bájt hosszú egység ebben a körben", jo: false }
              ],
			  megjegyzes: "It was determined that to help ensure the integrity of TCP/IP connections, every stream should be assigned a unique, random sequence number. The TCP sequence number field is able to hold a 32-bit value, and 31-bit is recommended for use by RFC specifications. An attacker wanting to establish connection originating from a fake address, or to compromise existing TCP connection integrity by inserting malicious data into the stream would have to know the Initial Sequence Number -vagyis szerintem a biztonság miatt van 32 bit."
            },
            { kerdes: "Melyik állítások igazak a Automatic Repeat Request hibajavító megoldásra?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A vevõ megpróbálja javítani a hibát, és ha az nem sikerül, akkor ismétlést kér a küldõtõl.", jo: false },
                { valasz: "A többi válasz közül egyik sem helyes", jo: false },
                { valasz: "Hatékonysága függ a körülfordulási idõtõl", jo: true },
                { valasz: "Csomagvesztéses csatornán csökken a hatékonysága", jo: true }
              ]
            },
            { kerdes: "Két állomás egymás között csúszóablakos (sliding window) forgalomszabályozást használ. A kommunikációs csatorna 1Mbit/sec átviteli sebességet tesz lehetõvé a küldõtõl a fogadó felé. Tegyük fel, hogy az adó állomás 1000bit hosszú csomagokat küld. A link körülfordulási ideje (RTT) 5 msec, a csúszóablak mérete pedig 3 csomagnyi. Mekkora a csatorna kihasználtsága?",
              tipus: "valaszolos",
              valasz: "Kihasználtság = %$ \\frac{3*\\frac{1000}{10^6}}{5*10^{-3}+\\frac{1000}{10^6}}=0,5 $% (lásd SzgHalokGyakorlatok)"
            },
			       { kerdes: "Mi a fõ jellemzõje a Real-time Transport Protocol-nak?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A TCP-UDP egy lehetséges alternatívája", jo: false },
                { valasz: "Biztosítja a média szállításának minõségét", jo: false },
                { valasz: "Egyik válasz sem jó", jo: true }
              ],
			  megjegyzes: "Mi az RTP és mi nem: 1. a payloadjában média-, pl. beszédinformációt hordoz 2. szállítási protokoll felett mûködik 3. támogatja a médiafolyamok (streamek) szállítását 4.nem nyújt QoS garanciát"
            },
            { kerdes: "Melyek a Real Time Streaming Protocol (RTSP) legfõbb jellemzõi?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Ez egy vezérlõ protokoll, amely nem veszt részt a felhasználói adatok szállításában", jo: true },
                { valasz: "Ezt dolgozták ki az RTP felváltására", jo: false }
              ]
            },
            { kerdes: "Milyen logikai részeket tartalmaz a Session Initiation Protocol User Agent-je?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "User Agent Server", jo: true },
                { valasz: "User Agent Controller", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Mi szükség van a médiafolyam darabjainak \"idõbélyegzésére\"?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Valójában nem feltétlenül szükséges, mert a sorszámok és a típusra vonatkozó jellemzõk alapján egyébként is lehetséges a helyes rekonstrukció", jo: false },
                { valasz: "Azért kell, mert a küldõ és a fogadó órái nem járnak pontosan együtt", jo: false },
                { valasz: "Egyik válasz sem jó.", jo: true, megjegyzes: "Timestamp: Az RTP csomag elsõ oktettjének megfelelõ pozíció valódi ideje a médiafolyamban" }
              ]
            },
            { kerdes: "Milyen módon mûködik együtt a Session Initiation Protocol esetén a Proxy Server és a Location Server?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Nincs közöttük semmilyen együttmûködés", jo: false },
                { valasz: "A Proxy Server a User Agent Client-tõl érkezõ INVITE üzenet címzettjét ellenõrzi a Location Servernél, és ezután továbbítja a hívotthoz", jo: true, megjegyzes: "A registrar-on keresztül ellenõrzi a Location Servernél" }
              ]
            },
            { kerdes: "Melyek a Session Initiation Protocol legfontosabb jellemzõi?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Kombinálható mindenféle web-alapú szolgáltatással", jo: true },
                { valasz: "IP-központú", jo: true, megjegyzes: "inkább azt mondanám, hogy IP fölött - pontosabban UDP/IP vagy TCP/IP fölött mûködik" },
                { valasz: "Állapotalapú, bináris protokoll", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Hogyan oldják meg azt, hogy az RTCP által keltett forgalom ésszerû határokon belül maradjon?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Csak a vevõ-végpontok küldenek jelentéseket", jo: false },
                { valasz: "Egyik válasz sem jó", jo: true, megjegyzes: "Korlátozás: 5!% RTCP forgalom, többi RTP" },
                { valasz: "A szinkronizáló forrás (SSRC) meghatározza a végpontok report-jainak gyakoriságát", jo: false }
              ]
            },
            { kerdes: "Miért nevezzük az RTP-t real-time protokollnak?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Mert segíti a valósidejû forgalom továbbítását fontos jellemzõk átvitelével.", jo: true },
                { valasz: "Egyik válasz sem helyes", jo: false },
                { valasz: "Mert késleltetés és vesztés nélkül átviszi a valósidejû forgalmat", jo: false },
                { valasz: "Mert folyamatosan átviszi a valódi idõt", jo: false }
              ]
            },
            { kerdes: "Mi a szerepe a H.323 alapján mûködõ hálózatban a Gatekeeper-nek?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Vezérli a konferencia-összeköttetéseket", jo: false },
                { valasz: "Minden esetben rajta keresztül folyik a hívásvezérlés", jo: false },
                { valasz: "Biztosítja az együttmûködést más hálózatokkal", jo: false },
                { valasz: "Egyik válasz sem jó", jo: true, megjegyzes: "Beengedés-szabályozás, maga a hívásvezérlés opcionálisan mehet a GK-en keresztül -a média nem-, erõforrás-menedzsment, autentikáció" }
              ]
            },
            { kerdes: "Mi az alapvetõ szerepe az RTCP-nek?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Lehetõvé teszi egy média session résztvevõinek az átviteli jellemzõk megfigyelését", jo: true },
                { valasz: "Lehetõvé teszi egy média session résztvevõinek az átviteli jellemzõk garantálását", jo: false },
                { valasz: "Lehetõvé teszi média session-ök létrehozását és elbontását", jo: false }
              ],
			  megjegyzes: "RTCP: Real-time Transport Control Protocol"
            },
            { kerdes: "Tömörített fejrészek esetén kb. hány százalékkal nõ az átvitelisebesség-igény a beszéd által igényelt nettó sebességhez képest ?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Kevesebb, mint 1%-al", jo: false },
                { valasz: "Nagymértékben függ a beszédtömörítés mértékétõl, és így néhány %-tól 10÷20%-ig változhat", jo: true }
              ]
            },
            { kerdes: "Melyik NEM tartozik a SIP építõelemek közé az alábbiak közül?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Foreign Agent", jo: true },
                { valasz: "Redirection Server", jo: false },
                { valasz: "Registrar", jo: false },
                { valasz: "User Agent", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false }
              ],
			  megjegyzes: "Még lehet a Location Server, bár ezt nem említik explicit építõelemként a diák."
            },
            { kerdes: "Milyen feladatokat lát el a Session Initiation Protocol?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Támogatja a mobilitást.", jo: true },
                { valasz: "Egy kommunikációs session megnyitásával, fenntartásával, jellemzõivel kapcsolatos információkat továbbítja, kezeli.", jo: true },
                { valasz: "Kezeli a felhasználók helyzetinformációit, támogatja pl. a hívásátadást.", jo: true }
              ]
            },
            { kerdes: "Miben különbözik egymástól a Session Initiation Protocol-ban a Request és a Response üzenetek felépítése?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: true },
                { valasz: "Az üzenetek fejrésze teljesen különbözõ", jo: false },
                { valasz: "Csak az üzenetek törzsrésze (body) különbözik", jo: false }
              ]
            },
            { kerdes: "Milyen szolgáltatásokat nyújt az RTP a médiastreaming-alkalmazásnak?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Értesíti a hálózati csomópontokat a médiafolyam kiszolgálási igényeirõl", jo: false },
                { valasz: "Megjelöli a médiafolyam darabjainak keletkezési idõpontját.", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Hordozza a médiatípus jellemzõit.", jo: true, megjegyzes: "Profile-ok" },
                { valasz: "Sorszámozza a médiafolyam darabjait.", jo: true, megjegyzes: "Sequencenumber" }
              ]
            },
            { kerdes: "A Real-time Transport Protocol által használt idõbélyeg (timestamp) lehetõvé teszi:",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A csomag tartalmának a megfelelõ idõben történõ megjelenítését.", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "A csomagvesztés kiderítését", jo: false }
              ],
			  megjegyzes: "Timestamp - Az RTP csomag elsõ oktettjének megfelelõ pozíció valódi ideje a médiafolyamban"
            },
            { kerdes: "Miben különbözik a SIP üzenetek formája a H.323 üzenetekétõl?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: true },
                { valasz: "A SIP üzenetek sokkal tömörebbek, mint a H.323 üzenetei", jo: false, megjegyzes: "SIP jó kis \"szaftos\" HTML szerû kódot ad" },
                { valasz: "A H.323 üzenetei szövegesek, szemben a SIP üzenetek bináris formájával!", jo: false, megjegyzes: "SIP szöveges" }
              ]
            },
            { kerdes: "Milyen feladatok elvégzésének módjáról intézkedik a H.323 szabványcsalád?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A csomag- és áramkörkapcsolt hálózatok közötti együttmûködésrõl", jo: true },
                { valasz: "A jelzésátvitelrõl", jo: true },
                { valasz: "Média (audió-, videó-) kódolásról", jo: true },
                { valasz: "A médiafolyam szervezésérõl (streaming)", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Hogyan valósítja meg a Session Initiation Protocol a felhasználók követését?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Nem valósít meg követést, a hívó félnek kell kiderítenie a hívott aktuális címét", jo: false },
                { valasz: "Ezt a Proxy Server valósítja meg", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "A Redirect Server tudja meg a Location Server-tõl az aktuális címet.", jo: true }
              ]
            },
			{ kerdes: "Milyen feladatot lát el és mi a jellemzõje a Session Description Protocol-nak (SDP)?",
			tipus: "tobbet_jelolo",
			valaszok: [
                { valasz: "Meghatározza a kapcsolatban résztvevõknek az információcserére vonatkozó legfontosabb jellemzõit (a média típusát, a használt portot, stb", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Valójában ezt nem is igazán lehet protokollnak nevezni, inkább egy leíró forma", jo: true },
              ]
            },
			       { kerdes: "Mekkora lesz a beszéd kezdeti csomagolási késleltetése ATM cellák és szabványos tömörítetlen digitalizálás esetén?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "10 ms", jo: false },
                { valasz: "20 ms", jo: false },
                { valasz: "Attól függ, hány byte-ot teszünk bele az ATM cella változó hosszúságú hasznos részébe", jo: false },
                { valasz: "Egyik válasz sem helyes", jo: true }
              ]
            },
            { kerdes: "Az ATM-nél egy szolgáltatási osztályt az alábbiak jellemeznek:",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Forgalomleírók és !QoS paraméterek", jo: true },
                { valasz: "!QoS paraméterek", jo: false },
                { valasz: "Forgalomleírók", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Mit értünk aszinkron átviteli és kapcsolási módon (ATM)?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Az áramkörkapcsolásnak egy speciális változatát", jo: false },
                { valasz: "Az átvitel és a kapcsolás nem fut együtt, nincs szinkronban", jo: false },
                { valasz: "Egyik válasz sem jó", jo: true }
              ]
            },
            { kerdes: "Melyek ATM szolgáltatási osztályok az alábbiak közül:",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "UDP", jo: false },
                { valasz: "UBR", jo: true },
                { valasz: "CBR", jo: true },
                { valasz: "Egyik sem szolgáltatási osztály", jo: false },
                { valasz: "Mindegyik szolgáltatási osztály", jo: false }
              ]
            },
            { kerdes: "Az ATM a széleskörben elterjedt B-ISDN hálózatban használt átviteli és kapcsolási módszer.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Miért választották 48 oktetre (byte) az ATM cella hasznos rész-ét (payload)?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Mert ez kedvezõ az adattovábbítás szempontjából", jo: false },
                { valasz: "Mert ezt találták elfogadható kompromisszumnak az adat- és a beszédtovábbítás eltérõ követelményeire", jo: true },
                { valasz: "Mert ez 2-nek egésszámú hatványa", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Melyik, az eddigiekben megismert alapvetõ funkciókat NEM alkalmazzák az ATM-ben?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Hibakezelés", jo: true, megjegyzes: "lásd: https://wiki.sch.bme.hu/bin/view/Infoalap/SzgHalokVillamOsszes" },
                { valasz: "Címzés", jo: false },
                { valasz: "Ütemezés", jo: false },
                { valasz: "Forgalomenedzsment", jo: false },
                { valasz: "Hívásvezérlés", jo: false },
                { valasz: "Routing", jo: false }
              ]
            },
            { kerdes: "Mely alapvetõ hálózati funkciók kerülnek alkalmazásra az ATM-nél?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Torlódásvezérlés", jo: true },
                { valasz: "A fentiek közül egyik sem", jo: false },
                { valasz: "Forgalomszabályozás", jo: false },
                { valasz: "Hibajavítás", jo: false }
              ]
            },
            { kerdes: "Az ATM egyik fõ jellemzõje, hogy összeköttetésenként képes a kívánt szolgáltatási minõséget biztosítani.",
              tipus: "igazhamis",
              valasz: true
            },
            { kerdes: "Az ATM fejléc a csomag teljes méretének a 10%-a.",
              tipus: "igazhamis",
              valasz: true
            },
            { kerdes: "Hogyan használják az ATM-ben a címkék két hierarchiaszintjét?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Vannak \"virtuális út\"-kapcsolók és \"virtuális csatorna\"-kapcsolók", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Nem használják egyáltalán", jo: false }
              ]
            },
            { kerdes: "Mit értünk aszinkron átviteli és kapcsolási módon (ATM)?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Az átvitel és a kapcsolás nem fut együtt, nincs szinkronban", jo: false },
                { valasz: "Egyik válasz sem jó", jo: true },
                { valasz: "Az áramkörkapcsolásnak egy speciális változatát", jo: false }
              ]
            },
			     { kerdes: "Mi a legfõbb jellemzõ a !DiffServ csomópontok (core routerek) viselkedésére? Válasszon egy választ.",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Nem törõdnek egymással, hanem csak eszközeiket használva (sorbaállítás, csomageldobás) teljesítik a jelölt csomagok továbbítását", jo: true },
                { valasz: "Az edge routerek által megjelölt csomagok továbbítását egymással együttmûködve (tennivalóikat egyeztetve) végzik", jo: false }
              ]
            },
            { kerdes: "Milyen módszereket dolgoztak ki az IP-t használó hálózatokban a Best Effort-ot meghaladó szolgáltatási minõség biztosítására?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: true },
                { valasz: "Az !IntServ és a !DiffServ módszert, amelyek azonosan alkalmasak bármilyen !QoS-t biztosítani", jo: false },
                { valasz: "Semmilyet, mert az IP nem lehet alkalmas !QoS biztosítására", jo: false }
              ]
            },
            { kerdes: "Milyen fõ jellemzõi vannak az !IntServ részére javasolt jelzésátviteli protokollnak?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Úgynevezett vevõoldali erõforrás-foglalást alkalmaz", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Mindig csak egyirányú (simplex) csatornát foglal le", jo: true },
                { valasz: "Csak pont-pont kommunikációra alkalmas", jo: false },
                { valasz: "Feltétlenül megköveteli az erõforrások használat utáni felszabadítását", jo: false, megjegyzes: "mert az igények elhalnak " }
              ]
            },
            { kerdes: "Használnak-e bármilyen feljegyzést (állapotnyilvántartást) az összeköttetés mentes csomagkapcsolt hálózat csomópontjai?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Nem használnak mert nincs rá szükségük, hiszen minden csomagot az elõzõktõl függetlenül kezelnek", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Természetesen használnak, mert csak így képesek a hozzájuk érkezõ csomagok értelmes továbbítására", jo: false }
              ]
            },
            { kerdes: "Hogyan mûködik a Label Switching Router (LSR)?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Teljesen megegyezõen a hagyományos routerrel, de gyorsabban", jo: false },
                { valasz: "Lényegében úgy, mint az adatkapcsolati rétegben mûködõ \"kapcsolók\"", jo: true }
              ]
            },
            { kerdes: "Mi volt az egyik legfontosabb ösztönzõje az MPLS kidolgozásának?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A hatékonyság növelése az IP routerekben", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Összekapcsolni a különbözõ hálózati protokollokat", jo: false }
              ]
            },
            { kerdes: "Milyen alkalmazás-fajtákat ismer el, és azokat hogyan szolgálja ki az !IntServ módszer?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Real-time tolerant alkalmazás &#8594; Controlled Load Service", jo: true },
                { valasz: "Real-time intolerant alkalmazás &#8594; Best Effort Service", jo: false },
                { valasz: "Elasztikus alkalmazások &#8594; Guaranted Quality Service", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Melyek a címkekiosztás legfontosabb szabályai az MPLS-ben?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A címkekiosztás a \"kilépõ\" routertõl indul", jo: true },
                { valasz: "A címkekiosztás csak úgynevezett explicit módon történhet a !QoS szempontjai alapján", jo: false },
                { valasz: "Lényegében nincs is ilyen szabály", jo: false },
                { valasz: "A címkekiosztás történhet a csomópontok által lépésenként", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Milyen elemek szolgálják az MPLS megvalósítását?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A címke-kijelölést irányító protokoll", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "LSR-ek és LER-ek", jo: true },
                { valasz: "Címke-kapcsolt utak", jo: true }
              ]
            },
            { kerdes: "Milyen módon biztosít igény szerinti kiszolgálást az összeköttetés alapú csomagkapcsolás (pl ATM)?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Az egyedileg egyeztetett igények részére erõforrásokat foglal, és a foglalható erõforrások \"kimerülése\" esetén visszautasítja az igényeket", jo: false },
                { valasz: "Csak olyan igényeket szolgál ki, amelyek azonos követelményeket támasztanak", jo: false },
                { valasz: "Úgynevezett beengedésszabályozást végez.", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Milyen elemei vannak a forgalomleírásnak az !IntServ módszerben?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Az elfogadható legnagyobb vödörméret", jo: true },
                { valasz: "A szükséges legkisebb token-rate", jo: false },
                { valasz: "Két eleme (két csoport), az egyik a forgalomspecifikáció, a másik az igény megadása", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Melyik NEM a !DiffServ módszer elõnyös tulajdonsága?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Biztosítja a végpontok közötti !QoS-t", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Nem igényel jelzést valamennyi csomóponton", jo: false },
                { valasz: "Megszünteti a gerinchálózati csomópontokon a csomagfolyamonkénti állapotnyilvántartást", jo: false },
                { valasz: "A sok munkát igénylõ feladatokat a hálózat peremére helyezi", jo: false }
              ]
            },
            { kerdes: "Ma mit tekinthetünk az elsõ ötletnek, amely végül elvezetett az MPLS-hez, és melyik cégek javaslatai alapján kezdõdött meg a szabványosítás?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Az elsõ ötlet a Cisco Tag Switching-je volt, a szabványosítás pedig a Toshiba és az IBM javaslata alapján kezdõdött", jo: false },
                { valasz: "Egyik válasz sem jó", jo: true },
                { valasz: "Az elsõ ötlet az Ipsilon IP Switching-je volt, a szabványosítás pedig a Toshiba, a Cisco és az IBM javaslata alapján kezdõdött", jo: false }
              ]
            },
            { kerdes: "A hálózat melyik részén és kinek a hatáskörében kell kitölteni a TOS/Traffic Class mezõket a !DiffServ módszer esetén?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Ezeket a szolgáltató felügyelete alatt a !DiffServ szolgáltatási határán kell kitölteni", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Ezeket a felhasználónak kell kitölteni, aki nyilván a hálózat peremén van", jo: false },
                { valasz: "Ezeket a szolgáltatónak kell kitölteni, aki a hálózat hozzáférési- és gerinc részének a határán van", jo: false }
              ]
            },
            { kerdes: "Melyek az MPLS alapvetõ jellemzõi?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Módszert biztosít a globálisan egyedi címeknek fix hosszúságú címkékre történõ leképezésére", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Módszereket ad a különféle agregáltságú csomagfolyamok kezelésére", jo: true },
                { valasz: "Függetlenül mûködik a 2. és 3. rétegbeli protokolloktól", jo: true }
              ]
            },
            { kerdes: "Milyen alapvetõ csomóponti viselkedéseket határoz meg a !DiffServ?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Guaranted Quality Service", jo: false },
                { valasz: "Assured Forwarding", jo: true },
                { valasz: "Best Effort", jo: false },
                { valasz: "Controlled Load Service", jo: false },
                { valasz: "Expedited Forwarding", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Milyen kiszolgálást igényel az információtovábbító hálózattól az úgynevezett rideg, merev, intoleráns alkalmazás?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "A legfõbb hangsúlyt az átviteli késleltetés minimumának garantálására helyezi", jo: true },
                { valasz: "Rendszerint nem érdekli az átviteli sebesség, csak a hibátlan átvitelt tekinti fontosnak", jo: false }
              ]
            },
            { kerdes: "Mi a szerepe a Token Bucket-nek az !IntServ módszerben?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Kizárólag a forgalom leírására használjuk", jo: false },
                { valasz: "Kizárólag a forgalom ellenõrzésére használjuk", jo: false },
                { valasz: "Egyik válasz sem jó", jo: true },
                { valasz: "Kizárólag az iények megadására használjuk", jo: false }
              ]
            },
            { kerdes: "Milyen követelményeket támaszt az információ-továbbítási kiszolgálással szemben az úgynevezett elasztikus alkalmazás (az általa keltett forgalom)?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Érzékeny a késleltetés ingadozására", jo: false },
                { valasz: "Jól elviseli a néhány %-os csomagvesztést", jo: false },
                { valasz: "Egyik válasz sem jó", jo: true },
                { valasz: "Nem érzékeny kis mennyiségû hibára", jo: false }
              ]
            },
            { kerdes: "Mit értenek azon, hogy a !DiffServ a !QoS biztosításának \"durva felbontású\" módszere?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Ez azt jelenti, hogy nem foglalkozik egyedi igényekkel, hanem az azonos kiszolgálási minõséget igénylõ forgalmat (függetlenül eredetétõl és céljától) együttesen kezeli", jo: true },
                { valasz: "Ezalatt azt értik, hogy csak kétféle kiszolgálási igényt biztosít: egyik a regular, a másik a premium", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Milyen alkalmazás-fajtákat ismer el, és azokat hogyan szolgálja ki az !IntServ módszer?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Elasztikus alkalmazások &#8594; Guaranted Quality Service", jo: false },
                { valasz: "Real-time tolerant alkalmazás &#8594; Controlled Load Service", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Real-time intolerant alkalmazás &#8594; Best Effort Service", jo: false }
              ]
            },
            { kerdes: "Mi tekinthetõ a garantált szolgáltatási minõség biztosításához szükséges hálózati tevékenységek közül a leginkább erõforrás-igényesnek?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A hálózatban fellépõ túlzott forgalom esetén az igények visszautasítása", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "A hálózati csomópontokban végzendõ állapotnyilvántartás", jo: true },
                { valasz: "A felhasználók kiszolgálási igényeinek bejelentésére használt jelzések továbbítása", jo: false }
              ]
            },
            { kerdes: "Melyek a lényeges elõnyei az MPLS-ben követett csomagtovábbításnak?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Az LER-ek a FEC-be sorolásnál a cél-címen kívüli szempontokat, jellemzõket is figyelembe vehetnek", jo: true },
                { valasz: "Azonos jellemzõkkel rendelkezõ csomagokat eltérõ módon sorolhatják FEC-ekbe a különbözõ LER-ek", jo: true },
                { valasz: "Az LSR-eknek nem kell túlzott képességekkel rendelkezniük", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Feladóként meghatározhatjuk a csomag útvonalát, ha a szükséges információt a csomag magával viszi a hálózaton keresztül", jo: false }
              ]
            },
            { kerdes: "Mire utal az MPLS-ben a Multi Protocol elnevezés?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Csupán azt hangsúlyozza, hogy az MPLS megvalósítási szabálya több protokollban van lerögzítve", jo: false },
                { valasz: "Valójában arra utal, hogy a módszer többféle hálózati- és adatkapcsolati protokoll esetén is használható", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Hol helyezhet&#245;k el a címkék az MPLS szerint?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Bárhová, ahol helyet találunk neki, csak egyeztetni kell a csomópontokkal", jo: false },
                { valasz: "Kizárólag az adatkapcsolati fej megfelel&#245; mez&#245;jébe", jo: false },
                { valasz: "Kizárólag az adatkapcsolati fej és a hálózati fej közé", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Milyen lehet&#245;ség van az MPLS-ben a címkék kiosztására?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Kizárólag a Label Distribution Protocol használható erre a célra", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "A szolgáltatónak kell kidolgozni erre vonatkozó módszert", jo: false },
                { valasz: "A routing protokollok kiegészítéseként lehet címkeszétosztást megvalósítani", jo: true }
              ]
            },
            { kerdes: "Melyek a legfontosabb meghatározói az igényelt kiszolgálási min&#245;ségeknek?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "?? A továbbítandó információ elviseli-e a továbbítás során keletkez&#245; késleltetést, késleltetés-ingadozást, keletkez&#245; hibákat, vagy pedig ezek bekövetkezése használhatatlanná teszi az úgy-ahogy továbbított információt", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "?? Az, hogy az alkalmazás valódi id&#245;ben lejátszódó jelenségek információját kezeli és akarja továbbítani vagy tárolt információ továbbítása a cél", jo: true }
              ]
            },
            { kerdes: "Milyen módokon tehetünk kísérletet a Best Effortnál jobb kiszolgálási minõség megvalósítására összeköttetésmentes csomagkommunikáció esetén?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A felhasználó közelében (a hálózat peremén) közelítjük az összeköttetés-alapú kommunikációt, és a belsejében (gerinc) pedig már csak forgalmi osztályokkal foglalkozunk", jo: true, megjegyzes: "Edge router ellenõriz, Core router csak a DSCP-t nézi és végzi a PHB-t" },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Megkíséreljük \"leutánozni\" az összeköttetés-alapú csomagkommunikációt", jo: true, megjegyzes: "MPLS" },
                { valasz: "Erre nincs semmilyen lehet&#245;ség, mert összeköttetésmentes hálózati protokoll esetén semmilyen garancia sem adható a kiszolgálásra", jo: false }
              ]
            },
            { kerdes: "Mi történhet a csomaggal a hálózatban a !DiffServ módszer szerint, ha az edge router a csomagot az osztálybasorolás mellett non-konform-nak jelölte?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Az összes ilyen csomagokat kivétel nélkül az elõírásnak megfelelõen eldobja az ellenõrzõ", jo: false },
                { valasz: "Az ilyen csomagokat drágábban juttatja célba a hálózat", jo: false },
                { valasz: "Az összes ilyen csomagokat kivétel nélkül az elõírásnak megfelelõen átütemezi egy forgalom-formáló (shaper)", jo: false },
                { valasz: "Egyik válasz sem jó", jo: true }
              ],
			  megjegyzes: "Valószínûleg egyik se, mert a kivétel nélkül így ellentmondás, vagy eldobja vagy formálja."
            },
			        { kerdes: "Az alábbiak közül mely állítás(ok) igaz(ak) a HTTP-re?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A HTTPS a TCP 443-as portot használja.", jo: true },
                { valasz: "Parancsorientált.", jo: true },
                { valasz: "Minden HTTP üzenet tartalmaz állapotkódot", jo: false },
                { valasz: "A tûzfalak tipikusan átengedik.", jo: true },
                { valasz: "Többféle hitelesítést (authentikációt) támogathat.", jo: true }
              ]
            },
            { kerdes: "Az alábbiak közül mely állítás(ok) igaz(ak) a HTTP-re?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A webszerver a http kéréseket a TCP 80-as porton figyeli.", jo: true },
                { valasz: "A HTTPS a HTTP SSL-lel titkosított protokollja.", jo: true },
                { valasz: "A WebDAV kiegészítéssel intelligens fájlkezelésre használható.", jo: true },
                { valasz: "Statikus és dinamikusan generált tartalom kiszolgálására is alkalmas.", jo: true },
                { valasz: "A névfeloldás funkciót is ellátja", jo: false }
              ]
            },
            { kerdes: "Az alábbi alkalmazásrétegbeli protokollok közül melynél garantált az adatforgalom titkosítása?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "HTTP", jo: false },
                { valasz: "HTTPS", jo: true },
                { valasz: "Telnet", jo: false },
                { valasz: "FTP", jo: false },
                { valasz: "SSH", jo: true },
                { valasz: "SMTP", jo: false },
                { valasz: "POP3S", jo: true }
              ]
            },
            { kerdes: "Az alkalmazás az alábbi paraméterekkel kerül megcímzésre a hálózaton kersztül:",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Alkalmazás futtatható állományának fájlneve", jo: false },
                { valasz: "Az alkalmazás memóriacíme", jo: false },
                { valasz: "A hálózati csatoló fizikai címe", jo: false },
                { valasz: "IP-verzió és IP-cím", jo: true },
                { valasz: "Szállítási rétegbeli protokoll alkalmazáshoz rendelt portszáma", jo: true },
                { valasz: "Szállíási rétegbeli protokoll azonosítója", jo: false }
              ]
            },
            { kerdes: "Az alábbiak levelezési protokollok:",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "SMTPS", jo: true },
                { valasz: "SCTP", jo: false },
                { valasz: "POP3", jo: true },
                { valasz: "IMAP4S", jo: true },
                { valasz: "MTA", jo: false },
                { valasz: "SMTP", jo: true }
              ]
            },
            { kerdes: "Az alkalmazások milyen protokollszolgáltatás(oka)t vehetnek igénybe?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "UDP", jo: true },
                { valasz: "IP", jo: true },
                { valasz: "TCP", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Az alábbiak közül mely(ek) igaz(ak) a levelezõ rendszerekre?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A felhasználók a User Agentekkel tudnak levelet küldeni és fogadni.", jo: true },
                { valasz: "A küldõ fél MTA-ja addig tárolja a levelet, amíg a fogadó fél annak letöltését nem kezdeményezi", jo: false },
                { valasz: "Az e-mail címben a @ utáni tag alapján DNS névfeloldás történik.", jo: true },
                { valasz: "A levél célba juttatása a küldõ fél MTA-jának feladata", jo: true, megjegyzes: "Pontosabban a küldõ fél ISP MTA-jának a feladata" },
                { valasz: "A klienseknek a POP3 és IMAP4 protokollokat egyszerre használni kell a levelek letöltéséhez", jo: false }
              ]
            },
            { kerdes: "Mi bizosítja az alkalmazások számára azt az interfészt (API), amin keresztül elérhetik a hálózati szolgáltatásokat?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A webszerver", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Az operációs rendszer.", jo: true },
                { valasz: "A telnet kliens", jo: false }
              ]
            },
            { kerdes: "A kliensen az alábbi rendszerhívások érvényesek:",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "bind()", jo: false },
                { valasz: "socket()", jo: true },
                { valasz: "connect()", jo: true },
                { valasz: "write()", jo: true },
                { valasz: "listen()", jo: false },
                { valasz: "open()", jo: false },
                { valasz: "close()", jo: true }
              ]
            },
            { kerdes: "A szerveren az alábbi rendszerhívások érvényesek:",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "socket()", jo: true },
                { valasz: "listen()", jo: true },
                { valasz: "bind()", jo: true },
                { valasz: "write()", jo: true },
                { valasz: "connect()", jo: false },
                { valasz: "send()", jo: false },
                { valasz: "read()", jo: true }
              ]
            },
            { kerdes: "Mely állítás(ok) igaz(ak) az SMTP-re?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A HELO paranccsal kezdeményezheti a fogató a kapcsolat létrejöttének visszaigazolását", jo: false },
                { valasz: "A POP3/IMAP4 kliensek ennek segítségével küldhetnek levelet.", jo: true },
                { valasz: "Létezik titkosított verziója is, az SMTPS.", jo: true },
                { valasz: "A 25-ös TCP portot használja.", jo: true },
                { valasz: "A levél küldésének végét két egymást követõ sortörés jelzi", jo: false }
              ]
            },
            { kerdes: "Mely végzõdéssel lesz igaz az alábbi állítás? Egy SMTP-kapcsolaton belül lehetõség van...",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "... több levelet ugyanannak a címzettnek elküldeni.", jo: true },
                { valasz: "... több különbözõ szervernek levelet küldeni.", jo: true },
                { valasz: "... több címzettnek is elküldeni ugyanazt a levelet.", jo: true },
                { valasz: "... a kapcsolat bontásának késleltetésére, habár levél továbbítása nem történik", jo: true, megjegyzes: "NOOP" }
              ]
            },
            { kerdes: "Az alábbiak közül mit tartalmaz egy HTTP kérés?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Fejléceket.", jo: true },
                { valasz: "A kért tartalom URL-jét.", jo: true },
                { valasz: "A kérés az UDP 80-as portra megy", jo: false },
                { valasz: "A kérés végét jelentõ karaktert (End Of File)", jo: false },
                { valasz: "Állapotkódot", jo: false },
                { valasz: "Egy megfelelõ parancsot (pl. GET).", jo: true }
              ]
            },
            { kerdes: "Mely állítás(ok) igaz(ak) a kliens-szerver architektúrában a szerverre?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Más alkalmazásnál egyidejûleg lehet kliens is.", jo: true },
                { valasz: "Tipikusan egy az alkalmazásrétegbeli protokolltól függõ állandó portot hasznája.", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Mindig a szerver kezdeményezi a kapcsolatfelvételt", jo: false },
                { valasz: "Folyamatosan figyeli a beérkezõ igényeket.", jo: true }
              ]
            },
            { kerdes: "Mi igaz az alábbiak közül az FTP-re?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Fájlátvitelre tervezett protokoll.", jo: true },
                { valasz: "Külön alkalmas szöveges és bináris állományok átvitelére.", jo: true },
                { valasz: "Csak a TCP 21-es portot használhatja", jo: false },
                { valasz: "Parancsorientált.", jo: true },
                { valasz: "Szállíási rétegbeli protokoll", jo: false }
              ]
            },
            { kerdes: "Mi a közös a POP3 és az IMAP4 protokollokban?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Parancsorientáltak.", jo: true },
                { valasz: "Levelek letöltésére valók.", jo: true },
                { valasz: "UDP szállítási protokollt használnak", jo: false },
                { valasz: "Létezik titkosított változatuk.", jo: true },
                { valasz: "Automatikusan törlik a szerverrõl a levelet", jo: false }
              ]
            },
            { kerdes: "Mit tartalmaz egy HTTP válasz az alábbiak közül?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Fejléceket.", jo: true },
                { valasz: "Állapotkódot.", jo: true },
                { valasz: "A böngészõ nevét, hogy kliens oldalon annak lehessen eljuttatni", jo: false },
                { valasz: "Az eredeti kérést", jo: false },
                { valasz: "A kért adatot, amennyiben a kérés létezõ adatra vonatkozott.", jo: true }
              ]
            },
            { kerdes: "Mire való a socket?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Az alkalmazás a helyi felhasználóval ezen kersztül kommunikálhat", jo: false },
                { valasz: "Két alkalmazás közötti kommunikációs csatorna.", jo: false },
                { valasz: "Az alkalmazás ezt létrehozva ezen keresztül kommunikálhat.", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "A kapcsolat lebontását végzõ alkalmazás", jo: false }
              ],
			  megjegyzes: "dia 2010.május 4. - 5. oldal socket = alkalmazás által használható végzõdés / kommunikációs végpont"
            },
            { kerdes: "Mi igaz az alábbiak közül a webes rendszerek gyorsítótárazására (cache)?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A böngészõ kliens oldalon végezheti.", jo: true },
                { valasz: "A gyorsítótárral (cache) jelentõs mértékben nem csökken a letöltendõ adatmennyiség, hiszen mindig le kell tölteni a lapokat, hogy észleltjük, ha változott a tartalmuk", jo: false },
                { valasz: "Jelentõsen csökkentheti a kiszolgálási idõt.", jo: true },
                { valasz: "A már lekért lapok a gyorsítótárából a böngészõ bezárásáig kiszolgálhatók, utána évülnek el", jo: false },
                { valasz: "A proxy szerver végezheti", jo: true, megjegyzes: "Igen, végezheti, de nem csak ez..." }
              ]
            },
            { kerdes: "Az alábbiak közül melyik parancsorientált protokoll?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "FTP", jo: true },
                { valasz: "HTTP", jo: true },
                { valasz: "POP3", jo: true },
                { valasz: "SMTP", jo: true },
                { valasz: "IMAP4", jo: true }
              ]
            },
            { kerdes: "Mely állítás(ok) igaz(ak) a kliens-szerver architektúrában a kliensre?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Dinamikusan választ forrás portszámot a kapcsolat kiéptésekor.", jo: true },
                { valasz: "Folyamatosan figyeli a beérkezõ igényeket", jo: false },
                { valasz: "Mindig fel kell derítenie, milyen portra kell kapcsolódnia, mert a szervernél ez gyakran változik", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Más alkalmazásnál egyidejûleg lehet szerver is.", jo: true },
                { valasz: "Mindig a kliens kezdeményezi a kapcsolatfelvételt.", jo: true }
              ]
            },
            { kerdes: "Az alábbiak közül melyek közvetlentül IP feletti protokollok?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "UDP", jo: true },
                { valasz: "OSPF", jo: true },
                { valasz: "SMTP", jo: false },
                { valasz: "UTP", jo: false },
                { valasz: "FTP", jo: false },
                { valasz: "TCP", jo: true },
                { valasz: "ICMP", jo: true }
              ]
            },
			       { kerdes: "Mit eredményez a több DNS szerver használata egy zónára vonatkoztatva?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Szinkronizáció megkövetelését.", jo: true },
                { valasz: "Terheléselosztást.", jo: true },
                { valasz: "Bármelyik meghibásodása esetén újabb rekordokat tudunk felvenni a zónába", jo: false },
                { valasz: "Hibatûrést.", jo: true },
                { valasz: "Több NS bejegyzést a zónákban.", jo: true }
              ]
            },
            { kerdes: "Az alábbi eszközök közül mely(ek) lát(nak) el biztosan hálózatbiztonsági funkciót?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "!WiFi !AccesPoint", jo: false },
                { valasz: "Tûzfal", jo: true },
                { valasz: "IPS", jo: true },
                { valasz: "Router", jo: false },
                { valasz: "IDS", jo: true }
              ]
            },
            { kerdes: "Az alábbiak közül mely állítás(ok) igaz(ak) a levelezõ rendszerekre?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A címzett MTA-hoz megérkezett levél egy várakozási sorban (queue) kerül eltárolásra, amíg a User Agent azt le nem tölti", jo: false },
                { valasz: "Amennyiben az MTA nem tudja küldéskor továbbítani a levelet, az elveszik", jo: false },
                { valasz: "Az MTA-k egymással SMTP-n keresztül kommunikálnak.", jo: true },
                { valasz: "Az e-mail címben a @ utáni tag alapján a küldõ fél MTA-ja próbálja meg a levelet célba juttatni.", jo: true },
                { valasz: "A névfeloldás DNS segítségével történik.", jo: true }
              ]
            },
            { kerdes: "A hálózatbiztonság AAA betûszava mely fogalmak rövidítésbõl adódik?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Attribution (jellemzés)", jo: false },
                { valasz: "Algorithms (algoritmusok)", jo: false },
                { valasz: "Authorization (jogosultságkezelés és -hozzárendelés)", jo: true },
                { valasz: "Accounting (számlázás)", jo: true },
                { valasz: "Authentication (hitelesítés)", jo: true },
                { valasz: "Attack prevention (támadás elleni védelem)", jo: false }
              ]
            },
            { kerdes: "Mi igaz az alábbiak közül az FTP-re?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Szállítási rétegbeli protokoll", jo: false },
                { valasz: "Külön alkalmas szöveges és bináris állományok átvitelére.", jo: true },
                { valasz: "Parancsorientált.", jo: true },
                { valasz: "Csak a TCP 21-es portot használhatja", jo: false },
                { valasz: "Fájlátvitelre tervezett protokoll.", jo: true }
              ]
            },
            { kerdes: "Mi igaz az alábbiak közül a webes rendszerek gyorsítótárazására (cache)?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A böngészõ kliens oldalon végezheti.", jo: true },
                { valasz: "Jelentõsen csökkentheti a kiszolgálási idõt.", jo: true },
                { valasz: "A gyorsítótárral (cache) jelentõs mértékben nem csökken a letöltendõ adatmennyiség, hiszen mindig le kell tölteni a lapokat, hogy észleltjük, ha változott a tartalmuk", jo: false },
                { valasz: "A proxy szerver végezheti.", jo: true },
                { valasz: "A már lekért lapok a gyorsítótárából a böngészõ bezárásáig kiszolgálhatók, utána évülnek el", jo: false }
              ]
            },
            { kerdes: "A szerveren az alábbi rendszerhívások érvényesek:",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "socket()", jo: true },
                { valasz: "connect()", jo: false },
                { valasz: "send()", jo: false },
                { valasz: "bind()", jo: true },
                { valasz: "write()", jo: true },
                { valasz: "read()", jo: true },
                { valasz: "listen()", jo: true }
              ]
            },
            { kerdes: "Az alábbi állítások közül mely(ek) igaz(ak) a DNS szerverre?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Csak DNS-kliensekkel kommunikálhat, DNS szerverekkel nem", jo: false },
                { valasz: "Több zónát is kiszolgálhat.", jo: true },
                { valasz: "Az UDP 53-as porton figyeli e bejövõ zónaletöltési kéréseket", jo: false },
                { valasz: "A DNS szerveket az NS rekord jelöli.", jo: true },
                { valasz: "Csak a TCP 53-as porton figyeli a bejövõ DNS-lekérdezése", jo: false }
              ]
            },
            { kerdes: "Az alábbi alkalmazásrétegbeli protokollok közül melynél garantált az adatforgalom titkosítása?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "SSH", jo: true },
                { valasz: "HTTP", jo: false },
                { valasz: "Telnet", jo: false },
                { valasz: "POP3S", jo: true },
                { valasz: "FTP", jo: false },
                { valasz: "HTTPS", jo: true },
                { valasz: "SMTP", jo: false }
              ]
            },
            { kerdes: "Mely állítás(ok) igaz(ak) az alábbiak közül az SMTP-re?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Az EHLO paranccsal kezdeményezheti a küldõ az ESMTP használatát.", jo: true },
                { valasz: "Az MTA-k egymásnak ezen protokoll segítségével küldik az e-maileket.", jo: true },
                { valasz: "Az SMTP protokoll lehetõvé teszi, hogy hamis feladóval küldjünk levelet.", jo: true },
                { valasz: "A parancsokat állapotkódokkal jelzi vissza.", jo: true },
                { valasz: "A POP3/IMAP4 kliensek ennek segítségével fogadhatnak levelet", jo: false }
              ]
            },
            { kerdes: "Az alábbiak közül mely(ek) érvényes (IPv4-es) DNS rekord típus(ok)?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "MX", jo: true, megjegyzes: "lásd: http://en.wikipedia.org/wiki/List_of_DNS_record_types" },
                { valasz: "alias", jo: false },
                { valasz: "A", jo: true },
                { valasz: "B", jo: false },
                { valasz: "CNAME", jo: true }
              ]
            },
            { kerdes: "Az alábbiak közül mely(ek) érvényes (IPv4-es) DNS rekord típus(ok)?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "SRV", jo: true },
                { valasz: "BMX", jo: false },
                { valasz: "NS", jo: true },
                { valasz: "SERVER", jo: false },
                { valasz: "MAIL", jo: false }
              ]
            },
            { kerdes: "Az alábbiak közül mely(ek) érvényes (IPv4-es) DNS rekord típus(ok)?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "SOA", jo: true },
                { valasz: "DNS", jo: false },
                { valasz: "C", jo: false },
                { valasz: "WWW", jo: false },
                { valasz: "PTR", jo: true }
              ]
            },
            { kerdes: "Mely végzõdéssel lesz igaz az alábbi állítás? Egy SMTP-kapcsolaton belül lehetõség van...",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "...több levelet ugyanannak a címzettnek elküldeni.", jo: true },
                { valasz: "...a kapcsolat bontásának késleltetésére, habár levél továbbítása nem történik.", jo: true },
                { valasz: "...több különbözõ szervernek levelet küldeni", jo: true, megjegyzes: "?" },
                { valasz: "...több címzettnek is elküldeni ugyanazt a levelet.", jo: true }
              ]
            },
            { kerdes: "Az alábbiak közöl mit tartalmaz egy HTTP kérés?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A kérés végét jelentõ karaktert (End Of File)", jo: false },
                { valasz: "A kérés az UDP 80-as portra megy", jo: false },
                { valasz: "Egy megfelelõ parancsot (pl. GET).", jo: true },
                { valasz: "Állapotkódot", jo: false },
                { valasz: "A kért tartalom URL-jét.", jo: true },
                { valasz: "Fejléceket.", jo: true }
              ]
            },
            { kerdes: "Az alábbiak közül melyek közvetlentül IP feletti protokollok?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "TCP", jo: true },
                { valasz: "OSPF", jo: true },
                { valasz: "ICMP", jo: true },
                { valasz: "UTP", jo: false },
                { valasz: "FTP", jo: false },
                { valasz: "UDP", jo: true },
                { valasz: "SMTP", jo: false }
              ]
            },
            { kerdes: "Egy DNS lekérdezés honnan kerülhet kiszolgálásra az alábbiak közül?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A hálózat bármely DNS kliensétõl", jo: false },
                { valasz: "A helyi hosts fájlból.", jo: true },
                { valasz: "A másodlagos DNS-szervertõl.", jo: true },
                { valasz: "Az elsõdleges DNS szervertõl.", jo: true },
                { valasz: "A helyi gyorsítótárból.", jo: true }
              ]
            },
            { kerdes: "Az alábbiak közül mely(ek) igaz(ak) a DNS zónákra?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A zóna egy tartományra vonatkozó bejegyzéseket tartalmazza.", jo: true },
                { valasz: "Egy szerveren több is lehet.", jo: true },
                { valasz: "Egy zónában csak azonos típusú rekordok lehetnek", jo: false },
                { valasz: "Az FQDN a zónában lévõ nem ponttal lezárt rekord és a zóna nevének összelvasásával kapható.", jo: true },
                { valasz: "Mindegyikbõl potosan egy példány létezik", jo: false }
              ]
            },
            { kerdes: "Az alábbiak levelezési protokollok:",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "POP3", jo: true },
                { valasz: "SCTP", jo: false },
                { valasz: "IMAP4S", jo: true },
                { valasz: "MTA", jo: false },
                { valasz: "SMTPS", jo: true },
                { valasz: "SMTP", jo: true }
              ]
            },
            { kerdes: "Az alábbiak közül mi igaz a web proxy szerverre?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Központi gyorsítótárazást (cache) lát el.", jo: true },
                { valasz: "Jól használható, ha a kliensek nem rendelkeznek külsõ (az Internetes is érvényes) IP-címmel.", jo: true },
                { valasz: "?A névfeloldás a web proxy kliens (böngészõ) feladata", jo: false },
                { valasz: "Használatával jelentõs sávszélesség takarítható meg.", jo: true },
                { valasz: "A webszerverrel DNS-en keresztül kommunikál", jo: false }
              ]
            },
            { kerdes: "Mely állítás(ok) igaz(ak) a kliens-szerver architektúrában a szerverre?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Más alkalmazásnál egyidejûleg lehet kliens is.", jo: true },
                { valasz: "Tipikusan egy az alkalmazásrétegbeli protokolltól függõ állandó portot hasznája.", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Mindig a szerver kezdeményezi a kapcsolatfelvételt", jo: false },
                { valasz: "Folyamatosan figyeli a beérkezõ igényeket.", jo: true }
              ]
            },
            { kerdes: "Mi bizosítja az alkalmazások számára azt az interfészt (API), amin keresztül elérhetik a hálózati szolgáltatásokat?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A webszerver", jo: false },
                { valasz: "Az operációs rendszer.", jo: true },
                { valasz: "A telnet kliens", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Az alábbiak közül melyik parancsorientált protokoll?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "FTP", jo: true },
                { valasz: "HTTP", jo: true },
                { valasz: "POP3", jo: true },
                { valasz: "SMTP", jo: true },
                { valasz: "IMAP4", jo: true }
              ]
            },
            { kerdes: "Az alkalmazás az alábbi paraméterekkel kerül megcímzésre a hálózaton keresztül:",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Alkalmazás futtatható állományának fájlneve", jo: false },
                { valasz: "Szállítási rétegbeli protokoll azonosítója", jo: false },
                { valasz: "IP-verzió és IP-cím", jo: true },
                { valasz: "Szállítási rétegbeli protokoll alkalmazáshoz rendelt portszáma", jo: true },
                { valasz: "Az alkalmazás memóriacíme", jo: false },
                { valasz: "A hálózati csatoló fizikai címe", jo: false }
              ]
            },
            { kerdes: "Az alábbi állítások közül mely(ek) igaz(ak) a DNS névtérre?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A névtér legfelsõ szintjét képezik a TLD-k (Top Level Domain)", jo: false },
                { valasz: "A névtér egy nem körmentes gráffal reprezántalható", jo: false },
                { valasz: "Hierarchikus.", jo: true },
                { valasz: "A névtér az ún. \"root\" szervereken kereszül járható be.", jo: true },
                { valasz: "A TLD-k (Top Level Domain) mindig országokhoz kötõdnek", jo: false }
              ]
            },
			       { kerdes: "Adja meg QPSK moduláció alkalmazása esetén mekkora az adatátviteli sebesség kbit/s-ban ha a jelzési sebesség (szimbólumsebesség) 400 kbaud?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "QPSK = Quadrature Phase-Shift Keying", jo: false },
                { valasz: "Quad, vagyis 4 állapota van", jo: false },
                { valasz: "4 állapot 2 biten tárolható", jo: false },
                { valasz: "2 bit = 1 baud (szimbólum)", jo: false },
                { valasz: "Innen: 400 kbaud(/s) = 800 kbit/s", jo: false }
              ]
            },
            { kerdes: "Számolja ki egy rézvezetéken CSMA/CD-vel mûködõ 200 m maximális szegmensmérettel és 10 Mbit/s adatsebességgel rendelkezõ hálózat minimális résidejét (minimális kerethosszhoz tartozó idõt) mikroszekundumban!",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "rézvezeték, tehát a terjedési sebesség <math>2*10<sup>8</sup></math> m/s", jo: false },
                { valasz: "a résidõ = 2L/C (L a link hossza, C a terjedési sebesség) = <math>2*200/2*10<sup>8</sup>=2*10<sup>-6</sup></math> s= 2us", jo: false },
                { valasz: "ez mikromásodpercben 2*10<sup>-3</sup>=0,002 ms", jo: false }
              ]
            },
            { kerdes: "Az alábbiak közül mely állítás(ok) igaz(ak) a !WiFi és !WiMAX szabványra is?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Használhatnak FHSS-t", jo: false },
                { valasz: "Ugyanabba a hálózat kiterjedésére utaló kategóriába sorolhatók", jo: false },
                { valasz: "Fõként a 2,4 GHz-es ISM sávot használják", jo: false },
                { valasz: "Használhatnak OFDM-et", jo: true },
                { valasz: "Ugyanazt a fizikai közeget használják", jo: true },
                { valasz: "IEEE szabványok", jo: false }
              ]
            },
            { kerdes: "Az alábbiak közül mely(ek) ismert (a számítógép-hálózatokban is érdekelt) szabványosító szervezet(ek)?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "ETSI", jo: true },
                { valasz: "IETF", jo: true },
                { valasz: "ISO", jo: true },
                { valasz: "PDU", jo: false, megjegyzes: "nem szabványosító szervezet" },
                { valasz: "A többi válasz közül egyik sem helyes", jo: false },
                { valasz: "ANSI", jo: true },
                { valasz: "IEEE", jo: true },
                { valasz: "ITU", jo: true }
              ]
            },
            { kerdes: "Számolja ki, hogy egy 4 Mbit/s adatsebességû, 500 m hosszúságú rézvezetõn mekkora egy 1000 bájtos csomag átviteli ideje mikroszekundumban!",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "4 Mbit/s = 4*10^6 bit/s, 500 m = 5*10^2m, 1000 bájt = 8*10^3 bit", jo: false },
                { valasz: "Állandók: c = 2*10^8 m/s, mikroszekundum = 10^-6 s", jo: false },
                { valasz: "Két részbõl tevõdik össze:", jo: false },
                { valasz: "Adási idõ: adatmennyiség / sávszélesség = 8*10^3 bit / 4*10^6 bit/s = 2*10-3 s = 2000 mikroszekundum", jo: false },
                { valasz: "Terjedési idõ: táv / sebesség = 5*10^2 m / 2*10^8 m/s = 2,5*10-6 s = 2,5 mikroszekundum", jo: false },
                { valasz: "Átviteli idõ: adási + terjedési idõ = 2000 + 2,5 = 2002,5 mikroszekundum", jo: false }
              ]
            },
            { kerdes: "Milyen absztrakt alkotóelemekbõl építhetõk fel az információtovábbító hálózatok?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "rádiócsatornákból", jo: false },
                { valasz: "összekötésekbõl (link)", jo: true },
                { valasz: "A többi válasz egyike sem helyes", jo: false },
                { valasz: "csomópontokból (node)", jo: true },
                { valasz: "fényvezetõkbõl", jo: false },
                { valasz: "végpontokból (end system)", jo: true }
              ]
            },
            { kerdes: "Az alábbiak közül mely(ek) jellemzõ(ek) a réselt (slotted) Alohára?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Kevesebb ütközés lesz, mint az egyszerû Alohánál azonos forgalom esetén.", jo: true },
                { valasz: "Jobb a kihasználtsága, mint az egyszerû Alohának.", jo: true },
                { valasz: "Jelentõsen nagyobb a késleltetése, mint az egyszerû Alohának", jo: false },
                { valasz: "A résidõ határán átnyúlhatnak keretek", jo: false },
                { valasz: "A felsoroltak közül egyik válasz sem jellemzõ a réselt Alohára", jo: false }
              ]
            },
            { kerdes: "Ha A egy üzenetet küld D-nek, majd erre D egy üzenettel válaszol, akkor ezen két üzenet közül melyik fog C-hez is eljutni?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Csak az elsõ", jo: false },
                { valasz: "Egyik sem", jo: false },
                { valasz: "Nem állapítható meg", jo: true, megjegyzes: "lehet, hogy az eredeti feladat részletesebb volt, de így biztos ez a jó válasz :-)" },
                { valasz: "Mindkettõ", jo: false },
                { valasz: "Csak a második", jo: false }
              ]
            },
            { kerdes: "Az alábbiak közül mely réteg(ek) NEM szerepel(nek) az ISO OSI referenciamodellben?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Adatkapcsolati", jo: false },
                { valasz: "Interfész", jo: true },
                { valasz: "Adategyeztetési", jo: true },
                { valasz: "Fizikai", jo: false },
                { valasz: "Alkalmazási", jo: false },
                { valasz: "Megjelenítési", jo: false },
                { valasz: "Adatbiztonsági", jo: true }
              ]
            },
			       { kerdes: "Mit mond ki a megõrzési törvény (conservation law)?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Sorbanállásnál mindenkinek meg kell õriznie a nyugalmát!", jo: false },
                { valasz: "Az egyes felhasználókra jutó forgalomarányokkal súlyozott késleltetési idõk összege állandó.", jo: true },
                { valasz: "A sorban feltétlenül meg kell õrizni a belépési pozíciókat", jo: false },
                { valasz: "Igazságos feladatütemezést csak a FIFO kiszolgásnál lehet elérni", jo: false },
                { valasz: "A fentiek közül egyik válasz sem helyes", jo: false }
              ]
            },
            { kerdes: "Mely funkcionalitással nem rendelkezhet egy IP hálózati csomópont?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Csomagtovábbítás", jo: false },
                { valasz: "A címzett címének összevetése a routing-tábla bejegyzéseivel", jo: false },
                { valasz: "A hálózat lehetséges útvonalairól információ gyûjtése és küldése", jo: false },
                { valasz: "Visszajelzés küldése a feladónak a csomag ellenõrzõösszegének (\"checksum\") helyességérõl", jo: false },
                { valasz: "Prioritások kezelése", jo: false }
              ]
            },
            { kerdes: "Az alábbiak közül melyik nem lehet érvényes IPv6-os cím?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "0:0:0:0:0:0:ABCD:1", jo: false },
                { valasz: "??*::192.67.0.10", jo: false, megjegyzes: "::ffff:192.67.0.10-ként lenne helyes" },
                { valasz: "FEDC::C:AA89:0000:1032", jo: false },
                { valasz: "FEDC:0094:004:0000:000C:BA98:7654:3210", jo: false },
                { valasz: "??A fentiek közül mindegyik lehet érvényes IPv6-os cím", jo: false, megjegyzes: "IPv6 18. dia alapján ez a jó válasz" }
              ]
            },
            { kerdes: "Melyik állítás igaz az alábbiak közül?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Az IPv4 mindig MTU méretû csomagokat küld", jo: false },
                { valasz: "Az IPv4 Fragment Offset mezõje azt mutatja meg, hogy hányadik töredéke a csomag az eredetinek", jo: false },
                { valasz: "A Don\'t Fragment bit beállításával fel lehet térképezni az MTU-t", jo: false },
                { valasz: "Az MTU a Minimum Transport Utilization rövidítése", jo: false },
                { valasz: "A fenti állítások közül egyik sem igaz.", jo: true }
              ]
            },
            { kerdes: "Mi a szerepe a H.323 alapján mûködõ hálózatban a Gatekeeper-nek?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Vezérli a konferencia-összeköttetéseket", jo: false },
                { valasz: "Minden esetben rajta keresztül folyik a hívásvezérlés", jo: false },
                { valasz: "Biztosítja az együttmûködést más, nem H.323 alapú hálózatokkal", jo: false },
                { valasz: "A fentiek közül egyik sem szerepe a Gatekeepernek.", jo: true },
                { valasz: "Beengedésszabályozást és erõforrás-foglalást végez", jo: false }
              ]
            },
            
            { kerdes: "Hogyan valósítja meg a Session Initiation Protocol a felhasználók követését? ",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Nem valósít meg követést, a hívó félnek kell kiderítenie a hívott aktuális címét", jo: false },
                { valasz: "Ezt a Proxy Server valósítja meg", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "A Redirect Server tudja meg a Location Server-tõl az aktuális címet", jo: true }
              ]
            },
            { kerdes: "Mit jelent a tunneling? ",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Az IP-csomagokat adatkapcsolati rétegbeli adategységekben továbbítjuk", jo: false },
                { valasz: "Az IP-csomagokat &#8222;külsõ&#8221; IP-címmel látjuk el,és ennek alapján továbbítjuk - ez a becsomagolás, ezáltal történik az alagutazás, de ez nem maga az alagutazás!", jo: false },
                { valasz: "Az IP-csomagok címét kicseréljük helyi érvényû címre,és oda továbbítjuk", jo: false },
                { valasz: "Az IP-csomagokat Ethernet keretekbe ágyazzuk", jo: false },
                { valasz: "Egyik sem", jo: false }
              ]
            }
         ];