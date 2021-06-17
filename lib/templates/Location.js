{

  // The type of resource
  "resourceType": "Location",

  // Each resource entry has a unique id. This needs to be present for the bulk import to Aidbox to work
  "id": "loc1",


  // Use the Airtable UnitType terminology tab to map to correct unit
  // Use coding system displayed here:
  // https://www.hl7.org/fhir/v3/ServiceDeliveryLocationRoleType/vs.html
  "type": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
          "code": "ICU",
          "display": "Intensive care unit"
        }
      ]
    }
  ]

}
