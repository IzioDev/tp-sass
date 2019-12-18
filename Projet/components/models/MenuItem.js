class MenuItem {
  constructor(name, href, isDropdown = false, classes = []) {
    this.name = name;
    this.href = href;
    this.isDropdown = isDropdown;
    this.classes = classes;
  }

  getHTMLContent() {
    return `
       <li class="nav-item ${this.addAddionalClasses()}">
         <a class="nav-link" href="${this.href}">${this.name}</a>
         ${this.addDropdownSnippetIfNeeded()}
       </li>
      `;
  }

  addAddionalClasses() {
    return this.classes.join(" ");
  }

  addDropdownSnippetIfNeeded() {
    return this.isDropdown
      ? `
        <div class="dropdown-content">
          <ul>
          <li><a class="dropdown-link" href="#">Informations</a></li>
          <li><a class="dropdown-link" href="#">Localisation</a></li>
          <li><a class="dropdown-link" href="#">Assistance</a></li>
          </ul>
        </div>
      `
      : "";
  }
}
