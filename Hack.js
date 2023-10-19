var outputConsole = document.querySelector(".output-console");

outputConsole.style.height = '50vw';
outputConsole.style.top = '50vw';

/* fake console stuff */
var commandStart = ['Performing DNS Lookups for',
    'Searching ',
    'Analyzing ',
    'Estimating Approximate Location of ',
    'Compressing ',
    'Requesting Authorization From : ',
    'wget -a -t ',
    'chmod +x ',
    'tar -xzf ',
    'Entering Location ',
    'Compilation Started of ',
    'Downloading '
];
var commandParts = ['Data Structure',
    'http://wwjd.com?au&2',
    'Texture',
    'TPS Reports',
    ' .... Searching ... ',
    'http://zanb.se/?23&88&far=2',
    'http://ab.ret45-33/?timing=1ww'
];
var commandResponses = ['Authorizing ',
    'Authorized...',
    'Access Granted..',
    'Going Deeper....',
    'Compression Complete.',
    'Compilation of Data Structures Complete..',
    'Entering Security Console...',
    'Encryption Unsuccesful Attempting Retry...',
    'Waiting for response...',
    '....Searching...',
    'Calculating Space Requirements '
];
var isProcessing = false;
var processTime = 0;
var lastProcess = 0;

function consoleOutput() {
    var textEl = document.createElement('p');

    if (isProcessing) {
        textEl = document.createElement('span');
        textEl.textContent += Math.random() + " ";
        if (Date.now() > lastProcess + processTime) {
            isProcessing = false;
        }
    } else {
        var commandType = ~~(Math.random() * 4);
        switch (commandType) {
            case 0:
                textEl.textContent = commandStart[~~(Math.random() * commandStart.length)] + commandParts[~~(Math.random() * commandParts.length)];
                break;
            case 3:
                isProcessing = true;
                processTime = ~~(Math.random() * 5000);
                lastProcess = Date.now();
            default:
                textEl.textContent = commandResponses[~~(Math.random() * commandResponses.length)];
                break;
        }
    }

    outputConsole.scrollTop = outputConsole.scrollHeight;
    outputConsole.appendChild(textEl);

    if (outputConsole.scrollHeight > window.innerHeight) {
        var removeNodes = outputConsole.querySelectorAll('*');
        for (var n = 0; n < ~~(removeNodes.length / 3); n++) {
            outputConsole.removeChild(removeNodes[n]);
        }
    }

    setTimeout(consoleOutput, ~~(Math.random() * 200));
}

setTimeout(function () {
    outputConsole.style.height = '50vw'; // 100% of viewport height
    outputConsole.style.top = '0'; // Top of the viewport

    consoleOutput();
}, 200);

window.addEventListener('resize', function () {
    outputConsole.style.height = '50vw'; // Update height on resize
});