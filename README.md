# Instruccions per a la instal·lació i posada en marxa
Amb el projecte clonat, situar-se a l'arrel i executar `npm install` per a descarregar totes les dependències necessàries.

Un cop hagi finalitzat la instal·lació, executar `npm start` per a iniciar el servidor de desenvolupament, que es desplegarà a `localhost:3000`. Accedir a aquesta adreça redireccionará a la pàgina principal `/pokemons`.

# Breu explicació de la solució implementada
Partint del projecte creat amb la comanda npx create-react-app, he afegit **React Router** per a la navegació a les pàgines de detall i **Recoil** per a la gestió de l'estat global.

## Llibreries Utilitzades
**React Router** és l'estàndard per a la navegació en SPA i, tot i tenir les funcionalitats per a utilitzar-lo en grans aplicacions, resulta fàcil de configurar i utilitzar en aplicacions simples com aquesta.

**Recoil**, en canvi, no és una llibreria de gestió de l'estat tan popular com **Redux**, però per a aquesta tasca semblava encaixar. És conceptualment senzilla, **tenint tan sols atoms i selectors**, i la seva utilització a través de hooks és molt similar a treballar amb els estats del component de **React**.

Per a gestionar estats en càrrega i errors utilitza les pròpies funcionalitats de **React**: `Suspense` i `ErrorBoundary`, que igual que la llibreria, es troben fase experimental. Penso que aquests components ajuden a simplificar molt el codi, ja que no implica afegir codi als teus components, sinó que simplement col·loques el component dins d'un `Suspense`/`ErrorBoundary`.

Sent una llibreria experimental, no és una solució que s'implementaria en producció, però m'ha semblat una bona oportunitat per a fer un tast d'aquestes funcionalitat que potser veurem en futures versions de **React**.

## Implementació dels requeriments
Tenim dues rutes en l'aplicació: `/pokemons` com a homepage i `/pokemons/:pokemonName` com a detall del pokémon.

La pàgina de detall és molt senzilla, composada només pel component `Pokemon` i `PokeButton`.

La pàgina de la llista és on hi trobem el component principal: `PokemonList`. Podriem dividir aquest en dues parts: les opcions de paginació i mode de llista, i la llista en sí.

El selector de pàgines (`PageSelector`) mostra la pàgina actual i permet canviar de pàgina fent clic als números o a les fletxes, evidentment controlant que la pàgina existeixi. El botó per a canviar el mode de la llista (`ListModeSelector`) es mostra en funció del mode actual.

És en el component `PokémonItem` on es fa la diferenciació principal entre Grid i Llista, que per la banda del component no és gaire, ja que excepte pel className i l'ordre del text, són idèntics, i per tant es podria refactoritzar per a que compartissin el mateix codi amb un parell de condicionals. He decidit deixar-ho així per a tenir més llegibilitat i facilitat de modificar qualsevol dels tipus en un futur sense por a afectar a l'altre. Si agaféssin més complexitat, seria adequat definir un component per a grid i un altre per a list.

## Estils
Per a aplicar els estils localment a cada component, he utilitzat CSS Modules. És CSS pur, i no he utilitzat cap llibreria com bootstrap o material design. L'únic recurs extern que he utilitzat ha estat l'animació de càrrega, disponible [aquí](https://codepen.io/trulymittal/pen/LMOJWv).

En general, la disposició del contingut l'he fet a través de flexbox, control·lant els marges amb unitats `rem` i les mides amb `%`.

Els canvis en la disposició del contingut en funció del dispositiu els trobem a `PokemonList.module.css`, on hi ha algunes media queries per a modificar el flex-basis dels elements de la llista, i en el cas de smartphone també la mida de la lletra.

He intentat afegir feedback a l'usuari principalment on `hover`, però seria adequat afegir alguns estats de `focus` o `active` per a una millor accessibilitat.