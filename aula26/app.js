Ext.onReady(function(){
	
	Ext.create('Ext.panel.Panel', {
		title: '<center>Teste Painel</center>',
		width: 150,
		height: 70,
		draggable: {delegate: 'h1'},
		resizable: true,
		html: '<left>Lorem Ipsum Dolore</left>',
		renderTo: Ext.getBody(),
		dockedItems: [{
			xtype: 'toolbar',
			dock: 'bottom',
			items: [{
				text: 'Abrir Working tree'
			}
			
		]
		}]

	});

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
		renderTo: Ext.getBody()
	});

	var panel = Ext.create('Ext.panel.Panel', {
		title: '<center>Teste Painel 2</center>',
		width: 384,
		height: 381,
		draggable: {delegate: 'h1'},
		resizable: true,
		items: [{
			xtype: 'displayfield',
			fieldLabel: 'Nome',
			name: 'name',
			value: 'Samuel Massaneiro'
		},
		grid
		],
		renderTo: Ext.getBody()
	});

	var store = Ext.create('Ext.data.TreeStore', {
		root: {
			expanded: true,
			children: [
				{ text: "Arquivos gerais", leaf: true },
				{ text: "Trabalhos Escolares", expanded: true, children: [
						{ text: "Circuitos II", leaf: true },
						{ text: "Analize de Sistemas", leaf: true},
						{ text: "Eletronica Analog II", leaf: true}
					] },
				{ text: "Provas Terminadas", expanded: true, children: [
						{ text: "Circuitos II", leaf: true },
						{ text: "Analize de Sistemas", leaf: true},
						{ text: "Eletronica Analog II", leaf: true,}
					]}
			]
		}
	});

	var tree = Ext.create('Ext.tree.Panel', {
		title: 'Teste Árvore de Arquivos',
		width: 200,
		height: 200,
		store: store,
		draggable: true,
		floatParent: true,
		rootVisible: false,
		renderTo: Ext.getBody()
	});


	panel.add(tree)
});