function changeTab(event) {
    let targetTab = event.target.getAttribute('href');

    let items = document.getElementById('options').children;

    for (let i=0; i < items.length; i++) {
        if (items[i].firstChild.getAttribute('href') == targetTab) {
            items[i].classList.add('selected');
        } else {
            items[i].classList.remove('selected');
        }
    }

    tabs = document.getElementById('tabs-container').children;

    for (let i=0; i < tabs.length; i++) {
        if (tabs[i].id == targetTab.slice(1)) {
            tabs[i].classList.add('active');
        } else {
            tabs[i].classList.remove('active');
        }
    } 
}