import ComplaintField from "./ComplaintField";
import { RotateCcw, Save } from "lucide-react";
import { useAppSelector } from "../../hooks/reduxHooks";

const ComplaintForm = () => {
    const complaint = useAppSelector(
    (state) => state.complaint
);
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 min-h-[calc(100vh-140px)]">

      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-semibold">
            Log Customer Complaint
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            AI-Powered Quality Assurance Module
          </p>
        </div>

        <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold">
    {complaint.status}
</span>
      </div>

      {/* Section 1 */}

      <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700 mb-4">
    1. Origin & Customer Details
</h3>

      <div className="grid grid-cols-2 gap-6 mb-8">

        <ComplaintField
    label="Complaint Source"
    value={complaint.complaintSource}
/>

        <ComplaintField
    label="Customer Name"
    value={complaint.customerName}
/>

      </div>

      {/* Section 2 */}

      <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700 mb-4">
        2. PRODUCT & BATCH IDENTIFICATION
      </h3>

      <div className="grid grid-cols-2 gap-6 mb-8">

        <ComplaintField label="Product Name" value={complaint.productName} />

        <ComplaintField label="Product Strength / Grade" value={complaint.productStrength} />

        <ComplaintField label="Batch / Lot Number" value={complaint.batchNumber} />

        <ComplaintField label="Manufacturing Date" type="date" value={complaint.manufacturingDate} />

        <ComplaintField label="Expiry Date" type="date" value={complaint.expiryDate} />

        <ComplaintField label="Quantity Affected" value={complaint.quantityAffected} />

      </div>

      {/* We'll build Complaint Details next */}

      {/* Section 3 */}

<h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700 mb-4">
  3. Complaint Details
</h3>

<div className="grid grid-cols-2 gap-6 mb-6">

    <ComplaintField
        label="Complaint Type"
        value={complaint.complaintType}
    />

    <ComplaintField
        label="Complaint Date"
        value={complaint.complaintDate}
        type="date"
    />

</div>

<div className="mb-8">

<label className="block text-sm font-medium mb-2">
Complaint Description
</label>

<textarea
  readOnly
  value={complaint.complaintDescription}
  rows={6}
  placeholder="Awaiting AI extraction..."
  className="
    w-full
    rounded-lg
    border
    border-slate-300
    bg-slate-100
    p-3
    text-sm
    text-slate-700
    placeholder:text-slate-400
    cursor-not-allowed
    resize-none
    focus:outline-none
  "
/>

</div>

{/* Section 4*/}

<h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700 mb-4">
4. Initial Assessment & Priority
</h3>

<div className="grid grid-cols-2 gap-6 mb-6">

    <ComplaintField
        label="Initial Severity"
        value={complaint.severity}
    />

    <ComplaintField
        label="Priority"
        value={complaint.priority}
    />

</div>

<div className="mb-8">

    <ComplaintField
        label="Next Action"
        value={complaint.nextAction}
    />

</div>

{/* Btn Section */}

<div className="flex justify-between mt-8">

<button
  className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
>
  <RotateCcw size={16} />
  Reset Form
</button>

<button
  className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
>
  <Save size={16} />
  Save Complaint
</button>

</div>



    </div>
  );
};

export default ComplaintForm;