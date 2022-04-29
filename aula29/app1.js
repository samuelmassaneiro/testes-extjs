Ext.onReady(function () {

	Ext.tip.QuickTipManager.init();

	var colorPicker = Ext.create('Ext.menu.ColorPicker', {
		value: '000000'
	});

	Ext.create('Ext.menu.Menu', {
		title: 'Miscelaneous',
		renderTo: 'menu1',
		width: 100,
		height: 112,
		margin: '0 0 10 0',
		floating: false,  // usually you want this set to True (default)
		renderTo: Ext.getBody(),  // usually rendered by it's containing component
		items: [{
			text: 'Date Picker',
			iconCls: 'icone',
			menu:
				Ext.create('Ext.menu.DatePicker', {
					handler: function (dp, date) {
						Ext.Msg.alert('Data Selecionada', 'Voce selecionou ' + Ext.Date.format(date, 'M j, Y'))
					}
				})

		},
		{
			text: 'Color Picker',
			iconCls: 'icone',
			menu:
				Ext.create('Ext.menu.ColorPicker', {
					value: '000000',
					listeners: {
						select: {
							fn: function(menu, color, opt){
								Ext.Msg.alert('Cor Selecionada', 'Você selecionou a cor: ' + color)
							}

						}
					}
				})
		},
		{
			text: 'Softwares',
			iconCls: 'icone',
			menu: Ext.create('Ext.menu.Menu', {
				items: [{

				text: 'IntelliJ',
				iconCls: 'intellij',
					menu: Ext.create('Ext.menu.Menu', {
						items: [{
							text: 'Chrome',
							iconCls: 'icone',
							handler: function(){
								Ext.Msg.alert('Executando arquivo', 'Abrindo Chrome')
								}
						}]
					})
				},
				{
					text: 'VSCode',
					iconCls: 'vscode',
					menu: Ext.create('Ext.menu.Menu', {
						items: [{
							text: 'VS Code',
							iconCls: 'icone',
							handler: function(){
								Ext.Msg.alert('Executando arquivo', 'Abrindo VSCode')
								}
						}]
					})
				},
				{
					text: 'Programa 3',
					iconCls: 'icone',
					menu: Ext.create('Ext.menu.Menu', {
						items: [{
							text: 'Outlook',
							iconCls: 'icone',
							handler: function(){
								Ext.Msg.alert('Executando arquivo', 'Abrindo OutLook')
								}
						}]
					})
				},
				{
					text: 'Programa 4',
					iconCls: 'icone',
					menu: Ext.create('Ext.menu.Menu', {
						items: [{
							text: 'Teams',
							iconCls: 'icone',
							handler: function(){
							Ext.Msg.alert('Executando arquivo', 'Abrindo Teams')
							}
						}]
					})
				},
				{
					text: 'Programa 5',
					iconCls: 'icone',
					menu: Ext.create('Ext.menu.Menu', {
						items: [{
							text: 'IntelliJ',
							iconCls: 'icone',
							handler: function(){
								Ext.Msg.alert('Executando arquivo', 'Abrindo IntelliJ')
							}
						}]
					})
				}
				]
			})

		}
		]
	})

	Ext.create('Ext.menu.Menu', {
		title: 'Enable Options',
		renderTo: 'menu2',
		width: 100,
		height: 274,
		draggable: true,
		plain: false,
		floating: false,  // usually you want this set to True (default)
		renderTo: Ext.getBody(),  // usually rendered by it's containing component
		items: [{
			xtype: 'menucheckitem',
			text: 'Arquivos 1',
			handler: function(){
				Ext.Msg.alert('CHECK 1 ATIVA')
			}
		},
		{
			xtype: 'menucheckitem',
			text: 'Arquivos 2',
			handler: function(){
				Ext.Msg.alert('CHECK 2 ATIVA')
			}
		},
		{
			xtype: 'menucheckitem',
			text: 'Arquivos 3',
			handler: function(){
				Ext.Msg.alert('CHECK 3 ATIVA')
			}
		},
		{	
			xtype: 'menucheckitem',
			text: 'Arquivos 4',
			handler: function(){
				Ext.Msg.alert('CHECK 4 ATIVA')
			}
		},
		{
			xtype: 'menucheckitem',
			text: 'Arquivos 5',
			handler: function(){
				Ext.Msg.alert('CHECK 5 ATIVA')
			}
		},
		{
			xtype: 'menucheckitem',
			text: 'Arquivos 6',
			handler: function(){
				Ext.Msg.alert('CHECK 6 ATIVA')
			}
		},
		{
			xtype: 'menucheckitem',
			text: 'Arquivos 7',
			handler: function(){
				Ext.Msg.alert('CHECK 7 ATIVA')
			}
		},
		{
			xtype: 'menucheckitem',
			text: 'Arquivos 8',
			handler: function(){
				Ext.Msg.alert('CHECK 8 ATIVA')
			}
		},
		{
			xtype: 'menucheckitem',
			text: 'Arquivos 9',
			handler: function(){
				Ext.Msg.alert('CHECK 9 ATIVA')
			}
		}
		]
	});
	Ext.create('Ext.menu.Menu', {
		title: 'More Options',
		renderTo: 'menu2',
		width: 100,
		height: 274,
		draggable: true,
		plain: false,
		floating: false,  // usually you want this set to True (default)
		renderTo: Ext.getBody(),  // usually rendered by it's containing component
		items: [{
			xtype: 'menucheckitem',
			text: 'Arquivos 1',
			handler: function(){
				Ext.Msg.alert('CHECK 1 ATIVA')
			}
		},
		{
			xtype: 'menucheckitem',
			text: 'Arquivos 2',
			handler: function(){
				Ext.Msg.alert('CHECK 2 ATIVA')
			}
		},
		{
			xtype: 'menucheckitem',
			text: 'Arquivos 3',
			handler: function(){
				Ext.Msg.alert('CHECK 3 ATIVA')
			}
		},
		{	
			xtype: 'menucheckitem',
			text: 'Arquivos 4',
			handler: function(){
				Ext.Msg.alert('CHECK 4 ATIVA')
			}
		},
		{
			xtype: 'menucheckitem',
			text: 'Arquivos 5',
			handler: function(){
				Ext.Msg.alert('CHECK 5 ATIVA')
			}
		},
		{
			xtype: 'menucheckitem',
			text: 'Arquivos 6',
			handler: function(){
				Ext.Msg.alert('CHECK 6 ATIVA')
			}
		},
		{
			xtype: 'menucheckitem',
			text: 'Arquivos 7',
			handler: function(){
				Ext.Msg.alert('CHECK 7 ATIVA')
			}
		},
		{
			xtype: 'menucheckitem',
			text: 'Arquivos 8',
			handler: function(){
				Ext.Msg.alert('CHECK 8 ATIVA')
			}
		},
		{
			xtype: 'menucheckitem',
			text: 'Arquivos 9',
			handler: function(){
				Ext.Msg.alert('CHECK 9 ATIVA')
			}
		}
		]
	});


});