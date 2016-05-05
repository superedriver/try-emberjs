import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',

  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isValidMessage: Ember.computed.gte('message.length', 5),
  isValidAll: Ember.computed.and('isValidEmail', 'isValidMessage'),
  isDisabled: Ember.computed.not('isValidAll'),

  actions: {
    saveMessage() {

      const email = this.get('emailAddress');
      const message = this.get('message');

      const newContact = this.store.createRecord('contact', {
        email: email,
        message: message
      });

      newContact.save().then((response) => {
        alert(`We have sent the message on your e-mail: ${this.get('emailAddress')}`);
        this.set('responseMessage', "We got your message and we'll get in touch soon");
        this.set('emailAddress', '');
        this.set('message', '');
      });
    }
  }

});
