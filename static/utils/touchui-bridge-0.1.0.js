/*
* version: 0.1.0
**/
(function() {
    var touchuiBridge = {
        __sentMessage: function(type, message) {
            var data = {
                type: type,
                message: message
            }
            data = encodeURIComponent(JSON.stringify(data))
            location.href = 'http://uileader/bridge/message?data=' + data
        },
        sentMessage: function(message) {
            this.__sentMessage('MESSAGE', message)
        },
        onMessage: function(callback) {
            window.addEventListener('browsermessage', function(event) {
                if(typeof callback === 'function') {
                    callback(event.detail)
                }
            })
        },
        setBtns: function(btns) {
            this.__sentMessage('SETBTNS', btns)
        },
        onBtnClick: function(callback) {
            window.addEventListener('btnclick', function(event) {
                if(typeof callback === 'function') {
                    callback(event.detail)
                }
            })
        }
    }
    window.touchuiBridge = touchuiBridge
})()