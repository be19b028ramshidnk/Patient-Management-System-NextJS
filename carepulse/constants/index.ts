export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];





export const Doctors = [
  {
    image: "/assets/images/dr-sathyan.jpg",
    name: "Dr Sathyan (General)",
  },
  {
    image: "/assets/images/dr-rahul.jpeg",
    name: "Dr Rahul (General)",
  },
  {
    image: "/assets/images/dr-joffy.jpeg",
    name: "Dr Joffy (Ortho)",
  },
  {
    image: "/assets/images/dr-ajeena.jpeg",
    name: "Dr Ajeena (Skin)",
  },
  {
    image: "/assets/images/dr-ahamed.jpg",
    name: "Dr Ahamed (Allergy)",
  },
  {
    image: "/assets/images/dr-muhammed.jpg",
    name: "Dr Sameer (Pediatric)",
  },
  {
    image: "/assets/images/dr-susan.jpg",
    name: "Dr Susan (Gynacology)",
  },
  {
    image: "/assets/images/dr-sasikala.jpeg",
    name: "Dr Sasikala (Invertility treatment)",
  },
  {
    image: "/assets/images/dr-aadil.jpeg",
    name: "Dr Adil ( ENT)",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};