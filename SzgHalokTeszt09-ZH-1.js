         var tesztFeladatok = [
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
            }
         ];
