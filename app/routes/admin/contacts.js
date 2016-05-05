import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('contact');
  }
  //,
  //actions: {
  //  saveMessage() {
  //
  //    const email = this.get('emailAddress');
  //    const message = this.get('message');
  //
  //    const newContact = this.store.createRecord('contact', {
  //      email: email,
  //      message: message
  //    });
  //
  //    newContact.save().then(() => {
  //      alert(`We have sent the message on your e-mail: ${this.get('emailAddress')}`);
  //      this.set('responseMessage', "We got your message and we'll get in touch soon");
  //      this.set('emailAddress', '');
  //      this.set('message', '');
  //    });
  //  }
  //}
});
