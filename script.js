fetch('https://icanhazdadjoke.com/slack')
.then(data => data.json())
.then(jokedata => {
        const joke = jokedata.attachments[0].text;
        const element = document.getElementById('element');
        element.innerHTML = joke;
    })