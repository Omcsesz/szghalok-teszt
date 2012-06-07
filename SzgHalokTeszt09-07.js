       var tesztFeladatok = [
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
            { kerdes: "Mit ellenõriz az UDP-datagramm hibaellenõrzõ kódja (&#8222;checksum&#8221;)? ",
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
            }
         ];
