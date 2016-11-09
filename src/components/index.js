import angular from 'angular';
import home from './home';
import create from './create';

const componentModule = angular.module('app.components', [
  home,
  create
])
  .name;

export default componentModule;
