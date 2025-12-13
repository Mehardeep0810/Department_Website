// faculty.js
// Builds the Faculty page DOM dynamically (plain DOM API, no helper libraries).
// Ensure this file is referenced from faculty.html: <script src="faculty.js"></script>

document.addEventListener("DOMContentLoaded", function () {
  console.log("faculty.js loaded");

  // ---------------- NAVIGATION ----------------
  const nav = document.createElement("nav");
  const navContainer = document.createElement("div");
  navContainer.className = "container nav-container";

  const logoContainer = document.createElement("div");
  logoContainer.className = "logo-container";

  const logoImg = document.createElement("img");
  logoImg.className = "logo-img";
  logoImg.src = "images/logo1.png"; // replace with actual path if needed
  logoImg.alt = "Chitkara University Logo";

  const logoText = document.createElement("div");
  logoText.className = "logo-text";
  logoText.textContent = "Computer Applications";

  logoContainer.appendChild(logoImg);
  logoContainer.appendChild(logoText);

  const navLinks = document.createElement("ul");
  navLinks.className = "nav-links";

  const links = [
    { text: "Home", href: "index.html" },
    { text: "Courses", href: "courses.html" },
    { text: "Events", href: "events.html" },
    { text: "Faculty", href: "faculty.html", active: true },
    { text: "Admissions", href: "admission.html" }
  ];

  links.forEach(link => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = link.text;
    a.href = link.href;
    if (link.active) a.classList.add("active");
    a.addEventListener("click", () => {
      document.querySelectorAll(".nav-links a").forEach(el => el.classList.remove("active"));
      a.classList.add("active");
    });
    li.appendChild(a);
    navLinks.appendChild(li);
  });

  navContainer.appendChild(logoContainer);
  navContainer.appendChild(navLinks);
  nav.appendChild(navContainer);
  document.body.appendChild(nav);

  // ---------------- PAGE HEADER ----------------
  const headerSection = document.createElement("section");
  headerSection.className = "faculty-page-header";

  const headerContainer = document.createElement("div");
  headerContainer.className = "container";

  const headerH1 = document.createElement("h1");
  headerH1.textContent = "Faculty Profiles - Computer Applications";

  const headerP = document.createElement("p");
  headerP.textContent = "Meet our distinguished faculty members in the Department of Computer Applications";

  headerContainer.appendChild(headerH1);
  headerContainer.appendChild(headerP);
  headerSection.appendChild(headerContainer);
  document.body.appendChild(headerSection);

  // ---------------- FACULTY PROFILES ----------------
  const mainContainer = document.createElement("div");
  mainContainer.className = "container";

  const profilesSection = document.createElement("section");
  profilesSection.className = "faculty-profiles";

  // Data for faculty members (edit or extend as needed)
  const facultyData = [
    {
      name: "Dr. Jaiteg Singh Khaira",
      designation: "Professor & Head of Department",
      qualification: "Ph.D. in Computer Science, IIT Delhi",
      expertise: "Artificial Intelligence, Machine Learning, Natural Language Processing, Deep Learning",
      email: "jaiteg.singh@chitkara.edu.in",
      phone: "+91 98765 43210",
      img: "images/icon.png"
    },
    {
      name: "Dr. Maninderjit Singh",
      designation: "Associate Professor",
      qualification: "M.Tech in Computer Science, NIT Trichy",
      expertise: "Data Structures, Algorithms, Database Management Systems, Software Engineering",
      email: "maninderjit.singh@chitkara.edu.in",
      phone: "+91 98765 43211",
      img: "images/icon.png"
    },
    {
      name: "Dr. Deepika Chaudhary",
      designation: "Professor",
      qualification: "Ph.D. in Cybersecurity, IIIT Hyderabad",
      expertise: "Cybersecurity, Network Security, Cryptography, Ethical Hacking",
      email: "deepika.chaudhary@chitkara.edu.in",
      phone: "+91 98765 43212",
      img: "images/icon.png"
    },
    {
      name: "Dr. Vandana",
      designation: "Associate Professor",
      qualification: "Ph.D. in Data Science, IIT Bombay",
      expertise: "Data Science, Big Data Analytics, Machine Learning, Business Intelligence",
      email: "vandana@chitkara.edu.in",
      phone: "+91 98765 43213",
      img: "images/icon.png"
    },
    {
      name: "Dr. Harmaninder Jit Singh",
      designation: "Assistant Professor",
      qualification: "M.Tech in Software Engineering, BITS Pilani",
      expertise: "Software Engineering, Web Development, Mobile App Development, Agile Methodologies",
      email: "harmaninder.singh@chitkara.edu.in",
      phone: "+91 98765 43214",
      img: "images/icon.png"
    },
    {
      name: "Dr. Rupinder Singh",
      designation: "Professor",
      qualification: "Ph.D. in Cloud Computing, IIIT Bangalore",
      expertise: "Cloud Computing, Distributed Systems, Virtualization, IoT",
      email: "rupinder.singh@chitkara.edu.in",
      phone: "+91 98765 43215",
      img: "images/icon.png"
    }
  ];

  // Build each faculty card
  facultyData.forEach(f => {
    const card = document.createElement("div");
    card.className = "faculty-card";

    const img = document.createElement("img");
    img.className = "faculty-image";
    img.src = f.img;
    img.alt = f.name;

    const info = document.createElement("div");
    info.className = "faculty-info";

    const nameEl = document.createElement("h2");
    nameEl.className = "faculty-name";
    nameEl.textContent = f.name;

    const desig = document.createElement("p");
    desig.className = "faculty-designation";
    desig.textContent = f.designation;

    const qual = document.createElement("p");
    qual.className = "faculty-qualification";
    qual.textContent = f.qualification;

    const expertiseWrap = document.createElement("div");
    expertiseWrap.className = "faculty-expertise";
    const expTitle = document.createElement("p");
    expTitle.className = "expertise-title";
    expTitle.textContent = "Areas of Expertise:";
    const expList = document.createElement("p");
    expList.className = "expertise-list";
    expList.textContent = f.expertise;
    expertiseWrap.appendChild(expTitle);
    expertiseWrap.appendChild(expList);

    const contactEmail = document.createElement("div");
    contactEmail.className = "faculty-contact";
    const emailIcon = document.createElement("i");
    emailIcon.className = "fas fa-envelope contact-icon";
    const emailSpan = document.createElement("span");
    emailSpan.textContent = f.email;
    contactEmail.appendChild(emailIcon);
    contactEmail.appendChild(emailSpan);

    const contactPhone = document.createElement("div");
    contactPhone.className = "faculty-contact";
    const phoneIcon = document.createElement("i");
    phoneIcon.className = "fas fa-phone contact-icon";
    const phoneSpan = document.createElement("span");
    phoneSpan.textContent = f.phone;
    contactPhone.appendChild(phoneIcon);
    contactPhone.appendChild(phoneSpan);

    info.appendChild(nameEl);
    info.appendChild(desig);
    info.appendChild(qual);
    info.appendChild(expertiseWrap);
    info.appendChild(contactEmail);
    info.appendChild(contactPhone);

    card.appendChild(img);
    card.appendChild(info);

    profilesSection.appendChild(card);
  });

  mainContainer.appendChild(profilesSection);
  document.body.appendChild(mainContainer);

  // ---------------- FOOTER ----------------
  const footer = document.createElement("footer");
  const footerContainer = document.createElement("div");
  footerContainer.className = "container";

  const footerContent = document.createElement("div");
  footerContent.className = "footer-content";

  const col1 = document.createElement("div");
  col1.className = "footer-column";
  const col1h3 = document.createElement("h3");
  col1h3.textContent = "Computer Applications";
  const col1p = document.createElement("p");
  col1p.textContent = "Department of Computer Applications at Chitkara University, dedicated to excellence in education and research in the field of computing.";
  const col1social = document.createElement("div");
  col1social.className = "social-links";
  ["fa-facebook-f", "fa-twitter", "fa-linkedin-in", "fa-instagram"].forEach(cls => {
    const a = document.createElement("a");
    a.href = "#";
    const i = document.createElement("i");
    i.className = "fab " + cls;
    a.appendChild(i);
    col1social.appendChild(a);
  });
  col1.appendChild(col1h3);
  col1.appendChild(col1p);
  col1.appendChild(col1social);

  const col2 = document.createElement("div");
  col2.className = "footer-column";
  const col2h3 = document.createElement("h3");
  col2h3.textContent = "Quick Links";
  const col2ul = document.createElement("ul");
  col2ul.className = "footer-links";
  const quick = ["Home", "Faculty", "Courses", "Admissions", "Events"];
  const quickHref = ["index.html", "faculty.html", "courses.html", "admission.html", "events.html"];
  quick.forEach((t, i) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = quickHref[i];
    a.textContent = t;
    li.appendChild(a);
    col2ul.appendChild(li);
  });
  col2.appendChild(col2h3);
  col2.appendChild(col2ul);

  const col3 = document.createElement("div");
  col3.className = "footer-column";
  const col3h3 = document.createElement("h3");
  col3h3.textContent = "Contact Info";
  const col3ul = document.createElement("ul");
  col3ul.className = "footer-links";
  const liAddr = document.createElement("li");
  const addrIcon = document.createElement("i");
  addrIcon.className = "fas fa-map-marker-alt";
  liAddr.appendChild(addrIcon);
  liAddr.appendChild(document.createTextNode(" Chitkara University, Patiala"));
  const liPhone = document.createElement("li");
  const phoneI = document.createElement("i");
  phoneI.className = "fas fa-phone";
  liPhone.appendChild(phoneI);
  liPhone.appendChild(document.createTextNode(" +91 98765 43210"));
  const liEmail = document.createElement("li");
  const emailI = document.createElement("i");
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

  const copyrightDiv = document.createElement("div");
  copyrightDiv.className = "copyright";
  const copyP = document.createElement("p");
  copyP.innerHTML = "&copy; 2023 Department of Computer Applications, Chitkara University. All rights reserved.";
  copyrightDiv.appendChild(copyP);

  footerContainer.appendChild(footerContent);
  footerContainer.appendChild(copyrightDiv);
  footer.appendChild(footerContainer);
  document.body.appendChild(footer);

  // ---------------- End ----------------
});
