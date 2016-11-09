import angular from 'angular';
import ContactsFactory from './contacts.factory';

const commonModule = angular.module('app.common', [])
  .factory('Contacts', ContactsFactory)
  .name;

export default commonModule;
