const text = document.querySelector("#title");
const typewriter = new Typewriter(text, {
    loop: true
});

typewriter.typeString("Sivarth,<br>Développeur Web")
    .pauseFor(1000)
    .deleteAll()
    .typeString("Développeur<br>React")
    .pauseFor(1000)
    .deleteChars(5)
    .typeString("Laravel")
    .pauseFor(1000)
    .deleteAll()
    .start()