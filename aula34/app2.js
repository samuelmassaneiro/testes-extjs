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
					{ text: 'Rematrícula', leaf: true},
					{ text: 'Baixar Atestado de frequencia', leaf: true},
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
					{ text: 'Rematrícula', leaf: true},
					{ text: 'Baixar QPP', leaf: true}
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
					{ text: 'Baixar Certificado', leaf: true}
				]
			}
		]
	}
});


Ext.define('Curso.Janela', {
	extend: 'Ext.window.Window',

	height: 415,
	width: 550,

	title: 'Aula 34 - Accordion Layout',

	autoShow: true,

	autoScroll: true,

	layout: 'accordion',

	items: [
		{
			xtype: 'panel',
			title: 'EDITOR DE HTML by: Samuel Massaneiro',
			layout: 'anchor',
			items: [{
				xtype: 'htmleditor',
				bodyStyle: { "background-color": "lightblue" },
				anchor: '100%, 100%',
				inputType: 'text',
				growAppend: true,
				autoScroll: true,
			}]
		},
		{
			xtype: 'panel',
			title: 'SELECIONADOR DE DATAS',
			bodyStyle: { "background-color": "grey" },
			//layout: 'absolut',
			items: {
				x: 175,
				y: 35,
				xtype: 'datepicker',
				minDate: new Date(),
				handler: function (picker, date) {
					Ext.Msg.alert('DATA SELECIONADA', 'Você selecionou a data: ' + Ext.Date.format(date, 'j M, Y'));
				}
			}
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
				handler: function(picker, selColor){
					Ext.Msg.alert('COR SELECIONADA','Você Escolheu a cor: ' + selColor.getId())

				}
			}
		},
		{

			xtype: 'treepanel',
			title: 'ARQUIVOS DE ESTUDANTE',
			width: 200,
			height: 170,
			store: store,
			rootVisible: false,
			renderTo: Ext.getBody()

		}]
});

Ext.onReady(function () {
	Ext.create('Curso.Janela');
});