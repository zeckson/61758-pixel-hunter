(function () {

  var loadTemplate = function (templateName) {
    var node = document.createElement('span');
    var template = document.getElementById(templateName);
    var content = template.content ? template.content : template;
    node.appendChild(content);
    return node.cloneNode(true);
  };

  var mainElement = document.getElementById('main');
  var introElement = loadTemplate('intro');
  var greetingElement = loadTemplate('greeting');
  var rulesElement = loadTemplate('rules');
  var gameElement = loadTemplate('game');


  var rulesSubmit = rulesElement.querySelector('.rules__button');

  rulesElement.querySelector('.rules__input').oninput = function () {
    if (this.value) {
      rulesSubmit.removeAttribute('disabled');
    } else {
      rulesSubmit.setAttribute('disabled', '');
    }
  };

  var slides = [introElement, greetingElement, rulesElement, gameElement];
  var current = -1;

  var select = function (index) {
    current = index;
    mainElement.innerHTML = '';
    mainElement.appendChild(slides[index]);
  };

  document.querySelector('.next').onclick = function (e) {
    e.preventDefault();

    select(current + 1);
  };

  document.querySelector('.prev').onclick = function (e) {
    e.preventDefault();

    select(current - 1);
  };

  select(0);
})();
