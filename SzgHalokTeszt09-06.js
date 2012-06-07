        var tesztFeladatok = [
            { kerdes: "Az al�bbiak k�z�l melyik igaz a h�romsz�g route-ol�sra?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Route Optimization alkalmaz�s�val elker�lhet�.", jo: true },
                { valasz: "IPv6-ban elker�lhetetlen", jo: false },
                { valasz: "Felold�sa a fix �llom�sok kooper�ci�j�t ig�nyli", jo: true, megjegyzes: "Mert a HA-nak kell a k�ld�t egy Binding Update (BU) �zenettel �rtes�tenie a mobil CoA? c�m�r�l" },
                { valasz: "A t�bbi megadott v�lasz k�z�l egyik sem helyes", jo: false },
                { valasz: "IPv4-ben elker�lhetetlen", jo: false }
              ]
            },
            { kerdes: "Mi�rt sz�ks�ges az IP kieg�sz�t�se a mobilit�st biztos�t� m�dszerrel?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "Hogy ne kelljen ideiglenes IP c�met kiosztani egy h�l�zatot megl�togat� v�ndorl� termin�lnak", jo: false },
                { valasz: "Hogy a v�ndorl� (nom�d) termin�lok el�rhet�k legyenek egy �lland� c�men.", jo: true }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely c�m(ek) lehet(nek) formailag IPv6-os c�m(ek)? ",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "ABCD:EFGH:0123:4567:8910:1112:1314:1516", jo: false },
                { valasz: "1234::5678:9ABC::EF01", jo: false },
                { valasz: "Egyik megadott IPv6 c�m sem helyes", jo: false },
                { valasz: "::A:B:C:D", jo: true }
              ]
            },
            { kerdes: "Milyen alagutaz�s (tunnelling) lehets�ges IPv4-IPv6 vegyes h�l�zatban?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Csak IPv6-ba �gyazott IPv4, mert az IPv6 funkci�kban gazdagabb, �gy IPv4 felett nem vihet� �t", jo: false },
                { valasz: "Csak IPv4-be �gyazott IPv6, mert az IPv4 eszk�z�k csak ez tudj�k", jo: false },
                { valasz: "IPv6 IPv4-be �gyazva, illetve IPv4 IPv6-ba �gyazva is lehets�ges.", jo: true }
              ]
            },
            { kerdes: "Mi�rt nincsen sz�ks�g ellen�rz��sszegre az IPv6 fejl�c�ben?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "De van sz�ks�g", jo: false },
                { valasz: "Mert kicsi a hiba val�sz�n�s�ge", jo: true },
                { valasz: "Mert a fejl�c m�rete nem v�ltozik", jo: false },
                { valasz: "Mert nem t�rdel�nk a k�zbens� csom�pontokban", jo: false }
              ]
            },
            { kerdes: "Mik azok az �j�t�sok az IPv6 csomag fejr�sz�ben amelyek az IPv4 fejr�szben semmilyen form�ban nem szerepeltek?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A Flow Label, azaz a folyam azonos�t� c�mke bevezet�se.", jo: true },
                { valasz: "A Traffic Class, azaz a forgalmi oszt�ly mez� alkalmaz�sa", jo: false },
                { valasz: "A Hop Limit mez� haszn�lata", jo: false },
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false }
              ]
            },
            { kerdes: "Mi a szerepe az IPv6 anycast c�m�nek?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: true, megjegyzes: "Csoportot azonos�t, �gy biztos�tott, hogy a csoport EGY csom�pontja megkapja az erre a c�mre k�ld�tt �zenetet" },
                { valasz: "�gy az \"�rdekl�d�\" v�laszthatja ki, hogy kell-e neki valamely csomag", jo: false },
                { valasz: "�gy nem kell eldobni csomagokat, mert valahov� minden csomagot el lehet juttatni", jo: false }
              ]
            },
            { kerdes: "Milyen nagys�grend� hozz�f�r�si pont v�lt�si sebess�get kezel m�g elfogadhat�an a !MobilIP?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "1-2 v�lt�s / m�sodperc", jo: true },
                { valasz: "1-2 v�t�s / perc", jo: false },
                { valasz: "1-2 v�lt�s / �ra", jo: false },
                { valasz: "Tetsz�s szerinti gyors helyv�ltoztat�sra", jo: false },
                { valasz: "1-2 v�lt�s / mikroszekundum", jo: false }
              ]
            },
            { kerdes: "Mely �ll�t�s igaz az a Binding List-re?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Ebb�l tudja a mobil �llom�s, kinek kell Binding Update �zeneteket k�ldeni", jo: true, megjegyzes: "kutfo.hit.bme.hu/oktatas/MOBILIP.pdf alapj�n ez igaz: idegen h�l�zat v�lt�skor a Binding List alapj�n t�j�koztatja a Mobile Node a vele kommunik�l� eszk�z�ket, hogy �j IP c�met kapott" },
                { valasz: "Ebb�l a list�b�l v�laszja az idegen �gyn�k (Foreign Agent) a lehets�ges Care-of c�meket", jo: false },
                { valasz: "Az otthoni �gyn�k (Home Agent) ebben t�rolja a mobil �llom�s pillanatnyi care-of c�m�t", jo: false }
              ]
            },
            { kerdes: "Honnan lehet tudni, hogy hol van a hasznos teher, �s melyik protokoll adategys�g�t tartalmazza, ha kieg�sz�t� fejr�szt helyez�nk az IPv6 csomagba?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Ezt nem lehet tudni, ez�rt ekkor nem sz�ll�t hasznos terhet a csomag", jo: false },
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: true, megjegyzes: "A Next Header mez�b�l" },
                { valasz: "Ezt �gy oldott�k meg, hogy az el�z� csomagban k�zlik a k�rd�ses inform�ci�t, amit a Flow Label azonos�that�v� tesz", jo: false },
                { valasz: "A fejl�c Protocol mez�j�b�l mindez kider�l", jo: false }
              ]
            },
            { kerdes: "Milyen c�lt szolg�l a Path MTU Discovery?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A v�gpont-v�gpont �tlagos k�sleltet�s felder�t�se az adott v�gpont fel�", jo: false },
                { valasz: "Nem l�tezik ilyen", jo: false },
                { valasz: "A leghosszabb t�rdeletlen�l �tvihet� csomag m�ret�nek felder�t�se az adott v�gpont fel�", jo: true, megjegyzes: "http://www.szabilinux.hu/trendek/trendek71.html - Alulr�l a 3. bekezd�s" }
              ]
            },
            { kerdes: "Milyen m�don k�pzelhet� el az �tt�r�s az IPv4-r�l az IPv6-ra?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Kijel�lt id�pontban a felk�sz�tett csom�pontok �s v�gpontok befejezik a r�gi �s megkezdik az �j protokoll haszn�lat�t", jo: false },
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "Mind a csom�pontok, mind a v�gpontok mindk�t protokoll haszn�lat�ra felk�sz�lnek �s szinte bel�thatatlan ideig egy�tt fog �lni a kett�.", jo: true }
              ]
            },
            { kerdes: "H�ny r�szt (mez�t) hat�roztak meg az aggreg�lhat� egyedi c�mekben az IPv6 eset�n? (sz�mmal adja meg!)",
              tipus: "valaszolos",
              valasz: "6"
            },
            { kerdes: "Az al�bbiak k�z�l mely �ll�t�sok igazak az IPv4 !MobileIP-re",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egy �llom�s a mobil �llom�st az otthoni c�m�n (Home Address) �rheti el.", jo: true, megjegyzes: "(Nem csak ott, ha route optimizationt haszn�lunk. Ott biztos el�rheti, de nekem nem egy�rtelm� hogy most arra r�k�rdeznek-e hogy csak ott." },
                { valasz: "K�telez� a Route Optimization", jo: false },
                { valasz: "Automatikusan elker�li a h�romsz�g route-ol�st", jo: false },
                { valasz: "A t�bbi megadott v�lasz k�z�l egyik sem helyes", jo: false }
              ]
            },
            { kerdes: "Mivel lehetett az IPv4 c�mtartom�ny�nak kimer�l�s�t elod�zni az al�biak k�z�l?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Subnetting", jo: true },
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "A kiosztott c�mek haszn�lat�nak korl�toz�s�val", jo: false },
                { valasz: "CIDR", jo: true },
                { valasz: "Priv�t IP-c�m tartom�nyok haszn�lata.", jo: true }
              ]
            },
            { kerdes: "Honnan tudja a Mobil IP otthoni �gyn�k, hogy hol tart�zkodik a mobil �llom�s (mobile node)?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Nem tudja", jo: false },
                { valasz: "A Location Directoryb�l", jo: false, megjegyzes: "Ilyen nem l�tezik :)" },
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: true, megjegyzes: "Ha a mobil node t�vol van, akkor regisztr�lnia kell a care-of [t�voli] c�m�t az otthoni �gyn�kn�l" },
                { valasz: "Lek�rzedi a mobil �llom�st", jo: false, megjegyzes: "Ha nem tudja hol van, hogy tudn� lek�rdezni?" }
              ]
            },
            { kerdes: "Adja meg a ::12:0:0:15 c�met teljes, r�vid�tetlen IPv6 c�m alakj�ban!",
              tipus: "valaszolos",
              valasz: "0000:0000:0000:0000:0012:0000:0000:0015"
            },
            { kerdes: "Honnan tudja meg a csomagot k�ld� v�gpont az IPv6-ban, hogy mekkora az �t ment�n a legnagyobb adatkapcsolati keret payload m�rete?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A kapcsolati r�teg ezt k�zli", jo: false },
                { valasz: "Be�ll�tja a csomagban a Dont Fragment bitet, �s a csom�pont erre v�laszk�nt megk�ldi az MTU �rt�k�t", jo: false },
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "A Path MTU Discovery protokoll haszn�lat�val.", jo: true }
              ]
            },
            { kerdes: "IPv4 !MobilIP eset�n mi lehet az ideiglenes c�me (Care-of Address) egy mobil termin�lnak a megl�togatott h�l�zatban?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Az idegen �gyn�k kioszt neki egy &#8211; a megl�togatott alh�l�zathoz tartoz� &#8211; c�met.", jo: true },
                { valasz: "Nem kap k�l�n Care-of Address c�met, hanem az idegen �gyn�k c�m�n �rik utol az otthoni c�m�re �rkez� csomagok.", jo: true },
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "Megegyezik az otthoni c�m�vel", jo: false }
              ]
            },
            { kerdes: "Mi�rt nem megoldhat� IPv4 !MobilIP eset�n, hogy a kezdem�nyez� �llom�snak a mobil �llom�s (mobile node) k�zvetlen�l v�laszoljon?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: true, megjegyzes: "megoldhat�, de nem minden esetben" },
                { valasz: "Mert m�s c�mr�l �rkezne a v�lasz, mint amire a kezdem�nyez� f�l sz�m�t", jo: false, megjegyzes: "Ha megkapja, akkor az otthoni IP c�mr�l kapja meg" },
                { valasz: "Mert meg kellene hamis�tani az mobil �llom�snak (mint felad�nak) az IP-c�m�t, s �gy e csomagok biztons�gi okokb�l nem ker�ln�nek tov�bb�t�sra.", jo: false },
                { valasz: "De megoldhat� - minden esetben", jo: false }
              ],
              megjegyzes: "IPv4 esetben a mobile node mindenk�pp az otthoni c�m�vel k�ldi el a csomagot (�gy meghamis�tva a k�ld� igazi IP c�m�t). Ezt a routerek �szrevehetik �s eldobhatj�k a csomagot. Mivel az otthoni IP c�mr�l pr�b�l k�ldeni, ez�rt ha a routerek �tengedik a csomagot, akkor a kezdem�nyez� arr�l az IP c�mr�l kapja meg a csomagot, amire sz�m�t [az otthonir�l]. IPv6 eset�n m�r minden esetben a care-of c�mr�l k�ldi a csomagot, �gy a routerek �tengedik, de a kezdem�nyez�nek a Binding Cache seg�ts�g�vel tudnia kell fogadni a care-of c�mr�l �rkez�, de home addressr�l v�rt csomag fogad�s�t."
            },
            { kerdes: "Mi�rt alkalmazz�k a Dont Fragment bitet az IPv6-ban?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Nehogy valamelyik router t�rdelje a csomagot", jo: false, megjegyzes: "Elvileg ez a j� v�lasz. 1 eset�n nem lehet t�rdelni a csomagot, 0 eset�n lehet" },
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: true, megjegyzes: "nincs is Don\'t fragment bit ipv6-ban, az ipv6 nem t�rdeli a csomagokat, csak a felad� �rdelheti" },
                { valasz: "�gy lehet megtudni, hogy mekkora az �t ment�n az MTU", jo: false }
              ],
              megjegyzes: "Eredetileg ez volt a helyes v�lasznak megjel�lve: \'�gy lehet megtudni, hogy mekkora az �t ment�n az MTU.\', DE IPv6 eset�n nincs Dont Fragment bit, IPv4 eset�n van csak."
            },
            { kerdes: "Mire j� az IPv6 fejl�c Flow Label mez�je?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "�ramk�rkapcsol�s hozhat� vele l�tre", jo: false },
                { valasz: "A t�bbi megadott v�lasz k�z�l egyik sem helyes", jo: false },
                { valasz: "QoS t�mogat�s�ra alkalmas.", jo: true }
              ]
            },
            { kerdes: "Hogyan oldja meg az IPv6, ha a csomagnak k�l�nleges kezel�st k�v�n a felad�ja?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "A k�telez� fejr�sz ut�n, a \"hasznos teher\" el� helyez�nk kieg�sz�t� fejet, amit a Next Header mez�ben \"megjel�l�nk\".", jo: true },
                { valasz: "A Next Header mez�ben lehet elhelyezni a k�l�nleges kezel�sre vonatkoz� inform�ci�t", jo: false },
                { valasz: "Erre nincs lehet�s�g, mert megsz�nt a fej hossz�nak opcion�lis v�ltoztat�sa", jo: false }
              ]
            },
            { kerdes: "Hogyan k�pezz�k a csatlakoz�si pont azonos�t�j�nak egyedi r�sz�t (host ID, interf�sz ID) az IPv6-ban, �s ott h�ny oktett (b�jt) hossz�?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A pillanatnyi d�tum alapj�n", jo: false },
                { valasz: "A MAC c�mb�l, �s 6 b�jt a hossza", jo: false },
                { valasz: "Az adatkapcsolati c�mb�l, �s nyolc oktett a hossza", jo: true, megjegyzes: "IPv6, 16.oldal alja" },
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false }
              ]
            },
            { kerdes: "Melyik c�mt�pus nem l�tezik IPv6-ban?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Broadcast", jo: true },
                { valasz: "Unicast", jo: false },
                { valasz: "Multicast", jo: false },
                { valasz: "Anycast", jo: false }
              ]
            },
            { kerdes: "Adja meg a lehet� legr�videbb form�ban az al�bbi IPv6-os c�met: FF01:0000:0020:0FEA:0000:0000:A50A:0001",
              tipus: "valaszolos",
              valasz: "FF01:0:20:FEA::A50A:1"
            },
            { kerdes: "Melyek a legf�bb egyszer�s�t�sek az IPv6 csomagtov�bb�t�s�ban?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Nem kell ellen�rz� �sszeget sz�molni a csomagfejre.", jo: true },
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "Nem kell t�rdelni a csomagokat a k�zbens� csom�pontokon.", jo: true },
                { valasz: "Nem kell ellen�rizni a csomag fejr�sz�nek a hossz�t.", jo: true }
              ]
            },
            { kerdes: "Milyen megold�s seg�ts�g�vel tov�bb�tja a Mobil IP otthoni �gyn�k az idegen �gyn�knek a csomagokat?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Nem tov�bb�t az otthoni �gyn�k egyetlen csomagot sem az idegen �gyn�knek", jo: false },
                { valasz: "Becsomagol�s (encapsulation) m�sn�ven alagutaz�s (tunelling) seg�ts�g�vel.", jo: true },
                { valasz: "H�l�zati c�mford�t�s (NAT) seg�ts�g�vel", jo: false },
                { valasz: "Csak IPv6 seg�s�g�vel", jo: false }
              ]
            },
            { kerdes: "A c�mtartom�ny h�nyadr�sz�t jel�lt�k ki az IPv6-ban egyedi (unicast) c�mek r�sz�re?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A fel�t", jo: false },
                { valasz: "A nyolcad r�sz�t", jo: true, megjegyzes: "els� 3 bitb�l der�l ki, ami csak 001 lehet a 8 lehet�s�gb�l" },
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "A tizenhatod r�sz�t", jo: false },
                { valasz: "A negyed r�sz�t", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ]
            },
            { kerdes: "Az IPv6 fejl�c�nek egyes r�szei hasonl� funkci�kat l�tnak el, mint az IPv4 bizonyos r�szei. Az al�bbiakban (IPv4 -> IPv6 alakban) megadott �sszerendel�sek k�z�l melyek helyesek?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Hop Limit -> TTL", jo: false, megjegyzes: "ugyan megegyezik, de IPv6 -> IPv4 alakban �rt�k" },
                { valasz: "A t�bbi megadott v�lasz k�z�l egyik sem helyes", jo: false },
                { valasz: "ToS -> Traffic Class", jo: true },
                { valasz: "Flow Label -> Identification", jo: false }
              ]
            },
            { kerdes: "Jel�lje be az al�bbi architektur�lis/protokoll elemek k�z�l azokat, amelyek a !MobilIP IPv4 �s IPv6 verzi�j�ban is szerepelnek!",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Speci�lis idegen �gyn�k (Foreign Agent) router", jo: false },
                { valasz: "Care-of Address", jo: true },
                { valasz: "A t�bbi megadott lehet�s�g k�z�l egyik sem", jo: false },
                { valasz: "Home Address", jo: true },
                { valasz: "Otthoni �gyn�k (Home Agent)", jo: true }
              ]
            },
            { kerdes: "Mi�rt kell az otthoni �gyn�knek alag�ton tov�bb�tania az elv�ndorolt node r�sz�re �rkez� csomagokat?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Ez biztos�tja, hogy a felad� csomagjai v�ltozatlanul, csak �jfent becsomagolva jutnak el a c�mzetthez", jo: false },
                { valasz: "Mert a c�mzetthez csak �gy juthatnak el a csomagok, ha a tov�bb�t�sban r�sztvev� csom�pontok a node ideiglenes (care-of address) c�m�t l�tj�k", jo: true },
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false }
              ]
            },
            { kerdes: "H�nyszor nagyobb a legr�videbb leg�lis IPv6 fejr�sz a legr�videbb leg�lis IPv4 fejr�szhez k�pest? Az eredm�nyt sz�mmal adja meg!",
              tipus: "valaszolos",
              valasz: "2"
            }
         ];
