{
  // The type of resource
  "resourceType": "ServiceRequest",

  // Each resource entry needs a unique id for the ndjson bulk upload. 
  "id": "f002",

  "subject": {
    "reference": "Patient/pat1"
  },
  
  // One of: draft | active | on-hold | revoked | completed | entered-in-error | unknown  
  "status":"completed",
    
  // One of: proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option  
  "intent":"plan",  
    
  // date of the request (YYYY-MM-DD)
  "authoredOn": "2015-03-30",  
    
  // date when the request is scheduled to be performed or is performed (YYYY-MM-DD)
  "occurrenceDateTime": "2015-03-30",
    
  // One of: routine | urgent | asap | stat
  "priority":"routine"  
    
}
