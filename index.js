const string = "Hello"

function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
    const cantHearYou = "I can\'t hear you!";
    const yesIndeed = "YES INDEED!";
    const loveYouToo = "I love you, too.";
   
    if (string.toLowerCase(string) === string) {
        return cantHearYou;
    }
    
    else if (string.toUpperCase(string) === string) {
        return yesIndeed;
    }

    else if ("I love you, Grandma." === string) {
        return loveYouToo
    }
}
