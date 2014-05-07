Ext.define('testApp.store.Settings', {
    extend: 'Ext.data.Store',
    requires: ['testApp.model.Setting'],
        config: {
            model: 'testApp.model.Setting',
            autoLoad: true
    }
});