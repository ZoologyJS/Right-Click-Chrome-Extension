
/**
 * Format for creating a context menu
 * @param {string} title - Title to be shown in context menu for item
 * @param {string} contexts - What context is being accessed by the context menu
 * @param {string} id - Unique id of the context menu item
 */
function contextMenuInit(title, contexts, id){
  chrome.contextMenus.create({'title': title,
                              'contexts': [contexts],
                              'id': id});
}

/* Initializing each context menu item */
chrome.runtime.onInstalled.addListener(function(){
  // Add instances of the contextMenuInit() function to add context menu items
  contextMenuInit(<TITLE>, 'selection', <ID>);
  contextMenuInit(<TITLE>, 'selection', <ID>);
  chrome.contextMenus.create({'type': 'separator', 'contexts': ['selection'],'id': 'sep1'});
  contextMenuInit(<TITLE>, 'selection', <ID>);
  contextMenuInit(<TITLE>, 'selection', <ID>);

});

/**
 * Creating a new tab 1 tab to the right from current active tab
 * @param {string} url - The url to create a new tab with
 */
function nextIndexTabCreate(url){
  chrome.tabs.query({ currentWindow: true, active: true }, function(tabs){
        const newTabIndex = (tabs[0].index) + 1;
        chrome.tabs.create({'url': url, 'index': newTabIndex});
      });
}

/**
 * Initiailizing context menu click listener. Grabs highlighted
 * text and encodes as URI component when necessary.
 */
chrome.contextMenus.onClicked.addListener(function(event){
  let url;
  const orig_query = event.selectionText.trim();  // Only for non-URI components
  const query_term = encodeURIComponent(event.selectionText);
  console.log(`Search term logging as... \"${query_term}\"`);
  switch (event.menuItemId) {

    // Add individual case statements with an ID matching the passed in contextMenuInit() parameter from earlier 
    case <STRING ID>
      url = <STRING URL>;
      nextIndexTabCreate(url);
    break;

    case <STRING ID>
      url = <STRING URL>;
      nextIndexTabCreate(url);
    break;
  }
});
