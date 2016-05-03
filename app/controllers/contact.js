import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',

  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isValidTextarea: Ember.computed.gte('message.length', 5),
  isValidAll: Ember.computed.and('isValidEmail', 'isValidTextarea'),
  isDisabled: Ember.computed.not('isValidAll'),

  actions: {
    saveMessage() {
      alert(`We have sent the message on your e-mail: ${this.get('emailAddress')}`);
      this.set('responseMessage', "We got your message and we'll get in touch soon");
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }

});
