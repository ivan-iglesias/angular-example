# AngularExample

- Angular tutorial from the official [website](https://angular.io/start).
- How to Create an Angular Application Step by Step by [Alexander Rubanau](https://flatlogic.com/blog/how-to-create-angular-app-step-by-step/).
- Complete Angular Tutorial For Beginners from [tektutorialshub](https://www.tektutorialshub.com/angular-tutorial/).

## Commands

Install Angular CLI globally

```
npm install -g @angular/cli
```

Create an Angular proyect

```
ng new angular-example
```

Development server. The app will automatically reload if you change any of the source files.

```
ng serve
```

Code scaffolding

```sh
# directive|pipe|service|class|guard|interface|enum|module
ng generate component component-name

ng generate directive directive-name --skip-tests
```

Build the project. The build artifacts will be stored in the `dist` directory.

```
ng build
```

Running unit tests via [Karma](https://karma-runner.github.io).

```
ng test
```

Running end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

```
ng e2e
```
