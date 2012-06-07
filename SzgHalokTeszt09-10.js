        var tesztFeladatok = [
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
            }
         ];
