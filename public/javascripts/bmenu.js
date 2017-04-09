/**
 * Created by Константин on 30.03.2017.
 */
(function () {
  document.addEventListener('DOMContentLoaded', e => {
    document.querySelector('#left-menu').addEventListener('click', ev => {
      ev.preventDefault();
      const menuMain = document.querySelector('#m1132530');
      menuMain.classList.add('shown');
      menuMain.classList.remove('hided');
    });
    const backPanels = document.querySelectorAll('.back-panel');
    /*for (const panel of backPanels) {
      const bc = panel.querySelectorAll('span');*/
    for (let bp = 0; bp < backPanels.length; bp++) {
      const panel = backPanels[bp];
      const bc = panel.querySelectorAll('span');
      bc[0].addEventListener('click', e => {
        e.preventDefault();
        const menu = document.querySelector('.shown');
        if (menu) {
          menu.classList.add('hided');
          menu.classList.remove('shown');
          if (panel.dataset.parent !== 'm0') {
            const parentMenu = document.querySelector('#' + panel.dataset.parent);
            parentMenu.classList.add('shown');
            parentMenu.classList.remove('hided');
          }
        }
      }, true);
      bc[1].addEventListener('click', e => {
        e.preventDefault();
        const menu = document.querySelector('.shown');
        if (menu) {
          menu.classList.add('hided');
          menu.classList.remove('shown');
        }
      }, true);
    }
    const menuPanels = document.querySelectorAll('div#menu ul li');
    /*for (const panel of menuPanels) {
      if (!panel.classList.contains('back-panel')) {*/
    for (let mp = 0; mp < menuPanels.length; mp++) {
      const panel = menuPanels[mp];
      if (!panel.classList.contains('back-panel')) {
        panel.addEventListener('click', e => {
          e.preventDefault();
          if (!e.target.parentNode.classList.contains('back-panel') && !e.target.parentNode.classList.contains('menu-close')) {
            const childMenu = panel.lastElementChild;
            panel.parentElement.classList.add('hided');
            panel.parentElement.classList.remove('shown');
            if (childMenu) {
              childMenu.classList.add('shown');
              childMenu.classList.remove('hided');
            }
            else {
              const event = new CustomEvent('category', {
                detail: {
                  category: panel.dataset.category
                }
              });
              document.dispatchEvent(event);
            }
          }
        }, true);
      }
    }
  });
})();