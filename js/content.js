chrome.extension.onMessage.addListener((message, sender, callback) => {
  switch (message.action) {
    case 'analytics-page-images::get-resource':
      return callback(performance.getEntriesByType('resource'));
    default:
      return console.error('sth. error');
  }
});
