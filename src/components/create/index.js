import angular from 'angular';
import createComponent from './create.component';

const createModule = angular.module('create', [])
  .component('create', createComponent)
  .name;

export default createModule;
