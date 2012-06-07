         var tesztFeladatok = [
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
            }
         ];
