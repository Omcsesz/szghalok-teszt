        var tesztFeladatok = [
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
            }
         ];