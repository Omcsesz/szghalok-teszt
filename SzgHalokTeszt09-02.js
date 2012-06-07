   var tesztFeladatok = [
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
            }
         ];