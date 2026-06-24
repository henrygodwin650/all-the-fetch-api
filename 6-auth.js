// API MediaKeySession,Authorization,Credentials,Content-Security-Policy

export function getData() {
  // What is an API Key?
  // Where can we pass it to the server? - querystring, headers, cookies.
  // Controlling when cookies and credientials are passed to a server
  // CSP meta tags and headers

  let str = 'http://127.0.0.1:3000/?name=value&steve=griffith';
  let url = new URL(str); //url.search
  let sp = url.searchParams;
  sp.append('hello', 'world');
  sp.append('api_key', '12345-abcdef-67890-ghijk');
  // document.cookie('')

  let h = new Headers();
  // h.append('content-type', 'application/json');
  // h.append('origin', 'https://cis.org');
  h.append('x-api-key', '12345-abcdef-67890-ghijk'); //API Key
  h.append('authorization', 'Bearer 12345-abcdef-67890-ghijk'); //JWT
 //Forbidden header names: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#forbidden_header_names
  let request = new Request(url, {
    method: 'GET',
    headers: h,
    cache: 'default',
    credentials: 'same-origin', // include, *same-origin, omit
  })
  fetch(request)
  .then((response) => {
    if (!response.ok) throw new Error('invalid');
    return response.text();
  })
    .then((txt) => {
      console.log(txt);
    })
    .catch(console.warn);
}