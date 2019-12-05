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
         ${this.addDropdownSnippetIsNeeded()}
       </li>
      `;
  }

  addAddionalClasses() {
    return this.classes.join(" ");
  }

  addDropdownSnippetIsNeeded() {
    return this.isDropdown
      ? `
        <div class="dropdown-content">
          <ul>
          <li>Information</li>
          <li>Location</li>
          <li>Assistance</li>
          </ul>
        </div>
      `
      : "";
  }
}
