Ext.onReady(function(){

	Ext.create('Ext.window.Window', {
	    title: 'oi',
	    height: 200,
	    width: 400,
	    layout: 'fit',
	    items: {  // Let's put an empty grid in just to illustrate fit layout
	        xtype: 'grid',
	        border: false,
	        columns: [{header: 'World'}],                 // One header just for show. There's no data,
	        store: Ext.create('Ext.data.ArrayStore', {}) // A dummy empty data store
	    },
		//autoShow: true
	})

	Ext.create('Ext.data.Store', {
		storeId:'simpsonsStore',
		fields:['name', 'email', 'phone'],
		data:{'items':[
				{ 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224"  },
				{ 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
				{ 'name': 'Homer', "email":"homer@simpsons.com",  "phone":"555-222-1244"  },
				{ 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254"  }
			]},
		proxy: {
			type: 'memory',
			reader: {
				type: 'json',
				root: 'items'
			}
		}
	});

	var grid = Ext.create('Ext.grid.Panel', {
		title: '<left>Dados Pessoais Simpsons</left>',
		store: Ext.data.StoreManager.lookup('simpsonsStore'),
		draggable: true,
		floatParent: true,
		columns: [
			{ header: 'Name',  dataIndex: 'name' },
			{ header: 'Email', dataIndex: 'email', flex: 1 },
			{ header: 'Phone', dataIndex: 'phone' }
		],
		height: 133,
		width: 400,
		renderTo: 'panel',

	})

	var panel = Ext.create('Ext.window.Window', {
	    title: 'oi',
	    height: 200,
	    width: 400,
		minimizable: true,
		maximizable: true,
		modal: false,
	    layout: 'fit',
		loader: {
	    },
		autoShow: true,
		autoScroll: true,

		renderTo: Ext.getBody()
	})

	
});	