import { ContentWrapper } from "../../components/ContentWrapper"
import { PageName } from "../../components/PageName"
import config from "../../config.json"
import { Paragraph } from "../../components/Paragraph"
import { SmallTitle, Subtitle } from "../../components/Titles"
import { List } from "../../components/List"

const pageName = config.pages.services

const lineRepairList = [
  "•	hĺbkovo čistí pleť",
  "•	zásobuje bunky kyslíkom",
  "•	odstraňuje odumreté kožné bunky",
  "•	hĺbkovo hydratuje a rozjasňuje ",
  "•	omladzuje a vyhladzuje pleť",
  "•	oživuje a regeneruje pokožku",
  "•	pôsobí preventívne proti vzniku vrások",
  "•	zanecháva pleť hladkú, jemnú a zjednotenú",
  "•	ošetrenie je vhodné pre všetky typy pleti",
]

export const Services: React.FC = () => (
  <ContentWrapper>
    <PageName nameOfPage={pageName} />
    <SmallTitle text="Line repair" id="line_repair" />
    <Paragraph text="Starostlivé relaxačné ošetrenie zamerané na oživenie pleti" />
    <List data={lineRepairList} />
    <SmallTitle text="Comodex" />
    <Paragraph text="Krásna pleť bez problémov" />
    <Paragraph text="Táto kozmetická rada je zacielená na efektívnu starostlivosť o aknóznu a problematickú pokožku. Hlavnou prednosťou ošetrenia COMODEX je to, že zvyšuje odolnosť pleti, jej schopnosť brániť sa nepriaznivým faktorom, pleť nasycuje potrebnými látkami a minerálmi. Vďaka tomu sa dá úspešne znížiť frekvencia a stupeň postihnutia a predchádzať vzniku post-akné (jazvy, pigmentácia)." />
    <Paragraph text="Prípravky kozmetickej rady COMODEX spĺňajú všetky nároky na prostriedky pre starostlivosť o problematickú pokožku. Majú výrazný sebostatický, keratolytický a antibakteriálny účinok, udržiavajú vlhkosť a kyslosť pokožky v rámci normy, zbavujú pokožku stagnujúcich a zápalových prejavov. Pleť sa stáva čistejšou, zlepšuje sa jej textúra a farba." />
    <SmallTitle text="Skin scrubber" id="skin_scrubber" />
    <Paragraph text="Čistenie pleti pomocou ultrazvukovej špachtle, ktorá reguluje tvorbu kožného mazu a odstraňuje upchaté póry. Ide o neinvazívnu procedúru hĺbkového čistenia pleti, ktorá pracuje na princípe vysokofrekvenčných ultrazvukových vibrácií." />
    <Paragraph text="Neodporúča sa:  v tehotenstve, pri poruchách štítnej žľazy a strojčeku na srdci" />
    <SmallTitle text="Ultrazvuk" id="ultrazvuk" />
    <Paragraph text="Ide o prístrojové ošetrenie pleti - ultrazvukové vlnenie spôsobuje v tkanive vibráciu / mikromasáž / a teplo. Pôsobením ultrazvukového vlnenia sa uvoľnia stavebné prvky pokožky a tak sa olejovité a emulzné látky vynikajúco aplikujú. Ultrazvuk teda zvyšuje vstrebávanie účinných látok do hlbších vrstiev pokožky." />
    <Paragraph text="Neodporúča sa: v tehotenstve, pri poruchách štítnej žľazy a strojčeku na srdci" />
    <SmallTitle text="Henna styling" id="henna" />
    <Paragraph text="BRAZILIAN BROWS Henna je prirodzená s trvácnym efektom. Patrí medzi vysoko kvalitné a zdravé výrobky, ktoré zaručujú presne definované a prirodzene vyzerajúce obočie vďaka jej rastlinnému zloženiu. Trvácnosť Henny na pokožke je cca. 14 dní, v závislosti od typu pokožky." />
    <Paragraph text="Neodporúča sa: pri veľmi mastnej pleti a na veľmi riedke obočie" />
    <SmallTitle text="Lash lifting rias" id="lash_lifting" />
    <Paragraph text="Je procedúra, pri ktorej sa vytočia, nafarbia a vyživia vaše prirodzené mihalnice. Je vynikajúcou alternatívou pre tých, ktorí uprednostňujú prirodzene upravený zovňajšok, potrebujú zregenerovať mihalnice po dlhodobom nosení umelých mihalníc, alebo ich jednoducho prestalo baviť každodenné používanie špirály." />
    <Paragraph text="Neodporúča sa: pri zápaloch oka, pri klaustrofóbií" />
    <SmallTitle text="Laminácia obočia" id="laminacia" />
    <Paragraph text="Laminácia obočia je úprava chĺpkov obočia s efektom vyčesania, nafarbenia a optického zahustenia bez akéhokoľvek invazívneho zásahu. Laminácia chĺpky nielen zvýrazní ale taktiež podporí ich kvalitu a rast." />
    <Paragraph text="Neodporúča sa: pri veľmi riedkom obočí alebo príliš hustých a tvrdých chĺpkoch" />
    <SmallTitle
      text="Masáž tváre, krku a dekoltu, mikromasáž očného okolia"
      id="masaz"
    />
    <Paragraph text="Masáž tváre má najväčšie relaxačné účinky zo všetkých masáží, predovšetkým na centrálnu nervovú sústavu. U nás dostanete masáž tváre, krku a dekoltu  ku každému ošetreniu. Odďaľuje proces starnutia, uvoľňuje napätie a zlepšuje vzhľad pleti. Pravidelné masáže zlepšujú krvný obeh, pružnosť svalov a dvíhajú kontúry tváre. Pleť je následne oživená a zákazníčka odchádza príjemne oddýchnutá." />
    {/* <Subtitle text="Doplnkové služby" /> */}
    <SmallTitle text="Farbenie obočia a rias" id="farbenie" />
    <Paragraph text="Správny tvar a odtieň obočia je dôležitou súčasťou našej tváre. Len dokonale vytvarované a nafarbené obočie dokáže vyčariť krásny vzhľad. Farbenie rias sa odporúča najmä ženám s blond svetlými riasami. Ide o najčastejšie žiadané služby v kozmetických salónoch, kedy sa prirodzene zvýraznia oči a tvar tváre." />
    <SmallTitle text="Depilácia voskom" />
    <Paragraph text="Depilácia sa vykonáva pomocou vosku, ktorý sa  ohrieva v ohrievači. Teplý vosk sa natrie v smere rastu chĺpkov a následne sa pomocou depilačného papierika strháva v proti smere rastu chĺpkov. Po depilácií sa pokožka natrie olejom na odstránenie zvyšku vosku a ukľudnenie pokožky. Depilované miesta by sa nemali po úkone vystavovať slnečnému žiareniu. Vosková depilácia spomaľuje a oslabuje rast chĺpkov a zaručuje dlhodobý efekt (niekoľko týždňov)." />
    <SmallTitle text="Líčenie " />
    <Paragraph text="Ponúkame líčenie na bežný deň, čo znamená make up, púder, riasenka, rúž, tiene alebo ceruzka na obočie. Príležitostné líčenie na rôzne rodinné udalosti ako oslavy, svadby alebo plesy a stužkové. Cena závisí od štýlu líčenia a od aplikácie umelých mihalníc alebo trsov." />
    <Paragraph text="Svadobné líčenie pre nevesty ponúkame so skúškou líčenia aj bez skúšky." />
  </ContentWrapper>
)
