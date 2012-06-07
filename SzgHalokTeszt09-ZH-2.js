        var tesztFeladatok = [
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
