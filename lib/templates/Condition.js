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

  "onsetString": "YYYY-MM-DDThh:mm:ss+zz:zz",

  "code": {
    "coding": [
      {
        // SNOMED code for the diagnosis (SNOMED field to be omitted until coding/categorization completed)
        "system": "http://snomed.info/sct",
        "code": "422504002",
        "display": "Ischemic stroke (disorder)"
        // Sites may have ICD-10 codes for diagnoses, please include here if so.  
      }, 
      {
        "system": "http://hl7.org/fhir/ValueSet/icd-10",
        "code": "I63.9",
        "display": "Cerebral infarction, unspecified"
      }
    ],
    "text": "Stroke"
  }
  
}