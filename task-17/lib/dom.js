function appendProperties(el, props) {
  var classes = props.classes;
  var style = props.style;
  delete props.classes;
  delete props.style;

  if (classes) {
    el.className = classes.join(' ');
  }

  if (style) {
    for (const key in style) {
      if (style.hasOwnProperty(key)) {
        const value = style[key];
        el.style[key] = value;
      }
    }
  }

  for (const key in props) {
    if (props.hasOwnProperty(key)) {
      const value = props[key];
      el.setAttribute(key, value);
    }
  }

  return el;
}

function element(elementName, props, children) {
  var el = document.createElement(elementName);
  (children || []).forEach(function(childElement) {
    el.append(childElement);
  });
  return appendProperties(el, props || {});
}

function createEpisode() {
  var name = element(
      'div',
      {
        classes: ['name'],
        style: {
          fontWeight: 'bold',
          width: '20%'
        }
      }),
      info = element(
          'div',
          {
            classes: ['info'],
            style: {
              fontSize: '14px',
              width: '100%'
            }
          }
      ),
      producer = element(
          'div',
          {
            classes: ['producer'],
            style: {
              fontSize: '15px',
              textAlign: 'center',
              width: '15%'
            }
          }
      ),
      date = element(
          'div',
          {
            classes: ['date'],
            style: {
              fontSize: '15px',
              textAlign: 'center',
              fontStyle: 'italic',
              width: '15%'
            }
          }
      );

  var item = element(
      'div',
      {
        classes: ['item'],
        style: {
          width: '100%'
        }
      },
      [name, info, producer, date]);

  return {
    name: name,
    info: info,
    producer: producer,
    date: date,
    el: item
  };
}
