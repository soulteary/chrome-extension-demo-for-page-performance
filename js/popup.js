const btnScan = document.getElementById('scan');
const listResult = document.getElementById('list');

btnScan.addEventListener('click', () => {
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendMessage(tab.id, {'action': 'analytics-page-images::get-resource'}, (pageResource) => {
      let pageImages = pageResource.filter(file => file.initiatorType === 'img');
      listResult.innerHTML = pageImages.map((image) => `<li>${image.name} size:${image.encodedBodySize/1000}KB</li>`).join('\n');
    });
  });
});

