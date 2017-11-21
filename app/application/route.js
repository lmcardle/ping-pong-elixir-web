import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({

  phoenix: service(),

  model() {
    this.get('phoenix').connect();
  }
});