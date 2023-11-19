const text = document.querySelector("#title");
const typewriter = new Typewriter(text, {
    loop: true
});

typewriter.typeString("Sivarth,<br>Développeur Web")
    .pauseFor(1500)
    .deleteAll()
    .typeString("HTML, CSS")
    .pauseFor(1500)
    .deleteAll()
    .typeString("Typescript,<br>React")
    .pauseFor(1500)
    .deleteAll()
    .typeString("PHP,<br>Laravel")
    .pauseFor(1500)
    .deleteAll()
    .start()