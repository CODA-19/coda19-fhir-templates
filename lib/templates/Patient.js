{

  // The type of resource
  "resourceType": "Patient",

  // Each resource entry has a unique id. This needs to be present for the bulk import to Aidbox to work
  "id": "pat1",

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