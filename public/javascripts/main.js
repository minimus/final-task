/**
 * Created by Константин on 01.04.2017.
 */
document.addEventListener('category', e => {
  const category = e.detail.category, reload = window.location.pathname.match(/\/$|\/filter/);
  if (category && reload) {
    window.location = `${category}/1`;
  }
});