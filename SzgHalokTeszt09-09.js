         var tesztFeladatok = [
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
            }
         ];