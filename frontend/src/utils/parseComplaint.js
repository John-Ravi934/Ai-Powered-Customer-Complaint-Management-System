export const parseComplaint = (text) => {
  const lowerText = text.toLowerCase();

  if (lowerText.includes("apollo")) {
    return {
      complaintSource: "Pharmacy",
      customerName: "Apollo Pharmacy",

      productName: "Amoxicillin Capsules",
      productStrength: "500 mg",

      batchNumber: "AMX240602",

      manufacturingDate: "March 2026",

      expiryDate: "February 2028",

      quantityAffected: "12 capsules",

      complaintType: "Product Discoloration",

      complaintDate: new Date().toLocaleDateString(),

      complaintDescription:
        "Apollo Pharmacy reported discolored capsules in a sealed bottle.",

      severity: "Major",

      priority: "High",

      nextAction: "Route to QA Investigation",

      status: "Ready to Commit",
    };
  }

  return {
    complaintSource: "",
    customerName: "",
    productName: "",
    productStrength: "",
    batchNumber: "",
    manufacturingDate: "",
    expiryDate: "",
    quantityAffected: "",
    complaintType: "",
    complaintDate: "",
    complaintDescription: "",
    severity: "",
    priority: "",
    nextAction: "",
    status: "Pending Triage",
  };
};