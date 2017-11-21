import Service from '@ember/service';
import { Socket } from 'phoenix';

export default Service.extend({
  pongs: 0,

  connect() {
    let socket = new Socket('ws://localhost:4000/socket', {});
    socket.connect();

    let channel = socket.channel('ping-pong:lobby', {});
    channel.join();

    this.setProperties({ channel, socket });

    this.setupCallbacks(channel);
  },

  setupCallbacks(channel) {
    channel.on('pong', response => {
      let pongCount = this.get('pongs');
      this.set('pongs', pongCount + 1);
    });
  },

  sendPing() {
    let channel = this.get('channel');
    channel.push('ping', {});
  }
});