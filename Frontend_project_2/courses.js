// courses.js
// Builds the Courses page DOM dynamically using plain DOM API.
// Mirrors the static courses HTML structure and uses the same styles.css.
// Adds basic validation and saves "Request More Information" submissions to localStorage.
// Reference this file from courses.html: <script src="courses.js"></script>

document.addEventListener("DOMContentLoaded", function () {
  console.log("courses.js loaded");

  /* ---------------- NAVIGATION ---------------- */
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
    { text: "Courses", href: "courses.html", active: true },
    { text: "Events", href: "events.html" },
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

  /* ---------------- HERO ---------------- */
  var hero = document.createElement("section");
  hero.className = "hero-section section-padding";

  var heroContainer = document.createElement("div");
  heroContainer.className = "container";

  var heroContent = document.createElement("div");
  heroContent.className = "hero-content";

  var heroH1 = document.createElement("h1");
  heroH1.textContent = "Our Academic Programs";

  var heroP = document.createElement("p");
  heroP.textContent = "Explore our comprehensive range of computer application programs designed to equip students with cutting-edge skills and industry-ready knowledge.";

  heroContent.appendChild(heroH1);
  heroContent.appendChild(heroP);
  heroContainer.appendChild(heroContent);
  hero.appendChild(heroContainer);
  document.body.appendChild(hero);

  /* ---------------- COURSES OVERVIEW (FEATURES GRID) ---------------- */
  var overview = document.createElement("section");
  overview.className = "features-section section-padding";

  var overviewContainer = document.createElement("div");
  overviewContainer.className = "container";

  var overviewTitle = document.createElement("h2");
  overviewTitle.className = "section-title";
  overviewTitle.textContent = "Undergraduate & Postgraduate Programs";

  var featuresGrid = document.createElement("div");
  featuresGrid.className = "features-grid";

  var cards = [
    {
      icon: "fas fa-laptop-code",
      title: "BCA",
      desc: "Bachelor of Computer Applications - Comprehensive foundation in computer applications and software development.",
      href: "#bca"
    },
    {
      icon: "fas fa-robot",
      title: "BCA AI & ML",
      desc: "BCA with specialization in Artificial Intelligence & Machine Learning - Future-ready curriculum focusing on AI technologies.",
      href: "#bca-ai-ml"
    },
    {
      icon: "fas fa-graduation-cap",
      title: "MCA",
      desc: "Master of Computer Applications - Advanced program for in-depth knowledge and research in computer applications.",
      href: "#mca"
    }
  ];

  cards.forEach(function (c) {
    var card = document.createElement("div");
    card.className = "feature-card";

    var iconWrap = document.createElement("div");
    iconWrap.className = "feature-icon";
    var i = document.createElement("i");
    i.className = c.icon;
    iconWrap.appendChild(i);

    var h3 = document.createElement("h3");
    h3.textContent = c.title;

    var p = document.createElement("p");
    p.textContent = c.desc;

    var a = document.createElement("a");
    a.className = "btn";
    a.href = c.href;
    a.textContent = "Learn More";
    a.style.marginTop = "1rem";

    card.appendChild(iconWrap);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(a);

    featuresGrid.appendChild(card);
  });

  overviewContainer.appendChild(overviewTitle);
  overviewContainer.appendChild(featuresGrid);
  overview.appendChild(overviewContainer);
  document.body.appendChild(overview);

  /* ---------------- BCA PROGRAM DETAILS ---------------- */
  var bcaSection = document.createElement("section");
  bcaSection.id = "bca";
  bcaSection.className = "programs-section section-padding";

  var bcaContainer = document.createElement("div");
  bcaContainer.className = "container";

  var bcaTitle = document.createElement("h2");
  bcaTitle.className = "section-title";
  bcaTitle.textContent = "BCA - Bachelor of Computer Applications";

  var bcaContent = document.createElement("div");
  bcaContent.className = "welcome-content";

  var bcaText = document.createElement("div");
  bcaText.className = "welcome-text";

  var bcaOverviewH3 = document.createElement("h3");
  bcaOverviewH3.textContent = "Program Overview";
  var bcaOverviewP = document.createElement("p");
  bcaOverviewP.textContent = "The Bachelor of Computer Applications (BCA) is a 3-year undergraduate program that provides students with a strong foundation in computer applications, programming languages, and software development. The curriculum is designed to meet the evolving demands of the IT industry.";

  var bcaFeaturesH3 = document.createElement("h3");
  bcaFeaturesH3.style.marginTop = "2rem";
  bcaFeaturesH3.textContent = "Key Features";

  var bcaUl = document.createElement("ul");
  bcaUl.style.color = "var(--text-light)";
  bcaUl.style.marginLeft = "1.5rem";
  bcaUl.style.marginBottom = "1.5rem";
  ["Comprehensive programming foundation", "Industry-relevant curriculum", "Hands-on project experience", "Internship opportunities", "Placement assistance"].forEach(function (liText) {
    var li = document.createElement("li");
    li.textContent = liText;
    bcaUl.appendChild(li);
  });

  var bcaCareerH3 = document.createElement("h3");
  bcaCareerH3.textContent = "Career Opportunities";
  var bcaCareerP = document.createElement("p");
  bcaCareerP.textContent = "Software Developer, Web Developer, System Analyst, Database Administrator, Network Administrator, and more.";

  var bcaApply = document.createElement("a");
  bcaApply.className = "btn";
  bcaApply.href = "admission.html";
  bcaApply.style.marginTop = "1.5rem";
  bcaApply.textContent = "Apply Now";

  bcaText.appendChild(bcaOverviewH3);
  bcaText.appendChild(bcaOverviewP);
  bcaText.appendChild(bcaFeaturesH3);
  bcaText.appendChild(bcaUl);
  bcaText.appendChild(bcaCareerH3);
  bcaText.appendChild(bcaCareerP);
  bcaText.appendChild(bcaApply);

  var bcaImageWrap = document.createElement("div");
  bcaImageWrap.className = "welcome-image";
  var bcaImg = document.createElement("img");
  bcaImg.src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1470&q=80";
  bcaImg.alt = "BCA Program";
  bcaImageWrap.appendChild(bcaImg);

  bcaContent.appendChild(bcaText);
  bcaContent.appendChild(bcaImageWrap);

  bcaContainer.appendChild(bcaTitle);
  bcaContainer.appendChild(bcaContent);
  bcaSection.appendChild(bcaContainer);
  document.body.appendChild(bcaSection);

  /* ---------------- BCA AI & ML DETAILS ---------------- */
  var aiSection = document.createElement("section");
  aiSection.id = "bca-ai-ml";
  aiSection.className = "features-section section-padding";

  var aiContainer = document.createElement("div");
  aiContainer.className = "container";

  var aiTitle = document.createElement("h2");
  aiTitle.className = "section-title";
  aiTitle.textContent = "BCA with AI & ML Specialization";

  var aiContent = document.createElement("div");
  aiContent.className = "welcome-content";

  var aiImageWrap = document.createElement("div");
  aiImageWrap.className = "welcome-image";
  var aiImg = document.createElement("img");
  aiImg.src = "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1470&q=80";
  aiImg.alt = "AI & ML Program";
  aiImageWrap.appendChild(aiImg);

  var aiText = document.createElement("div");
  aiText.className = "welcome-text";

  var aiOverviewH3 = document.createElement("h3");
  aiOverviewH3.textContent = "Program Overview";
  var aiOverviewP = document.createElement("p");
  aiOverviewP.textContent = "The BCA with specialization in Artificial Intelligence and Machine Learning is a cutting-edge program that combines traditional computer application fundamentals with advanced AI and ML technologies. This program prepares students for the future of technology.";

  var aiCoursesH3 = document.createElement("h3");
  aiCoursesH3.style.marginTop = "2rem";
  aiCoursesH3.textContent = "Specialized Courses";

  var aiUl = document.createElement("ul");
  aiUl.style.color = "var(--text-light)";
  aiUl.style.marginLeft = "1.5rem";
  aiUl.style.marginBottom = "1.5rem";
  ["Machine Learning Fundamentals", "Deep Learning & Neural Networks", "Natural Language Processing", "Computer Vision", "AI Ethics and Governance", "Data Science with Python"].forEach(function (liText) {
    var li = document.createElement("li");
    li.textContent = liText;
    aiUl.appendChild(li);
  });

  var aiCareerH3 = document.createElement("h3");
  aiCareerH3.textContent = "Career Opportunities";
  var aiCareerP = document.createElement("p");
  aiCareerP.textContent = "AI Engineer, Machine Learning Engineer, Data Scientist, AI Research Specialist, Business Intelligence Analyst, and more.";

  var aiApply = document.createElement("a");
  aiApply.className = "btn";
  aiApply.href = "admission.html";
  aiApply.style.marginTop = "1.5rem";
  aiApply.textContent = "Apply Now";

  aiText.appendChild(aiOverviewH3);
  aiText.appendChild(aiOverviewP);
  aiText.appendChild(aiCoursesH3);
  aiText.appendChild(aiUl);
  aiText.appendChild(aiCareerH3);
  aiText.appendChild(aiCareerP);
  aiText.appendChild(aiApply);

  aiContent.appendChild(aiImageWrap);
  aiContent.appendChild(aiText);

  aiContainer.appendChild(aiTitle);
  aiContainer.appendChild(aiContent);
  aiSection.appendChild(aiContainer);
  document.body.appendChild(aiSection);

  /* ---------------- MCA DETAILS ---------------- */
  var mcaSection = document.createElement("section");
  mcaSection.id = "mca";
  mcaSection.className = "programs-section section-padding";

  var mcaContainer = document.createElement("div");
  mcaContainer.className = "container";

  var mcaTitle = document.createElement("h2");
  mcaTitle.className = "section-title";
  mcaTitle.textContent = "MCA - Master of Computer Applications";

  var mcaContent = document.createElement("div");
  mcaContent.className = "welcome-content";

  var mcaText = document.createElement("div");
  mcaText.className = "welcome-text";

  var mcaOverviewH3 = document.createElement("h3");
  mcaOverviewH3.textContent = "Program Overview";
  var mcaOverviewP = document.createElement("p");
  mcaOverviewP.textContent = "The Master of Computer Applications (MCA) is a 2-year postgraduate program designed to provide advanced knowledge in computer applications, software development, and system design. The program emphasizes research, innovation, and industry applications.";

  var mcaHighlightsH3 = document.createElement("h3");
  mcaHighlightsH3.style.marginTop = "2rem";
  mcaHighlightsH3.textContent = "Program Highlights";

  var mcaUl = document.createElement("ul");
  mcaUl.style.color = "var(--text-light)";
  mcaUl.style.marginLeft = "1.5rem";
  mcaUl.style.marginBottom = "1.5rem";
  ["Advanced programming concepts", "Software engineering principles", "Cloud computing and distributed systems", "Research methodology", "Industry projects and internships", "Thesis/project work"].forEach(function (liText) {
    var li = document.createElement("li");
    li.textContent = liText;
    mcaUl.appendChild(li);
  });

  var mcaCareerH3 = document.createElement("h3");
  mcaCareerH3.textContent = "Career Opportunities";
  var mcaCareerP = document.createElement("p");
  mcaCareerP.textContent = "Senior Software Engineer, System Architect, Project Manager, IT Consultant, Research Scientist, and leadership roles in IT companies.";

  var mcaApply = document.createElement("a");
  mcaApply.className = "btn";
  mcaApply.href = "admission.html";
  mcaApply.style.marginTop = "1.5rem";
  mcaApply.textContent = "Apply Now";

  mcaText.appendChild(mcaOverviewH3);
  mcaText.appendChild(mcaOverviewP);
  mcaText.appendChild(mcaHighlightsH3);
  mcaText.appendChild(mcaUl);
  mcaText.appendChild(mcaCareerH3);
  mcaText.appendChild(mcaCareerP);
  mcaText.appendChild(mcaApply);

  var mcaImageWrap = document.createElement("div");
  mcaImageWrap.className = "welcome-image";
  var mcaImg = document.createElement("img");
  mcaImg.src = "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=1469&q=80";
  mcaImg.alt = "MCA Program";
  mcaImageWrap.appendChild(mcaImg);

  mcaContent.appendChild(mcaText);
  mcaContent.appendChild(mcaImageWrap);

  mcaContainer.appendChild(mcaTitle);
  mcaContainer.appendChild(mcaContent);
  mcaSection.appendChild(mcaContainer);
  document.body.appendChild(mcaSection);

  /* ---------------- PROGRAM COMPARISON (STATS SECTION) ---------------- */
  var compareSection = document.createElement("section");
  compareSection.className = "stats-section section-padding";

  var compareContainer = document.createElement("div");
  compareContainer.className = "container";

  var compareTitle = document.createElement("h2");
  compareTitle.className = "section-title";
  compareTitle.style.color = "white";
  compareTitle.textContent = "Program Comparison";

  var compareGrid = document.createElement("div");
  compareGrid.className = "features-grid";

  var compareCards = [
    { title: "BCA", details: ["Duration: 3 Years", "Eligibility: 10+2 with Mathematics", "Focus: Foundation in Computer Applications", "Entry Level: Undergraduate"] },
    { title: "BCA AI & ML", details: ["Duration: 3 Years", "Eligibility: 10+2 with Mathematics", "Focus: AI & Machine Learning Technologies", "Entry Level: Undergraduate"] },
    { title: "MCA", details: ["Duration: 2 Years", "Eligibility: Bachelor's Degree in any discipline with Mathematics", "Focus: Advanced Computer Applications", "Entry Level: Postgraduate"] }
  ];

  compareCards.forEach(function (c) {
    var card = document.createElement("div");
    card.className = "feature-card";
    var h3 = document.createElement("h3");
    h3.textContent = c.title;
    card.appendChild(h3);
    c.details.forEach(function (d) {
      var p = document.createElement("p");
      p.innerHTML = "<strong>" + d.split(":")[0] + ":</strong> " + d.split(":").slice(1).join(":").trim();
      card.appendChild(p);
    });
    compareGrid.appendChild(card);
  });

  compareContainer.appendChild(compareTitle);
  compareContainer.appendChild(compareGrid);
  compareSection.appendChild(compareContainer);
  document.body.appendChild(compareSection);

  /* ---------------- CONTACT CTA & REQUEST FORM ---------------- */
  var contactSection = document.createElement("section");
  contactSection.className = "form-section section-padding";

  var contactContainer = document.createElement("div");
  contactContainer.className = "container";

  var contactInner = document.createElement("div");
  contactInner.className = "contact-container";

  // Left column - info
  var infoCol = document.createElement("div");
  infoCol.className = "contact-info";

  var infoH3 = document.createElement("h3");
  infoH3.textContent = "Need More Information?";
  var infoP = document.createElement("p");
  infoP.textContent = "Our admission counselors are here to help you choose the right program and guide you through the admission process.";

  var contactDetails = document.createElement("div");
  contactDetails.className = "contact-details";

  function makeContactItem(iconClass, title, body) {
    var item = document.createElement("div");
    item.className = "contact-item";
    var iconWrap = document.createElement("div");
    iconWrap.className = "contact-icon";
    var i = document.createElement("i");
    i.className = iconClass;
    iconWrap.appendChild(i);
    var textWrap = document.createElement("div");
    textWrap.className = "contact-text";
    var h4 = document.createElement("h4");
    h4.textContent = title;
    var p = document.createElement("p");
    p.textContent = body;
    textWrap.appendChild(h4);
    textWrap.appendChild(p);
    item.appendChild(iconWrap);
    item.appendChild(textWrap);
    return item;
  }

  contactDetails.appendChild(makeContactItem("fas fa-phone", "Admission Helpline", "+91 98765 43210"));
  contactDetails.appendChild(makeContactItem("fas fa-envelope", "Email", "admissions@chitkara.edu.in"));
  contactDetails.appendChild(makeContactItem("fas fa-clock", "Office Hours", "Mon-Sat: 9:00 AM - 5:00 PM"));

  infoCol.appendChild(infoH3);
  infoCol.appendChild(infoP);
  infoCol.appendChild(contactDetails);

  // Right column - form
  var formCol = document.createElement("div");
  formCol.className = "contact-form";

  var formH3 = document.createElement("h3");
  formH3.textContent = "Request More Information";

  var form = document.createElement("form");
  form.noValidate = true;

  function createFormGroup(labelText, inputType, id, required, placeholder) {
    var group = document.createElement("div");
    group.className = "form-group";
    var label = document.createElement("label");
    label.setAttribute("for", id);
    label.textContent = labelText;
    var input;
    if (inputType === "textarea") {
      input = document.createElement("textarea");
      input.rows = 3;
    } else if (inputType === "select") {
      input = document.createElement("select");
    } else {
      input = document.createElement("input");
      input.type = inputType;
    }
    input.className = "form-control";
    input.id = id;
    input.name = id;
    if (placeholder) input.placeholder = placeholder;
    if (required) input.required = true;

    var error = document.createElement("div");
    error.className = "field-error";
    error.style.display = "none";
    error.style.color = "var(--primary)";
    error.style.fontSize = "0.9rem";
    error.style.marginTop = "6px";

    group.appendChild(label);
    group.appendChild(input);
    group.appendChild(error);

    return { group: group, input: input, error: error };
  }

  var fgName = createFormGroup("Full Name *", "text", "info-name", true, "Enter your full name");
  var fgEmail = createFormGroup("Email Address *", "email", "info-email", true, "Enter your email address");
  var fgPhone = createFormGroup("Phone Number *", "tel", "info-phone", true, "Enter your phone number");

  // program select
  var programGroup = document.createElement("div");
  programGroup.className = "form-group";
  var programLabel = document.createElement("label");
  programLabel.setAttribute("for", "info-program");
  programLabel.textContent = "Program Interested In *";
  var programSelect = document.createElement("select");
  programSelect.className = "form-control";
  programSelect.id = "info-program";
  programSelect.name = "info-program";
  ["", "bca", "bca-ai-ml", "mca"].forEach(function (val, idx) {
    var opt = document.createElement("option");
    opt.value = val;
    opt.textContent = idx === 0 ? "Select a program" : (val === "bca" ? "BCA" : val === "bca-ai-ml" ? "BCA with AI & ML" : "MCA");
    programSelect.appendChild(opt);
  });
  var programError = document.createElement("div");
  programError.className = "field-error";
  programError.style.display = "none";
  programError.style.color = "var(--primary)";
  programError.style.fontSize = "0.9rem";
  programError.style.marginTop = "6px";
  programGroup.appendChild(programLabel);
  programGroup.appendChild(programSelect);
  programGroup.appendChild(programError);

  var fgQuestion = createFormGroup("Your Question", "textarea", "info-question", false, "Any specific questions?");

  var submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.className = "btn";
  submitBtn.textContent = "Request Information";

  form.appendChild(fgName.group);
  form.appendChild(fgEmail.group);
  form.appendChild(fgPhone.group);
  form.appendChild(programGroup);
  form.appendChild(fgQuestion.group);
  form.appendChild(submitBtn);

  formCol.appendChild(formH3);
  formCol.appendChild(form);

  contactInner.appendChild(infoCol);
  contactInner.appendChild(formCol);
  contactContainer.appendChild(contactInner);
  contactSection.appendChild(contactContainer);
  document.body.appendChild(contactSection);

  /* ---------------- Simple validation and localStorage saving ---------------- */

  var STORAGE_KEY = "course_info_requests";

  function validateNotEmpty(value) {
    return value && value.trim().length > 0;
  }

  function validateEmail(value) {
    if (!value) return false;
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(value);
  }

  function showError(node, message) {
    if (!node) return;
    if (message) {
      node.textContent = message;
      node.style.display = "block";
    } else {
      node.textContent = "";
      node.style.display = "none";
    }
  }

  function loadRequests() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      return JSON.parse(raw);
    } catch (e) {
      console.error("Failed to parse requests", e);
      return [];
    }
  }

  function saveRequest(obj) {
    var arr = loadRequests();
    arr.unshift(obj);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
  }

  // Real-time simple validation
  fgName.input.addEventListener("input", function () {
    showError(fgName.error, validateNotEmpty(fgName.input.value) ? "" : "Name is required.");
  });
  fgEmail.input.addEventListener("input", function () {
    showError(fgEmail.error, validateEmail(fgEmail.input.value) ? "" : "Enter a valid email.");
  });
  fgPhone.input.addEventListener("input", function () {
    showError(fgPhone.error, validateNotEmpty(fgPhone.input.value) ? "" : "Phone is required.");
  });
  programSelect.addEventListener("change", function () {
    showError(programError, programSelect.value ? "" : "Please select a program.");
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var nameVal = fgName.input.value.trim();
    var emailVal = fgEmail.input.value.trim();
    var phoneVal = fgPhone.input.value.trim();
    var programVal = programSelect.value;
    var questionVal = fgQuestion.input.value.trim();

    var nameErr = validateNotEmpty(nameVal) ? "" : "Name is required.";
    var emailErr = validateEmail(emailVal) ? "" : "Enter a valid email.";
    var phoneErr = validateNotEmpty(phoneVal) ? "" : "Phone is required.";
    var programErr = programVal ? "" : "Please select a program.";

    showError(fgName.error, nameErr);
    showError(fgEmail.error, emailErr);
    showError(fgPhone.error, phoneErr);
    showError(programError, programErr);

    if (nameErr || emailErr || phoneErr || programErr) {
      if (nameErr) fgName.input.focus();
      else if (emailErr) fgEmail.input.focus();
      else if (phoneErr) fgPhone.input.focus();
      else programSelect.focus();
      return;
    }

    var requestObj = {
      name: nameVal,
      email: emailVal,
      phone: phoneVal,
      program: programVal,
      question: questionVal,
      submittedAt: new Date().toISOString()
    };

    try {
      saveRequest(requestObj);
    } catch (err) {
      console.error("Failed to save request", err);
      alert("Could not save your request. Try again.");
      return;
    }

    // Log to console for immediate inspection
    console.log("Saved course info request:", JSON.stringify(requestObj, null, 2));
    try {
      var all = loadRequests();
      console.log("All saved requests:", all);
      console.table(all.map(function (r) {
        return {
          submittedAt: new Date(r.submittedAt).toLocaleString(),
          name: r.name,
          email: r.email,
          phone: r.phone,
          program: r.program,
          questionPreview: r.question.length > 80 ? r.question.slice(0, 80) + "…" : r.question
        };
      }));
    } catch (err) {
      console.error("Failed to log saved requests", err);
    }

    // Simple UI feedback
    alert("Thank you! Your request has been submitted.");
    form.reset();
  });

  /* ---------------- FOOTER ---------------- */
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
  col3h3.textContent = "Programs";
  var col3ul = document.createElement("ul");
  col3ul.className = "footer-links";
  ["BCA", "BCA AI & ML", "MCA", "PhD Programs"].forEach(function (t) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = "#";
    a.textContent = t;
    li.appendChild(a);
    col3ul.appendChild(li);
  });
  col3.appendChild(col3h3);
  col3.appendChild(col3ul);

  var col4 = document.createElement("div");
  col4.className = "footer-column";
  var col4h3 = document.createElement("h3");
  col4h3.textContent = "Contact Info";
  var col4ul = document.createElement("ul");
  col4ul.className = "footer-links";
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
  col4ul.appendChild(liAddr);
  col4ul.appendChild(liPhone);
  col4ul.appendChild(liEmail);
  col4.appendChild(col4h3);
  col4.appendChild(col4ul);

  footerContent.appendChild(col1);
  footerContent.appendChild(col2);
  footerContent.appendChild(col3);
  footerContent.appendChild(col4);

  var copyrightDiv = document.createElement("div");
  copyrightDiv.className = "copyright";
  var copyP = document.createElement("p");
  copyP.innerHTML = "&copy; 2023 Department of Computer Applications, Chitkara University. All rights reserved.";
  copyrightDiv.appendChild(copyP);

  footerContainer.appendChild(footerContent);
  footerContainer.appendChild(copyrightDiv);
  footer.appendChild(footerContainer);
  document.body.appendChild(footer);

  /* ---------------- End ---------------- */
});
