// This file is automatically generated; do not edit manually.
export const FiltersByDataType = {
  "string": [
    "equal",
    "not equal",
    "is null",
    "is not null"
  ],
  "array": [
    "is empty",
    "is not empty",
    "contains any element where",
    "contains no element where",
    "contains only elements where"
  ]
}
export const ResourceTypes = [
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
export const AttributesByResourceType = {
  "Condition": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "subject.reference",
      "type": "dateTime"
    },
    {
      "name": "encounter.reference",
      "type": "dateTime"
    },
    {
      "name": "onsetDateTime",
      "type": "dateTime"
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
      "type": "dateTime"
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
          "type": "dateTime"
        },
        {
          "name": "period.end",
          "type": "dateTime"
        }
      ]
    },
    {
      "name": "period.start",
      "type": "dateTime"
    },
    {
      "name": "period.end",
      "type": "dateTime"
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
      "type": "dateTime"
    },
    {
      "name": "numberOfSeries",
      "type": "integer"
    },
    {
      "name": "numberOfInstances",
      "type": "integer"
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
              "type": "dateTime"
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
          "type": "integer"
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
          "type": "dateTime"
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
          "type": "integer"
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
          "type": "dateTime"
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
              "type": "dateTime"
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
      "type": "dateTime"
    },
    {
      "name": "effectivePeriod.start",
      "type": "dateTime"
    },
    {
      "name": "effectivePeriod.end",
      "type": "dateTime"
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
          "type": "dateTime"
        },
        {
          "name": "display",
          "type": "string"
        }
      ]
    },
    {
      "name": "dosage.dose.value",
      "type": "integer"
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
      "type": "dateTime"
    },
    {
      "name": "subject.reference",
      "type": "dateTime"
    },
    {
      "name": "encounter.reference",
      "type": "dateTime"
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
          "type": "dateTime"
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
          "type": "dateTime"
        },
        {
          "name": "display",
          "type": "string"
        }
      ]
    },
    {
      "name": "valueQuantity.value",
      "type": "integer"
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
      "type": "dateTime"
    },
    {
      "name": "deceasedDateTime",
      "type": "dateTime"
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
          "type": "dateTime"
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
      "type": "dateTime"
    },
    {
      "name": "performedPeriod.end",
      "type": "dateTime"
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
      "type": "dateTime"
    },
    {
      "name": "priority",
      "type": "string"
    }
  ]
};

