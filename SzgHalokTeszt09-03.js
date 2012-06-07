        var tesztFeladatok = [
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
            }
         ];