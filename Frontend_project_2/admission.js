// admission.js
// Validates the admission form, saves submission metadata to localStorage (key: "admissions"),
// logs saved JSON to the console for inspection, shows a success message, and resets the form.

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("admissionForm");
  var successMessage = document.getElementById("successMessage");

  // Inputs
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");
  var dob = document.getElementById("dob");
  var genderInputs = document.getElementsByName("gender");
  var address = document.getElementById("address");

  var qualification = document.getElementById("qualification");
  var percentage = document.getElementById("percentage");
  var school = document.getElementById("school");
  var year = document.getElementById("year");

  var course = document.getElementById("course");
  var specialization = document.getElementById("specialization");
  var campus = document.getElementById("campus");
  var intake = document.getElementById("intake");

  var photo = document.getElementById("photo");
  var marksheet = document.getElementById("marksheet");
  var idproof = document.getElementById("idproof");
  var signature = document.getElementById("signature");

  var declaration = document.getElementById("declaration");
  var updates = document.getElementById("updates");

  // Utility: show or hide inline field error
  function showFieldError(inputEl, message) {
    if (!inputEl) return;
    var parent = inputEl.parentElement;
    var err = parent.querySelector(".field-error");
    if (!err) {
      err = document.createElement("div");
      err.className = "field-error";
      err.style.color = "var(--primary)";
      err.style.fontSize = "0.9rem";
      err.style.marginTop = "6px";
      parent.appendChild(err);
    }
    if (message) {
      err.textContent = message;
      err.style.display = "block";
    } else {
      err.textContent = "";
      err.style.display = "none";
    }
  }

  // Basic validators
  function isNonEmpty(value) {
    return value !== null && String(value).trim().length > 0;
  }

  function validateName(value) {
    if (!isNonEmpty(value)) return "This field is required.";
    if (!/^[A-Za-z\s]{2,}$/.test(value.trim())) return "Only letters and spaces, min 2 characters.";
    return "";
  }

  function validateEmail(value) {
    if (!isNonEmpty(value)) return "Email is required.";
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(value.trim())) return "Enter a valid email address.";
    return "";
  }

  function validatePhone(value) {
    if (!isNonEmpty(value)) return "Phone is required.";
    var cleaned = value.replace(/[^\d]/g, "");
    if (!/^\d{10}$/.test(cleaned)) return "Enter a valid 10-digit phone number.";
    return "";
  }

  function validateDOB(value) {
    if (!isNonEmpty(value)) return "Date of birth is required.";
    var d = new Date(value);
    if (isNaN(d.getTime())) return "Enter a valid date.";
    return "";
  }

  function validateAddress(value) {
    if (!isNonEmpty(value)) return "Address is required.";
    if (value.trim().length < 20) return "Address must be at least 20 characters.";
    return "";
  }

  function validateSelect(value, label) {
    if (!isNonEmpty(value)) return label + " is required.";
    return "";
  }

  function validatePercentage(value) {
    if (!isNonEmpty(value)) return "Percentage/CGPA is required.";
    var num = parseFloat(value);
    if (isNaN(num) || num < 0 || num > 100) return "Enter a valid percentage (0-100).";
    return "";
  }

  function validateYear(value) {
    if (!isNonEmpty(value)) return "Year of passing is required.";
    var num = parseInt(value, 10);
    if (isNaN(num) || num < 1980 || num > 2030) return "Enter a valid year between 1980 and 2030.";
    return "";
  }

  // File validations with size limits
  function validateFiles() {
    var limits = {
      photo: 2 * 1024 * 1024, // 2 MB
      marksheet: 5 * 1024 * 1024, // 5 MB
      idproof: 5 * 1024 * 1024, // 5 MB
      signature: 1 * 1024 * 1024 // 1 MB
    };

    var errors = {};

    if (!photo.files || photo.files.length === 0) {
      errors.photo = "Passport photo is required.";
    } else {
      var f = photo.files[0];
      if (!f.type.startsWith("image/")) errors.photo = "Photo must be an image.";
      else if (f.size > limits.photo) errors.photo = "Photo must be under 2 MB.";
    }

    if (!marksheet.files || marksheet.files.length === 0) {
      errors.marksheet = "Marksheet is required.";
    } else {
      var m = marksheet.files[0];
      var allowed = ["application/pdf", "image/jpeg", "image/png"];
      if (allowed.indexOf(m.type) === -1) errors.marksheet = "Marksheet must be PDF or image (jpg/png).";
      else if (m.size > limits.marksheet) errors.marksheet = "Marksheet must be under 5 MB.";
    }

    if (idproof.files && idproof.files.length > 0) {
      var idf = idproof.files[0];
      var allowedId = ["application/pdf", "image/jpeg", "image/png"];
      if (allowedId.indexOf(idf.type) === -1) errors.idproof = "ID proof must be PDF or image (jpg/png).";
      else if (idf.size > limits.idproof) errors.idproof = "ID proof must be under 5 MB.";
    }

    if (!signature.files || signature.files.length === 0) {
      errors.signature = "Signature is required.";
    } else {
      var s = signature.files[0];
      if (!s.type.startsWith("image/")) errors.signature = "Signature must be an image.";
      else if (s.size > limits.signature) errors.signature = "Signature must be under 1 MB.";
    }

    return errors;
  }

  // Get selected gender
  function getSelectedGender() {
    for (var i = 0; i < genderInputs.length; i++) {
      if (genderInputs[i].checked) return genderInputs[i].value;
    }
    return "";
  }

  // localStorage helpers
  var STORAGE_KEY = "admissions";

  function loadAdmissions() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      return JSON.parse(raw);
    } catch (e) {
      console.error("Failed to parse admissions from localStorage", e);
      return [];
    }
  }

  function saveAdmission(obj) {
    var arr = loadAdmissions();
    arr.unshift(obj);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
  }

  // Real-time validation handlers
  firstName.addEventListener("input", function () { showFieldError(firstName, validateName(firstName.value)); });
  lastName.addEventListener("input", function () { showFieldError(lastName, validateName(lastName.value)); });
  email.addEventListener("input", function () { showFieldError(email, validateEmail(email.value)); });
  phone.addEventListener("input", function () { showFieldError(phone, validatePhone(phone.value)); });
  dob.addEventListener("change", function () { showFieldError(dob, validateDOB(dob.value)); });
  address.addEventListener("input", function () { showFieldError(address, validateAddress(address.value)); });

  qualification.addEventListener("change", function () { showFieldError(qualification, validateSelect(qualification.value, "Qualification")); });
  percentage.addEventListener("input", function () { showFieldError(percentage, validatePercentage(percentage.value)); });
  school.addEventListener("input", function () { showFieldError(school, isNonEmpty(school.value) ? "" : "School/College name is required."); });
  year.addEventListener("input", function () { showFieldError(year, validateYear(year.value)); });

  course.addEventListener("change", function () { showFieldError(course, validateSelect(course.value, "Preferred course")); });
  specialization.addEventListener("change", function () { showFieldError(specialization, validateSelect(specialization.value, "Specialization")); });
  campus.addEventListener("change", function () { showFieldError(campus, validateSelect(campus.value, "Preferred campus")); });
  intake.addEventListener("change", function () { showFieldError(intake, validateSelect(intake.value, "Preferred intake")); });

  photo.addEventListener("change", function () {
    var errs = validateFiles();
    showFieldError(photo, errs.photo || "");
  });
  marksheet.addEventListener("change", function () {
    var errs = validateFiles();
    showFieldError(marksheet, errs.marksheet || "");
  });
  idproof.addEventListener("change", function () {
    var errs = validateFiles();
    showFieldError(idproof, errs.idproof || "");
  });
  signature.addEventListener("change", function () {
    var errs = validateFiles();
    showFieldError(signature, errs.signature || "");
  });

  // Submit handler
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validate fields
    var fnErr = validateName(firstName.value);
    var lnErr = validateName(lastName.value);
    var emErr = validateEmail(email.value);
    var phErr = validatePhone(phone.value);
    var dobErr = validateDOB(dob.value);
    var addrErr = validateAddress(address.value);

    var qualErr = validateSelect(qualification.value, "Qualification");
    var percErr = validatePercentage(percentage.value);
    var schoolErr = isNonEmpty(school.value) ? "" : "School/College name is required.";
    var yearErr = validateYear(year.value);

    var courseErr = validateSelect(course.value, "Preferred course");
    var specErr = validateSelect(specialization.value, "Specialization");
    var campusErr = validateSelect(campus.value, "Preferred campus");
    var intakeErr = validateSelect(intake.value, "Preferred intake");

    var fileErrs = validateFiles();

    // Show errors
    showFieldError(firstName, fnErr);
    showFieldError(lastName, lnErr);
    showFieldError(email, emErr);
    showFieldError(phone, phErr);
    showFieldError(dob, dobErr);
    showFieldError(address, addrErr);

    showFieldError(qualification, qualErr);
    showFieldError(percentage, percErr);
    showFieldError(school, schoolErr);
    showFieldError(year, yearErr);

    showFieldError(course, courseErr);
    showFieldError(specialization, specErr);
    showFieldError(campus, campusErr);
    showFieldError(intake, intakeErr);

    showFieldError(photo, fileErrs.photo || "");
    showFieldError(marksheet, fileErrs.marksheet || "");
    showFieldError(idproof, fileErrs.idproof || "");
    showFieldError(signature, fileErrs.signature || "");

    if (!declaration.checked) {
      showFieldError(declaration, "You must accept the declaration.");
    } else {
      showFieldError(declaration, "");
    }

    // Determine if any error exists
    var allErrors = [fnErr, lnErr, emErr, phErr, dobErr, addrErr, qualErr, percErr, schoolErr, yearErr, courseErr, specErr, campusErr, intakeErr];
    var fileErrorExists = Object.keys(fileErrs).length > 0;
    var hasError = allErrors.some(function (x) { return x && x.length > 0; }) || fileErrorExists || !declaration.checked;

    if (hasError) {
      // focus first invalid field
      if (fnErr) firstName.focus();
      else if (lnErr) lastName.focus();
      else if (emErr) email.focus();
      else if (phErr) phone.focus();
      else if (dobErr) dob.focus();
      else if (addrErr) address.focus();
      else if (qualErr) qualification.focus();
      else if (percErr) percentage.focus();
      else if (schoolErr) school.focus();
      else if (yearErr) year.focus();
      else if (courseErr) course.focus();
      else if (specErr) specialization.focus();
      else if (campusErr) campus.focus();
      else if (intakeErr) intake.focus();
      else if (fileErrs.photo) photo.focus();
      else if (fileErrs.marksheet) marksheet.focus();
      else if (fileErrs.signature) signature.focus();
      else if (!declaration.checked) declaration.focus();
      return;
    }

    // Build submission object (metadata only for files)
    var submission = {
      personal: {
        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        email: email.value.trim(),
        phone: phone.value.trim(),
        dob: dob.value,
        gender: getSelectedGender(),
        address: address.value.trim()
      },
      academic: {
        qualification: qualification.value,
        percentage: percentage.value.trim(),
        school: school.value.trim(),
        year: year.value
      },
      courseSelection: {
        course: course.value,
        specialization: specialization.value,
        campus: campus.value,
        intake: intake.value
      },
      documents: {
        photo: photo.files && photo.files[0] ? { name: photo.files[0].name, size: photo.files[0].size, type: photo.files[0].type } : null,
        marksheet: marksheet.files && marksheet.files[0] ? { name: marksheet.files[0].name, size: marksheet.files[0].size, type: marksheet.files[0].type } : null,
        idproof: idproof.files && idproof.files[0] ? { name: idproof.files[0].name, size: idproof.files[0].size, type: idproof.files[0].type } : null,
        signature: signature.files && signature.files[0] ? { name: signature.files[0].name, size: signature.files[0].size, type: signature.files[0].type } : null
      },
      preferences: {
        updates: updates.checked,
        declarationAccepted: declaration.checked
      },
      submittedAt: new Date().toISOString()
    };

    // Save to localStorage
    try {
      saveAdmission(submission);
    } catch (err) {
      console.error("Failed to save admission:", err);
      alert("An error occurred while saving your application. Please try again.");
      return;
    }

    // Console output for inspection
    console.log("Saved admission (latest):\n", JSON.stringify(submission, null, 2));
    try {
      var all = loadAdmissions();
      console.log("All saved admissions:", all);
      if (Array.isArray(all) && all.length) {
        console.table(all.map(function (a) {
          return {
            submittedAt: new Date(a.submittedAt).toLocaleString(),
            name: a.personal.firstName + " " + a.personal.lastName,
            email: a.personal.email,
            phone: a.personal.phone,
            course: a.courseSelection.course || "-",
            campus: a.courseSelection.campus || "-"
          };
        }));
      }
      console.log("Raw JSON string:", localStorage.getItem(STORAGE_KEY));
    } catch (err) {
      console.error("Failed to log admissions", err);
    }

    // Show success message and scroll to top
    if (successMessage) successMessage.style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Reset form after a short delay and hide success message
    setTimeout(function () {
      form.reset();
      if (successMessage) successMessage.style.display = "none";
    }, 5000);
  });
});
