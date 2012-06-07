        var tesztFeladatok = [
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
            }
         ];
