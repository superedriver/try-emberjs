import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  email: attr('string'),
  message: attr('string')
  //,
  //
  //emailAddress: '',
  //
  //isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  //isValidMessage: Ember.computed.gte('message.length', 5),
  //isValidAll: Ember.computed.and('isValidEmail', 'isValidMessage'),
  //isDisabled: Ember.computed.not('isValidAll')
});
