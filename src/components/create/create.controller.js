class createController {
  /** @ngInject */constructor($state, $stateParams, Contacts) {
    const id = $stateParams.id;
    this._state = $state;
    this._contacts = Contacts;
    if (id) {
      const contact = Contacts.getContact(id);
      this.title = `Edit contact ${contact.name}`;
      this.contact = contact;
    } else {
      this.title ='Create contact';
      this.contact = {};
    }
  }

  save() {
    this._contacts.save(this.contact);
    this._state.go('home');
  }
}

export default createController;
