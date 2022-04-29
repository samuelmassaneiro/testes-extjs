var store = Ext.create('Ext.data.TreeStore', {
	bodyStyle: { "background-color": "grey" },
	root: {
		expanded: true,
		children: [
			{
				text: "Eng Controle e Automação 2019", leaf: false, expanded: true, children: [
					{
						text: 'Analise de Sistemas Lineares', leaf: false, children: [
							{ text: 'Media Parcial', leaf: true },
							{ text: 'Media Final', leaf: true },
							{
								text: 'Trabalhos', leaf: false, children: [
									{ text: 'Trabalho 1', leaf: true },
									{ text: 'Trabalho 2', leaf: true },
									{ text: 'Trabalho 3', leaf: true },
								]
							},
							{
								text: 'Avaliações', leaf: false, children: [
									{ text: 'Avaliação 1', leaf: true },
									{ text: 'Avaliação 2', leaf: true },
									{ text: 'Avaliação 3', leaf: true },
								]
							},

						]
					},
					{
						text: 'Circuitos Eletricos II', leaf: false, children: [
							{ text: 'Media Parcial', leaf: true },
							{ text: 'Media Final', leaf: true },
							{
								text: 'Trabalhos', leaf: false, children: [
									{ text: 'Trabalho 1', leaf: true },
									{ text: 'Trabalho 2', leaf: true },
									{ text: 'Trabalho 3', leaf: true },
								]
							},
							{
								text: 'Avaliações', leaf: false, children: [
									{ text: 'Avaliação 1', leaf: true },
									{ text: 'Avaliação 2', leaf: true },
									{ text: 'Avaliação 3', leaf: true },

								]
							},

						]
					},
					{
						text: 'Eletrônica Analogica II', leaf: false, children: [
							{ text: 'Media Parcial', leaf: true },
							{ text: 'Media Final', leaf: true },
							{
								text: 'Trabalhos', leaf: false, children: [
									{ text: 'Trabalho 1', leaf: true },
									{ text: 'Trabalho 2', leaf: true },
									{ text: 'Trabalho 3', leaf: true },
								]
							},
							{
								text: 'Avaliações', leaf: false, children: [
									{ text: 'Avaliação 1', leaf: true },
									{ text: 'Avaliação 2', leaf: true },
									{ text: 'Avaliação 3', leaf: true },

								]
							},

						]
					},
					{ text: 'Rematrícula', leaf: true },
					{ text: 'Baixar Atestado de frequencia', leaf: true },
				]
			},
			{
				text: "CentroWeg - ELETRÔNICA ", leaf: false, expanded: true, children: [
					{
						text: 'Eletrônica Basica', leaf: false, children: [
							{ text: 'Media Parcial', leaf: true },
							{ text: 'Media Final', leaf: true },
							{
								text: 'Trabalhos', leaf: false, children: [
									{ text: 'Trabalho 1', leaf: true },
									{ text: 'Trabalho 2', leaf: true },
									{ text: 'Trabalho 3', leaf: true },
								]
							},
							{
								text: 'Avaliações', leaf: false, children: [
									{ text: 'Avaliação 1', leaf: true },
									{ text: 'Avaliação 2', leaf: true },
									{ text: 'Avaliação 3', leaf: true },
								]
							},

						]
					},
					{
						text: 'Eletrônica Media', leaf: false, children: [
							{ text: 'Media Parcial', leaf: true },
							{ text: 'Media Final', leaf: true },
							{
								text: 'Trabalhos', leaf: false, children: [
									{ text: 'Trabalho 1', leaf: true },
									{ text: 'Trabalho 2', leaf: true },
									{ text: 'Trabalho 3', leaf: true },
								]
							},
							{
								text: 'Avaliações', leaf: false, children: [
									{ text: 'Avaliação 1', leaf: true },
									{ text: 'Avaliação 2', leaf: true },
									{ text: 'Avaliação 3', leaf: true },

								]
							},

						]
					},
					{
						text: 'Eletrônica Avançada', leaf: false, children: [
							{ text: 'Media Parcial', leaf: true },
							{ text: 'Media Final', leaf: true },
							{
								text: 'Trabalhos', leaf: false, children: [
									{ text: 'Trabalho 1', leaf: true },
									{ text: 'Trabalho 2', leaf: true },
									{ text: 'Trabalho 3', leaf: true },
								]
							},
							{
								text: 'Avaliações', leaf: false, children: [
									{ text: 'Avaliação 1', leaf: true },
									{ text: 'Avaliação 2', leaf: true },
									{ text: 'Avaliação 3', leaf: true },

								]
							},

						]
					},
					{ text: 'Rematrícula', leaf: true },
					{ text: 'Baixar QPP', leaf: true }
				]
			},
			{
				text: "Montador Eletricista - NR10", leaf: false, expanded: true, children: [
					{
						text: 'Riscos da Eletricidade', leaf: false, children: [
							{ text: 'Media Parcial', leaf: true },
							{ text: 'Media Final', leaf: true },
							{
								text: 'Trabalhos', leaf: false, children: [
									{ text: 'Trabalho 1', leaf: true },
									{ text: 'Trabalho 2', leaf: true },
									{ text: 'Trabalho 3', leaf: true },
								]
							},
							{
								text: 'Avaliações', leaf: false, children: [
									{ text: 'Avaliação 1', leaf: true },
									{ text: 'Avaliação 2', leaf: true },
									{ text: 'Avaliação 3', leaf: true },
								]
							},

						]
					},
					{ text: 'Baixar Certificado', leaf: true }
				]
			}
		]
	}
});

