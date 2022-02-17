

export const filtersByDataType = {"string":["equal","not equal","is null","is not null"],"array":["is empty","is not empty","contains","does not contain"]}
export const resourceTypes = [
  "Condition",
  "Encounter",
  "ImagingStudy",
  "Location",
  "MedicationAdministration",
  "Observation",
  "Patient",
  "Procedure",
  "ServiceRequest"
]
export const attributesByResourceType = {
  "Condition": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "subject.reference",
      "type": "string"
    },
    {
      "name": "encounter.reference",
      "type": "string"
    },
    {
      "name": "onsetDateTime",
      "type": "string"
    },
    {
      "name": "code.coding",
      "type": "array",
      "subpaths": [
        {
          "name": "system",
          "type": "string"
        },
        {
          "name": "code",
          "type": "string"
        },
        {
          "name": "display",
          "type": "string"
        }
      ]
    },
    {
      "name": "code.text",
      "type": "string"
    }
  ],
  "Encounter": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "status",
      "type": "string"
    },
    {
      "name": "class.system",
      "type": "string"
    },
    {
      "name": "class.code",
      "type": "string"
    },
    {
      "name": "class.display",
      "type": "string"
    },
    {
      "name": "subject.reference",
      "type": "string"
    },
    {
      "name": "location",
      "type": "array",
      "subpaths": [
        {
          "name": "location.reference",
          "type": "string"
        },
        {
          "name": "location.display",
          "type": "string"
        },
        {
          "name": "status",
          "type": "string"
        },
        {
          "name": "period.start",
          "type": "string"
        },
        {
          "name": "period.end",
          "type": "string"
        }
      ]
    },
    {
      "name": "period.start",
      "type": "string"
    },
    {
      "name": "period.end",
      "type": "string"
    }
  ],
  "ImagingStudy": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "subject.reference",
      "type": "string"
    },
    {
      "name": "status",
      "type": "string"
    },
    {
      "name": "modality",
      "type": "array",
      "subpaths": [
        {
          "name": "code",
          "type": "string"
        },
        {
          "name": "system",
          "type": "string"
        }
      ]
    },
    {
      "name": "identifier",
      "type": "array",
      "subpaths": [
        {
          "name": "system",
          "type": "string"
        },
        {
          "name": "value",
          "type": "string"
        }
      ]
    },
    {
      "name": "started",
      "type": "string"
    },
    {
      "name": "numberOfSeries",
      "type": "string"
    },
    {
      "name": "numberOfInstances",
      "type": "string"
    },
    {
      "name": "description",
      "type": "string"
    },
    {
      "name": "procedureCode",
      "type": "array",
      "subpaths": [
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "coding",
          "type": "array",
          "subpaths": [
            {
              "name": "system",
              "type": "string"
            },
            {
              "name": "code",
              "type": "string"
            },
            {
              "name": "display",
              "type": "string"
            }
          ]
        }
      ]
    },
    {
      "name": "series",
      "type": "array",
      "subpaths": [
        {
          "name": "uid",
          "type": "string"
        },
        {
          "name": "number",
          "type": "string"
        },
        {
          "name": "modality.system",
          "type": "string"
        },
        {
          "name": "modality.code",
          "type": "string"
        },
        {
          "name": "bodySite.system",
          "type": "string"
        },
        {
          "name": "bodySite.code",
          "type": "string"
        },
        {
          "name": "bodySite.display",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "numberOfInstances",
          "type": "string"
        }
      ]
    }
  ],
  "Location": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "identifier",
      "type": "array",
      "subpaths": [
        {
          "name": "value",
          "type": "string"
        }
      ]
    },
    {
      "name": "physicalType.coding",
      "type": "array",
      "subpaths": [
        {
          "name": "system",
          "type": "string"
        },
        {
          "name": "code",
          "type": "string"
        },
        {
          "name": "display",
          "type": "string"
        }
      ]
    },
    {
      "name": "type",
      "type": "array",
      "subpaths": [
        {
          "name": "coding",
          "type": "array",
          "subpaths": [
            {
              "name": "system",
              "type": "string"
            },
            {
              "name": "code",
              "type": "string"
            },
            {
              "name": "display",
              "type": "string"
            }
          ]
        }
      ]
    }
  ],
  "MedicationAdministration": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "subject.reference",
      "type": "string"
    },
    {
      "name": "status",
      "type": "string"
    },
    {
      "name": "contained",
      "type": "array",
      "subpaths": [
        {
          "name": "resourceType",
          "type": "string"
        },
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "code.coding",
          "type": "array",
          "subpaths": [
            {
              "name": "system",
              "type": "string"
            },
            {
              "name": "code",
              "type": "string"
            },
            {
              "name": "display",
              "type": "string"
            }
          ]
        }
      ]
    },
    {
      "name": "medicationReference.reference",
      "type": "string"
    },
    {
      "name": "effectivePeriod.start",
      "type": "string"
    },
    {
      "name": "effectivePeriod.end",
      "type": "string"
    },
    {
      "name": "dosage.text",
      "type": "string"
    },
    {
      "name": "dosage.route.coding",
      "type": "array",
      "subpaths": [
        {
          "name": "system",
          "type": "string"
        },
        {
          "name": "code",
          "type": "string"
        },
        {
          "name": "display",
          "type": "string"
        }
      ]
    },
    {
      "name": "dosage.dose.value",
      "type": "string"
    },
    {
      "name": "dosage.dose.unit",
      "type": "string"
    },
    {
      "name": "dosage.dose.system",
      "type": "string"
    },
    {
      "name": "dosage.dose.code",
      "type": "string"
    }
  ],
  "Observation": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "status",
      "type": "string"
    },
    {
      "name": "effectiveDateTime",
      "type": "string"
    },
    {
      "name": "subject.reference",
      "type": "string"
    },
    {
      "name": "encounter.reference",
      "type": "string"
    },
    {
      "name": "code.coding",
      "type": "array",
      "subpaths": [
        {
          "name": "system",
          "type": "string"
        },
        {
          "name": "code",
          "type": "string"
        },
        {
          "name": "display",
          "type": "string"
        }
      ]
    },
    {
      "name": "code.text",
      "type": "string"
    },
    {
      "name": "bodySite.coding",
      "type": "array",
      "subpaths": [
        {
          "name": "system",
          "type": "string"
        },
        {
          "name": "code",
          "type": "string"
        },
        {
          "name": "display",
          "type": "string"
        }
      ]
    },
    {
      "name": "valueQuantity.value",
      "type": "string"
    },
    {
      "name": "valueQuantity.unit",
      "type": "string"
    },
    {
      "name": "valueQuantity.system",
      "type": "string"
    },
    {
      "name": "valueQuantity.code",
      "type": "string"
    }
  ],
  "Patient": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "gender",
      "type": "string"
    },
    {
      "name": "birthDate",
      "type": "string"
    },
    {
      "name": "deceasedDateTime",
      "type": "string"
    }
  ],
  "Procedure": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "subject.reference",
      "type": "string"
    },
    {
      "name": "basedOn",
      "type": "array",
      "subpaths": [
        {
          "name": "reference",
          "type": "string"
        }
      ]
    },
    {
      "name": "code.coding",
      "type": "array",
      "subpaths": [
        {
          "name": "system",
          "type": "string"
        },
        {
          "name": "code",
          "type": "string"
        },
        {
          "name": "display",
          "type": "string"
        }
      ]
    },
    {
      "name": "code.text",
      "type": "string"
    },
    {
      "name": "performedPeriod.start",
      "type": "string"
    },
    {
      "name": "performedPeriod.end",
      "type": "string"
    },
    {
      "name": "status",
      "type": "string"
    }
  ],
  "ServiceRequest": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "subject.reference",
      "type": "string"
    },
    {
      "name": "status",
      "type": "string"
    },
    {
      "name": "intent",
      "type": "string"
    },
    {
      "name": "authoredOn",
      "type": "string"
    },
    {
      "name": "priority",
      "type": "string"
    }
  ]
};

