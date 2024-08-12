let a = [
    "initializing hack tool",
    "connecting to facebook",
    "connecting to server 1",
    "connection failed.retrying...",
    "connecting to server 2",
    "connected successfully",
    "username ishwore",
    "trying brute force",
    "200k password tried",
    "match not found",
    "another 200k password tried",
    "match found",
    "accessing account",
    "hack successful"
];

const sleep = (seconds) => {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(true) }, seconds * 1000);
    });
};

const showhack = async (message) => {
    await sleep(1);
    document.getElementById("text_a").innerHTML += message + "<br>";      

  
};

(async () => {
    for (let i = 0; i < a.length; i++) {
        await showhack(a[i]);
    }
})();

  