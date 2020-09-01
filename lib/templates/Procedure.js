{
  // The type of resource
  "resourceType": "Procedure",

  // Each resource entry needs a unique id for the ndjson bulk upload. 
  "id": "f002",

  "subject": {
    "reference": "Patient/pat1",
  },

  "code": {
    // SNOMED code to be assigned. Omit if not present
    "coding": [{
      "system": "http://snomed.info/sct",
      "code": "40617009",
      "display": "Artificial respiration (procedure)"
    }],
    "text": "Mechanical Ventilation"
  },

  "performedPeriod": {
    "start": "YYYY-MM-DDThh:mm:ss+zz:zz",
    "end": "YYYY-MM-DDThh:mm:ss+zz:zz"
  },

  "status": "completed"

}