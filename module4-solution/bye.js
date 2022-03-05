(function (window) {
    var speakword = 'GoodBye';

    function speak(name) {
        console.log(speakword + " " + name);
    }

    window.sayBye = speak;
})(window);
