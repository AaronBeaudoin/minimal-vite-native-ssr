export const pages = {
  "/": "home"
};

function render(name) {
  if (name === "home") return "Hello world!";
}

export async function renderPage(pageContext) {
  const path = new URL("http://localhost" + pageContext.url).pathname;
  const html = _ => `<html><body><div id="page">${_}</div></body></html>`;

  if (path in pages) {
    return {
      httpResponse: {
        statusCode: 200,
        contentType: "text/html",
        body: html(render(pages[path]))
      }
    };
  } else {
    return {
      httpResponse: null
    };
  }
}
