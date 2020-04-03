function request(method, url, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.addEventListener('load', function () {
    if (success) {
      success(JSON.parse(this.responseText));
    }
  });
  xhr.addEventListener('error', error || function () {
  });
  xhr.send();
  return xhr;
}

function get(url, success, error) {
  return request('GET', url, success || function () {
  }, error || function () {
  });
}
