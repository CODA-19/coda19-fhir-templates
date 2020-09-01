{

  // The type of resource
  "resourceType": "Patient",

  // Each resource entry has a unique id. This needs to be present for the bulk import to Aidbox to work
  "id": "pat1",

  // An identifier for this patient
  "identifier": [{
    // Indicate that this ID is a medical record number
    "type": {
      "coding": [{
        "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
        "code": "MR"
      }]
    },

    // The medical record number ID
    "value": "453265624",

    // The organisation assigning the ID
    "assigner": {
      "reference": "CHUM",
      "type": "Organization"
    }
  }],

  // The gender of the individual 
  "gender": {
    "code": "male" // male | female | other | unknown
  },

  // The date of birth of the individual (YYYY-MM-DD)
  "birthDate": "1964-02-25",

  // Indicates if the individual is deceased or not.
  "deceasedBoolean": true,

  // Time of death, if applicable (YYYY-MM-DDThh:mm:ss+zz:zz)
  "deceasedDateTime": "2018-02-01T17:23:07Z"

}