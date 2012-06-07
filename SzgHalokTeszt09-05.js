        var tesztFeladatok = [
            { kerdes: "Teljes�tm�nykorl�tok megad�sa, vagyis kiszolg�l�si garancia r�gz�t�se csak determinisztikusan lehet �rtelmes, mert semmi haszna azt ler�gz�teni, hogy valamilyen kiszolg�l�si jellemz� milyen val�sz�n�s�ggel teljes�l.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Hogyan k�zli az IPv4 a hasznos teher (payload) m�ret�t?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Csak k�zvetve.", jo: true },
                { valasz: "Egy�ltal�n nem k�zli", jo: false },
                { valasz: "A Payload Length mez�ben, 32 bites egys�gekben", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ]
            },
            { kerdes: "Mi a jellemz�je a max-min igazs�gos er�forr�s-megoszt�snak?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "A jogosults�guk felett k�r�k nem kapnak semmit", jo: false },
                { valasz: "Akkor l�p \"m�k�d�sbe\", ha az ig�nyek t�ll�pik a lehet�s�geket", jo: true },
                { valasz: "Mindazok, akik a jogosults�guk alatti kiszolg�l�st k�rnek, megkapj�k a teljes kiszolg�l�st", jo: true }
              ]
            },
            { kerdes: "Minimum milyen hossz� (h�ny b�jt) az IPv4 PDU fejr�sz�nek a m�rete?",
              tipus: "valaszolos",
              valasz: "20"
            },
            { kerdes: "Mit nevez�nk alap�rtelmezett �tvonalnak vagy alap�rtelmezett �tj�r�nak?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Errefel� mindegyik csomagot el kell k�ldeni", jo: false },
                { valasz: "Egyik v�lasz sem j�.", jo: true },
                { valasz: "El�sz�r erre kell megk�s�relni a csomag tov�bb�t�s�t", jo: false }
              ]
            },
            { kerdes: "Mi�rt nem lehet minden esetben egyetlen adatkapcsolati keretben tov�bb�tani egy IP csomagot?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Mert az adatkapcsolati protokollok �ltal�ban nem engednek meg akkora adatmennyis�get a keretben, mint amekkora egy IP csomag lehet", jo: true, megjegyzes: "pl.: Ethernet max 1500" },
                { valasz: "Mert gyorsabban �r c�lba, ha kisebb r�szekre t�rdelve tov�bb�tjuk", jo: false },
                { valasz: "Mert biztons�gosabb, ha r�szekben tov�bb�tjuk", jo: false },
                { valasz: "Egyik felsorolt v�lasz sem j�", jo: false },
                { valasz: "Mert ez jav�tja a csatorna kihaszn�lts�g�t", jo: false }
              ]
            },
            { kerdes: "Hogyan csoportos�that�k az inform�ci�tov�bb�t� h�l�zatokban a kiszolg�l�ssal szemben t�masztott ig�nyek?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Az �sszes ig�ny mindig azonnali kiszolg�l�sra t�rekszik", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: true },
                { valasz: "Valamennyi ig�ny egyform�n csak kiszolg�l�st akar", jo: false },
                { valasz: "Az �sszes ig�ny a hibamentes �tvitelt tartja a legfontosabbnak", jo: false },
                { valasz: "Bizonyos ig�nyek annak �r�lnek, ha ki sem szolg�lj�k �ket", jo: false }
              ]
            },
            { kerdes: "Mi jelent�se �s a szerepe a TTL mez�nek?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Megmondja, hogy mikorra kell a csomagnak c�lba �rni", jo: false },
                { valasz: "A csomagok �lettartam�t korl�tozza", jo: true, megjegyzes: "Time to live - http://hu.wikipedia.org/wiki/Time_To_Live" },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Megmondja, hogy a csomagot mikor ind�totta �tj�ra a felad�", jo: false }
              ]
            },
            { kerdes: "Mit tekinthet�nk a TCP/IP protokollarchitekt�ra legfontosabb elt�r�seinek az ISO-OSI modellt�l?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Nem rendelkezik az adatkapcsolati �s a fizikai r�tegekr�l, csak a csatlakoz�st (interf�sz) �rja el� a fontos adatkapcsolati protokollokhoz.", jo: true },
                { valasz: "Nem v�lasztja sz�t az alkalmaz�si r�tegt�l a megjelen�t�si �s a viszony r�tegeket.", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ]
            },
            { kerdes: "Milyen jellemz�kkel teljes�ti az IP a f� funkci�it?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A csomagtov�bb�t�st a lehet� legjobb sz�nd�kkal (best effort jeleggel) hajtja v�gre.", jo: true },
                { valasz: "A csomagokat a k�ld�s�k sorrendj�ben juttatja a c�mzetthez", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Gondoskodik az elveszett csomagok megkeres�s�r�l", jo: false },
                { valasz: "�sszek�ttet�s-mentes csomagkapcsol�st val�s�t meg.", jo: true },
                { valasz: "A hib�s csomagokat kijav�tja", jo: false }
              ]
            },
            { kerdes: "Az IP fejr�sz Protocol nev� mez�je azt mondja meg, hogy milyen protokoll adategys�ge t�lti meg az IP csomag payload-j�t.",
              tipus: "igazhamis",
              valasz: true
            },
            { kerdes: "Mi�rt kell az IP fejl�c Header Checksum mez�j�nek a tartalm�t minden tov�bb�t�si l�p�sben �jrasz�molni?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Mert a fejl�cben esetleg megv�ltoztatunk valamit a tov�bb�t�s sor�n.", jo: true },
                { valasz: "Egy�ltal�n nem kell, s�t hib�t okozhat", jo: false },
                { valasz: "Mert menetk�zben a csomag s�r�lhetett", jo: false },
                { valasz: "Csup�n biztons�gi okb�l, hogy friss�ts�k a biteket", jo: false }
              ]
            },
            { kerdes: "Az IP �ltal meghat�rozott m�don a 32 bites c�mekkel t�bb mint n�gymilli�rd h�l�zati v�gz�d�s azonos�that�.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Mikor l�p fel �temez�si feladat?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Ha az egyik ig�nyt sem akarjuk el�nyben r�szes�teni", jo: false },
                { valasz: "Ha hosszabb id�re �tlagolva sem tudja az er�forr�s a feladatot ell�tni", jo: false },
                { valasz: "Ha egy osztott haszn�lat� er�forr�sra id�nk�nt t�l sok ig�ny jelentkezik", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ]
            },
            { kerdes: "Mire utal a \"forr� krumpli\" (hot potato) m�dszernek a neve csomagtov�bb�t�sban?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A forr� krumpli �get, teh�t meg kell v�rniu, am�g kih�l", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "A forr� krumplit a legjobb, ha gyorsan tov�bb dobjuk.", jo: true }
              ]
            },
            { kerdes: "Hogyan k�zli az IPv4 a hasznos teher (payload) m�ret�t?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egy�ltal�n nem k�zli", jo: false },
                { valasz: "Csak k�zvetve", jo: true },
                { valasz: "A Payload Length mez�ben, 32 bites egys�gekben", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ]
            },
            { kerdes: "A \"nem-munka-meg�rz�\" �temez�s csak elvi lehet�s�g, val�j�ban semmi �rtelme egy ig�nyt v�rakoztatni, amikor lehet�s�g van a kiszolg�l�s�ra.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Mit tesz egy IP router, ha a t�rdel�s Flags mez�j�nek m�sodik bitj�ben (DF bit) 1-es �rt�ket tal�l?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Ha az MF bit is 1-es, akkor t�rdeli a csomagot", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: true },
                { valasz: "Mindenk�ppen t�rdel�s n�lk�l tov�bb�tja", jo: false },
                { valasz: "Feljegyzi, hogy ki k�ldte a csomagot", jo: false }
              ]
            },
            { kerdes: "Mi a CIDR alkalmaz�s�nak legf�bb c�lja?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Ne kelljen figyelni a c�mek elej�n l�v� prefixre", jo: false },
                { valasz: "A c�mtartom�ny n�vel�se", jo: false },
                { valasz: "A c�mtartom�ny kihaszn�l�s�nak jav�t�sa.", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ]
            },
            { kerdes: "Az Internet Protocol a h�l�zati v�gpontok azonos�t�s�ra NEM hierarchikus c�meket haszn�l",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Mit azonos�t az IP fejr�sz �t�dik (Identification) mez�je?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A k�ld� programot", jo: false },
                { valasz: "Nincs ilyen mez�", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Az IP csomag t�red�ksz�m�t", jo: true },
                { valasz: "A c�mzettet", jo: false }
              ]
            },
            { kerdes: "Az IP fejl�c hetedik (Fragment Offset) mez�je megmondja, hogy hov� cs�szott el a t�red�k az eredeti hely�r�l",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Mekkora egys�gekben v�ltozhat az IP PDU fejr�sz�nek m�rete?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "F�l b�jtokban", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: true, megjegyzes: "32 bites szavakban" },
                { valasz: "16 bites szavakban", jo: false },
                { valasz: "Oktettekben", jo: false },
                { valasz: "B�jtokban", jo: false }
              ]
            },
            { kerdes: "Mikor besz�l�nk statisztikus nyeres�gr�l?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Ha szerencsej�t�kban t�bbsz�r nyer�nk, mint veszt�nk", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: true, megjegyzes: "ha az er�forr�st az ig�nyek cs�cs�rt�ke helyett kb. az �tlagos �rt�kre m�retezz�k" },
                { valasz: "Ha az er�forr�st az ig�nyek cs�cs�rt�ke helyett annak a fel�re m�retezz�k", jo: false }
              ]
            },
            { kerdes: "Mit jelent tartalm�ban a Classless Inter-Domain Routing?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Oszt�lyn�lk�li tartom�nyk�zi �tv�laszt�s", jo: false },
                { valasz: "Az A, B �s C oszt�ly� c�mek merev !NetID/HostID oszt�s�nak megsz�ntet�s�t", jo: true, megjegyzes: "az Oszt�lyn�lk�li tartom�nyk�zi �tv�laszt�s nem tartalm�ban jelenti ezt...de �zl�s szerint v�ltozhat" },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ]
            },
            { kerdes: "Milyen �sszetev�ket alkalmaz a feladat�temez�si m�dszer c�ljai el�r�s�re?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Meghat�rozza a kiszolg�l�sra jogosultak k�r�t", jo: true, megjegyzes: "implicit benne van a di�kban, de nem egy�rtelm�, mert a jogosults�g k�rd�se nem teljesen ez a feladatk�r" },
                { valasz: "Meghat�rozza a kiszolg�l�sb�l kies�ket tel�tett er�forr�s eset�n", jo: true },
                { valasz: "Meghat�rozza a kiszolg�l�s�rt fizetend� d�jakat", jo: false },
                { valasz: "Meghat�rozza a kiszolg�l�si sorrendet", jo: true }
              ]
            },
            { kerdes: "Mely er�forr�sok ir�nti t�lzott ig�ny miatt van sz�ks�g feladat�temez�sre az inform�ci�tov�bb�t� h�l�zatokban?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A jel�tviteli �sszek�ttet�sek (linkek) �tviteli k�pess�ge miatt", jo: true },
                { valasz: "A csom�pontok elhelyezked�se miatt", jo: false },
                { valasz: "Els�sorban az emberi er�forr�sok miatt", jo: false },
                { valasz: "A csom�pontok v�ges t�rol�k�pess�ge miatt", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ]
            },
            { kerdes: "Mi a funkci�ja az IP-nek az al�bbiak k�z�l?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egyik felsorolt v�lasz sem j�", jo: false },
                { valasz: "A h�l�zati csom�pontokon a c�l ir�ny�ba tov�bb�tja a csomagokat.", jo: true },
                { valasz: "C�mz�st biztos�t a h�l�zati v�gpontok azonos�t�s�ra.", jo: true },
                { valasz: "Gondoskodik az adatkapcsolati keretek m�ret�t meghalad� csomagok kezel�s�r�l.", jo: true }
              ]
            },
            { kerdes: "Van-e l�nyegi (alapvet�) k�l�nbs�g a csomagtov�bb�t�sban, ha a c�lh�l�zat k�zvetlen�l csatlakozik a csomagot tov�bb�t� csom�ponthoz, illetve, ha a c�lh�l�zat t�voli?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Nincs, mert mindk�t esetben a k�vetkez� (esetleg v�gpont) adatkapcsolati c�m�vel ell�tott keretbe kell helyezni a tov�bb�tand� csomagot, �s a megfelel� porton kereszt�l tov�bb�tani.", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Igen, mert az ut�bbi esetben a csomagot a k�vetkez� csom�pont IP c�m�vel ell�tva kell tov�bb�tani", jo: false }
              ]
            },
            { kerdes: "Hogyan val�s�tja meg a WFQ az �ltal�nos er�forr�s-megoszt�s (GPS) elv�t?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: true, megjegyzes: "az�rt, mert a WFQ a GPS szerinti kiszolg�l�s�nak a v�g�t sz�molja ki..." },
                { valasz: "Kisz�m�tja a csomagok kiszolg�l�s�nak a GPS szerinti kezdet�t, �s annak sorrendj�ben val�s�tja meg a kiszolg�l�st", jo: false },
                { valasz: "A kiszolg�l�si sorrendet a csomagok hossza szerint �llap�tja meg", jo: false }
              ]
            },
            { kerdes: "Mi az MTU?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: true, megjegyzes: "Maximum Transmission Unit" },
                { valasz: "Minimum Transmission Unit", jo: false },
                { valasz: "Mean-Time Utilization", jo: false },
                { valasz: "Music Television Underground", jo: false }
              ]
            },
            { kerdes: "Milyen v�laszt�si lehet�s�geink (szabads�gi fok) vannak az �temez�si m�dszerek tervez�s�n�l?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Az egyes szinteken bel�l betartjuk-e a meg�rz�si t�rv�nyt (conservation law)", jo: false },
                { valasz: "Milyen kiszolg�l�si sorrendet k�vet�nk az egyes szinteken bel�l", jo: true },
                { valasz: "H�ny k�l�nb�z� priorit�si szinten kezelj�k az ig�nyeket", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Az egyes szinteken bel�l milyen m�rt�kben vonjuk �ssze (aggreg�ljuk) az ig�nyeket", jo: true }
              ]
            },
            { kerdes: "Milyen kateg�ri�j� IPv4 c�mek vannak?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Felhaszn�l�i csoportot biztos�t� azonos�t� (multicast).", jo: true },
                { valasz: "Egyik felsorolt v�lasz sem j�", jo: false },
                { valasz: "Az �sszes (al)h�l�zatot azonos�t�", jo: false },
                { valasz: "Egyedi h�l�zati csatlakoz�st azonos�t� (unicast).", jo: true }
              ]
            },
            { kerdes: "Mi a szerepe az ARP-nek?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Egy adatkapcsolati c�mhez tartoz� IP c�met lehet vele lek�rdeznia RARP szervert�l", jo: false },
                { valasz: "Meghat�rozza, hogy milyen �zenetv�lt�ssal kell megtudni egy adott IP c�mmel rendelkez� csatlakoz�si ponton l�v� eszk�z adatkapcsolati azonos�t�j�t (fizikai c�m�t, MAC c�m�t)", jo: true },
                { valasz: "Lehet�v� teszi egy IP c�mmel nem rendelkez� v�gk�sz�l�knek, hogy IP c�met szerezzen egy szervert�l", jo: false }
              ]
            },
            { kerdes: "A csom�pontok milyen inform�ci�(k) alapj�n v�gzik a csomagtov�bb�t�st?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "A kimen� porton haszn�lt adatkapcsolati protokoll keretm�rete alapj�n.", jo: true },
                { valasz: "A tov�bb�tand� csomag kiszolg�l�si ig�nyei alapj�n.", jo: true },
                { valasz: "A csomag Payload mez�je alapj�n", jo: false },
                { valasz: "A tov�bb�tand� csomag c�lc�m�nek h�l�zatazonos�t� r�sze alapj�n.", jo: true },
                { valasz: "A csom�pont �tvonalt�bl�j�nak bejegyz�sei alapj�n.", jo: true }
              ]
            },
            { kerdes: "Melyik PDU-knak (protokoll�zenetek) a v�gpontok k�z�tti tov�bb�t�s�t k�pes az IP elv�gezni?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Csak az ARP PDU-k�t", jo: false },
                { valasz: "Csak az IP PDU-k�t.", jo: true },
                { valasz: "Az IP �s FPE PDU-k�t", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Csak az ICMP PDU-k�t", jo: false }
              ]
            },
            { kerdes: "H�ny b�jt adat (payload) lehet maximum egy IP csomagban?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "1500", jo: false },
                { valasz: "Egyik sem j�", jo: true, megjegyzes: "mert (2^13-1)�8=65528 > 65515  bajt max (jegyzet alapj�n j�v�tottam)" },
                { valasz: "2^16-1", jo: false }
              ]
            },
            { kerdes: "Mit csin�l egy IPv4 router, ha akkora t�red�kekben �rkezik hozz� egy csomag, amelyek kicsit nagyobbak, mint a kimen� porton haszn�lt adatkapcsolati keret payloadj�nak m�rete?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: true, megjegyzes: "t�rdeli, ha lehet, de soha nem illeszti �ssze, ezt csak a c�mzett v�gezheti el" },
                { valasz: "�sszerakja a t�red�keket az eredeti csomagg�, �s �jrat�rdeli a megfelel� m�retre.", jo: false },
				{ valasz: "Eldobja a csomagot, mert t�red�keket nem szabad tov�bb t�rdelni", jo: false },
				{ valasz: "Megn�veli az adatkapcsolati r�teg payloadj�nak m�ret�t.", jo: false }
              ],
            }
         ];
