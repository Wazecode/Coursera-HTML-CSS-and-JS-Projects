(function (window) {
    var speakword = 'Hello';

    function speak(name) {
        console.log(speakword + " " + name);
    }

    window.sayHello = speak;
})(window);
