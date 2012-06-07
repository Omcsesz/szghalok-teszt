        var tesztFeladatok = [
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
            }
         ];