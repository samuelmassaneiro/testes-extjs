Ext.define('Curso.Janela',{
	extend: 'Ext.window.Window',

	height: 395,
	width: 500,

	title: 'Aula 35 - Absolute Layout',

	autoShow: true,

	autoScroll: true,

	layout: 'absolute',

	items: [
		{
			xtype: 'panel',
			title: 'Painel 1',
			x: 0,
			y: 0,
			draggable: true,
			html: 'conteúdo do painel 1'
		},
		{
			xtype: 'panel',
			title: 'Painel 2',
			x: 0,
			y: 40,
			html: 'conteúdo do painel 2'
		},
		{
			xtype: 'panel',
			title: 'Painel 2',
			x: 0,
			y: 80,
			html: 'conteúdo do painel 2'
		},
		{
			xtype: 'panel',
			title: 'Painel 2',
			x: 0,
			y: 120,
			html: 'conteúdo do painel 2'
		},
		{
			xtype: 'panel',
			title: 'Painel 2',
			x: 0,
			y: 160,
			html: 'conteúdo do painel 2'
		},
		{
			xtype: 'panel',
			title: 'Painel 2',
			x: 0,
			y: 200,
			html: 'conteúdo do painel 2'
		},
		{
			xtype: 'panel',
			title: 'Painel 2',
			x: 0,
			y: 240,
			html: 'conteúdo do painel 2'
		},
		{
			xtype: 'panel',
			title: 'Painel 2',
			x: 0,
			y: 280,
			html: 'conteúdo do painel 2'
		},
		{
			xtype: 'panel',
			title: 'Painel 2',
			x: 0,
			y: 320,
			html: 'conteúdo do painel 2'
		}
	]
});

Ext.onReady(function(){
	Ext.create('Curso.Janela');
});	