<!-- $theme: default -->

# Formation Angular
Développement Mobile & Desktop

---

# Sommaire

1. Typescript
2. Les Composants
3. Les Services
4. Les Modules
5. Le Routeur
6. Observables & RxJS
7. Service HTTP
8. Aller plus loin...

---

# Typescript

--- 

Typescript

## présentation

![](https://www.ng-book.com/images/ng2/previews/typescript/es5-es6-typescript-circle-diagram.png)

--- 

Typescript

## variables

```typescript
const uneChaineDeCaractere: string = 'Hello World';
const unNombre: number = 42;
const unBooleen: boolean = true;
const unObjet: any = {};
const unTableauDeNombre: number[] = [];
const unNombreOuChaineDeCaracteres: number | string = 123;
const unObject: { name: string, value: number } = {
  name: 'unNom',
  value: 42
};

if (true) {
  let maVariableLocale: number = 123;
  const maConstanteLocale: number = 456;
  
  maConstanteLocale = 789; // erreur
}
// maVariableLocale & maConstanteLocale n'existent pas
```

--- 

Typescript

## destructuration

```typescript
const monTableau = [1, 2, 3];
const [a, b, c] = monTableau;

console.log('a: ', a, ' b: ', b, ' c: ', c); 
// affiche "a: 1 b: 2 c: 3"
```

```typescript
const monObjet = { nom: 'Doe', prenom: 'John' };
const { nom, prenom } = monObjet;

console.log(prenom, ' ', nom); 
// affiche "John Doe"
```

---

Typescript

## string template

```typescript
const id = 42;
const url = `http://my_server/page/${id}`;
```

--- 

Typescript

## gestion de dépendances

```typescript
import * as $ from 'jquery';
import { Component, Input } from '@angular/core';
```

--- 

Typescript

## classes

```typescript
class MaClass {
  static maVariableStatique: boolean;
  private maVariablePrivee: number;
  maVariablePublique: string;
  
  constructor() {
  }
  
  private maFonctionPrivee(unParametre: number, 
                           unAutreParametre: number = 42): void {
  }
  
  maFonctionPublique(): number {
    return this.maVariablePrivee;
  }
  
  static maFonctionStatique(): boolean {
    return MaClass.maVariableStatique;
  }
}
```

--- 

Typescript

## constructeur

```typescript
class MaClass {
  constructor(public parametrePublique: number,
              private parametrePrive: number,
              parametreLocal: number) {
  }
}
```

--- 

Typescript

## getter / setter

```typescript
class MaClass {
  private _maVariablePrivee: number;
  
  get maVariablePrivee(): number {
    return this._maVariablePrivee;
  }
  
  set maVariablePrivee(value: number) {
    this._maVariablePrivee = number;
  }
}

const instance = new MaClass();

instance.maVariablePrivee = 42;
console.log('maVariablePrivee:', instance.maVariablePrivee);
// affiche maVariablePrivee: 42
```

--- 

Typescript

## extends

```typescript
class MaClass {
  maFonction(): void {
    // ...
  }
}

class MaClassExtendue extends MaClass {
  maNouvelleFonction(): void {
    this.maFonction();
  }
}
```

--- 

Typescript

## interfaces

```typescript
interface MonInterface {
  maVariable: number;
  maVariableOptionelle?: number;
  
  maFonction(parametre1: number, parametre2: number): void;
}

class MaClass implements MonInterface {
  maVariable: number;
  maVariableOptionelle?: number;
 
  maFonction(parametre1: number, parametre2: number): void {
  }
}
```

--- 

Typescript

## fonctions fléchées

```typescript
class MaClass implements MonInterface {
  maVariable: number;

  maFonction1(): number {
    const add = (val1: number, val2: number) => val1 + val2;
    // sans "{}" la fonction retourne la valeur calculée
    return add(1, 2);
  }
  
  maFonction2(): number {
    setTimeout(() => {
      this.maVariable = 42; 
      // this est bindé sur le this du parent
    });
  }
}
```

--- 

Typescript

## convertion de type

```typescript
interface Humain {
  nom: string;
  prenom: string;
}

const data: any = { nom: 'Doe', prenom: 'Jean' };
const jean: Humain = <Humain>data;
```

--- 

Typescript

## operateur spread

```typescript
const tableau1 = [4, 5, 6];
const tableau2 = [1, 2, 3, ...tableau1];

console.log(tableau2);
// affiche "[1, 2, 3, 4, 5, 6]"
```

```typescript
const jean = { nom: 'Doe', prenom: 'Jean' };
const infos = { ...jean, age: 42 };

console.log(infos);
// affiche "{ nom: 'Doe', prenom: 'Jean', age: 42 }"
```

--- 

Typescript

## Promise

```typescript
// ...
  maFonctionAsync: Promise<number>() {
    const error: Error = null;
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (error) {
          reject(error);
        }
        
        resolve(42);
      }, 500);
    });
  }
  
  execution(): void {
    this.maFonction()
      .then((value) => { console.log('value: ', value); })
      .catch((error) => { console.log('error: ', error); });
  }
