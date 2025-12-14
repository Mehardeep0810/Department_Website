// faculty.js
// Builds the Faculty page DOM dynamically (plain DOM API, no helper libraries).
// Ensure this file is referenced from faculty.html: <script src="faculty.js"></script>

        document.addEventListener('DOMContentLoaded', function() {
            // Add CSS for search, filter, and modal
            const style = document.createElement('style');
            style.textContent = `
                /* Faculty Search and Filter Styles */
                .faculty-search-filter {
                    margin-top: 2rem;
                    background: white;
                    padding: 1.5rem;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                }
                
                .search-box {
                    position: relative;
                    margin-bottom: 1.5rem;
                }
                
                #facultySearch {
                    width: 100%;
                    padding: 12px 20px 12px 45px;
                    border: 2px solid #e0e0e0;
                    border-radius: 6px;
                    font-size: 1rem;
                    transition: all 0.3s;
                }
                
                #facultySearch:focus {
                    outline: none;
                    border-color: var(--primary);
                    box-shadow: 0 0 0 3px rgba(211, 47, 47, 0.1);
                }
                
                .search-icon {
                    position: absolute;
                    left: 15px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: var(--text-light);
                }
                
                .filter-options {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                    align-items: center;
                }
                
                .filter-options select {
                    padding: 10px 15px;
                    border: 2px solid #e0e0e0;
                    border-radius: 6px;
                    background: white;
                    font-size: 0.95rem;
                    min-width: 200px;
                    cursor: pointer;
                }
                
                .filter-options select:focus {
                    outline: none;
                    border-color: var(--primary);
                }
                
                .filter-options .btn-outline {
                    padding: 10px 20px;
                    font-size: 0.95rem;
                }
                
                .faculty-stats {
                    margin: 2rem 0;
                    text-align: right;
                    color: var(--text-light);
                    font-size: 0.95rem;
                }
                
                .faculty-card.hidden {
                    display: none;
                }
                
                .faculty-card.highlight {
                    animation: highlightPulse 1s;
                }
                
                @keyframes highlightPulse {
                    0% { box-shadow: 0 0 0 0 rgba(211, 47, 47, 0.7); }
                    70% { box-shadow: 0 0 0 10px rgba(211, 47, 47, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(211, 47, 47, 0); }
                }
                
                .faculty-actions {
                    margin-top: 1.5rem;
                    padding-top: 1rem;
                    border-top: 1px solid var(--border);
                }
                
                .btn-view-profile {
                    background: transparent;
                    border: 2px solid var(--primary);
                    color: var(--primary);
                    padding: 8px 16px;
                    border-radius: 4px;
                    cursor: pointer;
                    font-weight: 500;
                    transition: all 0.3s;
                    font-size: 0.9rem;
                }
                
                .btn-view-profile:hover {
                    background: var(--primary);
                    color: white;
                }
                
                /* Modal Styles */
                .modal {
                    display: none;
                    position: fixed;
                    z-index: 1000;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    animation: fadeIn 0.3s;
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                .modal-content {
                    background-color: white;
                    margin: 5% auto;
                    padding: 30px;
                    border-radius: 8px;
                    width: 90%;
                    max-width: 800px;
                    max-height: 80vh;
                    overflow-y: auto;
                    position: relative;
                    animation: slideIn 0.3s;
                }
                
                @keyframes slideIn {
                    from { transform: translateY(-50px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                
                .close-modal {
                    position: absolute;
                    right: 20px;
                    top: 15px;
                    font-size: 28px;
                    font-weight: bold;
                    color: var(--text-light);
                    cursor: pointer;
                    transition: color 0.3s;
                }
                
                .close-modal:hover {
                    color: var(--primary);
                }
                
                .modal-faculty-image {
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                    object-fit: cover;
                    border: 3px solid var(--primary);
                    margin: 0 auto 2rem;
                    display: block;
                }
                
                .modal-faculty-info {
                    text-align: center;
                }
                
                .modal-faculty-info h2 {
                    color: var(--secondary);
                    margin-bottom: 0.5rem;
                }
                
                .modal-faculty-info .faculty-designation {
                    color: var(--primary);
                    font-size: 1.2rem;
                    margin-bottom: 1rem;
                }
                
                .modal-details {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                    margin-top: 2rem;
                    text-align: left;
                }
                
                .modal-section {
                    background: var(--light);
                    padding: 1.5rem;
                    border-radius: 6px;
                }
                
                .modal-section h3 {
                    color: var(--secondary);
                    margin-bottom: 1rem;
                    padding-bottom: 0.5rem;
                    border-bottom: 2px solid var(--primary);
                }
                
                .modal-contact-info {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                
                .modal-contact-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                
                .modal-contact-item i {
                    color: var(--primary);
                    width: 20px;
                }
                
                .no-results {
                    text-align: center;
                    padding: 3rem;
                    color: var(--text-light);
                    display: none;
                }
                
                .no-results.show {
                    display: block;
                }
                
                @media screen and (max-width: 768px) {
                    .filter-options {
                        flex-direction: column;
                        align-items: stretch;
                    }
                    
                    .filter-options select {
                        width: 100%;
                    }
                    
                    .modal-content {
                        width: 95%;
                        margin: 10% auto;
                        padding: 20px;
                    }
                    
                    .modal-details {
                        grid-template-columns: 1fr;
                    }
                }
            `;
            document.head.appendChild(style);
            
            // Add no results message
            const noResults = document.createElement('div');
            noResults.className = 'no-results';
            noResults.innerHTML = `
                <i class="fas fa-search fa-3x" style="margin-bottom: 1rem; opacity: 0.5;"></i>
                <h3>No faculty members found</h3>
                <p>Try adjusting your search or filter criteria</p>
            `;
            document.querySelector('.faculty-profiles').parentNode.insertBefore(noResults, document.querySelector('.faculty-profiles'));
            
            // Get DOM elements
            const facultyCards = document.querySelectorAll('.faculty-card');
            const searchInput = document.getElementById('facultySearch');
            const designationFilter = document.getElementById('designationFilter');
            const expertiseFilter = document.getElementById('expertiseFilter');
            const resetFiltersBtn = document.getElementById('resetFilters');
            const filterCount = document.getElementById('filterCount');
            const modal = document.getElementById('facultyModal');
            const closeModal = document.querySelector('.close-modal');
            const modalContent = document.getElementById('modalContent');
            
            // Faculty data for modal display
            const facultyData = {
                'Dr. Jaiteg Singh Khaira': {
                    image: 'images/icon.png',
                    name: 'Dr. Jaiteg Singh Khaira',
                    designation: 'Professor & Head of Department',
                    qualification: 'Ph.D. in Computer Science, IIT Delhi',
                    experience: '15+ years of teaching and research experience',
                    expertise: ['Artificial Intelligence', 'Machine Learning', 'Natural Language Processing', 'Deep Learning'],
                    publications: [
                        '"Advanced Neural Networks for NLP" (2024)',
                        '"Machine Learning Applications in Healthcare" (2023)',
                        '"AI Ethics and Governance" (2022)',
                        '"Deep Learning Fundamentals" (2021)'
                    ],
                    email: 'jaiteg.singh@chitkara.edu.in',
                    phone: '+91 98765 43210',
                    office: 'Room 302, Computer Science Building',
                    officeHours: 'Mon, Wed, Fri: 10:00 AM - 12:00 PM',
                    courses: ['Advanced Machine Learning', 'Natural Language Processing', 'AI Ethics']
                },
                'Dr. Maninderjit Singh': {
                    image: 'images/icon.png',
                    name: 'Dr. Maninderjit Singh',
                    designation: 'Associate Professor',
                    qualification: 'M.Tech in Computer Science, NIT Trichy',
                    experience: '12+ years of teaching experience',
                    expertise: ['Data Structures', 'Algorithms', 'Database Management Systems', 'Software Engineering'],
                    publications: [
                        '"Advanced Algorithms for Big Data" (2024)',
                        '"Database Optimization Techniques" (2023)',
                        '"Software Design Patterns" (2022)',
                        '"Data Structures for Competitive Programming" (2021)'
                    ],
                    email: 'maninderjit.singh@chitkara.edu.in',
                    phone: '+91 98765 43211',
                    office: 'Room 205, Computer Science Building',
                    officeHours: 'Tue, Thu: 2:00 PM - 4:00 PM',
                    courses: ['Data Structures', 'Algorithms', 'Database Systems']
                },
                'Dr. Deepika Chaudhary': {
                    image: 'images/icon.png',
                    name: 'Dr. Deepika Chaudhary',
                    designation: 'Professor',
                    qualification: 'Ph.D. in Cybersecurity, IIIT Hyderabad',
                    experience: '18+ years of research and teaching',
                    expertise: ['Cybersecurity', 'Network Security', 'Cryptography', 'Ethical Hacking'],
                    publications: [
                        '"Advanced Cybersecurity Protocols" (2024)',
                        '"Network Security in IoT" (2023)',
                        '"Cryptography Fundamentals" (2022)',
                        '"Ethical Hacking Techniques" (2021)'
                    ],
                    email: 'deepika.chaudhary@chitkara.edu.in',
                    phone: '+91 98765 43212',
                    office: 'Room 410, Computer Science Building',
                    officeHours: 'Mon, Wed: 11:00 AM - 1:00 PM',
                    courses: ['Network Security', 'Cryptography', 'Ethical Hacking']
                },
                'Dr. Vandana': {
                    image: 'images/icon.png',
                    name: 'Dr. Vandana',
                    designation: 'Associate Professor',
                    qualification: 'Ph.D. in Data Science, IIT Bombay',
                    experience: '10+ years of industry and academic experience',
                    expertise: ['Data Science', 'Big Data Analytics', 'Machine Learning', 'Business Intelligence'],
                    publications: [
                        '"Data Science for Business" (2024)',
                        '"Big Data Analytics Techniques" (2023)',
                        '"Machine Learning for Predictive Analytics" (2022)',
                        '"Business Intelligence Tools" (2021)'
                    ],
                    email: 'vandana@chitkara.edu.in',
                    phone: '+91 98765 43213',
                    office: 'Room 308, Computer Science Building',
                    officeHours: 'Tue, Thu: 10:00 AM - 12:00 PM',
                    courses: ['Data Science', 'Big Data Analytics', 'Business Intelligence']
                },
                'Dr. Harmaninder Jit Singh': {
                    image: 'images/icon.png',
                    name: 'Dr. Harmaninder Jit Singh',
                    designation: 'Assistant Professor',
                    qualification: 'M.Tech in Software Engineering, BITS Pilani',
                    experience: '8+ years of teaching and industry experience',
                    expertise: ['Software Engineering', 'Web Development', 'Mobile App Development', 'Agile Methodologies'],
                    publications: [
                        '"Modern Web Development" (2024)',
                        '"Agile Software Development" (2023)',
                        '"Mobile App Development Best Practices" (2022)',
                        '"Software Testing Methodologies" (2021)'
                    ],
                    email: 'harmaninder.singh@chitkara.edu.in',
                    phone: '+91 98765 43214',
                    office: 'Room 105, Computer Science Building',
                    officeHours: 'Mon, Fri: 2:00 PM - 4:00 PM',
                    courses: ['Web Development', 'Mobile App Development', 'Software Engineering']
                },
                'Dr. Rupinder Singh': {
                    image: 'images/icon.png',
                    name: 'Dr. Rupinder Singh',
                    designation: 'Professor',
                    qualification: 'Ph.D. in Cloud Computing, IIIT Bangalore',
                    experience: '16+ years of research and teaching',
                    expertise: ['Cloud Computing', 'Distributed Systems', 'Virtualization', 'IoT'],
                    publications: [
                        '"Cloud Computing Architecture" (2024)',
                        '"IoT in Distributed Systems" (2023)',
                        '"Virtualization Technologies" (2022)',
                        '"Cloud Security" (2021)'
                    ],
                    email: 'rupinder.singh@chitkara.edu.in',
                    phone: '+91 98765 43215',
                    office: 'Room 215, Computer Science Building',
                    officeHours: 'Wed, Fri: 3:00 PM - 5:00 PM',
                    courses: ['Cloud Computing', 'Distributed Systems', 'IoT Fundamentals']
                }
            };
            
            // Filter faculty function
            function filterFaculty() {
                const searchTerm = searchInput.value.toLowerCase();
                const selectedDesignation = designationFilter.value;
                const selectedExpertise = expertiseFilter.value;
                
                let visibleCount = 0;
                
                facultyCards.forEach(card => {
                    const name = card.querySelector('.faculty-name').textContent.toLowerCase();
                    const designation = card.getAttribute('data-designation');
                    const expertise = card.getAttribute('data-expertise').toLowerCase();
                    const qualification = card.querySelector('.faculty-qualification').textContent.toLowerCase();
                    
                    const matchesSearch = searchTerm === '' || 
                        name.includes(searchTerm) || 
                        designation.toLowerCase().includes(searchTerm) ||
                        qualification.includes(searchTerm) ||
                        expertise.includes(searchTerm);
                    
                    const matchesDesignation = selectedDesignation === '' || designation === selectedDesignation;
                    const matchesExpertise = selectedExpertise === '' || expertise.includes(selectedExpertise.toLowerCase());
                    
                    if (matchesSearch && matchesDesignation && matchesExpertise) {
                        card.classList.remove('hidden');
                        visibleCount++;
                    } else {
                        card.classList.add('hidden');
                    }
                });
                
                // Update count
                filterCount.textContent = visibleCount;
                
                // Show/hide no results message
                if (visibleCount === 0) {
                    noResults.classList.add('show');
                } else {
                    noResults.classList.remove('show');
                }
            }
            
            // View faculty profile function
            window.viewFacultyProfile = function(facultyName) {
                const faculty = facultyData[facultyName];
                if (!faculty) return;
                
                modalContent.innerHTML = `
                    <img src="${faculty.image}" alt="${faculty.name}" class="modal-faculty-image">
                    <div class="modal-faculty-info">
                        <h2>${faculty.name}</h2>
                        <p class="faculty-designation">${faculty.designation}</p>
                        <p><strong>${faculty.qualification}</strong></p>
                        <p><em>${faculty.experience}</em></p>
                    </div>
                    
                    <div class="modal-details">
                        <div class="modal-section">
                            <h3>Areas of Expertise</h3>
                            <ul>
                                ${faculty.expertise.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="modal-section">
                            <h3>Recent Publications</h3>
                            <ul>
                                ${faculty.publications.map(pub => `<li>${pub}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="modal-section">
                            <h3>Contact Information</h3>
                            <div class="modal-contact-info">
                                <div class="modal-contact-item">
                                    <i class="fas fa-envelope"></i>
                                    <span>${faculty.email}</span>
                                </div>
                                <div class="modal-contact-item">
                                    <i class="fas fa-phone"></i>
                                    <span>${faculty.phone}</span>
                                </div>
                                <div class="modal-contact-item">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <span>${faculty.office}</span>
                                </div>
                                <div class="modal-contact-item">
                                    <i class="fas fa-clock"></i>
                                    <span>Office Hours: ${faculty.officeHours}</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="modal-section">
                            <h3>Courses Taught</h3>
                            <ul>
                                ${faculty.courses.map(course => `<li>${course}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `;
                
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            };
            
            // Close modal function
            function closeModalFunc() {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto'; // Restore scrolling
            }
            
            // Event listeners
            searchInput.addEventListener('input', filterFaculty);
            designationFilter.addEventListener('change', filterFaculty);
            expertiseFilter.addEventListener('change', filterFaculty);
            
            resetFiltersBtn.addEventListener('click', function() {
                searchInput.value = '';
                designationFilter.value = '';
                expertiseFilter.value = '';
                filterFaculty();
                
                // Add highlight animation to all cards
                facultyCards.forEach(card => {
                    card.classList.add('highlight');
                    setTimeout(() => card.classList.remove('highlight'), 1000);
                });
            });
            
            // Modal event listeners
            closeModal.addEventListener('click', closeModalFunc);
            
            // Close modal when clicking outside
            window.addEventListener('click', function(event) {
                if (event.target === modal) {
                    closeModalFunc();
                }
            });
            
            // Close modal with Escape key
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape' && modal.style.display === 'block') {
                    closeModalFunc();
                }
            });
            
            // Add animation to cards on load
            setTimeout(() => {
                facultyCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        card.style.transition = 'all 0.5s ease';
                        
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 100);
                    }, index * 100);
                });
            }, 500);
            
            // Copy email on click
            document.querySelectorAll('.faculty-contact').forEach(contact => {
                if (contact.querySelector('.fa-envelope')) {
                    contact.style.cursor = 'pointer';
                    contact.addEventListener('click', function() {
                        const email = this.querySelector('span').textContent;
                        navigator.clipboard.writeText(email).then(() => {
                            const originalText = this.querySelector('span').textContent;
                            this.querySelector('span').textContent = 'Email copied!';
                            
                            setTimeout(() => {
                                this.querySelector('span').textContent = originalText;
                            }, 2000);
                        });
                    });
                }
            });
            
            // Initialize filter
            filterFaculty();
        });
    

