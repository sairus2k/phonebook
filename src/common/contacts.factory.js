import angular from 'angular';

const ContactFactory = function () {
  const contacts = [
    {
      id: 0,
      name: 'John Snow',
      email: 'johnsnow@gmail.com'
    },
    {
      id: 1,
      name: 'Jack Johnson',
      email: 'jack@mail.ru'
    },
    {
      id: 2,
      name: 'Dow Jones',
      email: 'dowjons@gmail.ru'
    }
  ];
  const getContacts = () => contacts;
  const getContact = id => contacts.find(item => item.id === parseInt(id));
  const save = contact => {
    if (contact.hasOwnProperty('id')) {
      angular.merge(contacts[contact.id], contact);
    } else {
      contact.id = contacts.length;
      contacts.push(contact);
    }
  };

  return { getContacts, getContact, save };
};

export default ContactFactory;
