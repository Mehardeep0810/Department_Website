// index.js
// Builds the full page DOM, validates the contact form, saves submissions to localStorage,
// and logs the saved JSON to the browser console on each successful submit.

// NOTE: Ensure this file is referenced from index.html: <script src="index.js"></script>

document.addEventListener("DOMContentLoaded", function () {
  console.log("index.js loaded");

  /* ---------------- Helper functions ---------------- */

  // Create element with optional class and text
  function create(tag, className, text) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text !== undefined && text !== null) el.textContent = text;
    return el;
  }

  // Set multiple attributes
  function setAttrs(el, attrs) {
    if (!attrs) return;
    Object.keys(attrs).forEach(k => el.setAttribute(k, attrs[k]));
  }

  // Create an icon element (Font Awesome)
  function icon(classes) {
    const i = document.createElement("i");
    i.className = classes;
    return i;
  }

  /* ---------------- NAVIGATION ---------------- */

  const nav = document.createElement("nav");
  const navContainer = create("div", "container nav-container");

  const logoContainer = create("div", "logo-container");
  const logoImg = create("img", "logo-img");
  setAttrs(logoImg, { src: "images/logo1.png", alt: "Chitkara University Logo" });
  const logoText = create("div", "logo-text", "Computer Applications");
  logoContainer.appendChild(logoImg);
  logoContainer.appendChild(logoText);

  const navLinks = create("ul", "nav-links");
  const links = [
    { text: "Home", href: "#", active: true },
    { text: "Courses", href: "courses.html" },
    { text: "Events", href: "events.html" },
    { text: "Faculty", href: "faculty.html" },
    { text: "Admissions", href: "admission.html" }
  ];

  links.forEach(link => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = link.text;
    a.href = link.href;
    if (link.active) a.classList.add("active");
    a.addEventListener("click", () => {
      document.querySelectorAll(".nav-links a").forEach(x => x.classList.remove("active"));
      a.classList.add("active");
    });
    li.appendChild(a);
    navLinks.appendChild(li);
  });

  navContainer.appendChild(logoContainer);
  navContainer.appendChild(navLinks);
  nav.appendChild(navContainer);
  document.body.appendChild(nav);

  /* ---------------- HERO ---------------- */

  const hero = create("section", "hero-section section-padding");
  const heroContainer = create("div", "container");
  const heroContent = create("div", "hero-content");
  const heroH1 = create("h1", null, "Department of Computer Applications");
  const heroP = create("p", null, "Empowering future technology leaders through innovative education, cutting-edge research, and industry-relevant skills development.");
  const heroButtons = create("div", "hero-buttons");
  const exploreBtn = create("a", "btn", "Explore Programs");
  exploreBtn.href = "#programs-section";
  const eventsBtn = create("a", "btn btn-outline", "Upcoming Events");
  eventsBtn.href = "events.html";
  heroButtons.appendChild(exploreBtn);
  heroButtons.appendChild(eventsBtn);
  heroContent.appendChild(heroH1);
  heroContent.appendChild(heroP);
  heroContent.appendChild(heroButtons);
  heroContainer.appendChild(heroContent);
  hero.appendChild(heroContainer);
  document.body.appendChild(hero);

  /* ---------------- WELCOME ---------------- */

  const welcome = create("section", "welcome-section section-padding");
  const welcomeContainer = create("div", "container");
  const welcomeContent = create("div", "welcome-content");

  const welcomeText = create("div", "welcome-text");
  const welcomeH2 = create("h2", null, "Welcome to Our Department");
  const welcomeP1 = create("p", null, "The Department of Computer Applications is committed to excellence in education, research, and innovation. We offer comprehensive programs that prepare students for successful careers in the rapidly evolving field of computer applications.");
  const welcomeP2 = create("p", null, "Our experienced faculty, state-of-the-art laboratories, and industry partnerships ensure that our graduates are well-equipped to meet the challenges of the digital age.");
  const welcomeLearn = create("a", "btn", "Learn More About Us");
  welcomeLearn.href = "#";
  welcomeText.appendChild(welcomeH2);
  welcomeText.appendChild(welcomeP1);
  welcomeText.appendChild(welcomeP2);
  welcomeText.appendChild(welcomeLearn);

  const welcomeImage = create("div", "welcome-image");
  const welcomeImg = create("img");
  setAttrs(welcomeImg, {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1471&q=80",
    alt: "Students in computer lab"
  });
  welcomeImage.appendChild(welcomeImg);

  welcomeContent.appendChild(welcomeText);
  welcomeContent.appendChild(welcomeImage);
  welcomeContainer.appendChild(welcomeContent);
  welcome.appendChild(welcomeContainer);
  document.body.appendChild(welcome);

  /* ---------------- FEATURES ---------------- */

  const features = create("section", "features-section section-padding");
  const featuresContainer = create("div", "container");
  const featuresTitle = create("h2", "section-title", "Why Choose Our Department");
  const featuresGrid = create("div", "features-grid");

  const featuresData = [
    { icon: "fas fa-graduation-cap", title: "Expert Faculty", desc: "Learn from industry experts and experienced academicians with years of practical knowledge." },
    { icon: "fas fa-laptop-code", title: "Modern Labs", desc: "Access to state-of-the-art computer labs with the latest software and development tools." },
    { icon: "fas fa-handshake", title: "Industry Partnerships", desc: "Strong ties with leading IT companies for internships, projects, and placement opportunities." }
  ];

  featuresData.forEach(f => {
    const card = create("div", "feature-card");
    const iconWrap = create("div", "feature-icon");
    iconWrap.appendChild(icon(f.icon));
    const h3 = create("h3", null, f.title);
    const p = create("p", null, f.desc);
    card.appendChild(iconWrap);
    card.appendChild(h3);
    card.appendChild(p);
    featuresGrid.appendChild(card);
  });

  featuresContainer.appendChild(featuresTitle);
  featuresContainer.appendChild(featuresGrid);
  features.appendChild(featuresContainer);
  document.body.appendChild(features);

  /* ---------------- PROGRAMS ---------------- */

  const programs = create("section", "programs-section section-padding");
  programs.id = "programs-section";
  const programsContainer = create("div", "container");
  const programsTitle = create("h2", "section-title", "Our Academic Programs");
  const programsGrid = create("div", "programs-grid");

  const programsData = [
    {
      title: "BCA (Bachelor of Computer Applications)",
      desc: "A 3-year undergraduate program focusing on software development, web technologies, and database management.",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1470&q=80",
      btnText: "Explore BCA"
    },
    {
      title: "MCA (Master of Computer Applications)",
      desc: "A 2-year postgraduate program with advanced courses in software engineering, data science, and cloud computing.",
      img: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=1469&q=80",
      btnText: "Explore MCA"
    },
    {
      title: "Certificate Programs",
      desc: "Short-term courses in emerging technologies like AI, cybersecurity, mobile app development, and more.",
      img: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1528&q=80",
      btnText: "View Certificates"
    }
  ];

  programsData.forEach(p => {
    const card = create("div", "program-card");
    const imgDiv = create("div", "program-image");
    const imgEl = create("img");
    setAttrs(imgEl, { src: p.img, alt: p.title });
    imgDiv.appendChild(imgEl);

    const content = create("div", "program-content");
    const h3 = create("h3", null, p.title);
    const desc = create("p", null, p.desc);
    const btnDiv = create("div", "program-button");
    const btn = create("a", "btn", p.btnText);
    btn.href = "#";
    btnDiv.appendChild(btn);

    content.appendChild(h3);
    content.appendChild(desc);
    content.appendChild(btnDiv);

    card.appendChild(imgDiv);
    card.appendChild(content);
    programsGrid.appendChild(card);
  });

  programsContainer.appendChild(programsTitle);
  programsContainer.appendChild(programsGrid);
  programs.appendChild(programsContainer);
  document.body.appendChild(programs);

  /* ---------------- STATS ---------------- */

  const stats = create("section", "stats-section section-padding");
  const statsContainer = create("div", "container");
  const statsGrid = create("div", "stats-grid");

  const statsData = [
    { num: "1500+", text: "Graduates" },
    { num: "95%", text: "Placement Rate" },
    { num: "50+", text: "Industry Partners" },
    { num: "15+", text: "Years of Excellence" }
  ];

  statsData.forEach(s => {
    const item = create("div", "stat-item");
    const h3 = create("h3", null, s.num);
    const p = create("p", null, s.text);
    item.appendChild(h3);
    item.appendChild(p);
    statsGrid.appendChild(item);
  });

  statsContainer.appendChild(statsGrid);
  stats.appendChild(statsContainer);
  document.body.appendChild(stats);

  /* ---------------- CONTACT FORM (validation + storage) ---------------- */

  const formSection = create("section", "form-section section-padding");
  const formContainer = create("div", "container");
  const formTitle = create("h2", "section-title", "Get In Touch");
  const contactContainer = create("div", "contact-container");

  // Left column - contact info
  const contactInfo = create("div", "contact-info");
  const contactH3 = create("h3", null, "Contact Information");
  const contactDetails = create("div", "contact-details");

  function buildContactItem(iconClass, titleText, bodyHtml) {
    const item = create("div", "contact-item");
    const iconWrap = create("div", "contact-icon");
    iconWrap.appendChild(icon(iconClass));
    const textWrap = create("div", "contact-text");
    const h4 = create("h4", null, titleText);
    const p = create("p");
    p.innerHTML = bodyHtml;
    textWrap.appendChild(h4);
    textWrap.appendChild(p);
    item.appendChild(iconWrap);
    item.appendChild(textWrap);
    return item;
  }

  contactDetails.appendChild(buildContactItem("fas fa-map-marker-alt", "Our Location", "Chitkara University, Rajpura<br>Punjab 140401"));
  contactDetails.appendChild(buildContactItem("fas fa-phone", "Phone Number", "+91 98765 43210"));
  contactDetails.appendChild(buildContactItem("fas fa-envelope", "Email Address", "computerdepartment@chitkara.edu.in"));

  const socialLinks = create("div", "social-links");
  ["fa-facebook-f", "fa-twitter", "fa-linkedin-in", "fa-instagram"].forEach(cls => {
    const a = create("a");
    a.href = "#";
    a.appendChild(icon("fab " + cls));
    socialLinks.appendChild(a);
  });

  contactInfo.appendChild(contactH3);
  contactInfo.appendChild(contactDetails);
  contactInfo.appendChild(socialLinks);

  // Right column - form
  const contactForm = document.createElement("form");
  contactForm.className = "contact-form";
  contactForm.noValidate = true; // we'll validate manually

  // Create form group helper
  function createFormGroup(labelText, inputTag, inputType, inputId, placeholder, required) {
    const group = create("div", "form-group");
    const label = create("label", null, labelText);
    label.setAttribute("for", inputId);

    let input;
    if (inputTag === "textarea") {
      input = document.createElement("textarea");
      input.rows = 5;
    } else if (inputTag === "select") {
      input = document.createElement("select");
    } else {
      input = document.createElement("input");
      input.type = inputType || "text";
    }

    input.className = "form-control";
    input.id = inputId;
    input.name = inputId;
    if (placeholder) input.placeholder = placeholder;
    if (required) input.required = true;

    const error = create("div", "field-error");
    error.style.display = "none";
    error.style.color = "var(--primary)";
    error.style.fontSize = "0.9rem";
    error.style.marginTop = "6px";

    group.appendChild(label);
    group.appendChild(input);
    group.appendChild(error);

    return { group, input, error };
  }

  const nameFG = createFormGroup("Full Name *", "input", "text", "name", "Enter your full name", true);
  const emailFG = createFormGroup("Email Address *", "input", "email", "email", "Enter your email address", true);
  const phoneFG = createFormGroup("Phone Number", "input", "tel", "phone", "Enter your phone number", false);

  // Course select
  const courseGroup = create("div", "form-group");
  const courseLabel = create("label", null, "Program of Interest");
  courseLabel.setAttribute("for", "course");
  const courseSelect = document.createElement("select");
  courseSelect.className = "form-control";
  courseSelect.id = "course";
  courseSelect.name = "course";
  const courseOptions = [
    { value: "", text: "Select a program" },
    { value: "bca", text: "BCA (Bachelor of Computer Applications)" },
    { value: "mca", text: "MCA (Master of Computer Applications)" },
    { value: "certificate", text: "Certificate Programs" },
    { value: "other", text: "Other" }
  ];
  courseOptions.forEach(o => {
    const opt = document.createElement("option");
    opt.value = o.value;
    opt.textContent = o.text;
    courseSelect.appendChild(opt);
  });
  const courseError = create("div", "field-error");
  courseError.style.display = "none";
  courseError.style.color = "var(--primary)";
  courseError.style.fontSize = "0.9rem";
  courseError.style.marginTop = "6px";
  courseGroup.appendChild(courseLabel);
  courseGroup.appendChild(courseSelect);
  courseGroup.appendChild(courseError);

  const messageFG = createFormGroup("Message *", "textarea", null, "message", "Enter your message", true);

  const submitBtn = create("button", "btn", "Send Message");
  submitBtn.type = "submit";

  const successMsg = create("div", "success-message");
  successMsg.style.display = "none";

  contactForm.appendChild(nameFG.group);
  contactForm.appendChild(emailFG.group);
  contactForm.appendChild(phoneFG.group);
  contactForm.appendChild(courseGroup);
  contactForm.appendChild(messageFG.group);
  contactForm.appendChild(submitBtn);
  contactForm.appendChild(successMsg);

  contactContainer.appendChild(contactInfo);
  contactContainer.appendChild(contactForm);
  formContainer.appendChild(formTitle);
  formContainer.appendChild(contactContainer);
  formSection.appendChild(formContainer);
  document.body.appendChild(formSection);

  /* ---------------- Submissions display (below form) ---------------- */

  const submissionsSection = create("section", "section-padding");
  const submissionsContainer = create("div", "container");
  const submissionsTitle = create("h3", null, "Saved Submissions (Local JSON)");
  const submissionsWrap = create("div");
  submissionsContainer.appendChild(submissionsTitle);
  submissionsContainer.appendChild(submissionsWrap);
  submissionsSection.appendChild(submissionsContainer);
  document.body.appendChild(submissionsSection);

  /* ---------------- Validation functions ---------------- */

  function validateName(v) {
    if (!v) return "Name is required.";
    if (v.length < 3) return "Name must be at least 3 characters.";
    if (v.length > 100) return "Name is too long.";
    return "";
  }

  function validateEmail(v) {
    if (!v) return "Email is required.";
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(v)) return "Enter a valid email address.";
    return "";
  }

  function validatePhone(v) {
    if (!v) return "";
    const cleaned = v.replace(/[^\d]/g, "");
    if (cleaned.length < 7 || cleaned.length > 15) return "Enter a valid phone number.";
    return "";
  }

  function validateMessage(v) {
    if (!v) return "Message is required.";
    if (v.length < 10) return "Message must be at least 10 characters.";
    if (v.length > 2000) return "Message is too long.";
    return "";
  }

  function showError(node, msg) {
    if (!node) return;
    if (msg) {
      node.textContent = msg;
      node.style.display = "block";
    } else {
      node.textContent = "";
      node.style.display = "none";
    }
  }

  // Real-time validation
  nameFG.input.addEventListener("input", () => showError(nameFG.error, validateName(nameFG.input.value.trim())));
  emailFG.input.addEventListener("input", () => showError(emailFG.error, validateEmail(emailFG.input.value.trim())));
  phoneFG.input.addEventListener("input", () => showError(phoneFG.error, validatePhone(phoneFG.input.value.trim())));
  messageFG.input.addEventListener("input", () => showError(messageFG.error, validateMessage(messageFG.input.value.trim())));
  courseSelect.addEventListener("change", () => showError(courseError, ""));

  /* ---------------- localStorage helpers ---------------- */

  const STORAGE_KEY = "applications";

  function loadApplications() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      return JSON.parse(raw);
    } catch (e) {
      console.error("Failed to parse stored applications", e);
      return [];
    }
  }

  function saveApplication(app) {
    const arr = loadApplications();
    arr.unshift(app); // newest first
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
  }

  function clearApplications() {
    localStorage.removeItem(STORAGE_KEY);
    renderSubmissions();
  }

  /* ---------------- Render submissions table ---------------- */

  function renderSubmissions() {
    submissionsWrap.innerHTML = "";
    const apps = loadApplications();
    if (!apps.length) {
      submissionsWrap.appendChild(create("p", null, "No submissions saved yet."));
      return;
    }

    const table = document.createElement("table");
    table.className = "events-table";
    const thead = document.createElement("thead");
    const trHead = document.createElement("tr");
    ["Date", "Name", "Email", "Phone", "Program", "Message"].forEach(h => {
      const th = document.createElement("th");
      th.textContent = h;
      trHead.appendChild(th);
    });
    thead.appendChild(trHead);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    apps.forEach(a => {
      const tr = document.createElement("tr");
      const tdDate = document.createElement("td");
      tdDate.textContent = new Date(a.submittedAt).toLocaleString();
      const tdName = document.createElement("td");
      tdName.textContent = a.name;
      const tdEmail = document.createElement("td");
      tdEmail.textContent = a.email;
      const tdPhone = document.createElement("td");
      tdPhone.textContent = a.phone || "-";
      const tdCourse = document.createElement("td");
      tdCourse.textContent = a.course || "-";
      const tdMsg = document.createElement("td");
      tdMsg.textContent = a.message.length > 120 ? a.message.slice(0, 120) + "…" : a.message;

      tr.appendChild(tdDate);
      tr.appendChild(tdName);
      tr.appendChild(tdEmail);
      tr.appendChild(tdPhone);
      tr.appendChild(tdCourse);
      tr.appendChild(tdMsg);
      tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    submissionsWrap.appendChild(table);

    const clearBtn = create("button", "btn btn-secondary", "Clear All Submissions");
    clearBtn.style.marginTop = "12px";
    clearBtn.addEventListener("click", () => {
      if (confirm("Remove all saved submissions from local storage?")) {
        clearApplications();
      }
    });
    submissionsWrap.appendChild(clearBtn);
  }

  // Initial render
  renderSubmissions();

  /* ---------------- Form submit handler (with console logging) ---------------- */

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameVal = nameFG.input.value.trim();
    const emailVal = emailFG.input.value.trim();
    const phoneVal = phoneFG.input.value.trim();
    const courseVal = courseSelect.value;
    const messageVal = messageFG.input.value.trim();

    const nameErr = validateName(nameVal);
    const emailErr = validateEmail(emailVal);
    const phoneErr = validatePhone(phoneVal);
    const messageErr = validateMessage(messageVal);

    showError(nameFG.error, nameErr);
    showError(emailFG.error, emailErr);
    showError(phoneFG.error, phoneErr);
    showError(messageFG.error, messageErr);

    if (nameErr || emailErr || phoneErr || messageErr) {
      if (nameErr) nameFG.input.focus();
      else if (emailErr) emailFG.input.focus();
      else if (phoneErr) phoneFG.input.focus();
      else if (messageErr) messageFG.input.focus();
      return;
    }

    const application = {
      name: nameVal,
      email: emailVal,
      phone: phoneVal,
      course: courseVal,
      message: messageVal,
      submittedAt: new Date().toISOString()
    };

    try {
      saveApplication(application);
    } catch (err) {
      console.error("Failed to save application", err);
      alert("An error occurred while saving your submission. Please try again.");
      return;
    }

    // --- Console output for immediate inspection ---
    console.log("Saved application (latest):\n", JSON.stringify(application, null, 2));
    try {
      const all = loadApplications();
      console.log("All saved applications (from localStorage):", all);
      if (Array.isArray(all) && all.length) {
        // present a concise table in console
        console.table(all.map(a => ({
          submittedAt: new Date(a.submittedAt).toLocaleString(),
          name: a.name,
          email: a.email,
          phone: a.phone || "-",
          course: a.course || "-",
          messagePreview: a.message.length > 80 ? a.message.slice(0, 80) + "…" : a.message
        })));
      }
      // raw JSON string for easy copy/paste
      console.log("Raw JSON string:", localStorage.getItem(STORAGE_KEY));
    } catch (err) {
      console.error("Failed to parse stored applications for console output", err);
    }
    // --- End console output ---

    // UI feedback
    successMsg.textContent = "Thank you! Your message has been received and saved locally.";
    successMsg.style.display = "block";
    successMsg.style.backgroundColor = "#4caf50";
    successMsg.style.color = "#fff";
    successMsg.style.padding = "12px";
    successMsg.style.borderRadius = "6px";
    successMsg.style.marginTop = "12px";

    contactForm.reset();
    showError(nameFG.error, "");
    showError(emailFG.error, "");
    showError(phoneFG.error, "");
    showError(messageFG.error, "");
    showError(courseError, "");

    renderSubmissions();

    setTimeout(() => {
      successMsg.style.display = "none";
    }, 4000);
  });

  // Accessibility: allow Enter on submit button
  submitBtn.addEventListener("keyup", function (ev) {
    if (ev.key === "Enter") submitBtn.click();
  });

  /* ---------------- FOOTER ---------------- */

  const footer = create("footer");
  const footerContainer = create("div", "container");
  const footerContent = create("div", "footer-content");

  const col1 = create("div", "footer-column");
  col1.appendChild(create("h3", null, "Computer Applications"));
  col1.appendChild(create("p", null, "Department of Computer Applications at Chitkara University, dedicated to excellence in education and research in the field of computing."));
  const col1social = create("div", "social-links");
  ["fa-facebook-f", "fa-twitter", "fa-linkedin-in", "fa-instagram"].forEach(cls => {
    const a = create("a");
    a.href = "#";
    a.appendChild(icon("fab " + cls));
    col1social.appendChild(a);
  });
  col1.appendChild(col1social);

  const col2 = create("div", "footer-column");
  col2.appendChild(create("h3", null, "Quick Links"));
  const ul2 = create("ul", "footer-links");
  const quick = ["Home", "Courses", "Events", "Faculty", "Admissions"];
  const quickHref = ["#", "courses.html", "events.html", "faculty.html", "admission.html"];
  quick.forEach((t, i) => {
    const li = create("li");
    const a = create("a", null, t);
    a.href = quickHref[i];
    li.appendChild(a);
    ul2.appendChild(li);
  });
  col2.appendChild(ul2);

  const col3 = create("div", "footer-column");
  col3.appendChild(create("h3", null, "Programs"));
  const ul3 = create("ul", "footer-links");
  ["BCA", "MCA", "Certificate Courses", "PhD Programs", "Short Term Courses"].forEach(t => {
    const li = create("li");
    const a = create("a", null, t);
    a.href = "#";
    li.appendChild(a);
    ul3.appendChild(li);
  });
  col3.appendChild(ul3);

  const col4 = create("div", "footer-column");
  col4.appendChild(create("h3", null, "Contact Info"));
  const ul4 = create("ul", "footer-links");
  const liAddr = create("li");
  liAddr.appendChild(icon("fas fa-map-marker-alt"));
  liAddr.appendChild(document.createTextNode(" Chitkara University, Patiala"));
  const liPhone = create("li");
  liPhone.appendChild(icon("fas fa-phone"));
  liPhone.appendChild(document.createTextNode(" +91 98765 43210"));
  const liEmail = create("li");
  liEmail.appendChild(icon("fas fa-envelope"));
  liEmail.appendChild(document.createTextNode(" department@chitkara.edu.in"));
  ul4.appendChild(liAddr);
  ul4.appendChild(liPhone);
  ul4.appendChild(liEmail);
  col4.appendChild(ul4);

  footerContent.appendChild(col1);
  footerContent.appendChild(col2);
  footerContent.appendChild(col3);
  footerContent.appendChild(col4);

  const copyrightDiv = create("div", "copyright");
  const copyP = create("p");
  copyP.innerHTML = "&copy; 2023 Department of Computer Applications, Chitkara University. All rights reserved.";
  copyrightDiv.appendChild(copyP);

  footerContainer.appendChild(footerContent);
  footerContainer.appendChild(copyrightDiv);
  footer.appendChild(footerContainer);
  document.body.appendChild(footer);

  /* ---------------- End ---------------- */
});
