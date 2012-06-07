   var tesztFeladatok = [
            { kerdes: "Adja meg r�vid�t�ssel azt a hozz�f�r�si technik�t, amely ortogon�lis, rugalmas, de haszn�lata sor�n el�fordulhat k�sleltet�s?",
              tipus: "valaszolos",
              valasz: "TDMA"
            },
            { kerdes: "H�ny b�jt lenne Ethernet eset�n a minim�lis keretm�ret (el�tag �s SFD n�lk�l), ha tervez�skor 500 m helyett 1 km-es maxim�lis szegmenshosszt engednek meg? (a t�bbi param�ter v�ltozatlanul hagy�sa mellett)?",
              tipus: "valaszolos",
              valasz: "128* - mert a 64 dupl�z�dik a hossz dupl�z�d�sa miatt"
            },
            { kerdes: "Az al�bbiak k�z�l melyek elosztott t�bbsz�r�s hozz�f�r�si m�dszerek?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Probing (csoportos lek�rdez�s)", jo: false },
                { valasz: "Egyszer� aloha", jo: true },
                { valasz: "CSMA/CD", jo: true },
                { valasz: "Reservation (helyfoglal�s)", jo: false },
                { valasz: "R�selt aloha", jo: true },
                { valasz: "Polling (k�rbek�rdez�s)", jo: false }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l melyek k�zpontilag vez�relt t�bbsz�r�s hozz�f�r�si m�dszerek?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Probing (csoportos lek�rdez�s)", jo: true },
                { valasz: "Egyszer� aloha", jo: false },
                { valasz: "CSMA/CD", jo: false },
                { valasz: "Reservation (helyfoglal�s)", jo: true },
                { valasz: "R�selt aloha", jo: false },
                { valasz: "Polling (k�rbek�rdez�s)", jo: true }
              ]
            },
            { kerdes: "A csillag topol�gi�j� Ethernet csillag-pontj�ban kapcsol�t (switch) is lehet alkalmazni a t�bbkapus ism�tl� (hub) helyett",
              tipus: "igazhamis",
              valasz: true
            },
            { kerdes: "Nevezze meg magyarul vagy spanyolul<!--LOL :D--> azt a sokportos eszk�zt, amely jellemz�en azonos szabv�ny� h�l�zatokat k�t �ssze L2 szinten, s a kereteket igyekszik csak a sz�ks�ges ir�nyba tov�bb�tani.",
              tipus: "valaszolos",
              valasz: "Switch"
            },
            { kerdes: "Nevezze meg (magyarul vagy angolul) azt a jellemz�en t�bbportos eszk�zt, amely ak�r t�bb k�l�nf�le h�l�zat k�z�tt is �tj�r�st biztos�that �jrekeretez�ssel an�lk�l, hogy a hordozott L3-csomagot �rtelmezn�, feldolgozn�!",
              tipus: "valaszolos",
              valasz: "Bridge"
            },
            { kerdes: "Ethernet n�ven sz�mos �tviteli k�zeget, t�bb k�l�nb�z� sebess�get szabv�nyos�tottak.",
              tipus: "valaszolos",
              valasz: "Igaz* - mert van 10/100, 10/100/1000 ethernet"
            },
            { kerdes: "Adja meg r�vid�t�ssel azt a hozz�f�r�si technik�t, melyn�l v�d�s�v alkalmaz�sa sz�ks�ges.",
              tipus: "valaszolos",
              valasz: "FDMA"
            },
            { kerdes: "Melyik OSI r�teg tartozik a lok�lis h�l�zatok protokoll architekt�r�j�ba, �s mi�rt?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Csak a fizikai, mert lok�lis k�rnyezetben csak a jel tov�bb�t�sa a feladat", jo: false },
                { valasz: "A felsoroltak k�z�l egyik sem helyes.", jo: true },
                { valasz: "Az als� h�rom r�teg, mert h�l�zati funkci�ra akkor is sz�ks�g van, ha lok�lis a k�rnyezet", jo: false }
              ]
            },
            { kerdes: "Mi a t�bbsz�r�s hozz�f�r�s alapvet� szerepe?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Rugalmas h�l�zati el�r�s biztos�t�sa", jo: true },
                { valasz: "Sikertelen hozz�f�r�si kis�rlet ism�tl�si lehet�s�g�nek biztos�t�sa", jo: false },
                { valasz: "Er�forr�sok t�bbsz�r�s kihaszn�l�sa", jo: false },
                { valasz: "Forr�sok jel�nek nyal�bol�sa", jo: false },
                { valasz: "Takar�koskod�s az �tviteli k�zeggel", jo: true }
              ]
            },
            { kerdes: "Mely tev�kenys�gek jellemzik a CSMA/CD protokollt?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Ha kett� vagy t�bb �llom�s ad, abbahagyja az ad�st", jo: true },
                { valasz: "Valamekkora v�letlen k�sleltet�st k�vet�en az �llom�s �jra megpr�b�lja az ad�st.", jo: true },
                { valasz: "Az �llom�s figyeli a csatorn�t (\"viv�t\")", jo: true },
                { valasz: "Ha az �llom�s nem �rz�kel ad�st a csatorn�n, elkezdi k�ldeni a keretet.", jo: true },
                { valasz: "A t�bbi felsorolt v�lasz k�z�l egyik sem helyes", jo: false }
              ]
            },
            { kerdes: "Milyen megk�t�sek vannak az Ethernet keret hossz�ra (a felsoroltak k�z�l), �s mi�rt? Figyelem, ez dupla k�rd�s!",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A keret maxim�lis hossza meg van k�tve 1500 b�jtban, mert ez sz�vegf�jl eset�n k�zel egy k�perny�", jo: false },
                { valasz: "L�nyeg�ben egy�ltal�n nincs megk�t�s, csak v�ges hossz� legyen", jo: false },
                { valasz: "A t�bbi felsorolt v�lasz egyike sem helyes", jo: true },
                { valasz: "A keret minim�lis hossza is meg van k�tve 64 b�jtban, hogy senki ne k�ld�zgessen inform�ci� n�lk�li keretet", jo: false }
              ]
            },
            { kerdes: "Ethernet CSMA/CD protokollja szerint az �llom�s addig folytatja a csomagk�ld�si k�s�rletet �tk�z�s ut�n, am�g a tov�bb�t�s sikeres nem lesz",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Az al�bbi protokollok k�z�l melyiknek a legjobb a kihaszn�lts�ga?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "CSMA/CD", jo: true },
                { valasz: "A felsoroltak k�z�l mindh�romnak egyform�n j� a kihaszn�lts�ga", jo: false },
                { valasz: "R�selt Aloha", jo: false },
                { valasz: "Egyszer� Aloha", jo: false },
                { valasz: "A felsoroltak k�z�l mindh�romnak egyform�n rossz a kihaszn�lts�ga", jo: false }
              ]
            },
            { kerdes: "Az al�bbi protokollok k�z�l melyiknek legrosszabb a kihaszn�lts�ga?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "R�selt Aloha", jo: false },
                { valasz: "Egyszer� Aloha", jo: true },
                { valasz: "CSMA/CD", jo: false },
                { valasz: "A felsoroltak k�z�l mindh�romnak egyform�n j� a kihaszn�lts�ga", jo: false },
                { valasz: "A felsoroltak k�z�l mindh�romnak egyform�n rossz a kihaszn�lts�ga", jo: false }
              ]
            },
            { kerdes: "Mi a h�l�zatr�szek �sszekapcsol�s�ra szolg�l� eszk�z �ltal�nos neve?",
              tipus: "valaszolos",
              valasz: "Router"
            },
            { kerdes: "Az Ethernet hat�konys�g�t (throughput) l�nyegesen befoly�solja a keret hossza.",
              tipus: "igazhamis",
              valasz: true
            },
            { kerdes: "H�ny b�jt lenne Ethernet eset�n a minim�lis keretm�ret (el�tag �s sfd n�lk�l), ha tervez�skor 10Mbit/s helyett 100Mbit/s adat�tviteli sebess�get siker�lt volna el�rni azonos k�r�lm�nyek (maxim�lis szegmensm�ret, �tviteli k�zeg) k�z�tt? (csak sz�mot adjon meg!)",
              tipus: "valaszolos",
              valasz: "640"
            },
            { kerdes: "Mi�rt el�ny�s switchet (kapcsol�t) haszn�lni az Ethernet h�l�zatban hub helyett?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egy�ltal�n nem el�ny�s, hiszen dr�ga", jo: false },
                { valasz: "Azonos adatsebess�gen a h�l�zat adat�tviteli kapacit�sa ak�r a t�bbsz�r�s�re n�velhet�.", jo: true },
                { valasz: "A switch seg�ts�g�vel k�l�n �tk�z�si tartom�nyokra bonthat� a h�l�zat.", jo: true },
                { valasz: "A t�bbi felsorolt v�lasz egyike sem helyes", jo: false },
                { valasz: "�gy nagy m�rt�kben n�velhet� a h�l�zat inform�ci��tviteli k�pess�ge, de ehhez persze n�velni kell a bitsebess�get is", jo: false }
              ]
            },
            { kerdes: "H�ny b�jt ad�dik a tov�bb�t�sra ker�l� felhaszn�l�i bitekhez az Ethernet keretben (eltekintve az el�tagt�l �s a keret elej�t jelz� SFD-t�l, amelyek formailag nem r�sz�k a keretnek)?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "18", jo: true },
                { valasz: "48", jo: false },
                { valasz: "16", jo: false },
                { valasz: "12", jo: false },
                { valasz: "20", jo: false },
                { valasz: "64", jo: false },
                { valasz: "egyik el�z� v�lasz sem helyes", jo: false }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l melyek ismert k�z�s hozz�f�r�si technik�k?",
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
            { kerdes: "Mely(ek) az adatkapcsolati r�tegben m�k�d�, h�l�zatr�szeket �sszekapcsol� �tj�tsz�(k)?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "kapcsol� (switch)", jo: true },
                { valasz: "jelism�tl� (repeater)", jo: false },
                { valasz: "h�d (bridge)", jo: true },
                { valasz: "�tj�r� (gateway)", jo: false },
                { valasz: "t�bbkapus jelism�tl� (hub)", jo: false },
                { valasz: "�tv�laszt� (router)", jo: false }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely �ll�t�s(ok) igaz(ak) az Ethernet backoff strat�gi�j�ra?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A 3. �tk�z�s ut�n a {0, ... 7} intervallum lesz a sorsol�si intervallum.", jo: true },
                { valasz: "A backoff �rt�k�t r�sid�kben sz�moljuk", jo: true},
                { valasz: "Lehet�v� teszi a hozz�f�r�s bizonyos sk�l�z�d�s�t a felhaszn�l�k sz�m�nak v�ltoz�s�val.", jo: true },
                { valasz: "Tiszt�n exponenci�lis", jo: false },
                { valasz: "Tiszt�n line�ris", jo: false }
              ]
            },
            { kerdes: "Milyen viszonyban �llnak a brigde-ek (hidak) �s switchek (kapcsol�k)?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A bridge-eket tipikusan r�gebben, a switcheket tipikusan manaps�g haszn�lj�k.", jo: true },
                { valasz: "A felsoroltak k�z�l egyik v�lasz sem helyes", jo: false },
                { valasz: "Annyira k�l�nb�znek, hogy a viszonyukr�l �rtelmetlen besz�lni", jo: false },
                { valasz: "A bridge tipikusan t�bb interf�sszel rendelkezik, mint a swtich", jo: false },
                { valasz: "A bridge tipikusan t�bb k�l�nb�z� L2 technol�gi�j� h�l�zatot is k�pes �sszekapcsolni, m�g a switch nem.", jo: true },
                { valasz: "A brigde tipikusan v�gez �jrakeretez�s, m�g a switch nem.", jo: true },
                { valasz: "Mindkett� ISO OSI szerint 2. r�teg beli funkcionalit�s� eszk�z.", jo: true }
              ]
            },
            { kerdes: "Milyen protokollokat hat�roz meg az FDDI szabv�ny?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "MAC: Medium Access Control", jo: true },
                { valasz: "SMT: Station Management", jo: true },
                { valasz: "A felsoroltak k�z�l egyik v�lasz sem helyes", jo: false },
                { valasz: "PHY: Physical", jo: true },
                { valasz: "PMD: Physical Medium Dependent", jo: true }
              ]
            },
            { kerdes: "Melyek a switchek (kapcsol�k) legf�bb jellemz�i az al�bbiak k�z�l?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A kerettov�bb�t�st a fejr�sz vizsg�lata ut�n \"szelekt�ven\" v�gzi.", jo: true },
                { valasz: "Portjaira csak egyedi �llom�sok csatlakozhatnak", jo: false },
                { valasz: "A felsoroltak k�z�l egyik v�lasz sem helyes", jo: false },
                { valasz: "A v�gk�sz�l�keknek figyelembe kell venni�k, hogy switchen kereszt�l m�k�dnek", jo: false },
                { valasz: "T�rolja �s tov�bb�tja a kereteket.", jo: true }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely(ek) jellemz�(ek) a r�selt (slotted) Aloh�ra?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Jelent�sen nagyobb a k�sleltet�se, mint az egyszer� Aloh�nak", jo: false },
                { valasz: "Jobb a kihaszn�lts�ga, mint az egyszer� Aloh�nak.", jo: true },
                { valasz: "A felsoroltak k�z�l egyik v�lasz sem jellemz� a r�selt Aloh�ra", jo: false },
                { valasz: "Kevesebb �tk�z�s lesz, mint az egyszer� Aloh�n�l azonos forgalom eset�n.", jo: true },
                { valasz: "A r�sid� hat�r�n �tny�lhatnak keretek", jo: false }
              ]
            },
            { kerdes: "Az al�bbi �ll�tsok k�z�l melyek igazak az egyszer� Aloha protokollra?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Nem ig�nyel szervez�st.", jo: true },
                { valasz: "�tk�z�s eset�n az �sszes �tk�z� keret elv�sz.", jo: true },
                { valasz: "Az �llom�sok tudj�k, �sszesen h�ny �llom�s van", jo: false },
                { valasz: "�tk�z�smentes", jo: false },
                { valasz: "Minden �llom�s tetsz�leges id�pontban adhat.", jo: true },
                { valasz: "�tk�z�s eset�n az �llom�s �jrapr�b�lkozhat", jo: true }
              ]
            },
            { kerdes: "Nevezze meg (magyarul vagy angolul) azt az eszk�zt, ami ak�r alkalmaz�sr�tegbeli protokollkonverzi�t is v�gezhet!",
              tipus: "valaszolos",
              valasz: "gateway"
            },
            { kerdes: "A sokkapus ism�tl�re (hub) csatlakoz� �llom�sok ad�sa nem �tk�zik, ha egy-egy portra csak egyetlen �llom�st csatlakoztatunk.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Milyen tulajdons�gok jellemzik az egyszer� Aloha hozz�f�r�si elj�r�st?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "K�sleltet�se korl�tos", jo: false },
                { valasz: "Kihaszn�lts�ga igen alacsony", jo: true },
                { valasz: "A t�bbi felsorolt v�lasz k�z�l egyiksem helyes", jo: false },
                { valasz: "Stabilit�sa nagyon j�", jo: false },
                { valasz: "Az igazs�goss�got (egyenl�sdit) hossz� id�szakra teljes�ti.", jo: true }
              ]
            },
            { kerdes: "Mi az el�nye az inform�ci�tov�bb�t� h�l�zatok kiterjed�s szerinti csoportos�t�s�nak?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Semmi el�nye, ez csak egy szok�s", jo: false },
                { valasz: "A k�l�nb�z� m�retek elt�r� technika, technol�gia alkalmaz�s�t tehetik el�ny�ss�", jo: true }
              ]
            },
            { kerdes: "Az IEEE 802.3 szabv�ny lefedi a _teljes_ fizikai �s adatkapcsolati r�tegeket",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Az al�bbiak k�z�l mit tesznek lehet�v� a h�l�zatr�szeket �sszekapcsol� ism�tl�k (repeater)?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "�thidalhat� t�vols�g n�vel�s�t", jo: true },
                { valasz: "K�l�nb�z� t�pus� h�l�zatok haszn�lat�t", jo: false },
                { valasz: "�tk�z�si tartom�ny m�ret�nek cs�kkent�s�t", jo: false },
                { valasz: "A jel er�s�t�s�t", jo: true },
                { valasz: "A t�bbi felsorolt v�lasz egyike sem helyes", jo: false }
              ]
            },
            { kerdes: "Nevezze meg (magyarul vagy angolul) azt a jellemz�en sokportos eszk�zt, ami fizikai jelek �rtelmez�se n�lk�l azokat tov�bb�tja, �s ez�ltal t�bb g�p illetve h�l�zat �sszek�t�s�t is lehet�v� teszi!",
              tipus: "valaszolos",
              valasz: "hub"
            }
         ];