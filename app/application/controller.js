import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  phoenix: service(),

  actions: {
    ping() {
      this.get('phoenix').sendPing();
    }
  }
});