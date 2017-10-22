import Ember from 'ember';
import ENV from 'kalliope-ember/config/environment';

export default Ember.Component.extend({
    init: function() {
        this._super(...arguments);
        this.mediaRecorder = false;

        navigator.getUserMedia = navigator.getUserMedia ||
                                 navigator.webkitGetUserMedia ||
                                 navigator.mozGetUserMedia ||
                                 navigator.msGetUserMedia;

        if (navigator.getUserMedia) {
            var that = this
            navigator.getUserMedia(
                { audio: true },
                function(stream) {
                    var mr = new MediaStreamRecorder(stream);
                    mr.stream = stream;
                    mr.recorderType = StereoAudioRecorder;
                    // Kalliopé needs this mimeType.
                    mr.mimeType = 'application/octet-stream';

                    mr.ondataavailable = function(blob) {
                        that.send_audio_file(blob);
                    };

                    that.mediaRecorder = mr;
                },
                function(e) {
                    console.error('media error', e);
                }
            );
        } else {
            console.error('getUserMedia unsupported');
        }
    },

    actions: {
        send_order: function() {
            var order = this.get('text_order');
            console.log(order);
            Ember.Logger.assert(false, order);
            if (order) {
                Ember.$.ajax({
                  headers: {
                    withCredentials: true,
                    Authorization: 'Basic ' + btoa(ENV.APP.KALLIOPE.LOGIN + ':' + ENV.APP.KALLIOPE.PASS),
                  },
                  contentType: 'application/json',
                  url: ENV.APP.KALLIOPE.HOST + ':' + ENV.APP.KALLIOPE.PORT + '/synapses/start/order',
                  data: '{"order": "'+order+'"}',
                  type: 'POST'
                }).then(function(response) {
                  //TODO: When kalliopé will return the response of the neuron instead of the brain used.
                  Ember.Logger.assert(false, error);
                  console.log('HERE!!!');
                  console.log(response);
                });
            }
        },
        record_audio_order: function() {
            if(this.get('mediaRecorder')) {
                this.get('mediaRecorder').start(5 * 1000);
                this.$("#start_record_audio").hide()
                this.$("#stop_record_audio").removeClass('hidden').show();
            }
            else {
                this.$("#start_record_audio").attr("disabled", "disabled");
            }
        },
        stop_audio_order: function() {
            if (this.get('mediaRecorder')) {
                this.get('mediaRecorder').stop();
            }
            this.$("#start_record_audio").show();
            this.$("#stop_record_audio").hide();
        }
    },

    send_audio_file: function(blob) {
        var fd = new FormData();
        // Kalliope accept only wav and mp3 files.
        fd.append('file', blob, 'order.wav');
        Ember.$.ajax({
            headers: {
                withCredentials: true,
                Authorization: 'Basic ' + btoa(ENV.APP.KALLIOPE.LOGIN + ':' + ENV.APP.KALLIOPE.PASS),
            },
            contentType: false,
            processData: false,
            data: fd,
            url: ENV.APP.KALLIOPE.HOST + ':' + ENV.APP.KALLIOPE.PORT + '/synapses/start/audio',
            type: 'POST'
        }).then(function(response) {
            //TODO: When kalliopé will return the response of the neuron instead of the brain used.
        });
    }
});
