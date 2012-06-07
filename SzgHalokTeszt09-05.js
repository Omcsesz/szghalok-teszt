        var tesztFeladatok = [
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
            }
         ];
