// events.js
// Builds the Events page DOM dynamically using plain DOM API.
// Ensure this file is referenced from events.html: <script src="events.js"></script>

document.addEventListener("DOMContentLoaded", function () {
  console.log("events.js loaded");

  // ---------------- NAVIGATION ----------------
  var nav = document.createElement("nav");
  var navContainer = document.createElement("div");
  navContainer.className = "container nav-container";

  var logoContainer = document.createElement("div");
  logoContainer.className = "logo-container";

  var logoImg = document.createElement("img");
  logoImg.className = "logo-img";
  logoImg.src = "images/logo1.png";
  logoImg.alt = "Chitkara University Logo";

  var logoText = document.createElement("div");
  logoText.className = "logo-text";
  logoText.textContent = "Computer Applications";

  logoContainer.appendChild(logoImg);
  logoContainer.appendChild(logoText);

  var navLinks = document.createElement("ul");
  navLinks.className = "nav-links";

  var links = [
    { text: "Home", href: "index.html" },
    { text: "Courses", href: "courses.html" },
    { text: "Events", href: "events.html", active: true },
    { text: "Faculty", href: "faculty.html" },
    { text: "Admissions", href: "admission.html" }
  ];

  links.forEach(function (link) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.textContent = link.text;
    a.href = link.href;
    if (link.active) a.classList.add("active");
    a.addEventListener("click", function () {
      document.querySelectorAll(".nav-links a").forEach(function (el) { el.classList.remove("active"); });
      a.classList.add("active");
    });
    li.appendChild(a);
    navLinks.appendChild(li);
  });

  navContainer.appendChild(logoContainer);
  navContainer.appendChild(navLinks);
  nav.appendChild(navContainer);
  document.body.appendChild(nav);

  // ---------------- HERO (events-hero) ----------------
  var hero = document.createElement("section");
  hero.className = "events-hero";

  var heroContainer = document.createElement("div");
  heroContainer.className = "container";

  var heroH1 = document.createElement("h1");
  heroH1.textContent = "Department Events & Activities";

  var heroP = document.createElement("p");
  heroP.textContent = "Stay updated with the latest workshops, seminars, hackathons, and other events organized by the Computer Applications Department.";

  heroContainer.appendChild(heroH1);
  heroContainer.appendChild(heroP);
  hero.appendChild(heroContainer);
  document.body.appendChild(hero);

  // ---------------- ONGOING EVENTS TABLE ----------------
  var mainContainer = document.createElement("div");
  mainContainer.className = "container";

  var eventsHeader = document.createElement("div");
  eventsHeader.className = "events-header";
  var eh3 = document.createElement("h3");
  eh3.textContent = "Ongoing Events";
  eventsHeader.appendChild(eh3);
  mainContainer.appendChild(eventsHeader);

  var tableWrap = document.createElement("div");
  tableWrap.className = "events-table-container";

  var table = document.createElement("table");
  table.className = "events-table";

  var thead = document.createElement("thead");
  var trHead = document.createElement("tr");
  ["Event Name", "Type", "Date & Time", "Location", "Organizer"].forEach(function (h) {
    var th = document.createElement("th");
    th.textContent = h;
    trHead.appendChild(th);
  });
  thead.appendChild(trHead);
  table.appendChild(thead);

  var tbody = document.createElement("tbody");

  var ongoingEvents = [
    { name: "Web Development Bootcamp", type: "Workshop", datetime: "Oct 15, 2025\n10:00 AM - 4:00 PM", location: "Computer Lab 3", organizer: "Dr. Sarah" },
    { name: "AI & Machine Learning Seminar", type: "Seminar", datetime: "Oct 18, 2025\n2:00 PM - 4:00 PM", location: "Auditorium A", organizer: "Prof. Anish" },
    { name: "Annual Hackathon 2025", type: "Hackathon", datetime: "Oct 20-21, 2025\n9:00 AM - 6:00 PM", location: "Innovation Center", organizer: "Student Council" },
    { name: "Cybersecurity Workshop", type: "Workshop", datetime: "Oct 22, 2025\n11:00 AM - 1:00 PM", location: "Exploretorium", organizer: "Prof. Shreya Sharma" },
    { name: "Data Science Guest Lecture", type: "Guest Lecture", datetime: "Oct 25, 2025\n10:00 AM - 4:00 PM", location: "Conference Hall", organizer: "Dr. Anita Verma" },
    { name: "Mobile App Development", type: "Workshop", datetime: "Oct 28, 2025\n3:00 PM - 5:00 PM", location: "Computer Lab 5", organizer: "Prof. Raj" }
  ];

  ongoingEvents.forEach(function (ev) {
    var tr = document.createElement("tr");

    var tdName = document.createElement("td");
    tdName.className = "event-name";
    tdName.textContent = ev.name;

    var tdType = document.createElement("td");
    var spanType = document.createElement("span");
    spanType.className = "event-type";
    spanType.textContent = ev.type;
    tdType.appendChild(spanType);

    var tdDate = document.createElement("td");
    // preserve line break for small text
    tdDate.innerHTML = ev.datetime.replace("\n", "<br><small>");

    // ensure closing small tag if used
    if (tdDate.innerHTML.indexOf("<small>") !== -1 && tdDate.innerHTML.indexOf("</small>") === -1) {
      tdDate.innerHTML = tdDate.innerHTML + "</small>";
    }

    var tdLoc = document.createElement("td");
    tdLoc.textContent = ev.location;

    var tdOrg = document.createElement("td");
    tdOrg.textContent = ev.organizer;

    tr.appendChild(tdName);
    tr.appendChild(tdType);
    tr.appendChild(tdDate);
    tr.appendChild(tdLoc);
    tr.appendChild(tdOrg);

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  tableWrap.appendChild(table);
  mainContainer.appendChild(tableWrap);
  document.body.appendChild(mainContainer);

  // ---------------- UPCOMING EVENTS GRID ----------------
  var eventsSection = document.createElement("section");
  eventsSection.className = "events-section";

  var eventsContainer = document.createElement("div");
  eventsContainer.className = "container";

  var upcomingTitle = document.createElement("h2");
  upcomingTitle.className = "section-title";
  upcomingTitle.textContent = "Upcoming Events";
  eventsContainer.appendChild(upcomingTitle);

  var eventsGrid = document.createElement("div");
  eventsGrid.className = "events-grid";

  var upcomingEvents = [
    {
      date: "October 15, 2025",
      title: "Web Development Workshop",
      desc: "Learn modern web development techniques including HTML5, CSS3, JavaScript, and responsive design principles.",
      tag: "Workshop",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1470&q=80"
    },
    {
      date: "October 22, 2025",
      title: "AI & Machine Learning Seminar",
      desc: "Explore the latest trends in artificial intelligence and machine learning with industry experts.",
      tag: "Seminar",
      img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1470&q=80"
    },
    {
      date: "November 5-6, 2025",
      title: "Annual Hackathon 2025",
      desc: "48-hour coding competition to solve real-world problems. Open to all students with prizes for winners.",
      tag: "Hackathon",
      img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1470&q=80"
    },
    {
      date: "November 12, 2025",
      title: "Cybersecurity Guest Lecture",
      desc: "Industry professional shares insights on current cybersecurity threats and defense strategies.",
      tag: "Guest Lecture",
      img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1470&q=80"
    },
    {
      date: "November 18, 2025",
      title: "Mobile App Development Workshop",
      desc: "Hands-on session on building cross-platform mobile applications using React Native.",
      tag: "Workshop",
      img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1470&q=80"
    },
    {
      date: "December 2, 2025",
      title: "Data Science Career Panel",
      desc: "Panel discussion with data science professionals about career opportunities and skills needed.",
      tag: "Seminar",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1470&q=80"
    }
  ];

  upcomingEvents.forEach(function (ev) {
    var card = document.createElement("div");
    card.className = "event-card";

    var imageDiv = document.createElement("div");
    imageDiv.className = "event-image";
    imageDiv.style.backgroundImage = "url('" + ev.img + "')";
    imageDiv.style.backgroundSize = "cover";
    imageDiv.style.backgroundPosition = "center";

    var content = document.createElement("div");
    content.className = "event-content";

    var dateWrap = document.createElement("div");
    dateWrap.className = "event-date";
    var calIcon = document.createElement("i");
    calIcon.className = "far fa-calendar-alt";
    var dateSpan = document.createElement("span");
    dateSpan.textContent = ev.date;
    dateWrap.appendChild(calIcon);
    dateWrap.appendChild(dateSpan);

    var title = document.createElement("h3");
    title.className = "event-title";
    title.textContent = ev.title;

    var desc = document.createElement("p");
    desc.className = "event-description";
    desc.textContent = ev.desc;

    var tag = document.createElement("span");
    tag.className = "event-tag";
    tag.textContent = ev.tag;

    content.appendChild(dateWrap);
    content.appendChild(title);
    content.appendChild(desc);
    content.appendChild(tag);

    card.appendChild(imageDiv);
    card.appendChild(content);

    eventsGrid.appendChild(card);
  });

  eventsContainer.appendChild(eventsGrid);
  eventsSection.appendChild(eventsContainer);
  document.body.appendChild(eventsSection);

  // ---------------- FOOTER ----------------
  var footer = document.createElement("footer");
  var footerContainer = document.createElement("div");
  footerContainer.className = "container";

  var footerContent = document.createElement("div");
  footerContent.className = "footer-content";

  var col1 = document.createElement("div");
  col1.className = "footer-column";
  var col1h3 = document.createElement("h3");
  col1h3.textContent = "Computer Applications";
  var col1p = document.createElement("p");
  col1p.textContent = "Department of Computer Applications at Chitkara University, dedicated to excellence in education and research in the field of computing.";
  var col1social = document.createElement("div");
  col1social.className = "social-links";
  ["fa-facebook-f", "fa-twitter", "fa-linkedin-in", "fa-instagram"].forEach(function (cls) {
    var a = document.createElement("a");
    a.href = "#";
    var i = document.createElement("i");
    i.className = "fab " + cls;
    a.appendChild(i);
    col1social.appendChild(a);
  });
  col1.appendChild(col1h3);
  col1.appendChild(col1p);
  col1.appendChild(col1social);

  var col2 = document.createElement("div");
  col2.className = "footer-column";
  var col2h3 = document.createElement("h3");
  col2h3.textContent = "Quick Links";
  var col2ul = document.createElement("ul");
  col2ul.className = "footer-links";
  var quick = ["Home", "Courses", "Events", "Faculty", "Admissions"];
  var quickHref = ["index.html", "courses.html", "events.html", "faculty.html", "admission.html"];
  quick.forEach(function (t, i) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = quickHref[i];
    a.textContent = t;
    li.appendChild(a);
    col2ul.appendChild(li);
  });
  col2.appendChild(col2h3);
  col2.appendChild(col2ul);

  var col3 = document.createElement("div");
  col3.className = "footer-column";
  var col3h3 = document.createElement("h3");
  col3h3.textContent = "Contact Info";
  var col3ul = document.createElement("ul");
  col3ul.className = "footer-links";
  var liAddr = document.createElement("li");
  var addrIcon = document.createElement("i");
  addrIcon.className = "fas fa-map-marker-alt";
  liAddr.appendChild(addrIcon);
  liAddr.appendChild(document.createTextNode(" Chitkara University, Patiala"));
  var liPhone = document.createElement("li");
  var phoneI = document.createElement("i");
  phoneI.className = "fas fa-phone";
  liPhone.appendChild(phoneI);
  liPhone.appendChild(document.createTextNode(" +91 98765 43210"));
  var liEmail = document.createElement("li");
  var emailI = document.createElement("i");
  emailI.className = "fas fa-envelope";
  liEmail.appendChild(emailI);
  liEmail.appendChild(document.createTextNode(" department@chitkara.edu.in"));
  col3ul.appendChild(liAddr);
  col3ul.appendChild(liPhone);
  col3ul.appendChild(liEmail);
  col3.appendChild(col3h3);
  col3.appendChild(col3ul);

  footerContent.appendChild(col1);
  footerContent.appendChild(col2);
  footerContent.appendChild(col3);

  var copyrightDiv = document.createElement("div");
  copyrightDiv.className = "copyright";
  var copyP = document.createElement("p");
  copyP.innerHTML = "&copy; 2023 Department of Computer Applications, Chitkara University. All rights reserved.";
  copyrightDiv.appendChild(copyP);

  footerContainer.appendChild(footerContent);
  footerContainer.appendChild(copyrightDiv);
  footer.appendChild(footerContainer);
  document.body.appendChild(footer);

  // ---------------- End ----------------
});
