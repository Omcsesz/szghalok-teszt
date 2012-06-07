 var tesztFeladatok = [
            { kerdes: "Mi igaz a termikus zajra �ltal�ban?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Gaussi eloszl�s�", jo: true },
                { valasz: "Minden zaj megfelel� elektrom�gneses �rny�kol�ssal megsz�ntethet�", jo: false },
                { valasz: "V�rhat� �rt�ke nulla", jo: true },
                { valasz: "A jelhez hozz�ad�dik", jo: true },
                { valasz: "�tviteli hib�t okozhat", jo: true }
              ]
            },
            { kerdes: "Egy �tvitel sor�n a +3 V, +1 V, -1 V �s -3 V fesz�lts�gszinteket haszn�ljuk. H�ny volt fesz�lts�gn�l legyen a d�nt�si k�sz�b a fels� k�t jelszint k�z�tt, ha a zaj Gauss-eloszl�s�?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "+5 V", jo: false },
                { valasz: "+3 V", jo: false },
                { valasz: "+2,5 V", jo: false },
                { valasz: "+2 V", jo: true },
                { valasz: "+ pi/2 V", jo: false },
                { valasz: "+1,5 V", jo: false },
                { valasz: "+1 V", jo: false },
                { valasz: "0 V", jo: false }
              ]
            },
            { kerdes: "Mely(ek) a protokollanaliz�tor szerepe(i) az al�bbiak k�z�l?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A h�l�zati forgalom �rtelmez�se", jo: true },
                { valasz: "A h�l�zati forgalom megjelen�t�se.", jo: true },
                { valasz: "A h�l�zati forgalom r�gz�t�se.", jo: true },
                { valasz: "A h�l�zati forgalom gener�l�sa", jo: true },
                { valasz: "Protokollok szimul�lt tesztel�se.", jo: false, megjegyzes: "K�rd�ses" },
                { valasz: "A h�l�zati forgatom visszaj�tsz�sa", jo: false }
              ],
			  megjegyzes: "http://alpha.tmit.bme.hu/meresek/5-9.htm"
            },
            { kerdes: "Az al�bbi �ll�t�sok k�z�l mely(ek) igaz(ak) a QPSK-ra?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "WLAN-okban is haszn�lj�k", jo: true, megjegyzes: "802.11a haszn�lja a wikipedia szerint" },
                { valasz: "A viv�frekvenci�t v�ltoztatjuk", jo: false },
                { valasz: "Minden szimb�lumot azonos amplit�d�j� jel k�pvisel", jo: true },
                { valasz: "Egy szimb�lummal 4 bit vihet� �t", jo: false, megjegyzes: "biztosan nem j�, mert 2 bit vihet� �t" },
                { valasz: "A viv�hull�m f�zis�t v�ltoztatjuk.", jo: true }
              ]
            },
            { kerdes: "Mi�rt nem EGY inform�ci�tov�bb�t� protokollt haszn�lunk?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A fejleszt�sek sor�n egym�st�l t�bb�-kev�sb� elt�r� megold�sok alakultak ki ugyanarra a feladatra, amelyek annyira elterjedtek, hogy nem lehet �ket megsz�ntetni", jo: false },
                { valasz: "Az inform�ci�tov�bb�t�s olyan �sszetett tev�kenys�g, hogy c�lszer� r�szfeladatokra t�rdelni, amelyek mindegyike k�l�n protokollal szab�lyozand�", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely �ll�t�s(ok) igaz(ak) az NRZI k�dol�sra?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Nem tartalmaz nullafrekvenci�s (DC) komponenst.", jo: true },
                { valasz: "A csupa 1 bitsorozat eset�n elveszhet a szinkron", jo: false },
                { valasz: "A 0 �rt�ket mindig az alacsony jelszint azonos�tja", jo: false },
                { valasz: "A csupa 0 bitsorozat eset�n elveszhet a szinkron.", jo: true },
                { valasz: "A jelv�ltoz�s frekvenci�ja k�tszerese a bitsebess�gnek", jo: false }
              ]
            },
            { kerdes: "Az al�bbi �llt�sok k�z�l mely(ek) igaz(ak) a 8PSK-ra? ",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A viv�hull�m f�zis�t v�ltoztatjuk", jo: true },
                { valasz: "A viv�hull�m frekvenci�j�t v�ltoztatjuk", jo: false },
                { valasz: "Egy szimb�lummal 8 bit vihet� �t", jo: false },
                { valasz: "Minden szimb�lum azonos amplit�d�j�", jo: true }
              ]
            },
            { kerdes: "Az ISO OSI referencia modell a protokollarchitekt�r�k viszony�t�s�nak alapvet� eszk�ze.",
              tipus: "igazhamis",
              valasz: true
            },
            { kerdes: "Az al�bbi �ll�t�sok k�z�l mely(ek) igaz(ak) az On-Off Keyingre?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "A bitsorozatnak megfelel�en v�ltozik a frekvencia", jo: false },
                { valasz: "K�nny� a csatorna foglalts�g�nak �rz�kel�se.", jo: false, megjegyzes: "Az is jel, hogy nincs jel, ez el�gg� megnehez�ti..." },
                { valasz: "A konstell�ci�s diagramj�n 2 �llapotot jel�l� pont tal�lhat�", jo: true, megjegyzes: "Vagy van jel vagy nincs jel, teh�t k�t �llapot van" },
                { valasz: "Ez egyfajta ASK.", jo: true }
              ],
			  megjegyzes: "Az �br�r�l is l�tszik-> 2012.02.16_Fizikai1.pdf, 36.o.: http://sdrv.ms/L50CuR"
            },
            { kerdes: "A vez�rl� s�k protokolljai f�k�nt az �sszek�ttet�sek kezel�s��rt felel�sek.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Az al�bbiak k�z�l mely �ll�t�s igaz egy PDU be�gyaz�d�s�ra?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Csak fejet (header) kap", jo: false },
                { valasz: "Csak farkat (trailer) kap", jo: false },
                { valasz: "Mindig kap fejet (header), de farkat (trailer) csak opcion�lisan", jo: true, megjegyzes: "A jegyzetben sz�gletes z�r�jelben van a farok" },
                { valasz: "Sem fejet (header), sem farkat (trailer) nem kap", jo: false },
                { valasz: "Mindig kap fejet (header) �s farkat (trailer)", jo: false }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely �ll�t�s(ok) igaz(ak) a Manchester k�dol�sra?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A csupa 1 bitsorozat eset�n elveszhet a szinkron", jo: false },
                { valasz: "A csupa 0 bitsorozat eset�n elveszhet a szinkron", jo: false },
                { valasz: "Nem tartalmaz nullafrekvenci�s (DC) komponenst.", jo: true },
                { valasz: "A jelv�ltoz�s frekvenci�ja k�tszerese a bitsebess�gnek.", jo: true },
                { valasz: "A 0 �rt�ket mindig az alacsony jelszint azonos�tja", jo: false }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely �ll�t�s(ok) igaz(ak) az NRZ k�dol�sra?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A csupa 0 bitsorozat eset�n elveszhet a szinkron.", jo: true },
                { valasz: "A 0 �rt�ket mindig az alacsony jelszint azonos�tja.", jo: true },
                { valasz: "Tartalmaz nullafrekvenci�s (DC) komponenst", jo: false },
                { valasz: "A csupa 1 bitsorozat eset�n elveszhet a szinkron.", jo: true },
                { valasz: "A jelv�ltoz�s frekvenci�ja k�tszerese a bitsebess�gnek", jo: false }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely �ll�t�s igaz a szimb�lumra",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egy szimb�lumot reprezent�lhat egy pont a konstell�ci�s diagramon", jo: true },
                { valasz: "Egy szimb�lumot reprezent�lhat egy frekvencia", jo: true },
                { valasz: "Egy vagy t�bb bit jelent�s�t hordoz� elemi jel", jo: true },
                { valasz: "A szimb�lumok csak p�r�s�val vihet�k �t kommunik�cios csatorn�n", jo: false },
                { valasz: "Egy szimb�lumot reprezent�lhat egy fesz�lts�gszint", jo: true, megjegyzes: "amplit�d�k�dol�s a neve" }
              ]
            },
            { kerdes: "A h�l�zat csom�pontjaiban a protokollarchikt�ra a v�gpontok�val megegyez� m�don- az �sszes r�teg implement�l�s�val- ker�l kialak�t�sra",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Az al�bbi �ll�t�sok k�z�l mely igaz az FSK modul�ci�ra",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A viv�hull�m amplit�d�j�t v�ltoztatjuk", jo: false },
                { valasz: "El��ll�t�sa �s demodul�l�sa egyszer�", jo: true },
                { valasz: "A viv�ferekvenci�t v�ltoztatjuk", jo: true },
                { valasz: "viv�hull�m f�zis�t v�ltoztatjuk", jo: false }
              ]
            },
            { kerdes: "Mely �ll�t�s igaz az al�bbiak k�z�l az ISO OSI szerint PDU- elnevez�sekkel kapcsolatban ",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A h�l�zati r�tegbeli PDU neve : csomag(packet)", jo: true },
                { valasz: "A fizikai r�tegbeli PDU neve : �zenet (message)", jo: false },
                { valasz: "Minden r�teg PDU-j�ra hivatalosan haszn�lh� a csomag elnevez�s", jo: false },
                { valasz: "A adatkapcsolati r�tegbeli PDU neve : keret (frame)", jo: true },
                { valasz: "A sz�ll�t�si r�teg beli PDU neve : szegments (segment)", jo: true }
              ]
            },
            { kerdes: "8PSK eset�n mekkora a null�t�l k�l�nb�z� legkisebb pozit�v f�zistol�s m�rt�ke fokban?",
              tipus: "valaszolos",
              valasz: "45"
            },
            { kerdes: "A protokollok ler�gz�t�s�n�l el�nyben kell r�szes�teni a term�szetes nyelven t�rt�n� le�r�s�t.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Az al�bbi �ll�t�sok k�z�l mely(ek) igaz(ak) a szimb�lumsebess�gre?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Bin�ris jel�tvitel eset�n megegyezik a bitsebess�ggel.", jo: true },
                { valasz: "M�rt�kegys�ge: baud vagy Bd", jo: true },
                { valasz: "A jel terjed�si sebess�ggel egyenesen ar�nyos", jo: false },
                { valasz: "Jelz�si sebess�g�nek is nevezik.", jo: true }
              ]
            },
            { kerdes: "Mi a felt�tele annak, hogy egy protokoll-architekt�ra valamely r�teg�ben a megval�s�t�st megv�ltoztassuk?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Csak a felette l�v� r�teg - amely szolg�ltat�st ny�jt - hozz�j�rul�s�ra van sz�ks�g", jo: false },
                { valasz: "A szomsz�d r�t�gek hozz�j�rul�sa sz�ks�ges", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: true }
              ]
            },
            { kerdes: "Mit �rt�nk azon, hogy a protokollarchitekt�ra megfelel� r�tegei k�z�tt virtu�lis kapcsolat j�n l�tre?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Az egyik v�gpont n. r�tege �ltal k�ld�tt PDU k�zvetlen�l �tjut a m�sik v�gpont n. r�teg�be", jo: false },
                { valasz: "�gy tekinthet�nk a v�gpontok n. r�tegei k�z�tti kapcoslatokra - elfedve a n. r�teg alatt m�k�d�st -, mintha azok egym�ssal k�zvetlen kapcsolatban �lln�nak.", jo: true },
                { valasz: "Az ISO OSI referenciamodellben egy virtu�lis r�teg is l�trej�n", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ]
            },
            { kerdes: "Azt az elvet �s folyamatot, mely sor�n a magasabb r�tegb�l �rkez� protokoll-adategys�g als�bb r�tegek fel� haladva kieg�sz�t� inform�ci�kkal ker�l ell�t�sra, bor�t�kol�snak, be�gyaz�d�snak (encapsulation) nevezz�k.",
              tipus: "igazhamis",
              valasz: true
            },
            { kerdes: "Mi t�rt�nik, ha egy n�gysz�gjelet s�vhat�rolt csatorn�n visz�nk �t?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A n�gysz�gjel sz�gletess�ge megsz�nik", jo: true },
                { valasz: "A nagyobb frekvenci�j� felharmonikusok elt�nnek", jo: true },
                { valasz: "A kisebb frekvenci�j� felharmonikusok elt�nnek", jo: false },
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "A jel invert�l�dik", jo: false }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l melyek NEM szerepel(nek) az ISO OSI referenciamodellben?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Fizikai", jo: false },
                { valasz: "Alkalmaz�si", jo: false },
                { valasz: "Adatkapcsolati", jo: false },
                { valasz: "Adategyeztet�si", jo: true },
                { valasz: "Interf�sz", jo: true },
                { valasz: "Megjelen�t�si", jo: false },
                { valasz: "Adatbiztons�gi", jo: true },
                { valasz: "Fizikaik�zeg-f�gg�", jo: true },
                { valasz: "K�zeghozz�f�r�s-vez�rl�si", jo: true },
                { valasz: "Menedzsment", jo: true }
              ]
            },
            { kerdes: "64QAM eset�n 16 szimb�lummal h�ny b�jtot visz�nk �t?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "6", jo: false },
                { valasz: "12", jo: true, megjegyzes: "64 lehet�s�get 6 bit �r le, egy szimb�lum teh�t 6 bites. 16 szimb�lum teh�t 6*16=96 bit, ami 96/8=12 b�jt" }
              ]
            },
            { kerdes: "Mi jellemezi a felhaszn�l�i s�k protokolljait?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Biztos�tj�k a felhaszn�l�i inform�ci�nak a legr�videbb �ton t�rt�n� c�lba juttat�s�t", jo: false },
                { valasz: "A felhaszn�l�k tov�bb�t�sra sz�nt inform�ci�j�t kezelik (el��ll�tj�k, �rtelmezik).", jo: true },
                { valasz: "Gondoskodnak a felhaszn�l�i inform�ci� sz�ll�t�s�nak hib�tlans�g�r�l. �������", jo: false },
                { valasz: "Egyik v�lasz sem j�. ���", jo: false }
              ]
            },
            { kerdes: "A bin�ris jel�tvitelhez k�pest h�nyszoros lesz a bitsebess�g, ha 8 szint� jelet visz�nk �t azonos szimb�lumsebess�ggel?",
              tipus: "valaszolos",
              valasz: "3* -- mivel szimb�lumonk�nt 3 bit"
            },
            { kerdes: "H�nyszoros�ra n� a bitsebess�g, ha QPSK-r�l 16QAM-re v�ltunk azonos szimb�lumsebess�g mellett?",
              tipus: "valaszolos",
              valasz: "2"
            },
            { kerdes: "Az al�bbi �ll�t�sok k�z�l mely(ek) igaz(ak) az ASK modul�ci�ra?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A viv�hull�m f�zis�t v�ltoztatjuk", jo: false },
                { valasz: "A viv�hull�m amplit�d�j�t v�ltoztatjuk.", jo: true },
                { valasz: "Lehet k�t- vagy t�bbszint�.", jo: true },
                { valasz: "A konstell�ci�s diagramon az �llapotoknak megfelel� pontok egy egyenes ment�n helyezkednek el", jo: true },
                { valasz: "A viv�hull�m frekvenci�j�t v�ltoztatjuk", jo: false }
              ]
            },
            { kerdes: "Mit olvashatunk le egy szem�br�r�l?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A jelterjed�si sebess�get", jo: false },
                { valasz: "A \"szem\" �ltal meghat�rozott h�romsz�g sz�geit", jo: false },
                { valasz: "Id�z�t�si hib�t.", jo: true },
                { valasz: "A tov�bb�tott bitek �rt�k�t", jo: false },
                { valasz: "A jelre rak�dott zajt.", jo: true }
              ],
            },
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
            },
			      { kerdes: "Az al�bbiakban a !WiFi csatorn�k a frekvenciatartom�ny beli sorrendnek megfelel� sorsz�mmal adottak. Mely eset(ek)ben nem lesz �tlapol�d� csatorna, ha egyszerre az adott csatorn�kat k�v�njuk haszn�lni? (A feladatban a 2,4 GHz-es s�vban 13 csatorn�t felt�telez�nk.)",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "1; 2 ; 3", jo: false },
                { valasz: "Minden felsorolt konfigur�ci� eset�n lesz �tlapol�d�s", jo: false },
                { valasz: "2; 5; 11", jo: false },
                { valasz: "1; 6; 13", jo: true },
                { valasz: "4; 8; 13", jo: false }
              ]
            },
            { kerdes: "Melyek az �ramk�rkapcsol�s legfontosabb jellemz�i?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Nincs forgalom-torl�d�s csak kiszolg�l�s el�tti esetleges blokkol�s.", jo: true },
                { valasz: "A kommunik�l� v�gpontok k�z�tt ki�p�l� fizikai csatorna dedik�lt haszn�lat�.", jo: true },
                { valasz: "Fizikai kapcsolat �p�l ki a kommunik�l� v�gpontok k�z�tt.", jo: true },
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "A csom�pontok t�rol�s-mentesen tov�bb�tj�k a felhaszn�l�i inform�ci�t.", jo: true }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely(ek) WLAN m�k�d�si m�dok?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Kiegyenl�tett", jo: false },
                { valasz: "Logikai gy�r�", jo: false },
                { valasz: "Mesh", jo: true },
                { valasz: "Infrastruktu�lis", jo: true },
                { valasz: "Ad-hoc", jo: true }
              ]
            },
            { kerdes: "Mikor lehet �rdemes haszn�lni az RTS/CTS m�dszert?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Csak hibakeres�shez", jo: false },
                { valasz: "Ha sok a nagy forgalm� �llom�s.", jo: true },
                { valasz: "Ha a WLAN-�llom�sok egym�shoz nagyon k�zel vannak", jo: false },
                { valasz: "Ha el�fordulhat a rejtett �llom�s probl�ma.", jo: true },
                { valasz: "A t�bbi v�lasz k�z�l egyik sem helyes", jo: false }
              ]
            },
            { kerdes: "Mi okozza a blokkol�st az �ramk�rkapcsolt h�l�zat csom�pontj�ban (kapcsol�j�ban) forgalmi t�lterhel�skor?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A csom�pont valamennyi t�rol�ja m�r megtelt", jo: false },
                { valasz: "A k�v�nt kimenet m�r haszn�latban van egy m�sik csatorna sz�m�ra.", jo: true },
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "Nincs szabad �t a kapcsol�ban az �sszek�tni k�v�nt be- �s kimenet k�z�tt.", jo: true }
              ]
            },
            { kerdes: "Az al�bbi szabv�nyok k�z�l mely(ek) haszn�lhat(nak) FHSS-t?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A felsoroltak k�z�l egyik sem haszn�lhat FHSS-t", jo: false },
                { valasz: "802.11", jo: true },
                { valasz: "802.3", jo: false },
                { valasz: "802.15.1", jo: true },
                { valasz: "802.16", jo: false }
              ]
            },
            { kerdes: "Az al�bbi szabv�nyos technol�gi�k k�z�l mely(ek) haszn�lhat(nak) FHSS-t?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "WiFi", jo: true },
                { valasz: "Bluetooth", jo: true },
                { valasz: "!WiMAX", jo: false },
                { valasz: "Ethernet", jo: false },
                { valasz: "A felsoroltak k�z�l egyiksem haszn�lhat FHSS-t", jo: false }
              ]
            },
            { kerdes: "Az �sszek�ttet�s-mentes m�don m�k�d� csomagkapcsolt h�l�zatban nincs a kommunik�l� v�gpontok k�z�tt el�re \"ki�p�tett\" (ler�gz�tett) �sszek�ttet�s, minden csomagot valamennyi �rintett csom�pont \"eml�kezet n�lk�l\" megvizsg�l �s csomagonk�nt egyedi d�nt�st hozva tov�bb�t.",
              tipus: "igazhamis",
              valasz: true
            },
            { kerdes: "A 802.15 WPAN �s a 802.16 WMAN szabv�nyok egyar�nt magukba foglalj�k a logikai link-vez�rl�st is.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Az al�bbiak k�z�l milyen modul�ci�t alkalmazhat egy 802.11-es szabv�nyt�megval�s�t� eszk�z?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A t�bbi felsorolt v�lasz egyike sem helyes", jo: false },
                { valasz: "DSSS", jo: true, megjegyzes: "802.11b, 802.11-1997, ..." },
                { valasz: "FHSS", jo: true, megjegyzes: "802.11-1997" },
                { valasz: "OFDM", jo: true, megjegyzes: "802.11a, ..." },
                { valasz: "FM (frekvenciamodul�ci�)", jo: false }
              ]
            },
            { kerdes: "Mi�rt haszn�lnak 4 MAC c�met a 802.11 protokollban?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A c�m megism�tl�s�re haszn�lj�k, hogy a r�di�s k�zegen el�fordul� gyakoribb bithiba miatt s�r�l� c�m biztosan �p maradjon", jo: false },
                { valasz: "A t�bbi v�lasz k�z�l egyik sem helyes", jo: false },
                { valasz: "Ez�ltal lehet egy�rtelm�v� tenni, hogy a keret honnan hov� megy.", jo: true },
                { valasz: "Jelenleg csak 2 c�met haszn�lnak bel�le, de a j�v�beli funkci�k sz�m�ra hoztak l�tre tov�bbi 2 c�mmez�t", jo: false }
              ]
            },
            { kerdes: "A 802.11-nek melyik k�zeg-hozz�f�r�si m�dszere haszn�lja a Network Allocation Vectort?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Az RTS/CTS haszn�lja.", jo: true },
                { valasz: "A PCF haszn�lja", jo: false },
                { valasz: "A 802.11-ben a Network Allocation Vectort nem haszn�lj�k", jo: false },
                { valasz: "A t�bbi v�lasz k�z�l egyik sem helyes", jo: false }
              ]
            },
            { kerdes: "Mely �ll�t�s igaz�blokkol�ssal kapcsolatban a csomagkapcsol�k eset�n?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A csomagkapcsol�s velej�r�ja a forgalmi t�lterhel�sn�l bek�vetkez� csomag(forgalom)torl�d�s.", jo: true },
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "A torl�d�s eredm�nye az �tlagosn�l nagyobb csomagk�sleltet�s, esetleg csomagveszt�s.", jo: true },
                { valasz: "Az �ramk�rkapcsol�ssal megegyez� m�don nem j�n l�tre blokkol�s.", jo: true }
              ]
            },
            { kerdes: "Melyek a h�l�zatok alapvet� m�k�d�si m�djai?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "�ramk�r-kapcsolt m�k�d�sm�d", jo: true },
                { valasz: "�sszek�ttet�s-mentes m�k�d�s", jo: false },
                { valasz: "�sszek�ttet�s alap� m�k�d�s", jo: false },
                { valasz: "csomagkapcsolt m�k�d�sm�d", jo: true },
                { valasz: "A t�bbi v�lasz k�z�l egyik sem helyes", jo: false }
              ],
			  megjegyzes: "A m�sik kett� is lehetne ak�r j�, de azok szerintem nem alapvet�ek, mivel a csomagkapcsolt egy-egy esetei."
            },
            { kerdes: "Mi a viszonya az IEEE 802.11 szabv�nycsal�dnak �s a Wi-Fi�Alliance-nek egym�shoz?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A Wi-Fi Alliance l�nyeg�ben egy�ttm�k�d�s a gy�rt�k �s a piaci szerepl�k k�z�tt a szabv�ny bevezet�s�re", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Gyakorlatilag ugyanaz a \"viszony\", mint a 802.16 szabv�ny �s a !WiMAX forum k�z�tt", jo: true, megjegyzes: "2010_03_09-BWA - 23. oldal" }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely WLAN-szab�ny(ok) elm�leti maxim�lis sebess�ge 54 Mbit/s?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "802.11g", jo: true },
                { valasz: "802.11a", jo: true },
                { valasz: "802.11b", jo: false },
                { valasz: "802.11n", jo: false },
                { valasz: "A t�bbi v�lasz k�z�l egyik sem helyes", jo: false }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely m�dszer(ek) seg�ts�g�vel lehet az �tk�z�seket elker�lni�a 802.11 protokollban?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "RTS/CTS m�dszerrel.", jo: true },
                { valasz: "DCF m�ddal.", jo: true },
                { valasz: "A t�bbi felsorolt v�lasz k�z�l egyiksem helyes", jo: false },
                { valasz: "�tk�z�sdetekt�l�sal", jo: false },
                { valasz: "PCF m�ddal.", jo: true }
              ]
            },
            { kerdes: "A Bluetooth piconetben egyidej�leg legfeljebb 255 Slave �llom�s lehet akt�v.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Az al�bbiak k�z�l mely �ll�t�s(ok) igaz(ak) az adatsz�r� (broadcast) h�l�zatokkal kapcsolatban?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "L�nyeg�ben �ramk�rkapcsol�st v�geznek", jo: false },
                { valasz: "Nem alkalmaznak kapcsol�st a v�gpontok k�z�tti kommunik�ci�s csatorn�k l�trehoz�s�ra.", jo: true },
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "Jellegzetesen lok�lis k�rnyezetben m�k�dnek.", jo: true }
              ]
            },
            { kerdes: "A 802.11-es WLAN-ok a k�doszt�s� t�bbsz�r�s hozz�f�r�s k�vetkezt�ben v�ltak hat�konny�.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Mi�rt nincs �tk�z�sdetekt�l�s a 802.11 k�zeghozz�f�r�si protokollban? ",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Nincs r� sz�ks�g a k�doszt�s� t�bbsz�r�s hozz�f�r�s miatt", jo: false },
                { valasz: "A t�bbi v�lasz k�z�l egyik sem helyes", jo: false },
                { valasz: "Mert a r�di�csatorn�n nem tudja az akt�v �llom�s detekt�lni, hogy egyed�l haszn�lja-e a csatorn�t.", jo: true },
                { valasz: "Van �tk�z�sdetekt�l�s a 802.11 protokollban", jo: false }
              ]
            },
            { kerdes: "Milyen �zenet(eke)t haszn�l az RTS/CTS m�dszer?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A t�bbi v�lasz k�z�l egyik sem helyes", jo: false },
                { valasz: "DCF", jo: false },
                { valasz: "PCF", jo: false },
                { valasz: "RTS", jo: true },
                { valasz: "CTS", jo: true },
                { valasz: "Az RTS/CTS nem haszn�l �zeneteket", jo: false }
              ]
            },
            { kerdes: "Mely �ll�t�s(ok) igaz(ak) az al�bbiak k�z�l a WLAN mesh-sel kapcsolatban?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A h�l�zatban szerepl� csom�pontok egyenrang�ak.", jo: true },
                { valasz: "A t�bbi v�lasz k�z�l egyik sem helyes", jo: false },
                { valasz: "A csom�pontok egym�son kereszt�l is tov�bb�thatnak inform�ci�t.", jo: true },
                { valasz: "A 802.11s szabv�ny �rja le.", jo: true },
                { valasz: "Az adatsebess�g nem f�gg att�l, hogy �tlagosan h�ny ugr�son (hop) kereszt�l ker�l tov�bb�t�sra az inform�ci�", jo: false }
              ]
            },
            { kerdes: "Mire kell gondosan �gyelni WLAN-ok alkalmaz�sa eset�n?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egy WLAN h�l�zatban mindig csak p�ros sz�m� eszk�z tal�lhat�", jo: false },
                { valasz: "Nem szabad k�l�n gy�rt�t�l sz�rmaz� !WiFi jelz�ssel eszk�z�ket haszn�lni, mert azok �ltal�ban nem kompatibilisek", jo: false },
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "A titkos�t�s n�lk�li r�di�csatorn�n kereszt�l b�rki k�nnyen lehallgathatja az �zeneteinket.", jo: true },
                { valasz: "Ne legyenek azonos frekvenci�n �zemel� AP-k egym�shoz t�l k�zel.", jo: true }
              ]
            },
            { kerdes: "Melyek lehetnek az al�bbiak k�z�l a !WiMAX fontosabb alkalmaz�si ter�letei?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Otthoni felhaszn�l�k Internet-el�r�s�nek biztos�t�sa.", jo: true },
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "Wi-Fi hotspotok, mobil b�zis�llom�sok gerinch�l�zatak�nti m�k�d�s.", jo: true },
                { valasz: "Egyetemi campusok, ipari telephelyek lefed�se.", jo: true }
              ]
            },
            { kerdes: "A 802.16 sz�m�ra a !WiMAX olyan, mint a 802.11 sz�m�ra a ....",
              tipus: "valaszolos",
              valasz: "WiFi"
            },
            { kerdes: "Az ad�s ut�n legkor�bban mennyi id�vel k�s�bb adhat �jra egy ad-hoc m�d� WLAN-�llom�s?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "DIFS", jo: true },
                { valasz: "CIFS", jo: false },
                { valasz: "SIFS", jo: false },
                { valasz: "PIFS", jo: false }
              ]
            },
            { kerdes: "Mi jelenti a legf�bb k�l�nbs�get az �ramk�r- �s a csomagkapcsol�s k�z�tt a csatornahaszn�lat szempontj�b�l?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A csomagkapcsol�s dedik�lt csatorn�kat alkalmaz", jo: false },
                { valasz: "Az �ramk�rkapcsol�s osztottan haszn�lja a csatorn�kat", jo: false },
                { valasz: "A t�bbi v�lasz k�z�l egyik sem helyes.", jo: true }
              ]
            },
            { kerdes: "Milyen l�nyeges elt�r�sek vannak a 802.11 �s a 802.3 keretek k�z�tt?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Nincsen semmi k�l�nbs�g a 802.11 �s a 802.3 keretek k�z�tt", jo: false },
                { valasz: "Az FCS mez�ben haszn�lt CRC hosszabb a 802.11-ben, mert a r�di�s k�zegen sokkal nagyobb v�delem kell", jo: false },
                { valasz: "A t�bbi v�lasz k�z�l egyik sem helyes.", jo: true },
                { valasz: "A 802.11 MAC c�mei sokkal r�videbbek, mert kevesebb eszk�zt kell csak megc�mezni", jo: false }
              ]
            },
            { kerdes: "Melyek a f� jellemz�i a Bluetooth fizikai r�teg�nek (\"r�di�s interf�sz\")?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "Frequency Division Duplex (FDD) m�dszer az ad�s-v�tel megval�s�t�s�ra", jo: false },
                { valasz: "FHSS modul�ci�s elj�r�st haszn�l.", jo: true },
                { valasz: "A 2,4 GHz-es ISM s�vban m�k�dik.", jo: true }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely �ll�t�s(ok) igaz(ak) a scatternetre?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "T�bb piconet alkotja.", jo: true },
                { valasz: "T�bb Master is lehet benne.", jo: true },
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "Lehet olyan eszk�z, mely egyszerre lehet Master �s Slave szerepben is.", jo: true },
                { valasz: "A Bluetooth szabv�ny tartalmazza a scatternetek kialak�t�s�nak �s m�k�d�s�nek le�r�s�t", jo: false }
              ]
            },
            { kerdes: "A 802.11-ben a PCF k�zeg-hozz�f�r�si m�dszer l�nyeg�ben lek�rdez�st haszn�l a t�bbsz�r�s hozz�f�r�s vez�rl�s�re.",
              tipus: "igazhamis",
              valasz: true
            },
            { kerdes: "Melyek a 802.15.1 szabv�ny protokoll architekt�r�j�nak a jellemz�i?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Csak a fizikai r�teg le�r�s�t tartalmazza", jo: false },
                { valasz: "Saj�t r�tegezett architekt�r�ja van.", jo: true },
                { valasz: "A \"Transport protocols\" n�ven egy als� r�teget, �s \"middleware protocols\" n�ven egy fels� r�teget defini�l", jo: true },
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false }
              ]
            },
            { kerdes: "Milyen m�k�d�si f�zisokat alkalmaznak az �sszek�ttet�s alap� m�don m�k�d� h�l�zatokban?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "�sszek�ttet�s fel�p�t�se", jo: true },
                { valasz: "felhaszn�l�i inform�ci�-�tvitel", jo: true, megjegyzes: "mi �rtelme lenne egy�bk�nt??" },
                { valasz: "forgalom lek�rdez�se", jo: false },
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "�sszek�ttet�s lebont�sa", jo: true }
              ]
            },
            { kerdes: "Mi�rt el�ny�s a csomagkapcsol�sban a tov�bb�tott adategys�gek m�ret�nek korl�toz�sa?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "Nem okoz bel�thatatlan id�tartam� foglalts�got a tov�bb�t�si �tvonalon egy-egy adategys�g (komplett �zenet).", jo: true },
                { valasz: "Mert �gy cs�kken a keretez�sb�l ad�d� k�sleltet�s.", jo: true },
                { valasz: "A tov�bb�tott csomag meghib�sod�sa eset�n kedvez�bb lehet a csatorna kihaszn�lts�ga.", jo: true }
              ]
            },
            { kerdes: "Az infrastrukt�ra alap� WLAN h�l�zati elrendez�s csak egy Basic Service Setet haszn�lhat.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Az al�bbiak k�z�l mely frekvenci�t haszn�lhat egy !WiFi-eszk�z?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "3,5 GHz", jo: false },
                { valasz: "2,4 GHz", jo: true },
                { valasz: "A t�bbi felsorolt v�lasz k�z�l egyiksem helyes", jo: false },
                { valasz: "900 MHz", jo: false },
                { valasz: "5 GHz", jo: true }
              ]
            },
            { kerdes: "Az al�bbi szabv�nyos technol�gi�k k�z�l mely(ek) haszn�lhat(nak) OFDM-et?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "WiMAX", jo: true },
                { valasz: "Ethernet", jo: false },
                { valasz: "A felsoroltak k�z�l egyiksem haszn�lhat OFDM-et", jo: false },
                { valasz: "WiFi", jo: true },
                { valasz: "Bluetooth", jo: false }
              ]
            },
            { kerdes: "Jel�lje meg a hamis �ll�t�s(oka)t az al�bbiak k�z�l!",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Az �ramk�rkapcsolt h�l�zat m�k�d�se csak �sszek�ttet�s-mentes m�don lehets�ges.", jo: true },
                { valasz: "A csomagkapcsolt h�l�zat csak �sszek�ttet�s-mentes m�don m�k�dhet.", jo: true },
                { valasz: "Az �ramk�rkapcsolt h�l�zat csak �sszek�ttet�s alap� m�don m�k�dhet", jo: false },
                { valasz: "Az �ramk�rkapcsolt h�l�zat m�k�dhet �sszek�ttet�s alap� �s �sszek�ttet�s-mentes m�don.", jo: true }
              ]
            },
            { kerdes: "A 802.11-ben alkalmazott �tk�z�selker�l�s (Collision Avoidance) sokkal nagyobb h�l�zati kihaszn�lts�got tesz lehet�v�, mint az �tk�z�sdetekt�l�s.",
              tipus: "igazhamis",
              valasz: true
            },
            { kerdes: "Milyen alapvet� m�dokon lehet tov�bb�tani a felhaszn�l�i jelz�seket a h�l�zatban?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A t�bbi v�lasz k�z�l egyik sem helyes", jo: false },
                { valasz: "S�von k�v�li (out-of-band) m�dszerrel.", jo: true },
                { valasz: "S�von bel�li (in-band) m�dszerrel.", jo: true }
              ]
            },
            { kerdes: "Milyen absztrakt alkot�elemekb�l �p�thet�k fel az inform�ci�tov�bb�t� h�l�zatok?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "f�nyvezet�kb�l", jo: false },
                { valasz: "v�gpontokb�l (end system)", jo: true },
                { valasz: "csom�pontokb�l (node)", jo: true },
                { valasz: "r�di�csatorn�kb�l", jo: false },
                { valasz: "t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "�sszek�ttet�sekb�l (link)", jo: true }
              ]
            },
            { kerdes: "Mi a l�nyeges elt�r�s az IEEE 802.11-es WLAN szabv�nyv�ltozatok k�z�tt?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Csak n�melyik�k kompatibilis az �j 802.16 szabv�nnyal", jo: false },
                { valasz: "Elt�r� m�don alak�tj�k ki a kereteket", jo: false },
                { valasz: "M�s a logikai link-vez�rl�s�k", jo: false },
                { valasz: "A t�bbi v�lasz egyike sem helyes.", jo: true }
              ]
            },
            { kerdes: "A 802.16 fizikai r�tegbeli jellemz�it �gynevezett profilok �rj�k le.",
              tipus: "igazhamis",
              valasz: true
            },
            { kerdes: "Az al�bbiak k�z�l mely(ek) jel�lhet(nek) mobil !WiMAX szabv�nyt? ",
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
            },
			       { kerdes: "Milyen kieg�sz�t�sekre van sz�ks�g a sz�les �rtelemben vett routingot illet�en, ha mobil v�gpontokat is meg akarjuk engedni a h�l�zatban?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Idegen (foreign) �gyn�k", jo: true },
                { valasz: "Otthoni (home) �gyn�k", jo: true },
                { valasz: "A mobil v�gpont felk�sz�t�se az �gyn�kkel val� p�rbesz�dre", jo: true },
                { valasz: "A mobil v�gpont mozg�si jellemz�inek korl�toz�sa", jo: false }
              ]
            },
            { kerdes: "Milyen inform�ci�t gy�jthet�nk a h�l�zat �llapot�r�l az �tvonalt�bl�k kit�lt�s�hez?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Hol helyezkednek el f�ldrajzilag a csom�pontok", jo: false },
                { valasz: "Az egyes csom�pontok melyik m�sik csom�pontokkal vannak �sszek�tve", jo: true },
                { valasz: "Az egyes csom�pontok melyik v�gpontokat (bele�rtve a LAN-okat) szolg�lj�k ki", jo: true }
              ]
            },
            { kerdes: "Routing csak �sszek�ttet�smentes csomagkapcsolt h�l�zatban van, mert az �ramk�rkapcsolt h�l�zatok dedik�lt �tviteli csatorn�kat haszn�lnak, az �sszek�ttet�s alap� csomagkapcsol�s pedig l�nyeg�ben virtu�lis �ramk�rkapcsol�s",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Milyen inform�ci�t juttatnak el a csom�pontok �s kiknek a link state (�sszek�ttet�s-alap�) routing m�dszer eset�n?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A csom�pontok elomdj�k a szomsz�daiknak a vel�k kapcsolatos tapasztalataikat", jo: false },
                { valasz: "A csom�pontok elmondj�k a h�l�zatr�l alkotott elk�pzel�seiket mindenkinek", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: true, megjegyzes: "mindenkinek elmondj�k a szomsz�daikkal kapcsolatos tapasztalataikat" }
              ]
            },
            { kerdes: "Milyen tulajdons�gai vannak a routing centraliz�lt megold�snak?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Nem biztos�that�, hogy a h�l�zati csom�pontok egys�gesen \"l�ss�k\" a h�l�zatot", jo: false },
                { valasz: "A h�l�zat m�k�d�s�nek ez a legbiztons�gosabb m�dja", jo: false },
                { valasz: "�gy biztos�that� a legk�nnyebben, hogy a h�l�zati csom�pontok egys�gesen \"l�ss�k\" a h�l�zatot", jo: true },
                { valasz: "Nagy kock�zatot jelent az eg�sz h�l�zat m�k�d�s�t biztos�t� centrum meghib�sod�sa", jo: true }
              ]
            },
            { kerdes: "Milyen szerepet j�tszanak az Auton�m Rendszerek (AS) Internet �tvonalir�ny�t�s�ban?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Megnehez�tik a gerincrouterek dolg�t, hogy helyesen �llap�ts�k meg a v�gpontok fel� vezet� legalkalmasabb utat", jo: false },
                { valasz: "Lehet�v� teszik a h�l�zat gerinc r�sz�ben m�k�d� routerek sz�m�ra, hogy a felhaszn�l�i v�gpontok nagysz�m� csoportjait csak egy-egy bejegyz�sk�nt kezelj�k az �tvonalt�bl�ikban", jo: true },
                { valasz: "Lehet�v� teszik a routing feladatok hierarchikus megoszt�s�t a vil�gm�ret� h�l�zatban", jo: true },
                { valasz: "Megnehez�tik az egys�ges (konzisztens) k�p kialak�t�s�t a h�l�zatr�l, mert a belsej�kben szabadon d�nthetnek az alkalmazott routing protokollr�l", jo: false }
              ]
            },
            { kerdes: "Melyik �ll�t�sokat tartja helyesnek az al�bbiak k�z�l?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A routing kiz�r�lag a csomagtov�bb�t�st jelenti az �sszek�ttet�smentes h�l�zatokban", jo: false },
                { valasz: "A routing alatt kiz�r�lag az �tvonalt�bl�k l�trehoz�s�t �rtj�k", jo: false },
                { valasz: "A routingra nincs sz�ks�g az �sszek�ttet�s-alap� h�l�zatokban", jo: false },
                { valasz: "A routing a v�gpontok k�z�tti alkalmas �tvonal kiv�laszt�s�t �s az �gy kiv�lasztott �tvonalon a csomagtov�bb�t�st jelenti", jo: true }
              ]
            },
            { kerdes: "Milyen routing feladatokat jelent a mozg� (a h�l�zatban csatlakoz�si pontot v�ltoztat�) felhaszn�l�nak �rkez� csomag eljuttat�sa a c�mzetthez?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A mobil felhaszn�l� �rtes�ti a partnereit, hogy melyik h�l�zatot sz�nd�kozik megl�togatni, �s �gy azok m�r a megfelel� h�l�zati c�mre k�ldik az �zeneteiket", jo: false },
                { valasz: "A mobil felhaszn�l� ig�nyel egy �gynevezett mozg� IP c�met, �s ezen a h�l�zati protokoll megtal�lja, b�rhol van a h�l�zatban", jo: false },
                { valasz: "A hazai �gyn�k�t (home agent) �rtes�tenie kell az idegen �gyn�knek (foreign agent), hogy egy mobil felhaszn�l� van a h�l�zatban", jo: true },
                { valasz: "Az idegen �gyn�k a hozz� �rkez�, belsej�ben a mobil felhaszn�l�nak sz�l� csomagot k�zbes�ti a hozz� bejelentkezett mobil felhaszn�l�nak", jo: true },
                { valasz: "A hazai �gyn�knek �t kell csomagolnia a mobil felhaszn�l� r�sz�re �rkezett �zenetet, �s elk�ldeni azt az idegen �gyn�kh�z?", jo: true, megjegyzes: "IPv4-ben biztosan" }
              ]
            },
            { kerdes: "A t�vols�g-vektor (routing) m�dszer v�gtelens�gig sz�mol�s�t oly m�don sz�ntethetj�k meg, hogy v�gesre korl�tozzuk a h�l�zatban lehets�ges t�vols�gokat",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "A t�vols�g-vektor (routing) m�dszer a Dijkstra algoritmust haszn�lja a h�l�zatr�l �sszegy�jt�tt inform�ci�b�l az �tvonalt�bl�k kit�lt�s�hez.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Mit neveznek az �tvonalv�laszt�sn�l auton�m rendszernek?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egy �nm�k�d�en, fel�gyelet n�lk�l dolgoz� rendszert", jo: false },
                { valasz: "Olyan h�l�zat, amely maga d�nti el a haszn�lt h�l�zati protokollt", jo: false },
                { valasz: "Egy olyan h�l�zatr�szt, amely nem kapcsol�dik tov�bbi h�l�zatokhoz", jo: false },
                { valasz: "Egy olyan h�l�zatr�sz, amelyen bel�l egys�ges �tvonalv�laszt�si m�dszert alkalmaznak", jo: true }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely(ek) routing feladat(ok)?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Megismerni a h�l�zatot alkot� csom�pontok �s �sszek�t�sek (linkek) aktu�lis strukt�r�j�t, �llapot�t", jo: true },
                { valasz: "Megoldani az aktu�lisan fell�p� �tvonal-kijel�l�si vagy �tv�laszt�si feladatokat", jo: true },
                { valasz: "A h�l�zat aktu�lis �llapot�nak ismeret�ben mindegyik csom�pontban olyan inform�ci�s b�zist gener�lni, amelynek haszn�lat�val meg lehet oldani az �tvonal-kijel�l�si vagy �tv�laszt�si feladatokat", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ],
			  megjegyzes: "Nem egy�rtelm� a di�k alapj�n, hogy ezek lehet-e vagy sem, teh�t itt van egy bizonytalans�gi t�nyez�. Mindenesetre n�h�ny hivatkoz�si alap: http://tools.ietf.org/html/rfc760 http://tools.ietf.org/html/rfc1058 http://en.wikipedia.org/wiki/Routing"
            },
            { kerdes: "Elosztott routing eset�n a csom�pontok �ltal�ban �n�ll�an, saj�t kezdem�nyez�sk�nt k�z�lnek routing inform�ci�t a t�bbiek r�sz�re.",
              tipus: "igazhamis",
              valasz: true
            },
            { kerdes: "Milyen eszk�zt haszn�lnak a csom�pontok az �tvonal-kijel�l�s, illetve az �tv�laszt�s elv�gz�s�re?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Keres�si algoritmusokat", jo: true },
                { valasz: "Sz�m�t�si algoritmusokat", jo: false },
                { valasz: "T�bl�zatokban nyilv�ntartott adatokat", jo: true }
              ]
            },
            { kerdes: "A t�vols�gvektor routing m�dszern�l a csom�pontok a t�bbi csom�pontt�l �LTALUK M�RT T�VOLS�GUKAT k�zlik a szomsz�daikkal.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Milyen nagys�grend� sz�m�t�st ig�nyel a legr�videbb �t meghat�roz�sa egy olyan h�l�zatban, amelynek N csom�pontja �s E �sszek�ttet�se van? (egy �sszef�gg�st, \"k�pletet\", kifejez�st kell megadni)",
              tipus: "valaszolos",
              valasz: "O(!ElogE)"
            },
            { kerdes: "Mi a szerepe, jelent�s�ge a _multicast routing_-nak, �s melyek a jellemz�i?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A c�mzetteket az egyedi c�meik alapj�n, azok �gyes t�m�r�t�s�vel azonos�tja", jo: false },
                { valasz: "A c�mzettek azonos�t�s�ra nem a csoporttagok egyedi c�meinek list�j�t haszn�lja, hanem egy csoportc�met", jo: true },
                { valasz: "Lehet�v� teszi k�l�nb�z� csomagoknak ugyanahhoz a c�mzetthez val� hat�kony eljuttat�s�t", jo: false },
                { valasz: "Lehet�v� teszi ugyanannak a csomagnak t�bb c�mzetthez val� hat�kony eljuttat�s�t", jo: true }
              ]
            },
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
            },
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
            },
			        { kerdes: "Mi�rt sz�ks�ges a TCP �sszek�ttet�s l�trehoz�s�n�l a \"h�romutas k�zfog�s\" harmadik l�p�se?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Val�j�ban nem sz�ks�ges, csak az \"egys�ges\" elj�r�s miatt haszn�lj�k", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Mert �gy a \"h�vott\" f�l megtudja, hogy a v�lasza meg�rkezett a kezdem�nyez�h�z.", jo: true },
                { valasz: "Nincsen harmadik l�p�se a \"h�romutas k�zfog�snak\"", jo: false }
              ]
            },
            { kerdes: "Milyen feladatokat r� a h�l�zati csom�pontokra a TCP �sszek�ttet�s alap� m�k�d�se?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�.", jo: true },
                { valasz: "Az �sszek�ttet�s ment�n �rintett csom�pontokon fel kell jegyezni az �sszek�ttet�s param�tereit", jo: false },
                { valasz: "Az �sszek�ttet�s ment�n �rintett csom�pontokon er�forr�sokat kell foglalni az �sszek�ttet�s kiszolg�l�s�ra", jo: false },
                { valasz: "A kapcsolat param�tereit a szomsz�dos csom�pontokkal k�z�lni kell", jo: false }
              ],
              megjegyzes: "Pl. a routerek, mint h�l�zati csom�pontok, a h�l�zati r�tegben helyezkednek el, �gy nem is tudj�k, hogy TCP vagy nem TCP sz�ll�t�si r�tegen t�rt�nik a kommunik�ci�. �gy nem is tudnak emiatt plusz feladatokat elv�gezni miatta."
            },
            { kerdes: "Mik k�z�tt val�s�t meg logikai kapcsolatot a sz�ll�t�si r�teg?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A h�l�zati c�mekkel azonos�tott h�l�zati csatlakoz�si pontok k�z�tt", jo: false },
                { valasz: "Az adatkapcsolati c�mekkel azonos�tott h�l�zati csatol�eszk�z�k k�z�tt", jo: false },
                { valasz: "Egyik v�lasz sem j�.", jo: true }
              ],
              megjegyzes: "Sz�ll�t�si r�teg: alkalmaz�sok (process) k�z�tti logikai kapcsolatok (teh�t programok k�z�tti kapcsolatot hoz l�tre)"
            },
            { kerdes: "Mit ellen�riz az UDP-datagramm hibaellen�rz� k�dja (checksum)? ",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Az UDP- �s az IP-fejr�szt egy�ttesen", jo: false, megjegyzes: "IPb�l csak 3 mez�t ellen�riz, nem mindet" },
                { valasz: "Az eg�sz UDP-datagrammot", jo: false, megjegyzes: "IPb�l is ellen�riz r�szeket, de nem mindent" },
                { valasz: "Csak az UDP-fejr�szt", jo: false, megjegyzes: "IPb�l is ellen�riz r�szeket" },
                { valasz: "Az UDP-fejr�szt �s az IP-c�meket", jo: false, megjegyzes: "Az IPb�l m�g a protocol mez�t is" },
                { valasz: "Egyik v�lasz sem j�", jo: true }
              ],
              megjegyzes: "A k�vetkez�kb�l gener�l�dik a checksum: IP[Source Address, Dest Address, Protocol], UDP[Length], UDP csomag TELJES tartalma. Teh�t egyik sem j�."
            },
            { kerdes: "Hogyan lehet haszn�lni a port-sz�mokat az alkalmaz�sok azonos�t�s�ra?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Mindig le kell k�rdezni az alkalmaz�st, hogy milyen sz�m� porton fogad �zeneteket", jo: false },
                { valasz: "Sorsolni kell egy azonos�t�t, �s azt szabadon lehet haszn�lni b�rmely alkalmaz�s el�r�s�re", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: true }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely(ek) nem a TCP feladata(i)?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Forgalomszab�lyoz�s", jo: false },
                { valasz: "A felsoroltak k�z�l egyik sem feladata", jo: false },
                { valasz: "�tvonalv�laszt�s.", jo: true },
                { valasz: "V�lt�s a karakterk�szletek k�z�tt.", jo: true },
                { valasz: "Sorrendhelyes �tvitel", jo: false }
              ]
            },
            { kerdes: "Mi azonos�tja egy UDP adatmez�j�nek felad�j�t �s c�mzettj�t?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�.", jo: true },
                { valasz: "Kiz�r�lag az IP c�mek, mivel az UDP pszeudo fejen kereszt�l belesz�lnak az ellen�rz� �sszegbe", jo: false },
                { valasz: "Az ellen�rz� �sszeg, mivel az igen nagy val�sz�n�s�ggel egyedi", jo: false },
                { valasz: "Kiz�r�lag a port-sz�mok, mivel azok egyediek", jo: false }
              ]
            },
            { kerdes: "A TCP/IP architekt�ra eset�n a h�l�zatnak mely elemei vesznek r�szt a sz�ll�t�si r�tegbeli feladatok ell�t�s�ban?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "A v�gpontok �s a k�zbens� csom�pontok is.", jo: false },
                { valasz: "Csak a k�zbens� csom�pontok", jo: false },
                { valasz: "Csak a v�gpontok", jo: true }
              ],
			  megjegyzes: "SZ�LL�T�SI r�tegr�l k�rdez!"
            },
            { kerdes: "Milyen szolg�ltat�s(oka)t ny�jt az UDP?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik felsorolt szolg�ltat�st sem ny�jtja", jo: false },
                { valasz: "Portkezel�st.", jo: true },
                { valasz: "Hibav�d� k�dol�st a teljes UDP PDU-ra", jo: false },
                { valasz: "Torl�d�svez�rl�st", jo: false },
                { valasz: "Sorrendhelyes �tvitelt", jo: false }
              ]
            },
            { kerdes: "Hogyan viszonyul a TCP/IP protokoll-architekt�ra az adatkapcsolati r�teghez?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "R�szletesen meghat�rozza annak protokolljait", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Egy�ltal�n nem foglalkozik az adatkapcsolati r�teggel", jo: false },
                { valasz: "Csak az adatkapcsolati r�tegben haszn�lt protokollokhoz t�rt�n� csatlakoz�sr�l (interf�szel�sr�l) rendelkezik", jo: true }
              ]
            },
            { kerdes: "Hogyan hat�rozhat� meg a go-back-n �ltal el�rhet� csatornakihaszn�l�s?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Viszony�tani kell a hib�s csomagok gyakoris�g�t a hib�s + ism�telt csomagok gyakoris�g�hoz", jo: false },
                { valasz: "Viszony�tani kell a sikeres csomagok gyakoris�g�t a sikeres + ism�telt csomagok gyakoris�g�hoz", jo: true },
                { valasz: "Viszony�tani kell a hib�s csomagok gyakoris�g�t a sikeres + ism�telt csomagok gyakoris�g�hoz", jo: false },
                { valasz: "A t�bbi v�lasz k�z�l egyik sem helyes", jo: false },
                { valasz: "Viszony�tani kell a sikeres csomagok gyakoris�g�t a hib�s + ism�telt csomagok gyakoris�g�hoz", jo: false }
              ]
            },
            { kerdes: "Mi�rt dolgoztak ki k�t sz�ll�t�si protokollt a TCP/IP architekt�r�ban?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Az els� haszn�lat�n�l nyert tapasztalatok alapj�n jav�tottak", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Mindk�t protokoll ugyanazt a szolg�ltat�st ny�jtja, �gy l�nyeg�ben versenyt�rsai egym�snak", jo: false },
                { valasz: "L�nyeg�ben kidolgoztak egy bonyolultabb (jobb szolg�ltat�st ny�jt�), �s egy egyszer�bb protokollt kev�s szolg�ltat�ssal.", jo: true }
              ]
            },
            { kerdes: "Mit kell �rteni azon, hogy a TCP pufferelt �tvitelt val�s�t meg?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A TCP t�rolja az adatokat, �s csakis az alkalmaz�s parancs�ra tov�bb�tja azokat", jo: false },
                { valasz: "Egyik v�lasz sem j�.", jo: true },
                { valasz: "Az alkalmaz�snak kell t�roli a m�g nem nyugt�zott adatokat", jo: false }
              ]
            },
            { kerdes: "Mit jelent a TCP b�jt-stream sz�ll�t�si szolg�ltat�s�ban a strukt�r�latlans�g?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�.", jo: false },
                { valasz: "Nem veszi tekintetbe az alkalmaz�s �ltal haszn�lt t�rdel�st", jo: true },
                { valasz: "Nincs tekintettel a b�jt-sorrendre", jo: false }
              ],
              megjegyzes: "With stream data transfer,TCP delivers an unstructured stream of bytes identified by sequence numbers. This service benefits applications because that the application does not have to chop data into blocks before handing it off to TCP. TCP can group bytes into segments and passes them to IP for delivery. -vagyis az alkalmaz�snak nem is kell t�rdelnie."
            },
            { kerdes: "Milyen \"eszk�z�k\" �llnak rendelkez�sre a csomaghib�k kezel�s�re?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Pozit�v nyugta hi�nya vagy negat�v nyugta k�ld�se", jo: true },
                { valasz: "Konvol�ci�s k�d alkalmaz�sa", jo: true, megjegyzes: "(egy fajta hibajav�t� k�d)" },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Hibafelder�t� k�dol�ssal ellen�rizhet� a csomag \"�ps�ge\"", jo: true },
                { valasz: "Pozit�v nyugta k�ld�se", jo: false, megjegyzes: "(Csak ennek hi�nya seg�t benn�nket)" }
              ],
            },
            { kerdes: "Mi a szerep�k a forgalomszab�lyoz�sban a forgalomle�r�knak (traffic descriptors)?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Lehet�v� teszik a h�l�zat megfelel� m�retez�s�t", jo: false },
                { valasz: "Lehet�v� teszik, megalapozz�k szolg�ltat�si szerz�d�sek megk�t�s�t", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Lehet�v� teszik a szolg�ltat� r�sz�re a h�l�zati szolg�ltat�s ig�nybev�tel�nek ellen�rz�s�t", jo: true }
              ]
            },
            { kerdes: "A csomagok sorsz�moz�s�val az al�bbiak k�z�l mely hib�k jav�that�ak tov�bbi hibajav�t� m�dszerek alkalmaz�sa n�lk�l?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Csomagok sorrendj�nek megv�ltoz�sa", jo: true },
                { valasz: "Csomagok t�bbsz�r�z�d�se", jo: true },
                { valasz: "A t�bbi v�lasz k�z�l egyik sem helyes", jo: false },
                { valasz: "Csomagveszt�s", jo: false }
              ]
            },
            { kerdes: "Mely �ll�t�sok igaz a Forward Error Correction hibajav�t� elj�r�sra?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A fogad� tov�bb�tja a hib�s �zenetet a k�ld�nek, hogy az a jav�t�st elv�gezhesse", jo: false, megjegyzes: "Ez volt j�nak megjel�lve, h�t WTF... 1: helyben jav�tja, �gy nem k�ldd vissza semmit, 2: az�rt k�ldj�k vissza, hogy a K�LD� megjav�tsa!? :D akkor nem lenne egyszer�bb a k�ld�nek �jrak�ldenie?" },
                { valasz: "Hat�konys�ga f�gg a k�r�lfordul�si id�t�l", jo: false, megjegyzes: "Nem, mert ilyenkor a v�tel hely�n t�rt�nik a jav�t�s, nem kell semmit se visszak�ldeni" },
                { valasz: "Csak hibajelz� k�dol�st haszn�l", jo: false, megjegyzes: "!HibaJAV�T� k�dol�st haszn�l" },
                { valasz: "A t�bbi v�lasz k�z�l egyik sem helyes.", jo: true }
              ],
              megjegyzes: "Forward Error Correction (FEC) = megel�z� hibajav�t�s == hibajav�t� k�dol�s. A vev� megpr�b�lja kijav�tani a hib�kat a redund�ns, hibajav�t� k�d seg�ts�g�vel, amit a k�ld� belerakott a csomagba."
            },
            { kerdes: "Mi�rt haszn�l a TCP 32 bit hossz� sorsz�mot?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Mert �gy t�bb, mint n�gymilli�rd szegmenst el lehet k�ldeni an�lk�l, hogy a sz�m k�rbefordulna", jo: true, megjegyzes: "Wikiben ez van, de ez nem biztos l�sd alul" },
                { valasz: "Semmi jelent�s�ge, csak kedvelt a 4 b�jt hossz� egys�g ebben a k�rben", jo: false }
              ],
			  megjegyzes: "It was determined that to help ensure the integrity of TCP/IP connections, every stream should be assigned a unique, random sequence number. The TCP sequence number field is able to hold a 32-bit value, and 31-bit is recommended for use by RFC specifications. An attacker wanting to establish connection originating from a fake address, or to compromise existing TCP connection integrity by inserting malicious data into the stream would have to know the Initial Sequence Number -vagyis szerintem a biztons�g miatt van 32 bit."
            },
            { kerdes: "Melyik �ll�t�sok igazak a Automatic Repeat Request hibajav�t� megold�sra?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A vev� megpr�b�lja jav�tani a hib�t, �s ha az nem siker�l, akkor ism�tl�st k�r a k�ld�t�l.", jo: false },
                { valasz: "A t�bbi v�lasz k�z�l egyik sem helyes", jo: false },
                { valasz: "Hat�konys�ga f�gg a k�r�lfordul�si id�t�l", jo: true },
                { valasz: "Csomagveszt�ses csatorn�n cs�kken a hat�konys�ga", jo: true }
              ]
            },
            { kerdes: "K�t �llom�s egym�s k�z�tt cs�sz�ablakos (sliding window) forgalomszab�lyoz�st haszn�l. A kommunik�ci�s csatorna 1Mbit/sec �tviteli sebess�get tesz lehet�v� a k�ld�t�l a fogad� fel�. Tegy�k fel, hogy az ad� �llom�s 1000bit hossz� csomagokat k�ld. A link k�r�lfordul�si ideje (RTT) 5 msec, a cs�sz�ablak m�rete pedig 3 csomagnyi. Mekkora a csatorna kihaszn�lts�ga?",
              tipus: "valaszolos",
              valasz: "Kihaszn�lts�g = %$ \\frac{3*\\frac{1000}{10^6}}{5*10^{-3}+\\frac{1000}{10^6}}=0,5 $% (l�sd SzgHalokGyakorlatok)"
            },
			       { kerdes: "Mi a f� jellemz�je a Real-time Transport Protocol-nak?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A TCP-UDP egy lehets�ges alternat�v�ja", jo: false },
                { valasz: "Biztos�tja a m�dia sz�ll�t�s�nak min�s�g�t", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: true }
              ],
			  megjegyzes: "Mi az RTP �s mi nem: 1. a payloadj�ban m�dia-, pl. besz�dinform�ci�t hordoz 2. sz�ll�t�si protokoll felett m�k�dik 3. t�mogatja a m�diafolyamok (streamek) sz�ll�t�s�t 4.nem ny�jt QoS garanci�t"
            },
            { kerdes: "Melyek a Real Time Streaming Protocol (RTSP) legf�bb jellemz�i?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Ez egy vez�rl� protokoll, amely nem veszt r�szt a felhaszn�l�i adatok sz�ll�t�s�ban", jo: true },
                { valasz: "Ezt dolgozt�k ki az RTP felv�lt�s�ra", jo: false }
              ]
            },
            { kerdes: "Milyen logikai r�szeket tartalmaz a Session Initiation Protocol User Agent-je?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "User Agent Server", jo: true },
                { valasz: "User Agent Controller", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ]
            },
            { kerdes: "Mi sz�ks�g van a m�diafolyam darabjainak \"id�b�lyegz�s�re\"?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Val�j�ban nem felt�tlen�l sz�ks�ges, mert a sorsz�mok �s a t�pusra vonatkoz� jellemz�k alapj�n egy�bk�nt is lehets�ges a helyes rekonstrukci�", jo: false },
                { valasz: "Az�rt kell, mert a k�ld� �s a fogad� �r�i nem j�rnak pontosan egy�tt", jo: false },
                { valasz: "Egyik v�lasz sem j�.", jo: true, megjegyzes: "Timestamp: Az RTP csomag els� oktettj�nek megfelel� poz�ci� val�di ideje a m�diafolyamban" }
              ]
            },
            { kerdes: "Milyen m�don m�k�dik egy�tt a Session Initiation Protocol eset�n a Proxy Server �s a Location Server?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Nincs k�z�tt�k semmilyen egy�ttm�k�d�s", jo: false },
                { valasz: "A Proxy Server a User Agent Client-t�l �rkez� INVITE �zenet c�mzettj�t ellen�rzi a Location Servern�l, �s ezut�n tov�bb�tja a h�votthoz", jo: true, megjegyzes: "A registrar-on kereszt�l ellen�rzi a Location Servern�l" }
              ]
            },
            { kerdes: "Melyek a Session Initiation Protocol legfontosabb jellemz�i?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Kombin�lhat� mindenf�le web-alap� szolg�ltat�ssal", jo: true },
                { valasz: "IP-k�zpont�", jo: true, megjegyzes: "ink�bb azt mondan�m, hogy IP f�l�tt - pontosabban UDP/IP vagy TCP/IP f�l�tt m�k�dik" },
                { valasz: "�llapotalap�, bin�ris protokoll", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ]
            },
            { kerdes: "Hogyan oldj�k meg azt, hogy az RTCP �ltal keltett forgalom �sszer� hat�rokon bel�l maradjon?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Csak a vev�-v�gpontok k�ldenek jelent�seket", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: true, megjegyzes: "Korl�toz�s: 5!% RTCP forgalom, t�bbi RTP" },
                { valasz: "A szinkroniz�l� forr�s (SSRC) meghat�rozza a v�gpontok report-jainak gyakoris�g�t", jo: false }
              ]
            },
            { kerdes: "Mi�rt nevezz�k az RTP-t real-time protokollnak?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Mert seg�ti a val�sidej� forgalom tov�bb�t�s�t fontos jellemz�k �tvitel�vel.", jo: true },
                { valasz: "Egyik v�lasz sem helyes", jo: false },
                { valasz: "Mert k�sleltet�s �s veszt�s n�lk�l �tviszi a val�sidej� forgalmat", jo: false },
                { valasz: "Mert folyamatosan �tviszi a val�di id�t", jo: false }
              ]
            },
            { kerdes: "Mi a szerepe a H.323 alapj�n m�k�d� h�l�zatban a Gatekeeper-nek?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Vez�rli a konferencia-�sszek�ttet�seket", jo: false },
                { valasz: "Minden esetben rajta kereszt�l folyik a h�v�svez�rl�s", jo: false },
                { valasz: "Biztos�tja az egy�ttm�k�d�st m�s h�l�zatokkal", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: true, megjegyzes: "Beenged�s-szab�lyoz�s, maga a h�v�svez�rl�s opcion�lisan mehet a GK-en kereszt�l -a m�dia nem-, er�forr�s-menedzsment, autentik�ci�" }
              ]
            },
            { kerdes: "Mi az alapvet� szerepe az RTCP-nek?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Lehet�v� teszi egy m�dia session r�sztvev�inek az �tviteli jellemz�k megfigyel�s�t", jo: true },
                { valasz: "Lehet�v� teszi egy m�dia session r�sztvev�inek az �tviteli jellemz�k garant�l�s�t", jo: false },
                { valasz: "Lehet�v� teszi m�dia session-�k l�trehoz�s�t �s elbont�s�t", jo: false }
              ],
			  megjegyzes: "RTCP: Real-time Transport Control Protocol"
            },
            { kerdes: "T�m�r�tett fejr�szek eset�n kb. h�ny sz�zal�kkal n� az �tvitelisebess�g-ig�ny a besz�d �ltal ig�nyelt nett� sebess�ghez k�pest ?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Kevesebb, mint 1%-al", jo: false },
                { valasz: "Nagym�rt�kben f�gg a besz�dt�m�r�t�s m�rt�k�t�l, �s �gy n�h�ny %-t�l 10�20%-ig v�ltozhat", jo: true }
              ]
            },
            { kerdes: "Melyik NEM tartozik a SIP �p�t�elemek k�z� az al�bbiak k�z�l?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Foreign Agent", jo: true },
                { valasz: "Redirection Server", jo: false },
                { valasz: "Registrar", jo: false },
                { valasz: "User Agent", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ],
			  megjegyzes: "M�g lehet a Location Server, b�r ezt nem eml�tik explicit �p�t�elemk�nt a di�k."
            },
            { kerdes: "Milyen feladatokat l�t el a Session Initiation Protocol?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "T�mogatja a mobilit�st.", jo: true },
                { valasz: "Egy kommunik�ci�s session megnyit�s�val, fenntart�s�val, jellemz�ivel kapcsolatos inform�ci�kat tov�bb�tja, kezeli.", jo: true },
                { valasz: "Kezeli a felhaszn�l�k helyzetinform�ci�it, t�mogatja pl. a h�v�s�tad�st.", jo: true }
              ]
            },
            { kerdes: "Miben k�l�nb�zik egym�st�l a Session Initiation Protocol-ban a Request �s a Response �zenetek fel�p�t�se?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: true },
                { valasz: "Az �zenetek fejr�sze teljesen k�l�nb�z�", jo: false },
                { valasz: "Csak az �zenetek t�rzsr�sze (body) k�l�nb�zik", jo: false }
              ]
            },
            { kerdes: "Milyen szolg�ltat�sokat ny�jt az RTP a m�diastreaming-alkalmaz�snak?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "�rtes�ti a h�l�zati csom�pontokat a m�diafolyam kiszolg�l�si ig�nyeir�l", jo: false },
                { valasz: "Megjel�li a m�diafolyam darabjainak keletkez�si id�pontj�t.", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Hordozza a m�diat�pus jellemz�it.", jo: true, megjegyzes: "Profile-ok" },
                { valasz: "Sorsz�mozza a m�diafolyam darabjait.", jo: true, megjegyzes: "Sequencenumber" }
              ]
            },
            { kerdes: "A Real-time Transport Protocol �ltal haszn�lt id�b�lyeg (timestamp) lehet�v� teszi:",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A csomag tartalm�nak a megfelel� id�ben t�rt�n� megjelen�t�s�t.", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "A csomagveszt�s kider�t�s�t", jo: false }
              ],
			  megjegyzes: "Timestamp - Az RTP csomag els� oktettj�nek megfelel� poz�ci� val�di ideje a m�diafolyamban"
            },
            { kerdes: "Miben k�l�nb�zik a SIP �zenetek form�ja a H.323 �zenetek�t�l?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: true },
                { valasz: "A SIP �zenetek sokkal t�m�rebbek, mint a H.323 �zenetei", jo: false, megjegyzes: "SIP j� kis \"szaftos\" HTML szer� k�dot ad" },
                { valasz: "A H.323 �zenetei sz�vegesek, szemben a SIP �zenetek bin�ris form�j�val!", jo: false, megjegyzes: "SIP sz�veges" }
              ]
            },
            { kerdes: "Milyen feladatok elv�gz�s�nek m�dj�r�l int�zkedik a H.323 szabv�nycsal�d?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A csomag- �s �ramk�rkapcsolt h�l�zatok k�z�tti egy�ttm�k�d�sr�l", jo: true },
                { valasz: "A jelz�s�tvitelr�l", jo: true },
                { valasz: "M�dia (audi�-, vide�-) k�dol�sr�l", jo: true },
                { valasz: "A m�diafolyam szervez�s�r�l (streaming)", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ]
            },
            { kerdes: "Hogyan val�s�tja meg a Session Initiation Protocol a felhaszn�l�k k�vet�s�t?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Nem val�s�t meg k�vet�st, a h�v� f�lnek kell kider�tenie a h�vott aktu�lis c�m�t", jo: false },
                { valasz: "Ezt a Proxy Server val�s�tja meg", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "A Redirect Server tudja meg a Location Server-t�l az aktu�lis c�met.", jo: true }
              ]
            },
			{ kerdes: "Milyen feladatot l�t el �s mi a jellemz�je a Session Description Protocol-nak (SDP)?",
			tipus: "tobbet_jelolo",
			valaszok: [
                { valasz: "Meghat�rozza a kapcsolatban r�sztvev�knek az inform�ci�cser�re vonatkoz� legfontosabb jellemz�it (a m�dia t�pus�t, a haszn�lt portot, stb", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Val�j�ban ezt nem is igaz�n lehet protokollnak nevezni, ink�bb egy le�r� forma", jo: true },
              ]
            },
			       { kerdes: "Mekkora lesz a besz�d kezdeti csomagol�si k�sleltet�se ATM cell�k �s szabv�nyos t�m�r�tetlen digitaliz�l�s eset�n?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "10 ms", jo: false },
                { valasz: "20 ms", jo: false },
                { valasz: "Att�l f�gg, h�ny byte-ot tesz�nk bele az ATM cella v�ltoz� hossz�s�g� hasznos r�sz�be", jo: false },
                { valasz: "Egyik v�lasz sem helyes", jo: true }
              ]
            },
            { kerdes: "Az ATM-n�l egy szolg�ltat�si oszt�lyt az al�bbiak jellemeznek:",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Forgalomle�r�k �s !QoS param�terek", jo: true },
                { valasz: "!QoS param�terek", jo: false },
                { valasz: "Forgalomle�r�k", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ]
            },
            { kerdes: "Mit �rt�nk aszinkron �tviteli �s kapcsol�si m�don (ATM)?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Az �ramk�rkapcsol�snak egy speci�lis v�ltozat�t", jo: false },
                { valasz: "Az �tvitel �s a kapcsol�s nem fut egy�tt, nincs szinkronban", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: true }
              ]
            },
            { kerdes: "Melyek ATM szolg�ltat�si oszt�lyok az al�bbiak k�z�l:",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "UDP", jo: false },
                { valasz: "UBR", jo: true },
                { valasz: "CBR", jo: true },
                { valasz: "Egyik sem szolg�ltat�si oszt�ly", jo: false },
                { valasz: "Mindegyik szolg�ltat�si oszt�ly", jo: false }
              ]
            },
            { kerdes: "Az ATM a sz�lesk�rben elterjedt B-ISDN h�l�zatban haszn�lt �tviteli �s kapcsol�si m�dszer.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Mi�rt v�lasztott�k 48 oktetre (byte) az ATM cella hasznos r�sz-�t (payload)?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Mert ez kedvez� az adattov�bb�t�s szempontj�b�l", jo: false },
                { valasz: "Mert ezt tal�lt�k elfogadhat� kompromisszumnak az adat- �s a besz�dtov�bb�t�s elt�r� k�vetelm�nyeire", jo: true },
                { valasz: "Mert ez 2-nek eg�ssz�m� hatv�nya", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ]
            },
            { kerdes: "Melyik, az eddigiekben megismert alapvet� funkci�kat NEM alkalmazz�k az ATM-ben?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Hibakezel�s", jo: true, megjegyzes: "l�sd: https://wiki.sch.bme.hu/bin/view/Infoalap/SzgHalokVillamOsszes" },
                { valasz: "C�mz�s", jo: false },
                { valasz: "�temez�s", jo: false },
                { valasz: "Forgalomenedzsment", jo: false },
                { valasz: "H�v�svez�rl�s", jo: false },
                { valasz: "Routing", jo: false }
              ]
            },
            { kerdes: "Mely alapvet� h�l�zati funkci�k ker�lnek alkalmaz�sra az ATM-n�l?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Torl�d�svez�rl�s", jo: true },
                { valasz: "A fentiek k�z�l egyik sem", jo: false },
                { valasz: "Forgalomszab�lyoz�s", jo: false },
                { valasz: "Hibajav�t�s", jo: false }
              ]
            },
            { kerdes: "Az ATM egyik f� jellemz�je, hogy �sszek�ttet�senk�nt k�pes a k�v�nt szolg�ltat�si min�s�get biztos�tani.",
              tipus: "igazhamis",
              valasz: true
            },
            { kerdes: "Az ATM fejl�c a csomag teljes m�ret�nek a 10%-a.",
              tipus: "igazhamis",
              valasz: true
            },
            { kerdes: "Hogyan haszn�lj�k az ATM-ben a c�mk�k k�t hierarchiaszintj�t?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Vannak \"virtu�lis �t\"-kapcsol�k �s \"virtu�lis csatorna\"-kapcsol�k", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Nem haszn�lj�k egy�ltal�n", jo: false }
              ]
            },
            { kerdes: "Mit �rt�nk aszinkron �tviteli �s kapcsol�si m�don (ATM)?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Az �tvitel �s a kapcsol�s nem fut egy�tt, nincs szinkronban", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: true },
                { valasz: "Az �ramk�rkapcsol�snak egy speci�lis v�ltozat�t", jo: false }
              ]
            },
			     { kerdes: "Mi a legf�bb jellemz� a !DiffServ csom�pontok (core routerek) viselked�s�re? V�lasszon egy v�laszt.",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Nem t�r�dnek egym�ssal, hanem csak eszk�zeiket haszn�lva (sorba�ll�t�s, csomageldob�s) teljes�tik a jel�lt csomagok tov�bb�t�s�t", jo: true },
                { valasz: "Az edge routerek �ltal megjel�lt csomagok tov�bb�t�s�t egym�ssal egy�ttm�k�dve (tennival�ikat egyeztetve) v�gzik", jo: false }
              ]
            },
            { kerdes: "Milyen m�dszereket dolgoztak ki az IP-t haszn�l� h�l�zatokban a Best Effort-ot meghalad� szolg�ltat�si min�s�g biztos�t�s�ra?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: true },
                { valasz: "Az !IntServ �s a !DiffServ m�dszert, amelyek azonosan alkalmasak b�rmilyen !QoS-t biztos�tani", jo: false },
                { valasz: "Semmilyet, mert az IP nem lehet alkalmas !QoS biztos�t�s�ra", jo: false }
              ]
            },
            { kerdes: "Milyen f� jellemz�i vannak az !IntServ r�sz�re javasolt jelz�s�tviteli protokollnak?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "�gynevezett vev�oldali er�forr�s-foglal�st alkalmaz", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Mindig csak egyir�ny� (simplex) csatorn�t foglal le", jo: true },
                { valasz: "Csak pont-pont kommunik�ci�ra alkalmas", jo: false },
                { valasz: "Felt�tlen�l megk�veteli az er�forr�sok haszn�lat ut�ni felszabad�t�s�t", jo: false, megjegyzes: "mert az ig�nyek elhalnak " }
              ]
            },
            { kerdes: "Haszn�lnak-e b�rmilyen feljegyz�st (�llapotnyilv�ntart�st) az �sszek�ttet�s mentes csomagkapcsolt h�l�zat csom�pontjai?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Nem haszn�lnak mert nincs r� sz�ks�g�k, hiszen minden csomagot az el�z�kt�l f�ggetlen�l kezelnek", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Term�szetesen haszn�lnak, mert csak �gy k�pesek a hozz�juk �rkez� csomagok �rtelmes tov�bb�t�s�ra", jo: false }
              ]
            },
            { kerdes: "Hogyan m�k�dik a Label Switching Router (LSR)?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Teljesen megegyez�en a hagyom�nyos routerrel, de gyorsabban", jo: false },
                { valasz: "L�nyeg�ben �gy, mint az adatkapcsolati r�tegben m�k�d� \"kapcsol�k\"", jo: true }
              ]
            },
            { kerdes: "Mi volt az egyik legfontosabb �szt�nz�je az MPLS kidolgoz�s�nak?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A hat�konys�g n�vel�se az IP routerekben", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "�sszekapcsolni a k�l�nb�z� h�l�zati protokollokat", jo: false }
              ]
            },
            { kerdes: "Milyen alkalmaz�s-fajt�kat ismer el, �s azokat hogyan szolg�lja ki az !IntServ m�dszer?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Real-time tolerant alkalmaz�s &#8594; Controlled Load Service", jo: true },
                { valasz: "Real-time intolerant alkalmaz�s &#8594; Best Effort Service", jo: false },
                { valasz: "Elasztikus alkalmaz�sok &#8594; Guaranted Quality Service", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ]
            },
            { kerdes: "Melyek a c�mkekioszt�s legfontosabb szab�lyai az MPLS-ben?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A c�mkekioszt�s a \"kil�p�\" routert�l indul", jo: true },
                { valasz: "A c�mkekioszt�s csak �gynevezett explicit m�don t�rt�nhet a !QoS szempontjai alapj�n", jo: false },
                { valasz: "L�nyeg�ben nincs is ilyen szab�ly", jo: false },
                { valasz: "A c�mkekioszt�s t�rt�nhet a csom�pontok �ltal l�p�senk�nt", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ]
            },
            { kerdes: "Milyen elemek szolg�lj�k az MPLS megval�s�t�s�t?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A c�mke-kijel�l�st ir�ny�t� protokoll", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "LSR-ek �s LER-ek", jo: true },
                { valasz: "C�mke-kapcsolt utak", jo: true }
              ]
            },
            { kerdes: "Milyen m�don biztos�t ig�ny szerinti kiszolg�l�st az �sszek�ttet�s alap� csomagkapcsol�s (pl ATM)?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Az egyedileg egyeztetett ig�nyek r�sz�re er�forr�sokat foglal, �s a foglalhat� er�forr�sok \"kimer�l�se\" eset�n visszautas�tja az ig�nyeket", jo: false },
                { valasz: "Csak olyan ig�nyeket szolg�l ki, amelyek azonos k�vetelm�nyeket t�masztanak", jo: false },
                { valasz: "�gynevezett beenged�sszab�lyoz�st v�gez.", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ]
            },
            { kerdes: "Milyen elemei vannak a forgalomle�r�snak az !IntServ m�dszerben?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Az elfogadhat� legnagyobb v�d�rm�ret", jo: true },
                { valasz: "A sz�ks�ges legkisebb token-rate", jo: false },
                { valasz: "K�t eleme (k�t csoport), az egyik a forgalomspecifik�ci�, a m�sik az ig�ny megad�sa", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ]
            },
            { kerdes: "Melyik NEM a !DiffServ m�dszer el�ny�s tulajdons�ga?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Biztos�tja a v�gpontok k�z�tti !QoS-t", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Nem ig�nyel jelz�st valamennyi csom�ponton", jo: false },
                { valasz: "Megsz�nteti a gerinch�l�zati csom�pontokon a csomagfolyamonk�nti �llapotnyilv�ntart�st", jo: false },
                { valasz: "A sok munk�t ig�nyl� feladatokat a h�l�zat perem�re helyezi", jo: false }
              ]
            },
            { kerdes: "Ma mit tekinthet�nk az els� �tletnek, amely v�g�l elvezetett az MPLS-hez, �s melyik c�gek javaslatai alapj�n kezd�d�tt meg a szabv�nyos�t�s?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Az els� �tlet a Cisco Tag Switching-je volt, a szabv�nyos�t�s pedig a Toshiba �s az IBM javaslata alapj�n kezd�d�tt", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: true },
                { valasz: "Az els� �tlet az Ipsilon IP Switching-je volt, a szabv�nyos�t�s pedig a Toshiba, a Cisco �s az IBM javaslata alapj�n kezd�d�tt", jo: false }
              ]
            },
            { kerdes: "A h�l�zat melyik r�sz�n �s kinek a hat�sk�r�ben kell kit�lteni a TOS/Traffic Class mez�ket a !DiffServ m�dszer eset�n?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Ezeket a szolg�ltat� fel�gyelete alatt a !DiffServ szolg�ltat�si hat�r�n kell kit�lteni", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Ezeket a felhaszn�l�nak kell kit�lteni, aki nyilv�n a h�l�zat perem�n van", jo: false },
                { valasz: "Ezeket a szolg�ltat�nak kell kit�lteni, aki a h�l�zat hozz�f�r�si- �s gerinc r�sz�nek a hat�r�n van", jo: false }
              ]
            },
            { kerdes: "Melyek az MPLS alapvet� jellemz�i?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "M�dszert biztos�t a glob�lisan egyedi c�meknek fix hossz�s�g� c�mk�kre t�rt�n� lek�pez�s�re", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "M�dszereket ad a k�l�nf�le agreg�lts�g� csomagfolyamok kezel�s�re", jo: true },
                { valasz: "F�ggetlen�l m�k�dik a 2. �s 3. r�tegbeli protokollokt�l", jo: true }
              ]
            },
            { kerdes: "Milyen alapvet� csom�ponti viselked�seket hat�roz meg a !DiffServ?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Guaranted Quality Service", jo: false },
                { valasz: "Assured Forwarding", jo: true },
                { valasz: "Best Effort", jo: false },
                { valasz: "Controlled Load Service", jo: false },
                { valasz: "Expedited Forwarding", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ]
            },
            { kerdes: "Milyen kiszolg�l�st ig�nyel az inform�ci�tov�bb�t� h�l�zatt�l az �gynevezett rideg, merev, intoler�ns alkalmaz�s?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "A legf�bb hangs�lyt az �tviteli k�sleltet�s minimum�nak garant�l�s�ra helyezi", jo: true },
                { valasz: "Rendszerint nem �rdekli az �tviteli sebess�g, csak a hib�tlan �tvitelt tekinti fontosnak", jo: false }
              ]
            },
            { kerdes: "Mi a szerepe a Token Bucket-nek az !IntServ m�dszerben?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Kiz�r�lag a forgalom le�r�s�ra haszn�ljuk", jo: false },
                { valasz: "Kiz�r�lag a forgalom ellen�rz�s�re haszn�ljuk", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: true },
                { valasz: "Kiz�r�lag az i�nyek megad�s�ra haszn�ljuk", jo: false }
              ]
            },
            { kerdes: "Milyen k�vetelm�nyeket t�maszt az inform�ci�-tov�bb�t�si kiszolg�l�ssal szemben az �gynevezett elasztikus alkalmaz�s (az �ltala keltett forgalom)?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "�rz�keny a k�sleltet�s ingadoz�s�ra", jo: false },
                { valasz: "J�l elviseli a n�h�ny %-os csomagveszt�st", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: true },
                { valasz: "Nem �rz�keny kis mennyis�g� hib�ra", jo: false }
              ]
            },
            { kerdes: "Mit �rtenek azon, hogy a !DiffServ a !QoS biztos�t�s�nak \"durva felbont�s�\" m�dszere?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Ez azt jelenti, hogy nem foglalkozik egyedi ig�nyekkel, hanem az azonos kiszolg�l�si min�s�get ig�nyl� forgalmat (f�ggetlen�l eredet�t�l �s c�lj�t�l) egy�ttesen kezeli", jo: true },
                { valasz: "Ezalatt azt �rtik, hogy csak k�tf�le kiszolg�l�si ig�nyt biztos�t: egyik a regular, a m�sik a premium", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ]
            },
            { kerdes: "Milyen alkalmaz�s-fajt�kat ismer el, �s azokat hogyan szolg�lja ki az !IntServ m�dszer?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Elasztikus alkalmaz�sok &#8594; Guaranted Quality Service", jo: false },
                { valasz: "Real-time tolerant alkalmaz�s &#8594; Controlled Load Service", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Real-time intolerant alkalmaz�s &#8594; Best Effort Service", jo: false }
              ]
            },
            { kerdes: "Mi tekinthet� a garant�lt szolg�ltat�si min�s�g biztos�t�s�hoz sz�ks�ges h�l�zati tev�kenys�gek k�z�l a legink�bb er�forr�s-ig�nyesnek?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A h�l�zatban fell�p� t�lzott forgalom eset�n az ig�nyek visszautas�t�sa", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "A h�l�zati csom�pontokban v�gzend� �llapotnyilv�ntart�s", jo: true },
                { valasz: "A felhaszn�l�k kiszolg�l�si ig�nyeinek bejelent�s�re haszn�lt jelz�sek tov�bb�t�sa", jo: false }
              ]
            },
            { kerdes: "Melyek a l�nyeges el�nyei az MPLS-ben k�vetett csomagtov�bb�t�snak?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Az LER-ek a FEC-be sorol�sn�l a c�l-c�men k�v�li szempontokat, jellemz�ket is figyelembe vehetnek", jo: true },
                { valasz: "Azonos jellemz�kkel rendelkez� csomagokat elt�r� m�don sorolhatj�k FEC-ekbe a k�l�nb�z� LER-ek", jo: true },
                { valasz: "Az LSR-eknek nem kell t�lzott k�pess�gekkel rendelkezni�k", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Felad�k�nt meghat�rozhatjuk a csomag �tvonal�t, ha a sz�ks�ges inform�ci�t a csomag mag�val viszi a h�l�zaton kereszt�l", jo: false }
              ]
            },
            { kerdes: "Mire utal az MPLS-ben a Multi Protocol elnevez�s?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Csup�n azt hangs�lyozza, hogy az MPLS megval�s�t�si szab�lya t�bb protokollban van ler�gz�tve", jo: false },
                { valasz: "Val�j�ban arra utal, hogy a m�dszer t�bbf�le h�l�zati- �s adatkapcsolati protokoll eset�n is haszn�lhat�", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ]
            },
            { kerdes: "Hol helyezhet&#245;k el a c�mk�k az MPLS szerint?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "B�rhov�, ahol helyet tal�lunk neki, csak egyeztetni kell a csom�pontokkal", jo: false },
                { valasz: "Kiz�r�lag az adatkapcsolati fej megfelel&#245; mez&#245;j�be", jo: false },
                { valasz: "Kiz�r�lag az adatkapcsolati fej �s a h�l�zati fej k�z�", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ]
            },
            { kerdes: "Milyen lehet&#245;s�g van az MPLS-ben a c�mk�k kioszt�s�ra?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Kiz�r�lag a Label Distribution Protocol haszn�lhat� erre a c�lra", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "A szolg�ltat�nak kell kidolgozni erre vonatkoz� m�dszert", jo: false },
                { valasz: "A routing protokollok kieg�sz�t�sek�nt lehet c�mkesz�toszt�st megval�s�tani", jo: true }
              ]
            },
            { kerdes: "Melyek a legfontosabb meghat�roz�i az ig�nyelt kiszolg�l�si min&#245;s�geknek?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "?? A tov�bb�tand� inform�ci� elviseli-e a tov�bb�t�s sor�n keletkez&#245; k�sleltet�st, k�sleltet�s-ingadoz�st, keletkez&#245; hib�kat, vagy pedig ezek bek�vetkez�se haszn�lhatatlann� teszi az �gy-ahogy tov�bb�tott inform�ci�t", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "?? Az, hogy az alkalmaz�s val�di id&#245;ben lej�tsz�d� jelens�gek inform�ci�j�t kezeli �s akarja tov�bb�tani vagy t�rolt inform�ci� tov�bb�t�sa a c�l", jo: true }
              ]
            },
            { kerdes: "Milyen m�dokon tehet�nk k�s�rletet a Best Effortn�l jobb kiszolg�l�si min�s�g megval�s�t�s�ra �sszek�ttet�smentes csomagkommunik�ci� eset�n?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A felhaszn�l� k�zel�ben (a h�l�zat perem�n) k�zel�tj�k az �sszek�ttet�s-alap� kommunik�ci�t, �s a belsej�ben (gerinc) pedig m�r csak forgalmi oszt�lyokkal foglalkozunk", jo: true, megjegyzes: "Edge router ellen�riz, Core router csak a DSCP-t n�zi �s v�gzi a PHB-t" },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Megk�s�relj�k \"leut�nozni\" az �sszek�ttet�s-alap� csomagkommunik�ci�t", jo: true, megjegyzes: "MPLS" },
                { valasz: "Erre nincs semmilyen lehet&#245;s�g, mert �sszek�ttet�smentes h�l�zati protokoll eset�n semmilyen garancia sem adhat� a kiszolg�l�sra", jo: false }
              ]
            },
            { kerdes: "Mi t�rt�nhet a csomaggal a h�l�zatban a !DiffServ m�dszer szerint, ha az edge router a csomagot az oszt�lybasorol�s mellett non-konform-nak jel�lte?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Az �sszes ilyen csomagokat kiv�tel n�lk�l az el��r�snak megfelel�en eldobja az ellen�rz�", jo: false },
                { valasz: "Az ilyen csomagokat dr�g�bban juttatja c�lba a h�l�zat", jo: false },
                { valasz: "Az �sszes ilyen csomagokat kiv�tel n�lk�l az el��r�snak megfelel�en �t�temezi egy forgalom-form�l� (shaper)", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: true }
              ],
			  megjegyzes: "Val�sz�n�leg egyik se, mert a kiv�tel n�lk�l �gy ellentmond�s, vagy eldobja vagy form�lja."
            },
			        { kerdes: "Az al�bbiak k�z�l mely �ll�t�s(ok) igaz(ak) a HTTP-re?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A HTTPS a TCP 443-as portot haszn�lja.", jo: true },
                { valasz: "Parancsorient�lt.", jo: true },
                { valasz: "Minden HTTP �zenet tartalmaz �llapotk�dot", jo: false },
                { valasz: "A t�zfalak tipikusan �tengedik.", jo: true },
                { valasz: "T�bbf�le hiteles�t�st (authentik�ci�t) t�mogathat.", jo: true }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely �ll�t�s(ok) igaz(ak) a HTTP-re?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A webszerver a http k�r�seket a TCP 80-as porton figyeli.", jo: true },
                { valasz: "A HTTPS a HTTP SSL-lel titkos�tott protokollja.", jo: true },
                { valasz: "A WebDAV kieg�sz�t�ssel intelligens f�jlkezel�sre haszn�lhat�.", jo: true },
                { valasz: "Statikus �s dinamikusan gener�lt tartalom kiszolg�l�s�ra is alkalmas.", jo: true },
                { valasz: "A n�vfelold�s funkci�t is ell�tja", jo: false }
              ]
            },
            { kerdes: "Az al�bbi alkalmaz�sr�tegbeli protokollok k�z�l melyn�l garant�lt az adatforgalom titkos�t�sa?",
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
            { kerdes: "Az alkalmaz�s az al�bbi param�terekkel ker�l megc�mz�sre a h�l�zaton kerszt�l:",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Alkalmaz�s futtathat� �llom�ny�nak f�jlneve", jo: false },
                { valasz: "Az alkalmaz�s mem�riac�me", jo: false },
                { valasz: "A h�l�zati csatol� fizikai c�me", jo: false },
                { valasz: "IP-verzi� �s IP-c�m", jo: true },
                { valasz: "Sz�ll�t�si r�tegbeli protokoll alkalmaz�shoz rendelt portsz�ma", jo: true },
                { valasz: "Sz�ll��si r�tegbeli protokoll azonos�t�ja", jo: false }
              ]
            },
            { kerdes: "Az al�bbiak levelez�si protokollok:",
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
            { kerdes: "Az alkalmaz�sok milyen protokollszolg�ltat�s(oka)t vehetnek ig�nybe?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "UDP", jo: true },
                { valasz: "IP", jo: true },
                { valasz: "TCP", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely(ek) igaz(ak) a levelez� rendszerekre?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A felhaszn�l�k a User Agentekkel tudnak levelet k�ldeni �s fogadni.", jo: true },
                { valasz: "A k�ld� f�l MTA-ja addig t�rolja a levelet, am�g a fogad� f�l annak let�lt�s�t nem kezdem�nyezi", jo: false },
                { valasz: "Az e-mail c�mben a @ ut�ni tag alapj�n DNS n�vfelold�s t�rt�nik.", jo: true },
                { valasz: "A lev�l c�lba juttat�sa a k�ld� f�l MTA-j�nak feladata", jo: true, megjegyzes: "Pontosabban a k�ld� f�l ISP MTA-j�nak a feladata" },
                { valasz: "A klienseknek a POP3 �s IMAP4 protokollokat egyszerre haszn�lni kell a levelek let�lt�s�hez", jo: false }
              ]
            },
            { kerdes: "Mi bizos�tja az alkalmaz�sok sz�m�ra azt az interf�szt (API), amin kereszt�l el�rhetik a h�l�zati szolg�ltat�sokat?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A webszerver", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Az oper�ci�s rendszer.", jo: true },
                { valasz: "A telnet kliens", jo: false }
              ]
            },
            { kerdes: "A kliensen az al�bbi rendszerh�v�sok �rv�nyesek:",
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
            { kerdes: "A szerveren az al�bbi rendszerh�v�sok �rv�nyesek:",
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
            { kerdes: "Mely �ll�t�s(ok) igaz(ak) az SMTP-re?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A HELO paranccsal kezdem�nyezheti a fogat� a kapcsolat l�trej�tt�nek visszaigazol�s�t", jo: false },
                { valasz: "A POP3/IMAP4 kliensek ennek seg�ts�g�vel k�ldhetnek levelet.", jo: true },
                { valasz: "L�tezik titkos�tott verzi�ja is, az SMTPS.", jo: true },
                { valasz: "A 25-�s TCP portot haszn�lja.", jo: true },
                { valasz: "A lev�l k�ld�s�nek v�g�t k�t egym�st k�vet� sort�r�s jelzi", jo: false }
              ]
            },
            { kerdes: "Mely v�gz�d�ssel lesz igaz az al�bbi �ll�t�s? Egy SMTP-kapcsolaton bel�l lehet�s�g van...",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "... t�bb levelet ugyanannak a c�mzettnek elk�ldeni.", jo: true },
                { valasz: "... t�bb k�l�nb�z� szervernek levelet k�ldeni.", jo: true },
                { valasz: "... t�bb c�mzettnek is elk�ldeni ugyanazt a levelet.", jo: true },
                { valasz: "... a kapcsolat bont�s�nak k�sleltet�s�re, hab�r lev�l tov�bb�t�sa nem t�rt�nik", jo: true, megjegyzes: "NOOP" }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mit tartalmaz egy HTTP k�r�s?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Fejl�ceket.", jo: true },
                { valasz: "A k�rt tartalom URL-j�t.", jo: true },
                { valasz: "A k�r�s az UDP 80-as portra megy", jo: false },
                { valasz: "A k�r�s v�g�t jelent� karaktert (End Of File)", jo: false },
                { valasz: "�llapotk�dot", jo: false },
                { valasz: "Egy megfelel� parancsot (pl. GET).", jo: true }
              ]
            },
            { kerdes: "Mely �ll�t�s(ok) igaz(ak) a kliens-szerver architekt�r�ban a szerverre?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "M�s alkalmaz�sn�l egyidej�leg lehet kliens is.", jo: true },
                { valasz: "Tipikusan egy az alkalmaz�sr�tegbeli protokollt�l f�gg� �lland� portot haszn�ja.", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Mindig a szerver kezdem�nyezi a kapcsolatfelv�telt", jo: false },
                { valasz: "Folyamatosan figyeli a be�rkez� ig�nyeket.", jo: true }
              ]
            },
            { kerdes: "Mi igaz az al�bbiak k�z�l az FTP-re?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "F�jl�tvitelre tervezett protokoll.", jo: true },
                { valasz: "K�l�n alkalmas sz�veges �s bin�ris �llom�nyok �tvitel�re.", jo: true },
                { valasz: "Csak a TCP 21-es portot haszn�lhatja", jo: false },
                { valasz: "Parancsorient�lt.", jo: true },
                { valasz: "Sz�ll��si r�tegbeli protokoll", jo: false }
              ]
            },
            { kerdes: "Mi a k�z�s a POP3 �s az IMAP4 protokollokban?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Parancsorient�ltak.", jo: true },
                { valasz: "Levelek let�lt�s�re val�k.", jo: true },
                { valasz: "UDP sz�ll�t�si protokollt haszn�lnak", jo: false },
                { valasz: "L�tezik titkos�tott v�ltozatuk.", jo: true },
                { valasz: "Automatikusan t�rlik a szerverr�l a levelet", jo: false }
              ]
            },
            { kerdes: "Mit tartalmaz egy HTTP v�lasz az al�bbiak k�z�l?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Fejl�ceket.", jo: true },
                { valasz: "�llapotk�dot.", jo: true },
                { valasz: "A b�ng�sz� nev�t, hogy kliens oldalon annak lehessen eljuttatni", jo: false },
                { valasz: "Az eredeti k�r�st", jo: false },
                { valasz: "A k�rt adatot, amennyiben a k�r�s l�tez� adatra vonatkozott.", jo: true }
              ]
            },
            { kerdes: "Mire val� a socket?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Az alkalmaz�s a helyi felhaszn�l�val ezen kerszt�l kommunik�lhat", jo: false },
                { valasz: "K�t alkalmaz�s k�z�tti kommunik�ci�s csatorna.", jo: false },
                { valasz: "Az alkalmaz�s ezt l�trehozva ezen kereszt�l kommunik�lhat.", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "A kapcsolat lebont�s�t v�gz� alkalmaz�s", jo: false }
              ],
			  megjegyzes: "dia 2010.m�jus 4. - 5. oldal socket = alkalmaz�s �ltal haszn�lhat� v�gz�d�s / kommunik�ci�s v�gpont"
            },
            { kerdes: "Mi igaz az al�bbiak k�z�l a webes rendszerek gyors�t�t�raz�s�ra (cache)?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A b�ng�sz� kliens oldalon v�gezheti.", jo: true },
                { valasz: "A gyors�t�t�rral (cache) jelent�s m�rt�kben nem cs�kken a let�ltend� adatmennyis�g, hiszen mindig le kell t�lteni a lapokat, hogy �szleltj�k, ha v�ltozott a tartalmuk", jo: false },
                { valasz: "Jelent�sen cs�kkentheti a kiszolg�l�si id�t.", jo: true },
                { valasz: "A m�r lek�rt lapok a gyors�t�t�r�b�l a b�ng�sz� bez�r�s�ig kiszolg�lhat�k, ut�na �v�lnek el", jo: false },
                { valasz: "A proxy szerver v�gezheti", jo: true, megjegyzes: "Igen, v�gezheti, de nem csak ez..." }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l melyik parancsorient�lt protokoll?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "FTP", jo: true },
                { valasz: "HTTP", jo: true },
                { valasz: "POP3", jo: true },
                { valasz: "SMTP", jo: true },
                { valasz: "IMAP4", jo: true }
              ]
            },
            { kerdes: "Mely �ll�t�s(ok) igaz(ak) a kliens-szerver architekt�r�ban a kliensre?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Dinamikusan v�laszt forr�s portsz�mot a kapcsolat ki�pt�sekor.", jo: true },
                { valasz: "Folyamatosan figyeli a be�rkez� ig�nyeket", jo: false },
                { valasz: "Mindig fel kell der�tenie, milyen portra kell kapcsol�dnia, mert a szervern�l ez gyakran v�ltozik", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "M�s alkalmaz�sn�l egyidej�leg lehet szerver is.", jo: true },
                { valasz: "Mindig a kliens kezdem�nyezi a kapcsolatfelv�telt.", jo: true }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l melyek k�zvetlent�l IP feletti protokollok?",
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
            },
			       { kerdes: "Mit eredm�nyez a t�bb DNS szerver haszn�lata egy z�n�ra vonatkoztatva?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Szinkroniz�ci� megk�vetel�s�t.", jo: true },
                { valasz: "Terhel�seloszt�st.", jo: true },
                { valasz: "B�rmelyik meghib�sod�sa eset�n �jabb rekordokat tudunk felvenni a z�n�ba", jo: false },
                { valasz: "Hibat�r�st.", jo: true },
                { valasz: "T�bb NS bejegyz�st a z�n�kban.", jo: true }
              ]
            },
            { kerdes: "Az al�bbi eszk�z�k k�z�l mely(ek) l�t(nak) el biztosan h�l�zatbiztons�gi funkci�t?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "!WiFi !AccesPoint", jo: false },
                { valasz: "T�zfal", jo: true },
                { valasz: "IPS", jo: true },
                { valasz: "Router", jo: false },
                { valasz: "IDS", jo: true }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely �ll�t�s(ok) igaz(ak) a levelez� rendszerekre?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A c�mzett MTA-hoz meg�rkezett lev�l egy v�rakoz�si sorban (queue) ker�l elt�rol�sra, am�g a User Agent azt le nem t�lti", jo: false },
                { valasz: "Amennyiben az MTA nem tudja k�ld�skor tov�bb�tani a levelet, az elveszik", jo: false },
                { valasz: "Az MTA-k egym�ssal SMTP-n kereszt�l kommunik�lnak.", jo: true },
                { valasz: "Az e-mail c�mben a @ ut�ni tag alapj�n a k�ld� f�l MTA-ja pr�b�lja meg a levelet c�lba juttatni.", jo: true },
                { valasz: "A n�vfelold�s DNS seg�ts�g�vel t�rt�nik.", jo: true }
              ]
            },
            { kerdes: "A h�l�zatbiztons�g AAA bet�szava mely fogalmak r�vid�t�sb�l ad�dik?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Attribution (jellemz�s)", jo: false },
                { valasz: "Algorithms (algoritmusok)", jo: false },
                { valasz: "Authorization (jogosults�gkezel�s �s -hozz�rendel�s)", jo: true },
                { valasz: "Accounting (sz�ml�z�s)", jo: true },
                { valasz: "Authentication (hiteles�t�s)", jo: true },
                { valasz: "Attack prevention (t�mad�s elleni v�delem)", jo: false }
              ]
            },
            { kerdes: "Mi igaz az al�bbiak k�z�l az FTP-re?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Sz�ll�t�si r�tegbeli protokoll", jo: false },
                { valasz: "K�l�n alkalmas sz�veges �s bin�ris �llom�nyok �tvitel�re.", jo: true },
                { valasz: "Parancsorient�lt.", jo: true },
                { valasz: "Csak a TCP 21-es portot haszn�lhatja", jo: false },
                { valasz: "F�jl�tvitelre tervezett protokoll.", jo: true }
              ]
            },
            { kerdes: "Mi igaz az al�bbiak k�z�l a webes rendszerek gyors�t�t�raz�s�ra (cache)?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A b�ng�sz� kliens oldalon v�gezheti.", jo: true },
                { valasz: "Jelent�sen cs�kkentheti a kiszolg�l�si id�t.", jo: true },
                { valasz: "A gyors�t�t�rral (cache) jelent�s m�rt�kben nem cs�kken a let�ltend� adatmennyis�g, hiszen mindig le kell t�lteni a lapokat, hogy �szleltj�k, ha v�ltozott a tartalmuk", jo: false },
                { valasz: "A proxy szerver v�gezheti.", jo: true },
                { valasz: "A m�r lek�rt lapok a gyors�t�t�r�b�l a b�ng�sz� bez�r�s�ig kiszolg�lhat�k, ut�na �v�lnek el", jo: false }
              ]
            },
            { kerdes: "A szerveren az al�bbi rendszerh�v�sok �rv�nyesek:",
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
            { kerdes: "Az al�bbi �ll�t�sok k�z�l mely(ek) igaz(ak) a DNS szerverre?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Csak DNS-kliensekkel kommunik�lhat, DNS szerverekkel nem", jo: false },
                { valasz: "T�bb z�n�t is kiszolg�lhat.", jo: true },
                { valasz: "Az UDP 53-as porton figyeli e bej�v� z�nalet�lt�si k�r�seket", jo: false },
                { valasz: "A DNS szerveket az NS rekord jel�li.", jo: true },
                { valasz: "Csak a TCP 53-as porton figyeli a bej�v� DNS-lek�rdez�se", jo: false }
              ]
            },
            { kerdes: "Az al�bbi alkalmaz�sr�tegbeli protokollok k�z�l melyn�l garant�lt az adatforgalom titkos�t�sa?",
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
            { kerdes: "Mely �ll�t�s(ok) igaz(ak) az al�bbiak k�z�l az SMTP-re?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Az EHLO paranccsal kezdem�nyezheti a k�ld� az ESMTP haszn�lat�t.", jo: true },
                { valasz: "Az MTA-k egym�snak ezen protokoll seg�ts�g�vel k�ldik az e-maileket.", jo: true },
                { valasz: "Az SMTP protokoll lehet�v� teszi, hogy hamis felad�val k�ldj�nk levelet.", jo: true },
                { valasz: "A parancsokat �llapotk�dokkal jelzi vissza.", jo: true },
                { valasz: "A POP3/IMAP4 kliensek ennek seg�ts�g�vel fogadhatnak levelet", jo: false }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely(ek) �rv�nyes (IPv4-es) DNS rekord t�pus(ok)?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "MX", jo: true, megjegyzes: "l�sd: http://en.wikipedia.org/wiki/List_of_DNS_record_types" },
                { valasz: "alias", jo: false },
                { valasz: "A", jo: true },
                { valasz: "B", jo: false },
                { valasz: "CNAME", jo: true }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely(ek) �rv�nyes (IPv4-es) DNS rekord t�pus(ok)?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "SRV", jo: true },
                { valasz: "BMX", jo: false },
                { valasz: "NS", jo: true },
                { valasz: "SERVER", jo: false },
                { valasz: "MAIL", jo: false }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely(ek) �rv�nyes (IPv4-es) DNS rekord t�pus(ok)?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "SOA", jo: true },
                { valasz: "DNS", jo: false },
                { valasz: "C", jo: false },
                { valasz: "WWW", jo: false },
                { valasz: "PTR", jo: true }
              ]
            },
            { kerdes: "Mely v�gz�d�ssel lesz igaz az al�bbi �ll�t�s? Egy SMTP-kapcsolaton bel�l lehet�s�g van...",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "...t�bb levelet ugyanannak a c�mzettnek elk�ldeni.", jo: true },
                { valasz: "...a kapcsolat bont�s�nak k�sleltet�s�re, hab�r lev�l tov�bb�t�sa nem t�rt�nik.", jo: true },
                { valasz: "...t�bb k�l�nb�z� szervernek levelet k�ldeni", jo: true, megjegyzes: "?" },
                { valasz: "...t�bb c�mzettnek is elk�ldeni ugyanazt a levelet.", jo: true }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mit tartalmaz egy HTTP k�r�s?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A k�r�s v�g�t jelent� karaktert (End Of File)", jo: false },
                { valasz: "A k�r�s az UDP 80-as portra megy", jo: false },
                { valasz: "Egy megfelel� parancsot (pl. GET).", jo: true },
                { valasz: "�llapotk�dot", jo: false },
                { valasz: "A k�rt tartalom URL-j�t.", jo: true },
                { valasz: "Fejl�ceket.", jo: true }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l melyek k�zvetlent�l IP feletti protokollok?",
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
            { kerdes: "Egy DNS lek�rdez�s honnan ker�lhet kiszolg�l�sra az al�bbiak k�z�l?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A h�l�zat b�rmely DNS kliens�t�l", jo: false },
                { valasz: "A helyi hosts f�jlb�l.", jo: true },
                { valasz: "A m�sodlagos DNS-szervert�l.", jo: true },
                { valasz: "Az els�dleges DNS szervert�l.", jo: true },
                { valasz: "A helyi gyors�t�t�rb�l.", jo: true }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely(ek) igaz(ak) a DNS z�n�kra?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A z�na egy tartom�nyra vonatkoz� bejegyz�seket tartalmazza.", jo: true },
                { valasz: "Egy szerveren t�bb is lehet.", jo: true },
                { valasz: "Egy z�n�ban csak azonos t�pus� rekordok lehetnek", jo: false },
                { valasz: "Az FQDN a z�n�ban l�v� nem ponttal lez�rt rekord �s a z�na nev�nek �sszelvas�s�val kaphat�.", jo: true },
                { valasz: "Mindegyikb�l potosan egy p�ld�ny l�tezik", jo: false }
              ]
            },
            { kerdes: "Az al�bbiak levelez�si protokollok:",
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
            { kerdes: "Az al�bbiak k�z�l mi igaz a web proxy szerverre?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "K�zponti gyors�t�t�raz�st (cache) l�t el.", jo: true },
                { valasz: "J�l haszn�lhat�, ha a kliensek nem rendelkeznek k�ls� (az Internetes is �rv�nyes) IP-c�mmel.", jo: true },
                { valasz: "?A n�vfelold�s a web proxy kliens (b�ng�sz�) feladata", jo: false },
                { valasz: "Haszn�lat�val jelent�s s�vsz�less�g takar�that� meg.", jo: true },
                { valasz: "A webszerverrel DNS-en kereszt�l kommunik�l", jo: false }
              ]
            },
            { kerdes: "Mely �ll�t�s(ok) igaz(ak) a kliens-szerver architekt�r�ban a szerverre?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "M�s alkalmaz�sn�l egyidej�leg lehet kliens is.", jo: true },
                { valasz: "Tipikusan egy az alkalmaz�sr�tegbeli protokollt�l f�gg� �lland� portot haszn�ja.", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Mindig a szerver kezdem�nyezi a kapcsolatfelv�telt", jo: false },
                { valasz: "Folyamatosan figyeli a be�rkez� ig�nyeket.", jo: true }
              ]
            },
            { kerdes: "Mi bizos�tja az alkalmaz�sok sz�m�ra azt az interf�szt (API), amin kereszt�l el�rhetik a h�l�zati szolg�ltat�sokat?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A webszerver", jo: false },
                { valasz: "Az oper�ci�s rendszer.", jo: true },
                { valasz: "A telnet kliens", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l melyik parancsorient�lt protokoll?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "FTP", jo: true },
                { valasz: "HTTP", jo: true },
                { valasz: "POP3", jo: true },
                { valasz: "SMTP", jo: true },
                { valasz: "IMAP4", jo: true }
              ]
            },
            { kerdes: "Az alkalmaz�s az al�bbi param�terekkel ker�l megc�mz�sre a h�l�zaton kereszt�l:",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Alkalmaz�s futtathat� �llom�ny�nak f�jlneve", jo: false },
                { valasz: "Sz�ll�t�si r�tegbeli protokoll azonos�t�ja", jo: false },
                { valasz: "IP-verzi� �s IP-c�m", jo: true },
                { valasz: "Sz�ll�t�si r�tegbeli protokoll alkalmaz�shoz rendelt portsz�ma", jo: true },
                { valasz: "Az alkalmaz�s mem�riac�me", jo: false },
                { valasz: "A h�l�zati csatol� fizikai c�me", jo: false }
              ]
            },
            { kerdes: "Az al�bbi �ll�t�sok k�z�l mely(ek) igaz(ak) a DNS n�vt�rre?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A n�vt�r legfels� szintj�t k�pezik a TLD-k (Top Level Domain)", jo: false },
                { valasz: "A n�vt�r egy nem k�rmentes gr�ffal reprez�ntalhat�", jo: false },
                { valasz: "Hierarchikus.", jo: true },
                { valasz: "A n�vt�r az �n. \"root\" szervereken keresz�l j�rhat� be.", jo: true },
                { valasz: "A TLD-k (Top Level Domain) mindig orsz�gokhoz k�t�dnek", jo: false }
              ]
            },
			       { kerdes: "Adja meg QPSK modul�ci� alkalmaz�sa eset�n mekkora az adat�tviteli sebess�g kbit/s-ban ha a jelz�si sebess�g (szimb�lumsebess�g) 400 kbaud?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "QPSK = Quadrature Phase-Shift Keying", jo: false },
                { valasz: "Quad, vagyis 4 �llapota van", jo: false },
                { valasz: "4 �llapot 2 biten t�rolhat�", jo: false },
                { valasz: "2 bit = 1 baud (szimb�lum)", jo: false },
                { valasz: "Innen: 400 kbaud(/s) = 800 kbit/s", jo: false }
              ]
            },
            { kerdes: "Sz�molja ki egy r�zvezet�ken CSMA/CD-vel m�k�d� 200 m maxim�lis szegmensm�rettel �s 10 Mbit/s adatsebess�ggel rendelkez� h�l�zat minim�lis r�sidej�t (minim�lis kerethosszhoz tartoz� id�t) mikroszekundumban!",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "r�zvezet�k, teh�t a terjed�si sebess�g <math>2*10<sup>8</sup></math> m/s", jo: false },
                { valasz: "a r�sid� = 2L/C (L a link hossza, C a terjed�si sebess�g) = <math>2*200/2*10<sup>8</sup>=2*10<sup>-6</sup></math> s= 2us", jo: false },
                { valasz: "ez mikrom�sodpercben 2*10<sup>-3</sup>=0,002 ms", jo: false }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely �ll�t�s(ok) igaz(ak) a !WiFi �s !WiMAX szabv�nyra is?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Haszn�lhatnak FHSS-t", jo: false },
                { valasz: "Ugyanabba a h�l�zat kiterjed�s�re utal� kateg�ri�ba sorolhat�k", jo: false },
                { valasz: "F�k�nt a 2,4 GHz-es ISM s�vot haszn�lj�k", jo: false },
                { valasz: "Haszn�lhatnak OFDM-et", jo: true },
                { valasz: "Ugyanazt a fizikai k�zeget haszn�lj�k", jo: true },
                { valasz: "IEEE szabv�nyok", jo: false }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely(ek) ismert (a sz�m�t�g�p-h�l�zatokban is �rdekelt) szabv�nyos�t� szervezet(ek)?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "ETSI", jo: true },
                { valasz: "IETF", jo: true },
                { valasz: "ISO", jo: true },
                { valasz: "PDU", jo: false, megjegyzes: "nem szabv�nyos�t� szervezet" },
                { valasz: "A t�bbi v�lasz k�z�l egyik sem helyes", jo: false },
                { valasz: "ANSI", jo: true },
                { valasz: "IEEE", jo: true },
                { valasz: "ITU", jo: true }
              ]
            },
            { kerdes: "Sz�molja ki, hogy egy 4 Mbit/s adatsebess�g�, 500 m hossz�s�g� r�zvezet�n mekkora egy 1000 b�jtos csomag �tviteli ideje mikroszekundumban!",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "4 Mbit/s = 4*10^6 bit/s, 500 m = 5*10^2m, 1000 b�jt = 8*10^3 bit", jo: false },
                { valasz: "�lland�k: c = 2*10^8 m/s, mikroszekundum = 10^-6 s", jo: false },
                { valasz: "K�t r�szb�l tev�dik �ssze:", jo: false },
                { valasz: "Ad�si id�: adatmennyis�g / s�vsz�less�g = 8*10^3 bit / 4*10^6 bit/s = 2*10-3 s = 2000 mikroszekundum", jo: false },
                { valasz: "Terjed�si id�: t�v / sebess�g = 5*10^2 m / 2*10^8 m/s = 2,5*10-6 s = 2,5 mikroszekundum", jo: false },
                { valasz: "�tviteli id�: ad�si + terjed�si id� = 2000 + 2,5 = 2002,5 mikroszekundum", jo: false }
              ]
            },
            { kerdes: "Milyen absztrakt alkot�elemekb�l �p�thet�k fel az inform�ci�tov�bb�t� h�l�zatok?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "r�di�csatorn�kb�l", jo: false },
                { valasz: "�sszek�t�sekb�l (link)", jo: true },
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "csom�pontokb�l (node)", jo: true },
                { valasz: "f�nyvezet�kb�l", jo: false },
                { valasz: "v�gpontokb�l (end system)", jo: true }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely(ek) jellemz�(ek) a r�selt (slotted) Aloh�ra?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Kevesebb �tk�z�s lesz, mint az egyszer� Aloh�n�l azonos forgalom eset�n.", jo: true },
                { valasz: "Jobb a kihaszn�lts�ga, mint az egyszer� Aloh�nak.", jo: true },
                { valasz: "Jelent�sen nagyobb a k�sleltet�se, mint az egyszer� Aloh�nak", jo: false },
                { valasz: "A r�sid� hat�r�n �tny�lhatnak keretek", jo: false },
                { valasz: "A felsoroltak k�z�l egyik v�lasz sem jellemz� a r�selt Aloh�ra", jo: false }
              ]
            },
            { kerdes: "Ha A egy �zenetet k�ld D-nek, majd erre D egy �zenettel v�laszol, akkor ezen k�t �zenet k�z�l melyik fog C-hez is eljutni?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Csak az els�", jo: false },
                { valasz: "Egyik sem", jo: false },
                { valasz: "Nem �llap�that� meg", jo: true, megjegyzes: "lehet, hogy az eredeti feladat r�szletesebb volt, de �gy biztos ez a j� v�lasz :-)" },
                { valasz: "Mindkett�", jo: false },
                { valasz: "Csak a m�sodik", jo: false }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely r�teg(ek) NEM szerepel(nek) az ISO OSI referenciamodellben?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Adatkapcsolati", jo: false },
                { valasz: "Interf�sz", jo: true },
                { valasz: "Adategyeztet�si", jo: true },
                { valasz: "Fizikai", jo: false },
                { valasz: "Alkalmaz�si", jo: false },
                { valasz: "Megjelen�t�si", jo: false },
                { valasz: "Adatbiztons�gi", jo: true }
              ]
            },
			       { kerdes: "Mit mond ki a meg�rz�si t�rv�ny (conservation law)?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Sorban�ll�sn�l mindenkinek meg kell �riznie a nyugalm�t!", jo: false },
                { valasz: "Az egyes felhaszn�l�kra jut� forgalomar�nyokkal s�lyozott k�sleltet�si id�k �sszege �lland�.", jo: true },
                { valasz: "A sorban felt�tlen�l meg kell �rizni a bel�p�si poz�ci�kat", jo: false },
                { valasz: "Igazs�gos feladat�temez�st csak a FIFO kiszolg�sn�l lehet el�rni", jo: false },
                { valasz: "A fentiek k�z�l egyik v�lasz sem helyes", jo: false }
              ]
            },
            { kerdes: "Mely funkcionalit�ssal nem rendelkezhet egy IP h�l�zati csom�pont?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Csomagtov�bb�t�s", jo: false },
                { valasz: "A c�mzett c�m�nek �sszevet�se a routing-t�bla bejegyz�seivel", jo: false },
                { valasz: "A h�l�zat lehets�ges �tvonalair�l inform�ci� gy�jt�se �s k�ld�se", jo: false },
                { valasz: "Visszajelz�s k�ld�se a felad�nak a csomag ellen�rz��sszeg�nek (\"checksum\") helyess�g�r�l", jo: false },
                { valasz: "Priorit�sok kezel�se", jo: false }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l melyik nem lehet �rv�nyes IPv6-os c�m?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "0:0:0:0:0:0:ABCD:1", jo: false },
                { valasz: "??*::192.67.0.10", jo: false, megjegyzes: "::ffff:192.67.0.10-k�nt lenne helyes" },
                { valasz: "FEDC::C:AA89:0000:1032", jo: false },
                { valasz: "FEDC:0094:004:0000:000C:BA98:7654:3210", jo: false },
                { valasz: "??A fentiek k�z�l mindegyik lehet �rv�nyes IPv6-os c�m", jo: false, megjegyzes: "IPv6 18. dia alapj�n ez a j� v�lasz" }
              ]
            },
            { kerdes: "Melyik �ll�t�s igaz az al�bbiak k�z�l?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Az IPv4 mindig MTU m�ret� csomagokat k�ld", jo: false },
                { valasz: "Az IPv4 Fragment Offset mez�je azt mutatja meg, hogy h�nyadik t�red�ke a csomag az eredetinek", jo: false },
                { valasz: "A Don\'t Fragment bit be�ll�t�s�val fel lehet t�rk�pezni az MTU-t", jo: false },
                { valasz: "Az MTU a Minimum Transport Utilization r�vid�t�se", jo: false },
                { valasz: "A fenti �ll�t�sok k�z�l egyik sem igaz.", jo: true }
              ]
            },
            { kerdes: "Mi a szerepe a H.323 alapj�n m�k�d� h�l�zatban a Gatekeeper-nek?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Vez�rli a konferencia-�sszek�ttet�seket", jo: false },
                { valasz: "Minden esetben rajta kereszt�l folyik a h�v�svez�rl�s", jo: false },
                { valasz: "Biztos�tja az egy�ttm�k�d�st m�s, nem H.323 alap� h�l�zatokkal", jo: false },
                { valasz: "A fentiek k�z�l egyik sem szerepe a Gatekeepernek.", jo: true },
                { valasz: "Beenged�sszab�lyoz�st �s er�forr�s-foglal�st v�gez", jo: false }
              ]
            },
            
            { kerdes: "Hogyan val�s�tja meg a Session Initiation Protocol a felhaszn�l�k k�vet�s�t? ",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Nem val�s�t meg k�vet�st, a h�v� f�lnek kell kider�tenie a h�vott aktu�lis c�m�t", jo: false },
                { valasz: "Ezt a Proxy Server val�s�tja meg", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "A Redirect Server tudja meg a Location Server-t�l az aktu�lis c�met", jo: true }
              ]
            },
            { kerdes: "Mit jelent a tunneling? ",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Az IP-csomagokat adatkapcsolati r�tegbeli adategys�gekben tov�bb�tjuk", jo: false },
                { valasz: "Az IP-csomagokat &#8222;k�ls�&#8221; IP-c�mmel l�tjuk el,�s ennek alapj�n tov�bb�tjuk - ez a becsomagol�s, ez�ltal t�rt�nik az alagutaz�s, de ez nem maga az alagutaz�s!", jo: false },
                { valasz: "Az IP-csomagok c�m�t kicser�lj�k helyi �rv�ny� c�mre,�s oda tov�bb�tjuk", jo: false },
                { valasz: "Az IP-csomagokat Ethernet keretekbe �gyazzuk", jo: false },
                { valasz: "Egyik sem", jo: false }
              ]
            }
         ];