```

--- 

Typescript

## Promises chain

```typescript
// ...
  execution(): void {
    this.maFonction()
      .then((value) => value + 42)
      .then((value) => new Promise((resolve, reject) => {
        resolve(value + 42);
      })
      .then((value) => { console.log('value: ', value); })
      .catch((error) => { console.log('error: ', error); });
    // affiche "value: 126"
  }
```

---

Typescript

## await / async

```typescript
  async fonctionAwait() {
    const valeur = await Promise.resolve(42);
    console.log('valeur: ', valeur);
  }
```

```typescript
// ...
  async fonctionAwaitAvecErreur(value: number): Promise<number> {
    try {
      await Promise.reject(new Error(''));
    } catch(erreur) {
      console.log('Erreur');
    }
  }
```

---

Typescript

## exercice 1

Créer une classe `Search` qui permet de trouver la liste des liens Wikipédia qui correspondent aux mots clés *angular* et *typescript*.
<br />

*indices :*
- request-promise-native : Librairie pour faire des requêtes HTTP
- @types/request-promise-native : Typage pour rpn
- ts-node : node.js pour le typescript
- Exemple de requete : https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=typescript

---

# Les composants

---

Les composants

## architecture

![](https://angular.io/generated/images/guide/architecture/overview2.png)

---

Les composants

## le rôle

- afficher de l'information
- récupérer l'information fournie par l'utilisateur
- traiter les action utilisateurs
- *pas de traitement de l'information*
- *pas de communication serveur*

---

Les composants

## initialiser le projet

---

Les composants

## creation d'un composant

```bash
  create app\components\search\searchController.html
  create app\components\search\searchController.ts
```

---

Les composants

## code typescript

```typescript
/// <reference path="../../app.module.ts" />
module app.controllers {
    export class ResultsController {
        static $inject = [];
        
        constructor() {}
    }
    
    angular.module("angularWithTS").controller("ResultsController", ResultsController);
}
```

---

Les composants

## Afficher une variable

*typescript :*
```typescript
export class ResultsComponent {
  query: string = 'Hello World';
}
```

*template :*
```html
<p>
  {{query}}
</p>
```

---

Les composants

## Data binding bi-directionel

```typescript
export class SearchComponent {
  query: string = '';
}
```

```html
<input ng-model="query" /><br />
Texte saisi: {{query}}
```

---

# Les services

---

Les services

## le rôle

- récupérer l'information depuis la machine (serveur, fichiers, ...)
- pousser l'information vers la machine (serveur, fichiers, ...)
- traiter l'information
- garant de *l'intelligence** de l'application

---

Les services

## creation d'un service

```bash
ng generate service [module/]name
```

*exemple :*
```bash
$ ng generate service search
installing service
  create src\app\search.service.spec.ts
  create src\app\search.service.ts
  WARNING Service is generated but not provided, it must be provided to be used
```

> *le service doit être déclaré dans un module.*
```typescript
import { SearchService } from './search.service';

@NgModule({
  providers: [
    SearchService,
    // ...
```

---

Les services

## code typescript

```typescript
import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
  constructor() { }
}
```

*exemple d'utlisation :*
```typescript
import { SearchService } from '../search.service';
// ...
export class SearchComponent {
  constructor(private searchService: SearchService) { }

  search() {
    this.searchService.search(this.query);
  }
}
```

---

# Les modules

---

Les modules

## le rôle

- organise l'application de manière fonctionnelle
- mutualise les dépendances (services, components, pipes, ...)

---

Les modules

## creation d'un module

```bash
ng generate module [module/]name
```

*exemple :*
```bash
$ ng generate module search
installing module
  create src\app\search\search.module.ts
  WARNING Module is generated but not provided, it must be provided to be used
```

> *le module doit être importé dans un module.*
```typescript
import { SearchModule } from './search/search.module';

@NgModule({
  imports: [
    SearchModule,
    // ...
```

---

Les modules

## code typescript

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class SearchModule { }
```

---

Les modules

## arbre de dépendances

- component > declarations & exports > module
- directive > declarations & exports > module
- pipe > declarations & exports > module
- service > providers > module ou component
- module > imports > module

---

Les modules

## gestion des services

```typescript
@NgModule({
  declarations: [ SearchComponent ],
  exports: [ SearchComponent ]
})
export class SearchModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SearchModule,
      providers: [ SearchService ]
    }
  }
}
```

*utilisation :*
```typescript
imports: [ SearchModule.forRoot() ] // module principal
ou
imports: [ SearchModule ] // module enfant
```

---

Les modules

## bootstrap

*module :*
```typescript
// ...
@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```

*main.ts :*
```typescript
// ...
platformBrowserDynamic().bootstrapModule(AppModule);
```

---

Les modules

## exercice 2

Créer un composant `results` afin d'afficher les pages wikipedia qui correspondent à la recherche fournie en paramètre du composant.
<br />

*indices :*
- créer un module `search` pour y placer service et composant
- créer un service `search`
- utiliser le composant dans le fichier *app.component.html*

---

Les modules

## exercice 3

Créer un composant `search` afin d'afficher un champ de recherche et les pages wikipedia qui correspondent à la recherche saisie.
<br />

*indices :*
- créer un component `input` avec un champs de saisie et un bouton de recherche, qui expose un event `search`
- créer un composant `search` utilisant `input` & `results`
- utiliser `search` dans le fichier *app.component.html*

---

# Le routeur

---

Le routeur

## Le rôle

- distribue la responsabilité de l'état aux modules & composants 
(ex: https://host.com/module1/module2/un-id)

- conserve l'état actuel de l'application via l'URL
(un refresh doit afficher les même informations)

---

Le routeur

## Module principal

*objectifs :*
- configuration générale
- déclaration des services
<br />

```typescript
import { RouterModule } from '@angular/router';

// ...
  imports: [
    RouterModule.forRoot([], {useHash: true}),
// ...
```

---

Le routeur

## Routage vers un component

```typescript
const routes: Routes = [
  {
    path: '',
    component: MonComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MonComponent]
})
export class Avec1ComponentModule { }
```

---

Le routeur

## Routage vers des modules

```typescript
const mainPageRoutes: Routes = [
  {path: '', redirectTo: '/page1', pathMatch: 'full'},
  {path: 'page1', loadChildren: '../page1/page1.module#Page1Module'},
  {path: 'page2', loadChildren: '../page2/page2.module#Page2Module'}
];
```
<br />

*infos :*
Chaque module est chargé en asynchrone (lazyloading), et correspond à un fichier js dédié même après le build.

---

Le routeur

## Routage vers des components

```typescript
const routes: Routes = [
  {
    path: '',
    component: SearchPageComponent,
    children: [
      {path: '', redirectTo: '/search'},
      {path: 'search', component: SearchComponent},
      {path: 'results/:query', component: ResultComponent}
    ]
  }
];
```

---

Le routeur

## navigation

*template :*
```html
<a routerLink="/search">search</a>
<a [routerLink]="['/results', 'ma recherche']">results</a>
```

*typescript :*
```typescript
export class MonComponent {
  constructor(private router: Route) {}
  
  goToSubpage2(query: string) {
    this.router.navigate(['/results', query]);
  }
}
```

---

Le routeur

## récupération des paramètres

```typescript
export class ResultsComponent implements OnInit, OnDestroy {
  private query: string;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.subscription = this.route.paramMap
      .subscribe((params: ParamMap) => { 
        this.query = params.get('query');
      });
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
```

---

Le routeur

## exercice 4

Faire évoluer l'exercice 3 pour que la recherche reste effective même après un rafraichissement de la page ou l'envoi du lien par email.
<br />

*indices :*
- et si la recherche se trouvait dans l'URL...

---

# Observables & rxjs

---

Observables & rxjs

## présentation

- rxjs > évolution des promesses
- notion de flux de données
  - cylcle de vie non limité à 1 seule donnée
  - notions d'inscription & désinscription
  - données synchronisées ou non entre les inscriptions
- nombreuses fonctions de manipulation des données

---

Observables & rxjs

## utiliser une promesse

`.fromPromise` converti une promesse en Observable

```typescript
Observable
  .fromPromise(new Promise((resolve) => {
    resolve(42);
  })
  .subscribe(
    (value: number) => { console.log('value : ', value); },
    (error: any) => { console.log('error : ', error); },
    () => { console.log('stream ended'); }
  );
```

*affiche :*
- value: 42
- stream ended

---

Observables & rxjs

## .map

`.map` modifie le format d'une donnée

```typescript
Observable
  .from([1, 2, 3])
  .map((id: number) => ({ id: value, href: `http://my_server/page/${id}` }))
  .subscribe(
    (page: any) => { console.log(`page ${page.id} : ${page.href}`); },
    (error: any) => { console.log('error : ', error); },
    () => { console.log('stream ended'); }
  );
```

*affiche :*
- page 1 : http://my_server/page/1
- page 2 : http://my_server/page/2
- page 3 : http://my_server/page/3
- stream ended

---

## .mergeMap

`.mergeMap` modifie le format d'une donnée asynchrone  
(Promise ou Observable)

```typescript
Observable
  .of(1)
  .mergeMap((id: number) => new Promise((resolve) => { 
    resolve({ id: value, href: `http://my_server/page/${id}` });
  })
  .subscribe(
    (page: any) => { console.log(`page ${page.id} : ${page.href}`); },
    (error: any) => { console.log('error : ', error); },
    () => { console.log('stream ended'); }
  );
```

*affiche :*
- page 1 : http://my_server/page/1
- stream ended

---

## Subject

Un flux `Subject` permet de maitriser l'ajout des données

```typescript
const stream = new Subject<number>();

stream.next(1);
stream.subscribe(
  (value: number) => { console.log(`value : ${value}`); },
  (error: any) => { console.log('error : ', error); },
  () => { console.log('stream ended'); }
);
stream.next(2);
stream.next(3);
stream.complete();
```

*affiche :*
- value : 2
- value : 3
- stream ended

---

Observables & rxjs

## exercice 5

Faire évoluer l'exercice 4 pour simplifier le code grace aux observables.
<br />

*indices :*
- le pipe 'async' permet d'afficher des données asynchrones...

---

# Service HTTP

---

Service HTTP

## utilisation

*typescript :*

```typescript
  pages: Observable<Page[]>;

  constructor(private http: Http) {}
  
  ngOnInit() {
    const url = 'http://my_server/page/';
    this.pages = this.http
      .get(url)
      .map((res: Response) => res.json());          
  }
```

*html :*

```html
  <ul *ngFor="let page of (pages | async)">
    <li><a [href]="page.link">{{page.name}}</a></li>
  </ul>
```

---

Service HTTP

## exercice 6

Faire évoluer l'exercice 5 pour utiliser le service HTTP.
<br />

*indices :*
- et si la recherche était gérée par le service search directement...

---

# Aller plus loin...

---

## Aller plus loin...

- lire les règles de codage angular (https://angular.io/guide/styleguide)
- mieux connaitre *zone.js* (https://blog.zenika.com/2016/11/15/les-zones/)
- `var`, c'est le mal... utiliser `let` & `const`
- exemples pour les exercices sur https://github.com/marcbuils/angular-formation
