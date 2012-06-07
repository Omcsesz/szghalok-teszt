       var tesztFeladatok = [
            { kerdes: "Mi a fõ jellemzõje a Real-time Transport Protocol-nak?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A TCP-UDP egy lehetséges alternatívája", jo: false },
                { valasz: "Biztosítja a média szállításának minõségét", jo: false },
                { valasz: "Egyik válasz sem jó", jo: true }
              ],
			  megjegyzes: "Mi az RTP és mi nem: 1. a payloadjában média-, pl. beszédinformációt hordoz 2. szállítási protokoll felett mûködik 3. támogatja a médiafolyamok (streamek) szállítását 4.nem nyújt QoS garanciát"
            },
            { kerdes: "Melyek a Real Time Streaming Protocol (RTSP) legfõbb jellemzõi?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Ez egy vezérlõ protokoll, amely nem veszt részt a felhasználói adatok szállításában", jo: true },
                { valasz: "Ezt dolgozták ki az RTP felváltására", jo: false }
              ]
            },
            { kerdes: "Milyen logikai részeket tartalmaz a Session Initiation Protocol User Agent-je?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "User Agent Server", jo: true },
                { valasz: "User Agent Controller", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Mi szükség van a médiafolyam darabjainak \"idõbélyegzésére\"?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Valójában nem feltétlenül szükséges, mert a sorszámok és a típusra vonatkozó jellemzõk alapján egyébként is lehetséges a helyes rekonstrukció", jo: false },
                { valasz: "Azért kell, mert a küldõ és a fogadó órái nem járnak pontosan együtt", jo: false },
                { valasz: "Egyik válasz sem jó.", jo: true, megjegyzes: "Timestamp: Az RTP csomag elsõ oktettjének megfelelõ pozíció valódi ideje a médiafolyamban" }
              ]
            },
            { kerdes: "Milyen módon mûködik együtt a Session Initiation Protocol esetén a Proxy Server és a Location Server?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Nincs közöttük semmilyen együttmûködés", jo: false },
                { valasz: "A Proxy Server a User Agent Client-tõl érkezõ INVITE üzenet címzettjét ellenõrzi a Location Servernél, és ezután továbbítja a hívotthoz", jo: true, megjegyzes: "A registrar-on keresztül ellenõrzi a Location Servernél" }
              ]
            },
            { kerdes: "Melyek a Session Initiation Protocol legfontosabb jellemzõi?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Kombinálható mindenféle web-alapú szolgáltatással", jo: true },
                { valasz: "IP-központú", jo: true, megjegyzes: "inkább azt mondanám, hogy IP fölött - pontosabban UDP/IP vagy TCP/IP fölött mûködik" },
                { valasz: "Állapotalapú, bináris protokoll", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Hogyan oldják meg azt, hogy az RTCP által keltett forgalom ésszerû határokon belül maradjon?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Csak a vevõ-végpontok küldenek jelentéseket", jo: false },
                { valasz: "Egyik válasz sem jó", jo: true, megjegyzes: "Korlátozás: 5!% RTCP forgalom, többi RTP" },
                { valasz: "A szinkronizáló forrás (SSRC) meghatározza a végpontok report-jainak gyakoriságát", jo: false }
              ]
            },
            { kerdes: "Miért nevezzük az RTP-t real-time protokollnak?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Mert segíti a valósidejû forgalom továbbítását fontos jellemzõk átvitelével.", jo: true },
                { valasz: "Egyik válasz sem helyes", jo: false },
                { valasz: "Mert késleltetés és vesztés nélkül átviszi a valósidejû forgalmat", jo: false },
                { valasz: "Mert folyamatosan átviszi a valódi idõt", jo: false }
              ]
            },
            { kerdes: "Mi a szerepe a H.323 alapján mûködõ hálózatban a Gatekeeper-nek?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Vezérli a konferencia-összeköttetéseket", jo: false },
                { valasz: "Minden esetben rajta keresztül folyik a hívásvezérlés", jo: false },
                { valasz: "Biztosítja az együttmûködést más hálózatokkal", jo: false },
                { valasz: "Egyik válasz sem jó", jo: true, megjegyzes: "Beengedés-szabályozás, maga a hívásvezérlés opcionálisan mehet a GK-en keresztül -a média nem-, erõforrás-menedzsment, autentikáció" }
              ]
            },
            { kerdes: "Mi az alapvetõ szerepe az RTCP-nek?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Lehetõvé teszi egy média session résztvevõinek az átviteli jellemzõk megfigyelését", jo: true },
                { valasz: "Lehetõvé teszi egy média session résztvevõinek az átviteli jellemzõk garantálását", jo: false },
                { valasz: "Lehetõvé teszi média session-ök létrehozását és elbontását", jo: false }
              ],
			  megjegyzes: "RTCP: Real-time Transport Control Protocol"
            },
            { kerdes: "Tömörített fejrészek esetén kb. hány százalékkal nõ az átvitelisebesség-igény a beszéd által igényelt nettó sebességhez képest ?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Kevesebb, mint 1%-al", jo: false },
                { valasz: "Nagymértékben függ a beszédtömörítés mértékétõl, és így néhány %-tól 10÷20%-ig változhat", jo: true }
              ]
            },
            { kerdes: "Melyik NEM tartozik a SIP építõelemek közé az alábbiak közül?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Foreign Agent", jo: true },
                { valasz: "Redirection Server", jo: false },
                { valasz: "Registrar", jo: false },
                { valasz: "User Agent", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false }
              ],
			  megjegyzes: "Még lehet a Location Server, bár ezt nem említik explicit építõelemként a diák."
            },
            { kerdes: "Milyen feladatokat lát el a Session Initiation Protocol?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Támogatja a mobilitást.", jo: true },
                { valasz: "Egy kommunikációs session megnyitásával, fenntartásával, jellemzõivel kapcsolatos információkat továbbítja, kezeli.", jo: true },
                { valasz: "Kezeli a felhasználók helyzetinformációit, támogatja pl. a hívásátadást.", jo: true }
              ]
            },
            { kerdes: "Miben különbözik egymástól a Session Initiation Protocol-ban a Request és a Response üzenetek felépítése?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: true },
                { valasz: "Az üzenetek fejrésze teljesen különbözõ", jo: false },
                { valasz: "Csak az üzenetek törzsrésze (body) különbözik", jo: false }
              ]
            },
            { kerdes: "Milyen szolgáltatásokat nyújt az RTP a médiastreaming-alkalmazásnak?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Értesíti a hálózati csomópontokat a médiafolyam kiszolgálási igényeirõl", jo: false },
                { valasz: "Megjelöli a médiafolyam darabjainak keletkezési idõpontját.", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Hordozza a médiatípus jellemzõit.", jo: true, megjegyzes: "Profile-ok" },
                { valasz: "Sorszámozza a médiafolyam darabjait.", jo: true, megjegyzes: "Sequencenumber" }
              ]
            },
            { kerdes: "A Real-time Transport Protocol által használt idõbélyeg (timestamp) lehetõvé teszi:",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A csomag tartalmának a megfelelõ idõben történõ megjelenítését.", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "A csomagvesztés kiderítését", jo: false }
              ],
			  megjegyzes: "Timestamp - Az RTP csomag elsõ oktettjének megfelelõ pozíció valódi ideje a médiafolyamban"
            },
            { kerdes: "Miben különbözik a SIP üzenetek formája a H.323 üzenetekétõl?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: true },
                { valasz: "A SIP üzenetek sokkal tömörebbek, mint a H.323 üzenetei", jo: false, megjegyzes: "SIP jó kis \"szaftos\" HTML szerû kódot ad" },
                { valasz: "A H.323 üzenetei szövegesek, szemben a SIP üzenetek bináris formájával!", jo: false, megjegyzes: "SIP szöveges" }
              ]
            },
            { kerdes: "Milyen feladatok elvégzésének módjáról intézkedik a H.323 szabványcsalád?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A csomag- és áramkörkapcsolt hálózatok közötti együttmûködésrõl", jo: true },
                { valasz: "A jelzésátvitelrõl", jo: true },
                { valasz: "Média (audió-, videó-) kódolásról", jo: true },
                { valasz: "A médiafolyam szervezésérõl (streaming)", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Hogyan valósítja meg a Session Initiation Protocol a felhasználók követését?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Nem valósít meg követést, a hívó félnek kell kiderítenie a hívott aktuális címét", jo: false },
                { valasz: "Ezt a Proxy Server valósítja meg", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "A Redirect Server tudja meg a Location Server-tõl az aktuális címet.", jo: true }
              ]
            },
			{ kerdes: "Milyen feladatot lát el és mi a jellemzõje a Session Description Protocol-nak (SDP)?",
			tipus: "tobbet_jelolo",
			valaszok: [
                { valasz: "Meghatározza a kapcsolatban résztvevõknek az információcserére vonatkozó legfontosabb jellemzõit (a média típusát, a használt portot, stb", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Valójában ezt nem is igazán lehet protokollnak nevezni, inkább egy leíró forma", jo: true },
              ]
            }
			
         ];
