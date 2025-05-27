// DOM Elements
const locationSelect = document.getElementById('location');
const hospitalSearch = document.getElementById('hospital-search');
const searchBtn = document.getElementById('search-btn');
const hospitalResults = document.getElementById('hospital-results');

// Check if we're on the index page or hospital details page
const isIndexPage = window.location.pathname.includes('index.html') || 
                    window.location.pathname.endsWith('/');

const isHospitalPage = window.location.pathname.includes('hospital.html');

// Initialize the application
function initApp() {
  if (isIndexPage) {
    // Setup the search functionality on index page
    setupSearch();
    // Show all hospitals by default
    displayHospitals(hospitals);
  } else if (isHospitalPage) {
    // Setup hospital details page
    setupHospitalDetails();
  }
}

// Setup search functionality
function setupSearch() {
  // Add event listeners
  searchBtn.addEventListener('click', handleSearch);
  hospitalSearch.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      handleSearch();
    }
  });
  locationSelect.addEventListener('change', handleSearch);

  // Real-time search as user types
  hospitalSearch.addEventListener('input', function() {
    handleSearch();
  });
}

// Handle search functionality
function handleSearch() {
  const searchTerm = hospitalSearch.value.toLowerCase().trim();
  const selectedLocation = locationSelect.value;
  
  // Filter hospitals based on search term and location
  const filteredHospitals = hospitals.filter(hospital => {
    const matchesSearch = hospital.name.toLowerCase().includes(searchTerm);
    const matchesLocation = selectedLocation === 'all' || hospital.location === selectedLocation;
    return matchesSearch && matchesLocation;
  });
  
  // Display filtered hospitals
  displayHospitals(filteredHospitals);
}

// Display hospitals in the results section
function displayHospitals(hospitalList) {
  // Clear previous results
  hospitalResults.innerHTML = '';
  
  if (hospitalList.length === 0) {
    hospitalResults.innerHTML = '<p class="no-results">No hospitals found. Please try a different search.</p>';
    return;
  }
  
  // Create hospital cards and add to results
  hospitalList.forEach(hospital => {
    const hospitalCard = createHospitalCard(hospital);
    hospitalResults.appendChild(hospitalCard);
  });

  // Add fade-in animation to cards
  const cards = document.querySelectorAll('.hospital-card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = '1';
    }, 100 * index);
  });
}

// Create a hospital card element
function createHospitalCard(hospital) {
  const card = document.createElement('div');
  card.className = 'hospital-card';
  card.style.opacity = '0';
  card.style.transition = 'opacity 0.3s ease-in-out';
  
  card.innerHTML = `
    <div class="hospital-image">
      <img src="${hospital.image}" alt="${hospital.name}">
    </div>
    <div class="hospital-info-preview">
      <h3>${hospital.name}</h3>
      <p>${hospital.address}</p>
      <p>${hospital.phone}</p>
      <a href="hospital.html?id=${hospital.id}" class="view-details-btn">View Details</a>
    </div>
  `;
  
  return card;
}

// Setup hospital details page
function setupHospitalDetails() {
  // Get hospital ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const hospitalId = parseInt(urlParams.get('id'));
  
  if (!hospitalId) {
    window.location.href = 'index.html';
    return;
  }
  
  // Find the hospital
  const hospital = hospitals.find(h => h.id === hospitalId);
  
  if (!hospital) {
    window.location.href = 'index.html';
    return;
  }
  
  // Update page title
  document.title = `${hospital.name} - HealthReach Tezpur`;
  
  // Display hospital info
  displayHospitalInfo(hospital);
  
  // Display doctors for this hospital
  displayDoctors(hospitalId);
}

// Display hospital information
function displayHospitalInfo(hospital) {
  const hospitalInfo = document.getElementById('hospital-info');
  
  hospitalInfo.innerHTML = `
    <div class="hospital-header">
      <div class="hospital-image-large">
        <img src="${hospital.image}" alt="${hospital.name}">
      </div>
      <div class="hospital-details-content">
        <h1>${hospital.name}</h1>
        <p>${hospital.description}</p> 
        <div class="hospital-contact">
          <div class="contact-item">
            <p><strong>Phone:</strong> ${hospital.phone}</p>
          </div>
          <div class="contact-item">
            <p><strong>Email:</strong> ${hospital.email}</p>
          </div>
          <a href="${hospital.website}" target="_blank" class="hospital-website">Visit Website</a>
        </div>
      </div>
    </div>
  `;

  // Add map
  const mapContainer = document.getElementById('map-container');
  mapContainer.innerHTML = `
    <iframe
      src="${hospital.mapUrl}"
      width="100%"
      height="100%"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  `;
}

// Display doctors for a hospital
function displayDoctors(hospitalId) {
  const doctorList = document.getElementById('doctor-list');
  const hospitalDoctors = doctors.filter(doctor => doctor.hospitalId === hospitalId);
  
  if (hospitalDoctors.length === 0) {
    doctorList.innerHTML = '<p class="no-results">No doctors information available at this time.</p>';
    return;
  }
  
  // Clear previous results
  doctorList.innerHTML = '';
  
  // Create doctor cards
  hospitalDoctors.forEach(doctor => {
    const doctorCard = createDoctorCard(doctor);
    doctorList.appendChild(doctorCard);
  });

  // Add fade-in animation to doctor cards
  const cards = document.querySelectorAll('.doctor-card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = '1';
    }, 100 * index);
  });
}

// Create a doctor card element
function createDoctorCard(doctor) {
  const card = document.createElement('div');
  card.className = 'doctor-card';
  card.style.opacity = '0';
  card.style.transition = 'opacity 0.3s ease-in-out';
  
  card.innerHTML = `
    <div class="doctor-image">
      <img src="${doctor.image}" alt="${doctor.name}">
    </div>
    <div class="doctor-info">
      <h3>${doctor.name}</h3>
      <p class="doctor-specialization">${doctor.specialty}</p>
      <div class="doctor-contact">
        <p><strong>Phone:</strong> ${doctor.phone}</p>
        <p><strong>Email:</strong> ${doctor.email}</p>
      </div>
    </div>
  `;
  
  return card;
}

// Initialize the application when DOM content is loaded
document.addEventListener('DOMContentLoaded', initApp);