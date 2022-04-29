Ext.define('Curso.Janela',{
	extend: 'Ext.window.Window',

	height: 400,
	width: 500,

	title: 'Aula 33 - Anchor Layout',

	autoShow: true,

	autoScroll: true,

	layout: 'anchor',

	maximizable: true,

	minimizable: true,

	items: [
		{
			xtype: 'panel',
			title: 'Painel 1',
			anchor: '100%, 12.5%',
			//anchor: '-50, -150'
			bodyStyle:{"background-color":"lightblue"}, 
		},
		{
			xtype: 'panel',
			title: 'Painel 222',
			anchor: '75%, 12.5%',
			bodyStyle:{"background-color":"lightblue"}, 
		},
		{
			xtype: 'panel',
			title: 'Painel 3',
			anchor: '50%, 12.5%',
			bodyStyle:{"background-color":"lightblue"}, 
		},
		{
			xtype: 'panel',
			title: 'Painel 4',
			anchor: '25%, 12.5%',
			bodyStyle:{"background-color":"lightblue"}, 
		},
		{
			xtype: 'panel',
			title: 'Painel 5',
			anchor: '25%, 12.5%',
			bodyStyle:{"background-color":"lightblue"}, 
		},
		{
			xtype: 'panel',
			title: 'Painel 66',
			anchor: '50%, 13%',
			bodyStyle:{"background-color":"lightblue"}, 
		},
		{
			xtype: 'panel',
			title: 'Painel 7',
			anchor: '75%, 13%',
			bodyStyle:{"background-color":"lightblue"}, 
		},
		{
			xtype: 'panel',
			title: 'Painel 8',
			anchor: '100%, 13%',
			bodyStyle:{"background-color":"lightblue"}, 
		}
	]
});

Ext.onReady(function(){
	Ext.create('Curso.Janela');
});	