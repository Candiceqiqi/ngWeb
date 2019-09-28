import angular from 'angular';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngArial from 'angular-aria';
import '/Users/siqiluo/my-app/node_modules/angular-material/angular-material.min.css';

import name from './components/app.ctr';



//window.app = app;

var app=angular.module('myApp',[ngMaterial,ngAnimate,ngArial])
.controller('name',name)
.config(function($mdThemingProvider){
  $mdThemingProvider.theme('default')
  .primaryPalette('teal')
  .accentPalette('orange');

})
.directive('app',function(){
  return{
    template:require('./app.html'),
    restrict:'E'
    
    
  }
});



// import '../style/app.css';

// let app = () => {
//   return {
//     template:require('./app.html'),
//     controller: 'AppCtrl',
//     controllerAs: 'app'
//   }
// };

// class AppCtrl {
//   constructor() {
//     this.url = 'https://github.com/preboot/angular-webpack';
//   }
// }

// const MODULE_NAME = 'app';

// angular.module(MODULE_NAME, [])
//   .directive('app', app)
//   .controller('AppCtrl', AppCtrl);
 export default app;