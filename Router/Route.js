export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorize = authorize;
    }
}

/*
[ ] -> Tout le monde peut y acceder.
["disconnected"] -> Réserver aux utilisateurs déconnectés.
["admin"] -> Réserver aux utilisateurs admin.
["client"] -> Réserver aux utilisateurs client.
["admin", "client"] -> Réserver aux utilisateurs client OU admin.
*/
