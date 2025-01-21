frappe.ui.form.on('Supplier Quotation', {
    refresh: function(frm) {
        frm.add_custom_button(__('View Supplier Quotation Comparison'), function() {
            frappe.set_route('query-report', 'Supplier Quotation Comparison', {
                supplier: frm.doc.supplier,
                item: frm.doc.items.map(item => item.item_code)
            });
        }, __('Reports'));
    }
});
