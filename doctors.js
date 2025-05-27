const doctors = [
  // Tezpur Medical College & Hospital (TMCH) - ID: 1
  {
    id: 1,
    hospitalId: 1,
    name: "Dr. Pranab Kumar Sarmah",
    position: "Principal & Chief Superintendent",
    qualifications: "MBBS, MS (General Surgery)",
    specialty: "General Surgery",
    experience: "25+ years",
    email: "pranab.sarmah@tmchassam.edu.in",
    phone: "03712-241310",
    consultationHours: "Mon-Fri: 9:00 AM - 1:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 2,
    hospitalId: 1,
    name: "Dr. Monalisa Kalita",
    position: "Professor & HOD",
    qualifications: "MBBS, MD (Medicine)",
    specialty: "General Medicine",
    experience: "20+ years",
    email: "monalisa.kalita@tmchassam.edu.in",
    phone: "03712-241315",
    consultationHours: "Mon-Fri: 10:00 AM - 2:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 3,
    hospitalId: 1,
    name: "Dr. Basanta Kumar Borah",
    position: "Professor & HOD",
    qualifications: "MBBS, MS (Orthopedics)",
    specialty: "Orthopedics",
    experience: "22+ years",
    email: "basanta.borah@tmchassam.edu.in",
    phone: "03712-241320",
    consultationHours: "Mon-Wed, Fri: 9:00 AM - 1:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 4,
    hospitalId: 1,
    name: "Dr. Anjana Devi",
    position: "Professor & HOD",
    qualifications: "MBBS, MD (Obstetrics & Gynecology)",
    specialty: "Obstetrics & Gynecology",
    experience: "18+ years",
    email: "anjana.devi@tmchassam.edu.in",
    phone: "03712-241325",
    consultationHours: "Mon, Tue, Thu, Fri: 10:00 AM - 1:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 5,
    hospitalId: 1,
    name: "Dr. Hiranya Kumar Das",
    position: "Associate Professor",
    qualifications: "MBBS, MD (Pediatrics)",
    specialty: "Pediatrics",
    experience: "15+ years",
    email: "hiranya.das@tmchassam.edu.in",
    phone: "03712-241330",
    consultationHours: "Mon-Fri: 9:00 AM - 12:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  
  // Baptist Christian Hospital (BCH) - ID: 2
  {
    id: 6,
    hospitalId: 2,
    name: "Dr. Vijay Anand Ismavel",
    position: "Medical Superintendent & Senior Surgeon",
    qualifications: "MBBS, MS (General Surgery)",
    specialty: "General & Pediatric Surgery",
    experience: "30+ years",
    email: "vijay.anand@bchtezpur.org",
    phone: "03712-255152 (Ext. 301)",
    consultationHours: "Mon-Fri: 9:00 AM - 5:00 PM, Sat: 9:00 AM - 1:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 7,
    hospitalId: 2,
    name: "Dr. Ann Miriam",
    position: "Senior Consultant",
    qualifications: "MBBS, MD (Obstetrics & Gynecology)",
    specialty: "Obstetrics & Gynecology",
    experience: "25+ years",
    email: "ann.miriam@bchtezpur.org",
    phone: "03712-255152 (Ext. 302)",
    consultationHours: "Mon-Fri: 9:00 AM - 4:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 8,
    hospitalId: 2,
    name: "Dr. Sedevi Angami",
    position: "Senior Physician",
    qualifications: "MBBS, MD (Medicine)",
    specialty: "Internal Medicine",
    experience: "20+ years",
    email: "sedevi.angami@bchtezpur.org",
    phone: "03712-255152 (Ext. 303)",
    consultationHours: "Mon-Sat: 10:00 AM - 4:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 9,
    hospitalId: 2,
    name: "Dr. Koshy George",
    position: "Senior Consultant",
    qualifications: "MBBS, MS (Orthopedics)",
    specialty: "Orthopedics",
    experience: "22+ years",
    email: "koshy.george@bchtezpur.org",
    phone: "03712-255152 (Ext. 304)",
    consultationHours: "Mon, Wed, Fri: 9:00 AM - 4:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 10,
    hospitalId: 2,
    name: "Dr. Ashish Gupta",
    position: "Consultant",
    qualifications: "MBBS, MD (Pediatrics)",
    specialty: "Pediatrics",
    experience: "15+ years",
    email: "ashish.gupta@bchtezpur.org",
    phone: "03712-255152 (Ext. 305)",
    consultationHours: "Mon-Fri: 9:00 AM - 5:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  
  // TIMeS Hospital - ID: 3
  {
    id: 11,
    hospitalId: 3,
    name: "Dr. Avinash Sharma",
    position: "Medical Director & Senior Consultant",
    qualifications: "MBBS, MD (Medicine), DM (Cardiology)",
    specialty: "Cardiology",
    experience: "20+ years",
    email: "avinash.sharma@timeshospital.in",
    phone: "+91 9435552211",
    consultationHours: "Mon-Sat: 10:00 AM - 2:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 12,
    hospitalId: 3,
    name: "Dr. Priyanka Bora",
    position: "Senior Consultant",
    qualifications: "MBBS, MD (Obstetrics & Gynecology)",
    specialty: "Obstetrics & Gynecology",
    experience: "15+ years",
    email: "priyanka.bora@timeshospital.in",
    phone: "+91 9435552212",
    consultationHours: "Mon-Fri: 10:00 AM - 5:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 13,
    hospitalId: 3,
    name: "Dr. Rajiv Baruah",
    position: "Senior Consultant",
    qualifications: "MBBS, MS (General Surgery)",
    specialty: "General Surgery",
    experience: "18+ years",
    email: "rajiv.baruah@timeshospital.in",
    phone: "+91 9435552213",
    consultationHours: "Mon, Wed, Fri: 9:00 AM - 4:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 14,
    hospitalId: 3,
    name: "Dr. Mrinmoy Das",
    position: "Consultant",
    qualifications: "MBBS, MD (Pediatrics), Fellowship in Neonatology",
    specialty: "Pediatrics & Neonatology",
    experience: "12+ years",
    email: "mrinmoy.das@timeshospital.in",
    phone: "+91 9435552214",
    consultationHours: "Mon-Sat: 9:00 AM - 1:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  
  // Nemcare Hospital Tezpur - ID: 4
  {
    id: 15,
    hospitalId: 4,
    name: "Dr. Nabajyoti Choudhury",
    position: "Medical Superintendent",
    qualifications: "MBBS, MD (Medicine)",
    specialty: "General Medicine",
    experience: "20+ years",
    email: "nabajyoti.choudhury@nemcaretezpur.com",
    phone: "+91 7035022110",
    consultationHours: "Mon-Sat: 10:00 AM - 4:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 16,
    hospitalId: 4,
    name: "Dr. Ranjan Kumar Hazarika",
    position: "Senior Consultant",
    qualifications: "MBBS, MS (General Surgery), Fellowship in Laparoscopic Surgery",
    specialty: "Laparoscopic Surgery",
    experience: "15+ years",
    email: "ranjan.hazarika@nemcaretezpur.com",
    phone: "+91 7035022111",
    consultationHours: "Mon, Wed, Fri: 10:00 AM - 2:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 17,
    hospitalId: 4,
    name: "Dr. Munmi Rajkonwar",
    position: "Senior Consultant",
    qualifications: "MBBS, MD (Obstetrics & Gynecology)",
    specialty: "Obstetrics & Gynecology",
    experience: "14+ years",
    email: "munmi.rajkonwar@nemcaretezpur.com",
    phone: "+91 7035022112",
    consultationHours: "Mon-Fri: 11:00 AM - 4:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 18,
    hospitalId: 4,
    name: "Dr. Pallav Jyoti Sharma",
    position: "Consultant",
    qualifications: "MBBS, MD (Pediatrics)",
    specialty: "Pediatrics & Neonatology",
    experience: "10+ years",
    email: "pallav.sharma@nemcaretezpur.com",
    phone: "+91 7035022113",
    consultationHours: "Mon-Sat: 9:00 AM - 1:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  
  // EMM Hospital & Research Centre - ID: 5
  {
    id: 19,
    hospitalId: 5,
    name: "Dr. Manash Jyoti Dutta",
    position: "Director & Senior Consultant",
    qualifications: "MBBS, MS (General Surgery)",
    specialty: "General Surgery",
    experience: "25+ years",
    email: "manash.dutta@emmhospital.in",
    phone: "+91 9678577503",
    consultationHours: "Mon-Sat: 10:00 AM - 5:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 20,
    hospitalId: 5,
    name: "Dr. Hima Bhattacharjee",
    position: "Senior Consultant",
    qualifications: "MBBS, MD (Obstetrics & Gynecology), Fellowship in IVF",
    specialty: "Obstetrics, Gynecology & IVF",
    experience: "20+ years",
    email: "hima.bhattacharjee@emmhospital.in",
    phone: "+91 9678577504",
    consultationHours: "Mon-Fri: 10:00 AM - 4:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 21,
    hospitalId: 5,
    name: "Dr. Samarjit Borah",
    position: "Senior Consultant",
    qualifications: "MBBS, MD (Medicine)",
    specialty: "Internal Medicine",
    experience: "18+ years",
    email: "samarjit.borah@emmhospital.in",
    phone: "+91 9678577505",
    consultationHours: "Mon, Wed, Fri: 9:00 AM - 2:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 22,
    hospitalId: 5,
    name: "Dr. Bishal Kumar Sarma",
    position: "Consultant Radiologist",
    qualifications: "MBBS, MD (Radiology)",
    specialty: "Diagnostic Radiology",
    experience: "12+ years",
    email: "bishal.sarma@emmhospital.in",
    phone: "+91 9678577506",
    consultationHours: "Mon-Sat: 8:00 AM - 2:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  
  // B. K. Memorial Hospital - ID: 6
  {
    id: 23,
    hospitalId: 6,
    name: "Dr. Biren Kumar Choudhury",
    position: "Director & Senior Nephrologist",
    qualifications: "MBBS, MD (Medicine), DM (Nephrology)",
    specialty: "Nephrology & Dialysis",
    experience: "30+ years",
    email: "biren.choudhury@bkmemorial.com",
    phone: "+91 8876220656",
    consultationHours: "Mon-Fri: 9:00 AM - 5:00 PM, Sat: 9:00 AM - 1:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 24,
    hospitalId: 6,
    name: "Dr. Devajit Sarmah",
    position: "Senior Consultant",
    qualifications: "MBBS, MD (Medicine), DM (Cardiology)",
    specialty: "Cardiology",
    experience: "22+ years",
    email: "devajit.sarmah@bkmemorial.com",
    phone: "+91 8876220657",
    consultationHours: "Mon, Wed, Fri: 10:00 AM - 4:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 25,
    hospitalId: 6,
    name: "Dr. Manjit Talukdar",
    position: "Senior Consultant",
    qualifications: "MBBS, MD (Pediatrics)",
    specialty: "Pediatrics",
    experience: "20+ years",
    email: "manjit.talukdar@bkmemorial.com",
    phone: "+91 8876220658",
    consultationHours: "Mon-Sat: 9:00 AM - 1:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 26,
    hospitalId: 6,
    name: "Dr. Hiranya Saikia",
    position: "Consultant Radiologist",
    qualifications: "MBBS, MD (Radiology)",
    specialty: "Radiology",
    experience: "15+ years",
    email: "hiranya.saikia@bkmemorial.com",
    phone: "+91 8876220659",
    consultationHours: "Mon-Fri: 8:00 AM - 2:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  
  // Gogoi Nursing Home Complex - ID: 7
  {
    id: 27,
    hospitalId: 7,
    name: "Dr. Pranab Gogoi",
    position: "Director & Senior Physician",
    qualifications: "MBBS, MD (Medicine)",
    specialty: "General Medicine",
    experience: "30+ years",
    email: "pranab.gogoi@gnhc.in",
    phone: "+91 3712 220553",
    consultationHours: "Mon-Sat: 9:00 AM - 6:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 28,
    hospitalId: 7,
    name: "Dr. Ranjit Hazarika",
    position: "Senior Consultant",
    qualifications: "MBBS, MS (General Surgery)",
    specialty: "General Surgery",
    experience: "25+ years",
    email: "ranjit.hazarika@gnhc.in",
    phone: "+91 9678592723",
    consultationHours: "Mon-Fri: 10:00 AM - 4:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 29,
    hospitalId: 7,
    name: "Dr. Anuradha Gogoi",
    position: "Consultant",
    qualifications: "MBBS, MD (Obstetrics & Gynecology)",
    specialty: "Obstetrics & Gynecology",
    experience: "20+ years",
    email: "anuradha.gogoi@gnhc.in",
    phone: "+91 9678592724",
    consultationHours: "Mon, Wed, Fri: 10:00 AM - 3:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  
  // Ananta Memorial Hospital - ID: 8
  {
    id: 30,
    hospitalId: 8,
    name: "Dr. Ananta Kumar Borah",
    position: "Director & Senior Physician",
    qualifications: "MBBS, MD (Medicine)",
    specialty: "General Medicine",
    experience: "28+ years",
    email: "ananta.borah@anantamemorial.com",
    phone: "+91 9435178834",
    consultationHours: "Mon-Sat: 10:00 AM - 4:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 31,
    hospitalId: 8,
    name: "Dr. Dipankar Nath",
    position: "Senior Consultant",
    qualifications: "MBBS, MS (General Surgery)",
    specialty: "General Surgery",
    experience: "20+ years",
    email: "dipankar.nath@anantamemorial.com",
    phone: "+91 9435178835",
    consultationHours: "Mon, Wed, Fri: 10:00 AM - 2:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 32,
    hospitalId: 8,
    name: "Dr. Rituparna Devi",
    position: "Consultant",
    qualifications: "MBBS, MD (Pediatrics)",
    specialty: "Pediatrics",
    experience: "15+ years",
    email: "rituparna.devi@anantamemorial.com",
    phone: "+91 9435178836",
    consultationHours: "Mon-Fri: 9:00 AM - 1:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 33,
    hospitalId: 8,
    name: "Dr. Nilakshi Goswami",
    position: "Consultant",
    qualifications: "MBBS, MD (Obstetrics & Gynecology)",
    specialty: "Obstetrics & Gynecology",
    experience: "12+ years",
    email: "nilakshi.goswami@anantamemorial.com",
    phone: "+91 9435178837",
    consultationHours: "Tue, Thu, Sat: 10:00 AM - 3:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  
  // LGBRIMH - ID: 9
  {
    id: 34,
    hospitalId: 9,
    name: "Dr. Dhrubajyoti Bhuyan",
    position: "Director & Professor",
    qualifications: "MBBS, MD (Psychiatry)",
    specialty: "Psychiatry",
    experience: "30+ years",
    email: "director@lgbrimh.gov.in",
    phone: "+91 3712 233623",
    consultationHours: "Mon-Fri: 9:00 AM - 4:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 35,
    hospitalId: 9,
    name: "Dr. Sanjib Kumar Deb",
    position: "Professor & HOD",
    qualifications: "MBBS, MD (Psychiatry)",
    specialty: "Psychiatry",
    experience: "25+ years",
    email: "sanjib.deb@lgbrimh.gov.in",
    phone: "+91 3712 233624",
    consultationHours: "Mon-Fri: 10:00 AM - 4:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 36,
    hospitalId: 9,
    name: "Dr. Mythili Hazarika",
    position: "Professor of Clinical Psychology",
    qualifications: "M.Phil, Ph.D (Clinical Psychology)",
    specialty: "Clinical Psychology",
    experience: "22+ years",
    email: "mythili.hazarika@lgbrimh.gov.in",
    phone: "+91 3712 233625",
    consultationHours: "Mon, Wed, Fri: 9:00 AM - 3:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 37,
    hospitalId: 9,
    name: "Dr. Hemanta Dutta",
    position: "Associate Professor",
    qualifications: "MBBS, MD (Psychiatry)",
    specialty: "Child & Adolescent Psychiatry",
    experience: "18+ years",
    email: "hemanta.dutta@lgbrimh.gov.in",
    phone: "+91 3712 233626",
    consultationHours: "Tue, Thu, Sat: 10:00 AM - 2:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  
  // Kanaklata Civil Hospital - ID: 10
  {
    id: 38,
    hospitalId: 10,
    name: "Dr. Jahnabi Saikia",
    position: "Superintendent",
    qualifications: "MBBS, MD (Medicine)",
    specialty: "General Medicine",
    experience: "20+ years",
    email: "superintendent.kch@assam.gov.in",
    phone: "03712-220033",
    consultationHours: "Mon-Fri: 9:00 AM - 2:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 39,
    hospitalId: 10,
    name: "Dr. Binoy Kumar Choudhury",
    position: "Senior Medical Officer",
    qualifications: "MBBS, MS (General Surgery)",
    specialty: "General Surgery",
    experience: "18+ years",
    email: "binoy.choudhury@assam.gov.in",
    phone: "03712-221494",
    consultationHours: "Mon, Wed, Fri: 10:00 AM - 2:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 40,
    hospitalId: 10,
    name: "Dr. Dipali Deka",
    position: "Medical Officer",
    qualifications: "MBBS, MD (Obstetrics & Gynecology)",
    specialty: "Obstetrics & Gynecology",
    experience: "15+ years",
    email: "dipali.deka@assam.gov.in",
    phone: "03712-220033",
    consultationHours: "Mon-Fri: 9:00 AM - 1:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 41,
    hospitalId: 10,
    name: "Dr. Prabin Sarma",
    position: "Medical Officer",
    qualifications: "MBBS, DCH",
    specialty: "Pediatrics",
    experience: "12+ years",
    email: "prabin.sarma@assam.gov.in",
    phone: "03712-220033",
    consultationHours: "Mon-Sat: 9:00 AM - 12:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  
  // Dorika Hospital - ID: 11
  {
    id: 42,
    hospitalId: 11,
    name: "Dr. Anup Deka",
    position: "Director & Senior Physician",
    qualifications: "MBBS, MD (Medicine)",
    specialty: "General Medicine",
    experience: "25+ years",
    email: "anup.deka@dorikahospital.com",
    phone: "+91 9435242217",
    consultationHours: "Mon-Sat: 10:00 AM - 5:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 43,
    hospitalId: 11,
    name: "Dr. Jayanta Deka",
    position: "Senior Consultant",
    qualifications: "MBBS, MS (General Surgery)",
    specialty: "General Surgery",
    experience: "20+ years",
    email: "jayanta.deka@dorikahospital.com",
    phone: "+91 9435242218",
    consultationHours: "Mon, Wed, Fri: 9:00 AM - 2:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 44,
    hospitalId: 11,
    name: "Dr. Bibha Saikia",
    position: "Consultant Pathologist",
    qualifications: "MBBS, MD (Pathology)",
    specialty: "Pathology",
    experience: "15+ years",
    email: "bibha.saikia@dorikahospital.com",
    phone: "+91 9435242219",
    consultationHours: "Mon-Fri: 8:00 AM - 2:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  
  // Assam Cancer Care Hospital - ID: 12
  {
    id: 45,
    hospitalId: 12,
    name: "Dr. Amal Chandra Kataki",
    position: "Director",
    qualifications: "MBBS, MD (Radiation Oncology)",
    specialty: "Radiation Oncology",
    experience: "25+ years",
    email: "amal.kataki@assamcancercarefoundation.org",
    phone: "+91 9954321001",
    consultationHours: "Mon-Fri: 9:00 AM - 4:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 46,
    hospitalId: 12,
    name: "Dr. Debabrata Barmon",
    position: "Senior Consultant",
    qualifications: "MBBS, MS, MCh (Surgical Oncology)",
    specialty: "Surgical Oncology",
    experience: "20+ years",
    email: "debabrata.barmon@assamcancercarefoundation.org",
    phone: "+91 9954321002",
    consultationHours: "Mon, Wed, Fri: 10:00 AM - 4:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 47,
    hospitalId: 12,
    name: "Dr. Munlima Hazarika",
    position: "Senior Consultant",
    qualifications: "MBBS, MD, DM (Medical Oncology)",
    specialty: "Medical Oncology",
    experience: "18+ years",
    email: "munlima.hazarika@assamcancercarefoundation.org",
    phone: "+91 9954321003",
    consultationHours: "Tue, Thu, Sat: 9:00 AM - 3:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 48,
    hospitalId: 12,
    name: "Dr. Girindra Kumar Bordoloi",
    position: "Consultant",
    qualifications: "MBBS, MD (Palliative Medicine)",
    specialty: "Palliative Care",
    experience: "15+ years",
    email: "girindra.bordoloi@assamcancercarefoundation.org",
    phone: "+91 9954321004",
    consultationHours: "Mon-Fri: 10:00 AM - 2:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  
  // Tezpur Eye Hospital - ID: 13
  {
    id: 49,
    hospitalId: 13,
    name: "Dr. Ajit Kumar Borah",
    position: "Director & Senior Ophthalmologist",
    qualifications: "MBBS, MS (Ophthalmology)",
    specialty: "Comprehensive Ophthalmology",
    experience: "25+ years",
    email: "ajit.borah@tezpureyehospital.com",
    phone: "+91 9435067890",
    consultationHours: "Mon-Sat: 9:00 AM - 5:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 50,
    hospitalId: 13,
    name: "Dr. Dipti Kalita",
    position: "Senior Consultant",
    qualifications: "MBBS, MS (Ophthalmology), Fellowship in Retina",
    specialty: "Vitreo-Retinal Surgery",
    experience: "18+ years",
    email: "dipti.kalita@tezpureyehospital.com",
    phone: "+91 9435067891",
    consultationHours: "Mon, Wed, Fri: 9:00 AM - 4:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 51,
    hospitalId: 13,
    name: "Dr. Parag Jyoti Saikia",
    position: "Consultant",
    qualifications: "MBBS, DNB (Ophthalmology), Fellowship in Cornea",
    specialty: "Cornea & Refractive Surgery",
    experience: "12+ years",
    email: "parag.saikia@tezpureyehospital.com",
    phone: "+91 9435067892",
    consultationHours: "Tue, Thu, Sat: 10:00 AM - 4:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  
  // Assam Medical College & Hospital - ID: 14
  {
    id: 52,
    hospitalId: 14,
    name: "Dr. Sanjeeb Kakati",
    position: "Principal-cum-Chief Superintendent",
    qualifications: "MBBS, MD (Medicine)",
    specialty: "General Medicine",
    experience: "30+ years",
    email: "principal@amch.edu.in",
    phone: "0373-2300123 (Ext. 201)",
    consultationHours: "Mon-Fri: 9:00 AM - 2:00 PM",
    image: "/doctorimg/SK.avif"
  },
  {
    id: 53,
    hospitalId: 14,
    name: "Dr. Ratan Kumar Kotokey",
    position: "Professor & HOD",
    qualifications: "MBBS, MD (Medicine), DM (Cardiology)",
    specialty: "Cardiology",
    experience: "25+ years",
    email: "ratan.kotokey@amch.edu.in",
    phone: "0373-2300123 (Ext. 202)",
    consultationHours: "Mon, Wed, Fri: 10:00 AM - 2:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 54,
    hospitalId: 14,
    name: "Dr. Bipul Kumar Das",
    position: "Professor & HOD",
    qualifications: "MBBS, MS (Orthopedics)",
    specialty: "Orthopedics",
    experience: "28+ years",
    email: "bipul.das@amch.edu.in",
    phone: "0373-2300123 (Ext. 203)",
    consultationHours: "Tue, Thu, Sat: 9:00 AM - 1:00 PM",
    image: "/doctorimg/BKD.jpg"
  },
  {
    id: 55,
    hospitalId: 14,
    name: "Dr. Kabita Kalita",
    position: "Professor & HOD",
    qualifications: "MBBS, MS (Obstetrics & Gynecology)",
    specialty: "Obstetrics & Gynecology",
    experience: "22+ years",
    email: "kabita.kalita@amch.edu.in",
    phone: "0373-2300123 (Ext. 204)",
    consultationHours: "Mon-Fri: 10:00 AM - 1:00 PM",
    image: "/doctorimg/KK.jpg"
  },
  {
    id: 56,
    hospitalId: 14,
    name: "Dr. Ratna Kanta Bhuyan",
    position: "Professor & HOD",
    qualifications: "MBBS, MD (Pediatrics)",
    specialty: "Pediatrics",
    experience: "24+ years",
    email: "ratna.bhuyan@amch.edu.in",
    phone: "0373-2300123 (Ext. 205)",
    consultationHours: "Mon, Wed, Fri: 9:00 AM - 2:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  
  // Dibrugarh Cancer Centre - ID: 15
  {
    id: 57,
    hospitalId: 15,
    name: "Dr. Manigreeva Krishnatreya",
    position: "Medical Superintendent & Senior Oncologist",
    qualifications: "MBBS, MD (Radiation Oncology)",
    specialty: "Radiation Oncology",
    experience: "20+ years",
    email: "manigreeva.krishnatreya@accf.in",
    phone: "18003454325 (Ext. 101)",
    consultationHours: "Mon-Fri: 9:00 AM - 4:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 58,
    hospitalId: 15,
    name: "Dr. Diptimayee Senapati",
    position: "Senior Consultant",
    qualifications: "MBBS, MD, DM (Medical Oncology)",
    specialty: "Medical Oncology",
    experience: "15+ years",
    email: "diptimayee.senapati@accf.in",
    phone: "18003454325 (Ext. 102)",
    consultationHours: "Mon, Wed, Fri: 10:00 AM - 3:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 59,
    hospitalId: 15,
    name: "Dr. Partha Pratim Medhi",
    position: "Consultant",
    qualifications: "MBBS, MS, MCh (Surgical Oncology)",
    specialty: "Surgical Oncology",
    experience: "12+ years",
    email: "partha.medhi@accf.in",
    phone: "18003454325 (Ext. 103)",
    consultationHours: "Tue, Thu, Sat: 9:00 AM - 2:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 60,
    hospitalId: 15,
    name: "Dr. Chinmoy Kumar Bhuyan",
    position: "Consultant",
    qualifications: "MBBS, MD (Palliative Medicine)",
    specialty: "Palliative Care",
    experience: "10+ years",
    email: "chinmoy.bhuyan@accf.in",
    phone: "18003454325 (Ext. 104)",
    consultationHours: "Mon-Fri: 9:00 AM - 1:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  
  // Gauhati Medical College and Hospital - ID: 16
  {
    id: 61,
    hospitalId: 16,
    name: "Dr. Abhijit Sarma",
    position: "Superintendent",
    qualifications: "MBBS, MS (General Surgery)",
    specialty: "General Surgery",
    experience: "30+ years",
    email: "superintendent@gmch.assam.gov.in",
    phone: "0361-2529400 (Ext. 2001)",
    consultationHours: "Mon-Fri: 9:00 AM - 2:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 62,
    hospitalId: 16,
    name: "Dr. Nilakshi Das",
    position: "Professor & HOD",
    qualifications: "MBBS, MD (Medicine), DM (Cardiology)",
    specialty: "Cardiology",
    experience: "25+ years",
    email: "nilakshi.das@gmch.assam.gov.in",
    phone: "0361-2529400 (Ext. 2002)",
    consultationHours: "Mon, Wed, Fri: 10:00 AM - 2:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 63,
    hospitalId: 16,
    name: "Dr. Basanta Kumar Baishya",
    position: "Professor & HOD",
    qualifications: "MBBS, MD (Medicine), DM (Neurology)",
    specialty: "Neurology",
    experience: "22+ years",
    email: "basanta.baishya@gmch.assam.gov.in",
    phone: "0361-2529400 (Ext. 2003)",
    consultationHours: "Tue, Thu, Sat: 9:00 AM - 1:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 64,
    hospitalId: 16,
    name: "Dr. Manoj Kalita",
    position: "Professor & HOD",
    qualifications: "MBBS, MD (Pediatrics)",
    specialty: "Pediatrics",
    experience: "20+ years",
    email: "manoj.kalita@gmch.assam.gov.in",
    phone: "0361-2529400 (Ext. 2004)",
    consultationHours: "Mon-Fri: 10:00 AM - 1:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 65,
    hospitalId: 16,
    name: "Dr. Diganta Borah",
    position: "Professor & HOD",
    qualifications: "MBBS, MS, MCh (Oncology)",
    specialty: "Oncology",
    experience: "18+ years",
    email: "diganta.borah@gmch.assam.gov.in",
    phone: "0361-2529400 (Ext. 2005)",
    consultationHours: "Mon, Wed, Fri: 9:00 AM - 2:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  
  // Mahendra Mohan Choudhury Hospital - ID: 17
  {
    id: 66,
    hospitalId: 17,
    name: "Dr. Achyut Chandra Baishya",
    position: "Superintendent",
    qualifications: "MBBS, MD (Medicine)",
    specialty: "General Medicine",
    experience: "25+ years",
    email: "superintendent@mmch.assam.gov.in",
    phone: "0361-2529272 (Ext. 101)",
    consultationHours: "Mon-Fri: 9:00 AM - 2:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 67,
    hospitalId: 17,
    name: "Dr. Himangshu Sharma",
    position: "Senior Medical Officer",
    qualifications: "MBBS, MS (General Surgery)",
    specialty: "General Surgery",
    experience: "20+ years",
    email: "himangshu.sharma@mmch.assam.gov.in",
    phone: "0361-2529272 (Ext. 102)",
    consultationHours: "Mon, Wed, Fri: 10:00 AM - 2:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 68,
    hospitalId: 17,
    name: "Dr. Pallabi Kalita",
    position: "Senior Medical Officer",
    qualifications: "MBBS, MS (Obstetrics & Gynecology)",
    specialty: "Obstetrics & Gynecology",
    experience: "18+ years",
    email: "pallabi.kalita@mmch.assam.gov.in",
    phone: "0361-2529272 (Ext. 103)",
    consultationHours: "Mon-Fri: 9:00 AM - 1:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 69,
    hospitalId: 17,
    name: "Dr. Dhiraj Pathak",
    position: "Senior Medical Officer",
    qualifications: "MBBS, MS (Orthopedics)",
    specialty: "Orthopedics",
    experience: "15+ years",
    email: "dhiraj.pathak@mmch.assam.gov.in",
    phone: "0361-2529272 (Ext. 104)",
    consultationHours: "Tue, Thu, Sat: 10:00 AM - 1:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  
  // Down Town Hospital - ID: 18
  {
    id: 70,
    hospitalId: 18,
    name: "Dr. Nirmal Kumar Hazarika",
    position: "Medical Director",
    qualifications: "MBBS, MD (Medicine), DM (Cardiology)",
    specialty: "Cardiology",
    experience: "30+ years",
    email: "nirmal.hazarika@downtownhospital.in",
    phone: "0361-2333633 (Ext. 1001)",
    consultationHours: "Mon-Sat: 10:00 AM - 4:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 71,
    hospitalId: 18,
    name: "Dr. Gautam Majumdar",
    position: "Senior Consultant",
    qualifications: "MBBS, MS, MCh (Neurosurgery)",
    specialty: "Neurosurgery",
    experience: "25+ years",
    email: "gautam.majumdar@downtownhospital.in",
    phone: "0361-2333633 (Ext. 1002)",
    consultationHours: "Mon, Wed, Fri: 10:00 AM - 3:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 72,
    hospitalId: 18,
    name: "Dr. Tapan Kumar Sarma",
    position: "Senior Consultant",
    qualifications: "MBBS, MD (Medicine), DM (Nephrology)",
    specialty: "Nephrology",
    experience: "22+ years",
    email: "tapan.sarma@downtownhospital.in",
    phone: "0361-2333633 (Ext. 1003)",
    consultationHours: "Tue, Thu, Sat: 9:00 AM - 2:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 73,
    hospitalId: 18,
    name: "Dr. Birinchi Kumar Sarma",
    position: "Senior Consultant",
    qualifications: "MBBS, MD (Medicine), DM (Medical Oncology)",
    specialty: "Medical Oncology",
    experience: "20+ years",
    email: "birinchi.sarma@downtownhospital.in",
    phone: "0361-2333633 (Ext. 1004)",
    consultationHours: "Mon-Fri: 10:00 AM - 2:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  
  // GNRC Hospitals - ID: 19
  {
    id: 74,
    hospitalId: 19,
    name: "Dr. Nomal Chandra Borah",
    position: "Chairman & Managing Director",
    qualifications: "MBBS, MD (Medicine), DM (Neurology)",
    specialty: "Neurology & Stroke Medicine",
    experience: "35+ years",
    email: "nomal.borah@gnrc.in",
    phone: "0361-2203999 (Ext. 1101)",
    consultationHours: "Mon, Wed, Fri: 10:00 AM - 4:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 75,
    hospitalId: 19,
    name: "Dr. Bhaskar Jyoti Bora",
    position: "Senior Consultant",
    qualifications: "MBBS, MD (Medicine), DM (Cardiology)",
    specialty: "Interventional Cardiology",
    experience: "25+ years",
    email: "bhaskar.bora@gnrc.in",
    phone: "0361-2203999 (Ext. 1102)",
    consultationHours: "Mon-Sat: 9:00 AM - 3:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 76,
    hospitalId: 19,
    name: "Dr. Rituparna Baruah",
    position: "Senior Consultant",
    qualifications: "MBBS, MS (General Surgery), Fellowship in Minimal Access Surgery",
    specialty: "Minimal Access Surgery",
    experience: "20+ years",
    email: "rituparna.baruah@gnrc.in",
    phone: "0361-2203999 (Ext. 1103)",
    consultationHours: "Tue, Thu, Sat: 10:00 AM - 2:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 77,
    hospitalId: 19,
    name: "Dr. Sanjib Kumar Medhi",
    position: "Senior Consultant",
    qualifications: "MBBS, MD (Medicine), Fellowship in Critical Care",
    specialty: "Critical Care",
    experience: "18+ years",
    email: "sanjib.medhi@gnrc.in",
    phone: "0361-2203999 (Ext. 1104)",
    consultationHours: "Mon-Fri: 9:00 AM - 5:00 PM (On Call)",
    image: "/doctors/default-doctor.jpg"
  },
  
  // Excel Care Hospital - ID: 20
  {
    id: 78,
    hospitalId: 20,
    name: "Dr. Subhash Khanna",
    position: "Chairman & Senior Consultant",
    qualifications: "MBBS, MS (Orthopedics)",
    specialty: "Orthopedics & Joint Replacement",
    experience: "30+ years",
    email: "subhash.khanna@excelcarehospitals.com",
    phone: "0361-7104000 (Ext. 201)",
    consultationHours: "Mon, Wed, Fri: 10:00 AM - 4:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 79,
    hospitalId: 20,
    name: "Dr. Manish Gupta",
    position: "Senior Consultant",
    qualifications: "MBBS, MD (Medicine), DM (Gastroenterology)",
    specialty: "Gastroenterology",
    experience: "22+ years",
    email: "manish.gupta@excelcarehospitals.com",
    phone: "0361-7104000 (Ext. 202)",
    consultationHours: "Tue, Thu, Sat: 9:00 AM - 3:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 80,
    hospitalId: 20,
    name: "Dr. Pankaj Saikia",
    position: "Senior Consultant",
    qualifications: "MBBS, MS (General Surgery), MCh (Urology)",
    specialty: "Urology",
    experience: "20+ years",
    email: "pankaj.saikia@excelcarehospitals.com",
    phone: "0361-7104000 (Ext. 203)",
    consultationHours: "Mon, Wed, Fri: 10:00 AM - 2:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 81,
    hospitalId: 20,
    name: "Dr. Abhijit Neog",
    position: "Senior Consultant",
    qualifications: "MBBS, MS (ENT)",
    specialty: "ENT",
    experience: "18+ years",
    email: "abhijit.neog@excelcarehospitals.com",
    phone: "0361-7104000 (Ext. 204)",
    consultationHours: "Mon-Fri: 9:00 AM - 1:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  
  // Narayana Superspeciality Hospital - ID: 21
  {
    id: 82,
    hospitalId: 21,
    name: "Dr. Rajesh Agarwal",
    position: "Director & Senior Consultant",
    qualifications: "MBBS, MD (Pediatrics), DM (Pediatric Cardiology)",
    specialty: "Pediatric Cardiology",
    experience: "25+ years",
    email: "rajesh.agarwal@narayanahealth.org",
    phone: "1860-5001066 (Ext. 301)",
    consultationHours: "Mon-Fri: 9:00 AM - 5:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 83,
    hospitalId: 21,
    name: "Dr. Pranjal Deka",
    position: "Senior Consultant",
    qualifications: "MBBS, MS (General Surgery), MCh (Urology & Transplant Surgery)",
    specialty: "Organ Transplant",
    experience: "20+ years",
    email: "pranjal.deka@narayanahealth.org",
    phone: "1860-5001066 (Ext. 302)",
    consultationHours: "Mon, Wed, Fri: 10:00 AM - 4:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 84,
    hospitalId: 21,
    name: "Dr. Manigreeva Baruah",
    position: "Senior Consultant",
    qualifications: "MBBS, MS (General Surgery), MCh (Surgical Oncology)",
    specialty: "Oncosurgery",
    experience: "18+ years",
    email: "manigreeva.baruah@narayanahealth.org",
    phone: "1860-5001066 (Ext. 303)",
    consultationHours: "Tue, Thu, Sat: 9:00 AM - 3:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 85,
    hospitalId: 21,
    name: "Dr. Nilakshi Goswami",
    position: "Senior Consultant",
    qualifications: "MBBS, MD (Medicine), DM (Rheumatology)",
    specialty: "Rheumatology",
    experience: "15+ years",
    email: "nilakshi.goswami@narayanahealth.org",
    phone: "1860-5001066 (Ext. 304)",
    consultationHours: "Mon, Wed, Fri: 9:00 AM - 2:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  
  // Nemcare Hospital - ID: 22
  {
    id: 86,
    hospitalId: 22,
    name: "Dr. Hitesh Barua",
    position: "Managing Director & Senior Consultant",
    qualifications: "MBBS, MS (General Surgery), MCh (CTVS)",
    specialty: "Cardiothoracic & Vascular Surgery",
    experience: "30+ years",
    email: "hitesh.barua@nemcare.com",
    phone: "+91 8822201201",
    consultationHours: "Mon, Wed, Fri: 10:00 AM - 4:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 87,
    hospitalId: 22,
    name: "Dr. Pranabjyoti Baruah",
    position: "Senior Consultant",
    qualifications: "MBBS, MD (Medicine), DM (Cardiology)",
    specialty: "Cardiology",
    experience: "25+ years",
    email: "pranabjyoti.baruah@nemcare.com",
    phone: "0361-2469697 (Ext. 501)",
    consultationHours: "Mon-Sat: 9:00 AM - 3:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 88,
    hospitalId: 22,
    name: "Dr. Bishnu Prasad Sharma",
    position: "Senior Consultant",
    qualifications: "MBBS, MD (Medicine), DM (Neurology)",
    specialty: "Neuroscience",
    experience: "22+ years",
    email: "bishnu.sharma@nemcare.com",
    phone: "0361-2469697 (Ext. 502)",
    consultationHours: "Tue, Thu, Sat: 10:00 AM - 2:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 89,
    hospitalId: 22,
    name: "Dr. Rahul Neog",
    position: "Senior Consultant",
    qualifications: "MBBS, MS (Orthopedics)",
    specialty: "Orthopedics",
    experience: "20+ years",
    email: "rahul.neog@nemcare.com",
    phone: "0361-2469697 (Ext. 503)",
    consultationHours: "Mon, Wed, Fri: 10:00 AM - 2:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 90,
    hospitalId: 22,
    name: "Dr. Anoop Kumar Mishra",
    position: "Senior Consultant",
    qualifications: "MBBS, MS (General Surgery)",
    specialty: "General Surgery",
    experience: "18+ years",
    email: "anoop.mishra@nemcare.com",
    phone: "0361-2469697 (Ext. 504)",
    consultationHours: "Mon-Fri: 9:00 AM - 1:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  
  // Apollo Hospitals Guwahati - ID: 23
  {
    id: 91,
    hospitalId: 23,
    name: "Dr. Tarini Prasad Dutta",
    position: "Medical Director & Senior Consultant",
    qualifications: "MBBS, MD (Medicine), DM (Cardiology)",
    specialty: "Cardiology",
    experience: "30+ years",
    email: "tarini.dutta@apollohospitals.com",
    phone: "1860-500-1066 (Ext. 601)",
    consultationHours: "Mon, Wed, Fri: 10:00 AM - 4:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 92,
    hospitalId: 23,
    name: "Dr. Sundeep Medhi",
    position: "Senior Consultant",
    qualifications: "MBBS, MD (Medicine), DM (Medical Oncology)",
    specialty: "Oncology",
    experience: "25+ years",
    email: "sundeep.medhi@apollohospitals.com",
    phone: "1860-500-1066 (Ext. 602)",
    consultationHours: "Tue, Thu, Sat: 9:00 AM - 3:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 93,
    hospitalId: 23,
    name: "Dr. Nandita Bhattacharyya",
    position: "Senior Consultant",
    qualifications: "MBBS, MD (Medicine), DM (Neurology)",
    specialty: "Neurology",
    experience: "20+ years",
    email: "nandita.bhattacharyya@apollohospitals.com",
    phone: "1860-500-1066 (Ext. 603)",
    consultationHours: "Mon, Wed, Fri: 9:00 AM - 2:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 94,
    hospitalId: 23,
    name: "Dr. Paragjyoti Gogoi",
    position: "Senior Consultant",
    qualifications: "MBBS, MD (Medicine), DM (Gastroenterology)",
    specialty: "Gastroenterology",
    experience: "18+ years",
    email: "paragjyoti.gogoi@apollohospitals.com",
    phone: "1860-500-1066 (Ext. 604)",
    consultationHours: "Tue, Thu, Sat: 10:00 AM - 2:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 95,
    hospitalId: 23,
    name: "Dr. Mridupawan Saikia",
    position: "Senior Consultant",
    qualifications: "MBBS, MS (Orthopedics)",
    specialty: "Orthopedics",
    experience: "22+ years",
    email: "mridupawan.saikia@apollohospitals.com",
    phone: "1860-500-1066 (Ext. 605)",
    consultationHours: "Mon, Wed, Fri: 10:00 AM - 3:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  
  // Hayat Superspeciality Hospital - ID: 24
  {
    id: 96,
    hospitalId: 24,
    name: "Dr. Mrinmoy Kumar Das",
    position: "Medical Director & Senior Consultant",
    qualifications: "MBBS, MD (Medicine), DM (Cardiology)",
    specialty: "Cardiology",
    experience: "25+ years",
    email: "mrinmoy.das@hayathospital.in",
    phone: "+91 361-7104000 (Ext. 701)",
    consultationHours: "Mon, Wed, Fri: 10:00 AM - 4:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 97,
    hospitalId: 24,
    name: "Dr. Prasanta Kumar Barua",
    position: "Senior Consultant",
    qualifications: "MBBS, MD (Medicine), DM (Neurology)",
    specialty: "Neurology",
    experience: "22+ years",
    email: "prasanta.barua@hayathospital.in",
    phone: "+91 361-7104000 (Ext. 702)",
    consultationHours: "Tue, Thu, Sat: 9:00 AM - 3:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 98,
    hospitalId: 24,
    name: "Dr. Diganta Kumar Phukan",
    position: "Senior Consultant",
    qualifications: "MBBS, MD (Medicine), DM (Gastroenterology)",
    specialty: "Gastroenterology",
    experience: "20+ years",
    email: "diganta.phukan@hayathospital.in",
    phone: "+91 361-7104000 (Ext. 703)",
    consultationHours: "Mon, Wed, Fri: 9:00 AM - 2:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 99,
    hospitalId: 24,
    name: "Dr. Sasanka Kumar Bharadwaj",
    position: "Senior Consultant",
    qualifications: "MBBS, MS (General Surgery), MCh (Urology)",
    specialty: "Urology",
    experience: "18+ years",
    email: "sasanka.bharadwaj@hayathospital.in",
    phone: "+91 361-7104000 (Ext. 704)",
    consultationHours: "Tue, Thu, Sat: 10:00 AM - 2:00 PM",
    image: "/doctors/default-doctor.jpg"
  },
  {
    id: 100,
    hospitalId: 24,
    name: "Dr. Amarjyoti Hazarika",
    position: "Senior Consultant",
    qualifications: "MBBS, MD (Medicine), DM (Nephrology)",
    specialty: "Nephrology",
    experience: "15+ years",
    email: "amarjyoti.hazarika@hayathospital.in",
    phone: "+91 361-7104000 (Ext. 705)",
    consultationHours: "Mon, Wed, Fri: 10:00 AM - 3:00 PM",
    image: "/doctors/default-doctor.jpg"
  }
];

// Helper function to get doctors by hospital ID
function getDoctorsByHospital(hospitalId) {
  return doctors.filter(doctor => doctor.hospitalId === hospitalId);
}

// Helper function to get doctor by ID
function getDoctorById(doctorId) {
  return doctors.find(doctor => doctor.id === doctorId);
}

// Helper function to search doctors by name or specialty
function searchDoctors(query) {
  if (!query) return [];
  const lowerCaseQuery = query.toLowerCase();
  return doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(lowerCaseQuery) ||
    doctor.specialty.toLowerCase().includes(lowerCaseQuery)
  );
}

// Helper function to get doctors by specialty
function getDoctorsBySpecialty(specialty) {
  if (!specialty) return [];
  const lowerCaseSpecialty = specialty.toLowerCase();
  return doctors.filter(doctor =>
    doctor.specialty.toLowerCase().includes(lowerCaseSpecialty)
  );
}

// Helper function to get doctors by location (using hospital's location)
function getDoctorsByLocation(location, hospitals) {
  if (!location || !hospitals) return [];
  const lowerCaseLocation = location.toLowerCase();
  const hospitalIds = hospitals
    .filter(hospital => hospital.location.toLowerCase() === lowerCaseLocation)
    .map(hospital => hospital.id);
  return doctors.filter(doctor => hospitalIds.includes(doctor.hospitalId));
}