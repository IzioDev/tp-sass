const menuDatas = [
  {
    name: "Menu",
    href: "menu.html"
  },
  {
    name: "Destinations",
    href: "destinations.html"
  },
  {
    name: "Service",
    href: "services.html",
    isDropdown: true,
    classes: ["services-link"]
  },
  {
    name: "Audio",
    href: "voyage_virtuel_audio.html"
  },
  {
    name: "Vidéo",
    href: "voyage_virtuel_video.html"
  },
  {
    name: "Contact",
    href: "contact.html"
  }
];

const menuItems = menuDatas.map(
  ({ name, href, isDropdown, classes }) =>
    new MenuItem(name, href, isDropdown, classes)
);

const menuItemContainer = $(".nav-items-container").first();

menuItems.forEach(menuItem => {
  menuItemContainer.append(menuItem.getHTMLContent());
});
