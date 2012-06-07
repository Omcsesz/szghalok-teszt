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
            }
         ];