var store2 = Ext.create('Ext.data.TreeStore', {
	bodyStyle: { "background-color": "grey" },
	root: {
		expanded: true,
		children: [
			{
				text: "Reuniao SAP", leaf: true
			},
			{
				text: "Reuniao Maestro", leaf: true
			},
			{
				text: "Treinamento Clientes", leaf: true
			},
			{
				text: "Gerenciamento de Rotina", leaf: true
			},
			{
				text: "Adequação Excel", leaf: true
			},
			{
				text: "Entrega Projeto SIP", leaf: true
			},
			{
				text: "Integração SIP MAESTRO", leaf: true
			},
			{
				text: "Entrega Cartao Aniversario Marcos", leaf: true
			},
			{
				text: "Reuniao de Implantação Sistema", leaf: true
			},

		]
	}
});


Ext.define('Curso.Janela', {
	extend: 'Ext.window.Window',

	height: 607.5,
	width: 1080,

	title: 'WWORKING AREA',

	autoShow: true,

	autoScroll: true,

	layout: 'border',

	maximizable: true,

	maximized: true,

	items: [
		{
			xtype: 'panel',
			title: 'EDITOR DE HTML by: Samuel Massaneiro',
			region: 'center',
			layout: 'anchor',
			items: [{
				xtype: 'htmleditor',
				bodyStyle: { "background-color": "lightblue" },
				anchor: '100%, 105%',
				inputType: 'text',
				growAppend: true,
				autoScroll: true,
			}]
		},
		{
			xtype: 'panel',
			title: 'SELECIONADOR DE DATAS',
			region: 'east',
			height: 500,
			collapsible: true,
			width: 180,
			bodyStyle: { "background-color": "grey" },
			layout: 'anchor',
			items: [{
				xtype: 'datepicker',
				region: 'center',
				minDate: new Date(),
				handler: function (picker, date) {
					Ext.Msg.alert('DATA SELECIONADA', 'Você selecionou a data: ' + Ext.Date.format(date, 'j M, Y'))
				}

			},
			{
				anchor: '100%, 100%',
				xtype: 'treepanel',
				title: 'Compromissos',
				height: 500,
				store: store2,
				rootVisible: false,
				tools: [{
					type: 'help',
					handler: function () {
						// show help here
					}
				}, {
					itemId: 'refresh',
					type: 'refresh',
					handler: function () {
						// do refresh
					}
				}, {
					type: 'search',
					handler: function (event, target, owner, tool) {
						// do search

					}
				}],

			}
			]
		},
		{
			xtype: 'panel',
			title: 'SELECIONADOR DE CORES',
			bodyStyle: { "background-color": "white" },
			layout: 'absolute',
			items: {
				x: 185,
				y: 75,
				scale: 'large',
				xtype: 'colorpicker',
				handler: function (picker, selColor) {
					Ext.Msg.alert('COR SELECIONADA', 'Você Escolheu a cor: ' + selColor.getId())

				}
			}
		},
		{

			xtype: 'treepanel',
			title: 'ARQUIVOS DE ESTUDANTE',
			region: 'west',
			collapsible: true,
			split: true,
			width: 250,
			height: 600,
			store: store,
			tools: [{
				type: 'help',
				handler: function () {
					// show help here
				}
			}, {
				itemId: 'refresh',
				type: 'refresh',
				handler: function () {
					// do refresh
				}
			}, {
				type: 'search',
				handler: function (event, target, owner, tool) {
					// do search

				}
			}],
			rootVisible: false,
			renderTo: Ext.getBody()

		},
		{
			xtype: 'panel',
			title: 'Prompt de Comandos',
			bodyStyle: { "background-color": "white" },
			region: 'south',
			split: true,
			collapsible: true,
			collapsed: true,
			layout: 'anchor',
			height: 180,
			items: {
				xtype: 'textareafield',
				value: "C:/Apache24/htdocs/curso-extjs4/aula36/...",
				fieldStyle: "background: #000000",
				anchor: '100%, 105%',
				style: {
					'color':'white',
					'style': 'Helvetica',
					'font-size': '15px'
				},
			}

		}
	]
});

Ext.onReady(function () {
	Ext.create('Curso.Janela');
});