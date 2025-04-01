Ext.define('QuickStart.view.main.Main', {
    extend: 'Ext.tab.Panel',
    controller: 'listview',

    items: [{
        title: 'Employee Directory',
        xtype: 'grid',
        iconCls: 'x-fa fa-users',
        grouped: true,
        listeners: {
            itemtap: 'onPopupForm'
        },
        store: {
            type: 'employees',
            autoLoad: true,
            sorters: ['firstName', 'lastName', 'officeLocation'],
            grouper: 'officeLocation'
        },
        columns: [{
            text: 'First Name',
            dataIndex: 'firstName',
            flex: 1
        }, {
            text: 'Last Name',
            dataIndex: 'lastName',
            flex: 1
        }, {
            text: 'Phone Number',
            dataIndex: 'phoneNumber',
            flex: 1
        }]
    }]
});
