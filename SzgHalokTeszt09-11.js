        var tesztFeladatok = [
            { kerdes: "Az alábbiak közül mely állítás(ok) igaz(ak) a HTTP-re?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A HTTPS a TCP 443-as portot használja.", jo: true },
                { valasz: "Parancsorientált.", jo: true },
                { valasz: "Minden HTTP üzenet tartalmaz állapotkódot", jo: false },
                { valasz: "A tûzfalak tipikusan átengedik.", jo: true },
                { valasz: "Többféle hitelesítést (authentikációt) támogathat.", jo: true }
              ]
            },
            { kerdes: "Az alábbiak közül mely állítás(ok) igaz(ak) a HTTP-re?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A webszerver a http kéréseket a TCP 80-as porton figyeli.", jo: true },
                { valasz: "A HTTPS a HTTP SSL-lel titkosított protokollja.", jo: true },
                { valasz: "A WebDAV kiegészítéssel intelligens fájlkezelésre használható.", jo: true },
                { valasz: "Statikus és dinamikusan generált tartalom kiszolgálására is alkalmas.", jo: true },
                { valasz: "A névfeloldás funkciót is ellátja", jo: false }
              ]
            },
            { kerdes: "Az alábbi alkalmazásrétegbeli protokollok közül melynél garantált az adatforgalom titkosítása?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "HTTP", jo: false },
                { valasz: "HTTPS", jo: true },
                { valasz: "Telnet", jo: false },
                { valasz: "FTP", jo: false },
                { valasz: "SSH", jo: true },
                { valasz: "SMTP", jo: false },
                { valasz: "POP3S", jo: true }
              ]
            },
            { kerdes: "Az alkalmazás az alábbi paraméterekkel kerül megcímzésre a hálózaton kersztül:",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Alkalmazás futtatható állományának fájlneve", jo: false },
                { valasz: "Az alkalmazás memóriacíme", jo: false },
                { valasz: "A hálózati csatoló fizikai címe", jo: false },
                { valasz: "IP-verzió és IP-cím", jo: true },
                { valasz: "Szállítási rétegbeli protokoll alkalmazáshoz rendelt portszáma", jo: true },
                { valasz: "Szállíási rétegbeli protokoll azonosítója", jo: false }
              ]
            },
            { kerdes: "Az alábbiak levelezési protokollok:",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "SMTPS", jo: true },
                { valasz: "SCTP", jo: false },
                { valasz: "POP3", jo: true },
                { valasz: "IMAP4S", jo: true },
                { valasz: "MTA", jo: false },
                { valasz: "SMTP", jo: true }
              ]
            },
            { kerdes: "Az alkalmazások milyen protokollszolgáltatás(oka)t vehetnek igénybe?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "UDP", jo: true },
                { valasz: "IP", jo: true },
                { valasz: "TCP", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Az alábbiak közül mely(ek) igaz(ak) a levelezõ rendszerekre?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A felhasználók a User Agentekkel tudnak levelet küldeni és fogadni.", jo: true },
                { valasz: "A küldõ fél MTA-ja addig tárolja a levelet, amíg a fogadó fél annak letöltését nem kezdeményezi", jo: false },
                { valasz: "Az e-mail címben a @ utáni tag alapján DNS névfeloldás történik.", jo: true },
                { valasz: "A levél célba juttatása a küldõ fél MTA-jának feladata", jo: true, megjegyzes: "Pontosabban a küldõ fél ISP MTA-jának a feladata" },
                { valasz: "A klienseknek a POP3 és IMAP4 protokollokat egyszerre használni kell a levelek letöltéséhez", jo: false }
              ]
            },
            { kerdes: "Mi bizosítja az alkalmazások számára azt az interfészt (API), amin keresztül elérhetik a hálózati szolgáltatásokat?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A webszerver", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Az operációs rendszer.", jo: true },
                { valasz: "A telnet kliens", jo: false }
              ]
            },
            { kerdes: "A kliensen az alábbi rendszerhívások érvényesek:",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "bind()", jo: false },
                { valasz: "socket()", jo: true },
                { valasz: "connect()", jo: true },
                { valasz: "write()", jo: true },
                { valasz: "listen()", jo: false },
                { valasz: "open()", jo: false },
                { valasz: "close()", jo: true }
              ]
            },
            { kerdes: "A szerveren az alábbi rendszerhívások érvényesek:",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "socket()", jo: true },
                { valasz: "listen()", jo: true },
                { valasz: "bind()", jo: true },
                { valasz: "write()", jo: true },
                { valasz: "connect()", jo: false },
                { valasz: "send()", jo: false },
                { valasz: "read()", jo: true }
              ]
            },
            { kerdes: "Mely állítás(ok) igaz(ak) az SMTP-re?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A HELO paranccsal kezdeményezheti a fogató a kapcsolat létrejöttének visszaigazolását", jo: false },
                { valasz: "A POP3/IMAP4 kliensek ennek segítségével küldhetnek levelet.", jo: true },
                { valasz: "Létezik titkosított verziója is, az SMTPS.", jo: true },
                { valasz: "A 25-ös TCP portot használja.", jo: true },
                { valasz: "A levél küldésének végét két egymást követõ sortörés jelzi", jo: false }
              ]
            },
            { kerdes: "Mely végzõdéssel lesz igaz az alábbi állítás? Egy SMTP-kapcsolaton belül lehetõség van...",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "... több levelet ugyanannak a címzettnek elküldeni.", jo: true },
                { valasz: "... több különbözõ szervernek levelet küldeni.", jo: true },
                { valasz: "... több címzettnek is elküldeni ugyanazt a levelet.", jo: true },
                { valasz: "... a kapcsolat bontásának késleltetésére, habár levél továbbítása nem történik", jo: true, megjegyzes: "NOOP" }
              ]
            },
            { kerdes: "Az alábbiak közül mit tartalmaz egy HTTP kérés?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Fejléceket.", jo: true },
                { valasz: "A kért tartalom URL-jét.", jo: true },
                { valasz: "A kérés az UDP 80-as portra megy", jo: false },
                { valasz: "A kérés végét jelentõ karaktert (End Of File)", jo: false },
                { valasz: "Állapotkódot", jo: false },
                { valasz: "Egy megfelelõ parancsot (pl. GET).", jo: true }
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
            { kerdes: "Mi igaz az alábbiak közül az FTP-re?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Fájlátvitelre tervezett protokoll.", jo: true },
                { valasz: "Külön alkalmas szöveges és bináris állományok átvitelére.", jo: true },
                { valasz: "Csak a TCP 21-es portot használhatja", jo: false },
                { valasz: "Parancsorientált.", jo: true },
                { valasz: "Szállíási rétegbeli protokoll", jo: false }
              ]
            },
            { kerdes: "Mi a közös a POP3 és az IMAP4 protokollokban?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Parancsorientáltak.", jo: true },
                { valasz: "Levelek letöltésére valók.", jo: true },
                { valasz: "UDP szállítási protokollt használnak", jo: false },
                { valasz: "Létezik titkosított változatuk.", jo: true },
                { valasz: "Automatikusan törlik a szerverrõl a levelet", jo: false }
              ]
            },
            { kerdes: "Mit tartalmaz egy HTTP válasz az alábbiak közül?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Fejléceket.", jo: true },
                { valasz: "Állapotkódot.", jo: true },
                { valasz: "A böngészõ nevét, hogy kliens oldalon annak lehessen eljuttatni", jo: false },
                { valasz: "Az eredeti kérést", jo: false },
                { valasz: "A kért adatot, amennyiben a kérés létezõ adatra vonatkozott.", jo: true }
              ]
            },
            { kerdes: "Mire való a socket?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Az alkalmazás a helyi felhasználóval ezen kersztül kommunikálhat", jo: false },
                { valasz: "Két alkalmazás közötti kommunikációs csatorna.", jo: false },
                { valasz: "Az alkalmazás ezt létrehozva ezen keresztül kommunikálhat.", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "A kapcsolat lebontását végzõ alkalmazás", jo: false }
              ],
			  megjegyzes: "dia 2010.május 4. - 5. oldal socket = alkalmazás által használható végzõdés / kommunikációs végpont"
            },
            { kerdes: "Mi igaz az alábbiak közül a webes rendszerek gyorsítótárazására (cache)?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A böngészõ kliens oldalon végezheti.", jo: true },
                { valasz: "A gyorsítótárral (cache) jelentõs mértékben nem csökken a letöltendõ adatmennyiség, hiszen mindig le kell tölteni a lapokat, hogy észleltjük, ha változott a tartalmuk", jo: false },
                { valasz: "Jelentõsen csökkentheti a kiszolgálási idõt.", jo: true },
                { valasz: "A már lekért lapok a gyorsítótárából a böngészõ bezárásáig kiszolgálhatók, utána évülnek el", jo: false },
                { valasz: "A proxy szerver végezheti", jo: true, megjegyzes: "Igen, végezheti, de nem csak ez..." }
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
            { kerdes: "Mely állítás(ok) igaz(ak) a kliens-szerver architektúrában a kliensre?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Dinamikusan választ forrás portszámot a kapcsolat kiéptésekor.", jo: true },
                { valasz: "Folyamatosan figyeli a beérkezõ igényeket", jo: false },
                { valasz: "Mindig fel kell derítenie, milyen portra kell kapcsolódnia, mert a szervernél ez gyakran változik", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Más alkalmazásnál egyidejûleg lehet szerver is.", jo: true },
                { valasz: "Mindig a kliens kezdeményezi a kapcsolatfelvételt.", jo: true }
              ]
            },
            { kerdes: "Az alábbiak közül melyek közvetlentül IP feletti protokollok?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "UDP", jo: true },
                { valasz: "OSPF", jo: true },
                { valasz: "SMTP", jo: false },
                { valasz: "UTP", jo: false },
                { valasz: "FTP", jo: false },
                { valasz: "TCP", jo: true },
                { valasz: "ICMP", jo: true }
              ]
            }
         ];