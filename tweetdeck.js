const { ipcRenderer } = require('electron');

ipcRenderer.on('getTweets', async (event, args) => {
  try {
    const tweetsHTML = document.getElementsByClassName("js-chirp-container chirp-container")[0].children;
    if (!tweetsHTML) {
      ipcRenderer.sendToHost('getTweets', false);
    } else {
      const tweetTexts = [];
      Object.keys(tweetsHTML).forEach(key => {
        const tweet = tweetsHTML[key].getElementsByClassName("js-tweet-text tweet-text with-linebreaks ")[0].textContent;
        tweetTexts.push(tweet)
      });
      ipcRenderer.sendToHost('getTweets', tweetTexts);
    }
  } catch (e) {
    ipcRenderer.sendToHost('getTweets', false);
  }
});
