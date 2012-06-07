         var tesztFeladatok = [
            { kerdes: "Mit eredményez a több DNS szerver használata egy zónára vonatkoztatva?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Szinkronizáció megkövetelését.", jo: true },
                { valasz: "Terheléselosztást.", jo: true },
                { valasz: "Bármelyik meghibásodása esetén újabb rekordokat tudunk felvenni a zónába", jo: false },
                { valasz: "Hibatûrést.", jo: true },
                { valasz: "Több NS bejegyzést a zónákban.", jo: true }
              ]
            },
            { kerdes: "Az alábbi eszközök közül mely(ek) lát(nak) el biztosan hálózatbiztonsági funkciót?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "!WiFi !AccesPoint", jo: false },
                { valasz: "Tûzfal", jo: true },
                { valasz: "IPS", jo: true },
                { valasz: "Router", jo: false },
                { valasz: "IDS", jo: true }
              ]
            },
            { kerdes: "Az alábbiak közül mely állítás(ok) igaz(ak) a levelezõ rendszerekre?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A címzett MTA-hoz megérkezett levél egy várakozási sorban (queue) kerül eltárolásra, amíg a User Agent azt le nem tölti", jo: false },
                { valasz: "Amennyiben az MTA nem tudja küldéskor továbbítani a levelet, az elveszik", jo: false },
                { valasz: "Az MTA-k egymással SMTP-n keresztül kommunikálnak.", jo: true },
                { valasz: "Az e-mail címben a @ utáni tag alapján a küldõ fél MTA-ja próbálja meg a levelet célba juttatni.", jo: true },
                { valasz: "A névfeloldás DNS segítségével történik.", jo: true }
              ]
            },
            { kerdes: "A hálózatbiztonság AAA betûszava mely fogalmak rövidítésbõl adódik?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Attribution (jellemzés)", jo: false },
                { valasz: "Algorithms (algoritmusok)", jo: false },
                { valasz: "Authorization (jogosultságkezelés és -hozzárendelés)", jo: true },
                { valasz: "Accounting (számlázás)", jo: true },
                { valasz: "Authentication (hitelesítés)", jo: true },
                { valasz: "Attack prevention (támadás elleni védelem)", jo: false }
              ]
            },
            { kerdes: "Mi igaz az alábbiak közül az FTP-re?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Szállítási rétegbeli protokoll", jo: false },
                { valasz: "Külön alkalmas szöveges és bináris állományok átvitelére.", jo: true },
                { valasz: "Parancsorientált.", jo: true },
                { valasz: "Csak a TCP 21-es portot használhatja", jo: false },
                { valasz: "Fájlátvitelre tervezett protokoll.", jo: true }
              ]
            },
            { kerdes: "Mi igaz az alábbiak közül a webes rendszerek gyorsítótárazására (cache)?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A böngészõ kliens oldalon végezheti.", jo: true },
                { valasz: "Jelentõsen csökkentheti a kiszolgálási idõt.", jo: true },
                { valasz: "A gyorsítótárral (cache) jelentõs mértékben nem csökken a letöltendõ adatmennyiség, hiszen mindig le kell tölteni a lapokat, hogy észleltjük, ha változott a tartalmuk", jo: false },
                { valasz: "A proxy szerver végezheti.", jo: true },
                { valasz: "A már lekért lapok a gyorsítótárából a böngészõ bezárásáig kiszolgálhatók, utána évülnek el", jo: false }
              ]
            },
            { kerdes: "A szerveren az alábbi rendszerhívások érvényesek:",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "socket()", jo: true },
                { valasz: "connect()", jo: false },
                { valasz: "send()", jo: false },
                { valasz: "bind()", jo: true },
                { valasz: "write()", jo: true },
                { valasz: "read()", jo: true },
                { valasz: "listen()", jo: true }
              ]
            },
            { kerdes: "Az alábbi állítások közül mely(ek) igaz(ak) a DNS szerverre?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Csak DNS-kliensekkel kommunikálhat, DNS szerverekkel nem", jo: false },
                { valasz: "Több zónát is kiszolgálhat.", jo: true },
                { valasz: "Az UDP 53-as porton figyeli e bejövõ zónaletöltési kéréseket", jo: false },
                { valasz: "A DNS szerveket az NS rekord jelöli.", jo: true },
                { valasz: "Csak a TCP 53-as porton figyeli a bejövõ DNS-lekérdezése", jo: false }
              ]
            },
            { kerdes: "Az alábbi alkalmazásrétegbeli protokollok közül melynél garantált az adatforgalom titkosítása?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "SSH", jo: true },
                { valasz: "HTTP", jo: false },
                { valasz: "Telnet", jo: false },
                { valasz: "POP3S", jo: true },
                { valasz: "FTP", jo: false },
                { valasz: "HTTPS", jo: true },
                { valasz: "SMTP", jo: false }
              ]
            },
            { kerdes: "Mely állítás(ok) igaz(ak) az alábbiak közül az SMTP-re?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Az EHLO paranccsal kezdeményezheti a küldõ az ESMTP használatát.", jo: true },
                { valasz: "Az MTA-k egymásnak ezen protokoll segítségével küldik az e-maileket.", jo: true },
                { valasz: "Az SMTP protokoll lehetõvé teszi, hogy hamis feladóval küldjünk levelet.", jo: true },
                { valasz: "A parancsokat állapotkódokkal jelzi vissza.", jo: true },
                { valasz: "A POP3/IMAP4 kliensek ennek segítségével fogadhatnak levelet", jo: false }
              ]
            },
            { kerdes: "Az alábbiak közül mely(ek) érvényes (IPv4-es) DNS rekord típus(ok)?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "MX", jo: true, megjegyzes: "lásd: http://en.wikipedia.org/wiki/List_of_DNS_record_types" },
                { valasz: "alias", jo: false },
                { valasz: "A", jo: true },
                { valasz: "B", jo: false },
                { valasz: "CNAME", jo: true }
              ]
            },
            { kerdes: "Az alábbiak közül mely(ek) érvényes (IPv4-es) DNS rekord típus(ok)?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "SRV", jo: true },
                { valasz: "BMX", jo: false },
                { valasz: "NS", jo: true },
                { valasz: "SERVER", jo: false },
                { valasz: "MAIL", jo: false }
              ]
            },
            { kerdes: "Az alábbiak közül mely(ek) érvényes (IPv4-es) DNS rekord típus(ok)?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "SOA", jo: true },
                { valasz: "DNS", jo: false },
                { valasz: "C", jo: false },
                { valasz: "WWW", jo: false },
                { valasz: "PTR", jo: true }
              ]
            },
            { kerdes: "Mely végzõdéssel lesz igaz az alábbi állítás? Egy SMTP-kapcsolaton belül lehetõség van...",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "...több levelet ugyanannak a címzettnek elküldeni.", jo: true },
                { valasz: "...a kapcsolat bontásának késleltetésére, habár levél továbbítása nem történik.", jo: true },
                { valasz: "...több különbözõ szervernek levelet küldeni", jo: true, megjegyzes: "?" },
                { valasz: "...több címzettnek is elküldeni ugyanazt a levelet.", jo: true }
              ]
            },
            { kerdes: "Az alábbiak közöl mit tartalmaz egy HTTP kérés?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A kérés végét jelentõ karaktert (End Of File)", jo: false },
                { valasz: "A kérés az UDP 80-as portra megy", jo: false },
                { valasz: "Egy megfelelõ parancsot (pl. GET).", jo: true },
                { valasz: "Állapotkódot", jo: false },
                { valasz: "A kért tartalom URL-jét.", jo: true },
                { valasz: "Fejléceket.", jo: true }
              ]
            },
            { kerdes: "Az alábbiak közül melyek közvetlentül IP feletti protokollok?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "TCP", jo: true },
                { valasz: "OSPF", jo: true },
                { valasz: "ICMP", jo: true },
                { valasz: "UTP", jo: false },
                { valasz: "FTP", jo: false },
                { valasz: "UDP", jo: true },
                { valasz: "SMTP", jo: false }
              ]
            },
            { kerdes: "Egy DNS lekérdezés honnan kerülhet kiszolgálásra az alábbiak közül?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A hálózat bármely DNS kliensétõl", jo: false },
                { valasz: "A helyi hosts fájlból.", jo: true },
                { valasz: "A másodlagos DNS-szervertõl.", jo: true },
                { valasz: "Az elsõdleges DNS szervertõl.", jo: true },
                { valasz: "A helyi gyorsítótárból.", jo: true }
              ]
            },
            { kerdes: "Az alábbiak közül mely(ek) igaz(ak) a DNS zónákra?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A zóna egy tartományra vonatkozó bejegyzéseket tartalmazza.", jo: true },
                { valasz: "Egy szerveren több is lehet.", jo: true },
                { valasz: "Egy zónában csak azonos típusú rekordok lehetnek", jo: false },
                { valasz: "Az FQDN a zónában lévõ nem ponttal lezárt rekord és a zóna nevének összelvasásával kapható.", jo: true },
                { valasz: "Mindegyikbõl potosan egy példány létezik", jo: false }
              ]
            },
            { kerdes: "Az alábbiak levelezési protokollok:",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "POP3", jo: true },
                { valasz: "SCTP", jo: false },
                { valasz: "IMAP4S", jo: true },
                { valasz: "MTA", jo: false },
                { valasz: "SMTPS", jo: true },
                { valasz: "SMTP", jo: true }
              ]
            },
            { kerdes: "Az alábbiak közül mi igaz a web proxy szerverre?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Központi gyorsítótárazást (cache) lát el.", jo: true },
                { valasz: "Jól használható, ha a kliensek nem rendelkeznek külsõ (az Internetes is érvényes) IP-címmel.", jo: true },
                { valasz: "?A névfeloldás a web proxy kliens (böngészõ) feladata", jo: false },
                { valasz: "Használatával jelentõs sávszélesség takarítható meg.", jo: true },
                { valasz: "A webszerverrel DNS-en keresztül kommunikál", jo: false }
              ]
            },
            { kerdes: "Mely állítás(ok) igaz(ak) a kliens-szerver architektúrában a szerverre?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Más alkalmazásnál egyidejûleg lehet kliens is.", jo: true },
                { valasz: "Tipikusan egy az alkalmazásrétegbeli protokolltól függõ állandó portot hasznája.", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Mindig a szerver kezdeményezi a kapcsolatfelvételt", jo: false },
                { valasz: "Folyamatosan figyeli a beérkezõ igényeket.", jo: true }
              ]
            },
            { kerdes: "Mi bizosítja az alkalmazások számára azt az interfészt (API), amin keresztül elérhetik a hálózati szolgáltatásokat?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A webszerver", jo: false },
                { valasz: "Az operációs rendszer.", jo: true },
                { valasz: "A telnet kliens", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Az alábbiak közül melyik parancsorientált protokoll?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "FTP", jo: true },
                { valasz: "HTTP", jo: true },
                { valasz: "POP3", jo: true },
                { valasz: "SMTP", jo: true },
                { valasz: "IMAP4", jo: true }
              ]
            },
            { kerdes: "Az alkalmazás az alábbi paraméterekkel kerül megcímzésre a hálózaton keresztül:",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Alkalmazás futtatható állományának fájlneve", jo: false },
                { valasz: "Szállítási rétegbeli protokoll azonosítója", jo: false },
                { valasz: "IP-verzió és IP-cím", jo: true },
                { valasz: "Szállítási rétegbeli protokoll alkalmazáshoz rendelt portszáma", jo: true },
                { valasz: "Az alkalmazás memóriacíme", jo: false },
                { valasz: "A hálózati csatoló fizikai címe", jo: false }
              ]
            },
            { kerdes: "Az alábbi állítások közül mely(ek) igaz(ak) a DNS névtérre?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A névtér legfelsõ szintjét képezik a TLD-k (Top Level Domain)", jo: false },
                { valasz: "A névtér egy nem körmentes gráffal reprezántalható", jo: false },
                { valasz: "Hierarchikus.", jo: true },
                { valasz: "A névtér az ún. \"root\" szervereken kereszül járható be.", jo: true },
                { valasz: "A TLD-k (Top Level Domain) mindig országokhoz kötõdnek", jo: false }
              ]
            }
         ];
