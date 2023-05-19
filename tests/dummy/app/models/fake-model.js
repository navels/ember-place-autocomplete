import Model, { attr } from '@ember-data/model';

export default class FakeModel extends Model {
  @attr('string', { defaultValue: 'fake-name' }) name;
  @attr('string', { defaultValue: 'fake-email' }) email;
  @attr('string', { defaultValue: 'fake-address' }) address;
  @attr('string', { defaultValue: 'fake-address2' }) address2;
  @attr('string', { defaultValue: 'fake-address3' }) address3;
}
