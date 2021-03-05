{
  // The type of resource
  "resourceType": "Condition",

  // Each resource entry needs a unique id for the ndjson bulk upload. 
  "id": "f002",

  // Patient associated with the observation
  "subject": {
    "reference": "Patient/3294843"
  },

  // Clinical episode associated with the observation (if possible)
  "encounter": {
    "reference": "Encounter/2314234"
  },

  "onsetDateTime": "YYYY-MM-DDThh:mm:ss+zz:zz",

  // Age at which the Condition began to occur
  // Precalculated with birthDate (Resource/Patient)
  "onsetAge": {
    "value": 52,
    "unit": "years",
    "system": "http://unitsofmeasure.org",
    "code": "a"
  },

  "code": {
    "coding": [
      // ICD-10 code for the diagnosis
      {
        "system": "http://hl7.org/fhir/ValueSet/icd-10",
        "code": "I63.9",
        "display": "Cerebral infarction, unspecified"
      }
    ],
    "text": "Stroke"
  }
  
}
