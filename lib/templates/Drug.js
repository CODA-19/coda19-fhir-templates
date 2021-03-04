{

  // The type of resource
  "resourceType": "MedicationAdministration",

  // Each resource entry needs a unique id for the ndjson bulk upload. 
  "id": "f002",

  "subject": {
    "reference": "Patient/pat1"
  },

  "contained": [{
    "resourceType": "Medication",
    "id": "med0301",
    "code": {
      "coding": [{
        "system": "http://terminology.hl7.org/CodeSystem/ahfs",
        "code": "382751",
        "display": "Vancomycin"
      }]
    }
  }],

  "effectivePeriod": {
    // YYYY-MM-DDThh:mm:ss+zz:zz
    "start": "2017-02-01T17:23:07Z",
    "end": "2017-03-01T17:23:07Z"
  },

  "dosage": {
    "text": "1.5 grams in D5W 250 ml. IV every 12 hours.",
    "route": {
      "coding": [{
        "system": "http://snomed.info/sct",
        "code": "47625008",
        "display": "Intravenous route (qualifier value)"
      }]
    }
  }

}
