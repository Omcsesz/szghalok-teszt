        var tesztFeladatok = [
            { kerdes: "Mi a legfõbb jellemzõ a !DiffServ csomópontok (core routerek) viselkedésére? Válasszon egy választ.",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Nem törõdnek egymással, hanem csak eszközeiket használva (sorbaállítás, csomageldobás) teljesítik a jelölt csomagok továbbítását", jo: true },
                { valasz: "Az edge routerek által megjelölt csomagok továbbítását egymással együttmûködve (tennivalóikat egyeztetve) végzik", jo: false }
              ]
            },
            { kerdes: "Milyen módszereket dolgoztak ki az IP-t használó hálózatokban a Best Effort-ot meghaladó szolgáltatási minõség biztosítására?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: true },
                { valasz: "Az !IntServ és a !DiffServ módszert, amelyek azonosan alkalmasak bármilyen !QoS-t biztosítani", jo: false },
                { valasz: "Semmilyet, mert az IP nem lehet alkalmas !QoS biztosítására", jo: false }
              ]
            },
            { kerdes: "Milyen fõ jellemzõi vannak az !IntServ részére javasolt jelzésátviteli protokollnak?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Úgynevezett vevõoldali erõforrás-foglalást alkalmaz", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Mindig csak egyirányú (simplex) csatornát foglal le", jo: true },
                { valasz: "Csak pont-pont kommunikációra alkalmas", jo: false },
                { valasz: "Feltétlenül megköveteli az erõforrások használat utáni felszabadítását", jo: false, megjegyzes: "mert az igények elhalnak " }
              ]
            },
            { kerdes: "Használnak-e bármilyen feljegyzést (állapotnyilvántartást) az összeköttetés mentes csomagkapcsolt hálózat csomópontjai?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Nem használnak mert nincs rá szükségük, hiszen minden csomagot az elõzõktõl függetlenül kezelnek", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Természetesen használnak, mert csak így képesek a hozzájuk érkezõ csomagok értelmes továbbítására", jo: false }
              ]
            },
            { kerdes: "Hogyan mûködik a Label Switching Router (LSR)?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Teljesen megegyezõen a hagyományos routerrel, de gyorsabban", jo: false },
                { valasz: "Lényegében úgy, mint az adatkapcsolati rétegben mûködõ \"kapcsolók\"", jo: true }
              ]
            },
            { kerdes: "Mi volt az egyik legfontosabb ösztönzõje az MPLS kidolgozásának?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A hatékonyság növelése az IP routerekben", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Összekapcsolni a különbözõ hálózati protokollokat", jo: false }
              ]
            },
            { kerdes: "Milyen alkalmazás-fajtákat ismer el, és azokat hogyan szolgálja ki az !IntServ módszer?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Real-time tolerant alkalmazás &#8594; Controlled Load Service", jo: true },
                { valasz: "Real-time intolerant alkalmazás &#8594; Best Effort Service", jo: false },
                { valasz: "Elasztikus alkalmazások &#8594; Guaranted Quality Service", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Melyek a címkekiosztás legfontosabb szabályai az MPLS-ben?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A címkekiosztás a \"kilépõ\" routertõl indul", jo: true },
                { valasz: "A címkekiosztás csak úgynevezett explicit módon történhet a !QoS szempontjai alapján", jo: false },
                { valasz: "Lényegében nincs is ilyen szabály", jo: false },
                { valasz: "A címkekiosztás történhet a csomópontok által lépésenként", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Milyen elemek szolgálják az MPLS megvalósítását?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A címke-kijelölést irányító protokoll", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "LSR-ek és LER-ek", jo: true },
                { valasz: "Címke-kapcsolt utak", jo: true }
              ]
            },
            { kerdes: "Milyen módon biztosít igény szerinti kiszolgálást az összeköttetés alapú csomagkapcsolás (pl ATM)?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Az egyedileg egyeztetett igények részére erõforrásokat foglal, és a foglalható erõforrások \"kimerülése\" esetén visszautasítja az igényeket", jo: false },
                { valasz: "Csak olyan igényeket szolgál ki, amelyek azonos követelményeket támasztanak", jo: false },
                { valasz: "Úgynevezett beengedésszabályozást végez.", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Milyen elemei vannak a forgalomleírásnak az !IntServ módszerben?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Az elfogadható legnagyobb vödörméret", jo: true },
                { valasz: "A szükséges legkisebb token-rate", jo: false },
                { valasz: "Két eleme (két csoport), az egyik a forgalomspecifikáció, a másik az igény megadása", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Melyik NEM a !DiffServ módszer elõnyös tulajdonsága?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Biztosítja a végpontok közötti !QoS-t", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Nem igényel jelzést valamennyi csomóponton", jo: false },
                { valasz: "Megszünteti a gerinchálózati csomópontokon a csomagfolyamonkénti állapotnyilvántartást", jo: false },
                { valasz: "A sok munkát igénylõ feladatokat a hálózat peremére helyezi", jo: false }
              ]
            },
            { kerdes: "Ma mit tekinthetünk az elsõ ötletnek, amely végül elvezetett az MPLS-hez, és melyik cégek javaslatai alapján kezdõdött meg a szabványosítás?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Az elsõ ötlet a Cisco Tag Switching-je volt, a szabványosítás pedig a Toshiba és az IBM javaslata alapján kezdõdött", jo: false },
                { valasz: "Egyik válasz sem jó", jo: true },
                { valasz: "Az elsõ ötlet az Ipsilon IP Switching-je volt, a szabványosítás pedig a Toshiba, a Cisco és az IBM javaslata alapján kezdõdött", jo: false }
              ]
            },
            { kerdes: "A hálózat melyik részén és kinek a hatáskörében kell kitölteni a TOS/Traffic Class mezõket a !DiffServ módszer esetén?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Ezeket a szolgáltató felügyelete alatt a !DiffServ szolgáltatási határán kell kitölteni", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Ezeket a felhasználónak kell kitölteni, aki nyilván a hálózat peremén van", jo: false },
                { valasz: "Ezeket a szolgáltatónak kell kitölteni, aki a hálózat hozzáférési- és gerinc részének a határán van", jo: false }
              ]
            },
            { kerdes: "Melyek az MPLS alapvetõ jellemzõi?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Módszert biztosít a globálisan egyedi címeknek fix hosszúságú címkékre történõ leképezésére", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Módszereket ad a különféle agregáltságú csomagfolyamok kezelésére", jo: true },
                { valasz: "Függetlenül mûködik a 2. és 3. rétegbeli protokolloktól", jo: true }
              ]
            },
            { kerdes: "Milyen alapvetõ csomóponti viselkedéseket határoz meg a !DiffServ?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Guaranted Quality Service", jo: false },
                { valasz: "Assured Forwarding", jo: true },
                { valasz: "Best Effort", jo: false },
                { valasz: "Controlled Load Service", jo: false },
                { valasz: "Expedited Forwarding", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Milyen kiszolgálást igényel az információtovábbító hálózattól az úgynevezett rideg, merev, intoleráns alkalmazás?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "A legfõbb hangsúlyt az átviteli késleltetés minimumának garantálására helyezi", jo: true },
                { valasz: "Rendszerint nem érdekli az átviteli sebesség, csak a hibátlan átvitelt tekinti fontosnak", jo: false }
              ]
            },
            { kerdes: "Mi a szerepe a Token Bucket-nek az !IntServ módszerben?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Kizárólag a forgalom leírására használjuk", jo: false },
                { valasz: "Kizárólag a forgalom ellenõrzésére használjuk", jo: false },
                { valasz: "Egyik válasz sem jó", jo: true },
                { valasz: "Kizárólag az iények megadására használjuk", jo: false }
              ]
            },
            { kerdes: "Milyen követelményeket támaszt az információ-továbbítási kiszolgálással szemben az úgynevezett elasztikus alkalmazás (az általa keltett forgalom)?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Érzékeny a késleltetés ingadozására", jo: false },
                { valasz: "Jól elviseli a néhány %-os csomagvesztést", jo: false },
                { valasz: "Egyik válasz sem jó", jo: true },
                { valasz: "Nem érzékeny kis mennyiségû hibára", jo: false }
              ]
            },
            { kerdes: "Mit értenek azon, hogy a !DiffServ a !QoS biztosításának \"durva felbontású\" módszere?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Ez azt jelenti, hogy nem foglalkozik egyedi igényekkel, hanem az azonos kiszolgálási minõséget igénylõ forgalmat (függetlenül eredetétõl és céljától) együttesen kezeli", jo: true },
                { valasz: "Ezalatt azt értik, hogy csak kétféle kiszolgálási igényt biztosít: egyik a regular, a másik a premium", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Milyen alkalmazás-fajtákat ismer el, és azokat hogyan szolgálja ki az !IntServ módszer?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Elasztikus alkalmazások &#8594; Guaranted Quality Service", jo: false },
                { valasz: "Real-time tolerant alkalmazás &#8594; Controlled Load Service", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Real-time intolerant alkalmazás &#8594; Best Effort Service", jo: false }
              ]
            },
            { kerdes: "Mi tekinthetõ a garantált szolgáltatási minõség biztosításához szükséges hálózati tevékenységek közül a leginkább erõforrás-igényesnek?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A hálózatban fellépõ túlzott forgalom esetén az igények visszautasítása", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "A hálózati csomópontokban végzendõ állapotnyilvántartás", jo: true },
                { valasz: "A felhasználók kiszolgálási igényeinek bejelentésére használt jelzések továbbítása", jo: false }
              ]
            },
            { kerdes: "Melyek a lényeges elõnyei az MPLS-ben követett csomagtovábbításnak?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Az LER-ek a FEC-be sorolásnál a cél-címen kívüli szempontokat, jellemzõket is figyelembe vehetnek", jo: true },
                { valasz: "Azonos jellemzõkkel rendelkezõ csomagokat eltérõ módon sorolhatják FEC-ekbe a különbözõ LER-ek", jo: true },
                { valasz: "Az LSR-eknek nem kell túlzott képességekkel rendelkezniük", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Feladóként meghatározhatjuk a csomag útvonalát, ha a szükséges információt a csomag magával viszi a hálózaton keresztül", jo: false }
              ]
            },
            { kerdes: "Mire utal az MPLS-ben a Multi Protocol elnevezés?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Csupán azt hangsúlyozza, hogy az MPLS megvalósítási szabálya több protokollban van lerögzítve", jo: false },
                { valasz: "Valójában arra utal, hogy a módszer többféle hálózati- és adatkapcsolati protokoll esetén is használható", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Hol helyezhet&#245;k el a címkék az MPLS szerint?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Bárhová, ahol helyet találunk neki, csak egyeztetni kell a csomópontokkal", jo: false },
                { valasz: "Kizárólag az adatkapcsolati fej megfelel&#245; mez&#245;jébe", jo: false },
                { valasz: "Kizárólag az adatkapcsolati fej és a hálózati fej közé", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false }
              ]
            },
            { kerdes: "Milyen lehet&#245;ség van az MPLS-ben a címkék kiosztására?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Kizárólag a Label Distribution Protocol használható erre a célra", jo: false },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "A szolgáltatónak kell kidolgozni erre vonatkozó módszert", jo: false },
                { valasz: "A routing protokollok kiegészítéseként lehet címkeszétosztást megvalósítani", jo: true }
              ]
            },
            { kerdes: "Melyek a legfontosabb meghatározói az igényelt kiszolgálási min&#245;ségeknek?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "?? A továbbítandó információ elviseli-e a továbbítás során keletkez&#245; késleltetést, késleltetés-ingadozást, keletkez&#245; hibákat, vagy pedig ezek bekövetkezése használhatatlanná teszi az úgy-ahogy továbbított információt", jo: true },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "?? Az, hogy az alkalmazás valódi id&#245;ben lejátszódó jelenségek információját kezeli és akarja továbbítani vagy tárolt információ továbbítása a cél", jo: true }
              ]
            },
            { kerdes: "Milyen módokon tehetünk kísérletet a Best Effortnál jobb kiszolgálási minõség megvalósítására összeköttetésmentes csomagkommunikáció esetén?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A felhasználó közelében (a hálózat peremén) közelítjük az összeköttetés-alapú kommunikációt, és a belsejében (gerinc) pedig már csak forgalmi osztályokkal foglalkozunk", jo: true, megjegyzes: "Edge router ellenõriz, Core router csak a DSCP-t nézi és végzi a PHB-t" },
                { valasz: "Egyik válasz sem jó", jo: false },
                { valasz: "Megkíséreljük \"leutánozni\" az összeköttetés-alapú csomagkommunikációt", jo: true, megjegyzes: "MPLS" },
                { valasz: "Erre nincs semmilyen lehet&#245;ség, mert összeköttetésmentes hálózati protokoll esetén semmilyen garancia sem adható a kiszolgálásra", jo: false }
              ]
            },
            { kerdes: "Mi történhet a csomaggal a hálózatban a !DiffServ módszer szerint, ha az edge router a csomagot az osztálybasorolás mellett non-konform-nak jelölte?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Az összes ilyen csomagokat kivétel nélkül az elõírásnak megfelelõen eldobja az ellenõrzõ", jo: false },
                { valasz: "Az ilyen csomagokat drágábban juttatja célba a hálózat", jo: false },
                { valasz: "Az összes ilyen csomagokat kivétel nélkül az elõírásnak megfelelõen átütemezi egy forgalom-formáló (shaper)", jo: false },
                { valasz: "Egyik válasz sem jó", jo: true }
              ],
			  megjegyzes: "Valószínûleg egyik se, mert a kivétel nélkül így ellentmondás, vagy eldobja vagy formálja."
            }
         ];
