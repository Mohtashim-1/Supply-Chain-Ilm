frappe.ui.form.on('Request for Quotation', {
    refresh: function(frm) {
        // Add a custom button
        frm.add_custom_button(__('View Supplier Quotation Comparison'), function() {
            // Navigate to the Supplier Quotation Comparison report with filters
            frappe.set_route('query-report', 'Supplier Quotation Comparison', {
                request_for_quotation: frm.doc.name 
            });
        }, __('Reports')); // Place it under the "Reports" menu
    }
});
