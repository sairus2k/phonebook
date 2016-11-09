class homeController {
  /** @ngInject */constructor(Contacts) {
    this.contacts = Contacts.getContacts();
    this.name = 'home';
  }
}

export default homeController;
