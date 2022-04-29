Ext.onReady(function () {

	Ext.tip.QuickTipManager.init();

	Ext.create('Ext.Button', {
		text: 'Button',
		renderTo: 'btn1',
		scale: 'small',
		iconCls: 'add',
		tooltip: 'Teste Events',
		split: false,
		handler: function () {
			console.log('Button Clicado')
		},
		listeners: {
			click: function (btn) {
				btn.setText("CLICKED")
			},
			mouseOver: function (btn) {
				btn.setText('Mouse IN');
			},
			mouseOut: function (btn) {
				btn.setText('Button')
			}
		}
	})

	Ext.create('Ext.Button', {
		text: 'Button',
		renderTo: 'btn1',
		scale: 'medium',
		iconCls: 'add',
		tooltip: 'Teste Events',
		split: false,
		handler: function () {
			console.log('Button Clicado')
		},
		listeners: {
			click: function (btn) {
				btn.setText("CLICKED")
			},
			mouseOver: function (btn) {
				btn.setText('Mouse IN');
			},
			mouseOut: function (btn) {
				btn.setText('Button')
			}
		}
	})

	Ext.create('Ext.Button', {
		text: 'Button',
		renderTo: 'btn1',
		scale: 'large',
		iconCls: 'add',
		tooltip: 'Teste Events',
		split: false,
		handler: function () {
			console.log('Button Clicado')
		},
		listeners: {
			click: function (btn) {
				btn.setText("CLICKED")
			},
			mouseOver: function (btn) {
				btn.setText('Mouse IN');
			},
			mouseOut: function (btn) {
				btn.setText('Button')
			}
		}
	})

	Ext.create('Ext.Button', {
		text: 'Button',
		renderTo: 'btn2',
		scale: 'small',
		iconCls: 'add',
		tooltip: 'Teste Handler',
		split: false,
		enableToggle: true,
		toggleHandler: function (btn, state) {
			if (state == true) {
				btn.setText('PRESSIONADO');
			} else {
				btn.setText('Button');
			}
		}
	})

	Ext.create('Ext.Button', {
		text: 'Button',
		renderTo: 'btn2',
		scale: 'medium',
		iconCls: 'add',
		tooltip: 'Teste Handler',
		split: false,
		enableToggle: true,
		toggleHandler: function (btn, state) {
			if (state == true) {
				btn.setText('PRESSIONADO');
			} else {
				btn.setText('Button');
			}
		}
	})

	Ext.create('Ext.Button', {
		text: 'Button',
		renderTo: 'btn2',
		scale: 'large',
		iconCls: 'add',
		tooltip: 'Teste Handler',
		split: false,
		enableToggle: true,
		toggleHandler: function (btn, state) {
			if (state == true) {
				btn.setText('PRESSIONADO');
			} else {
				btn.setText('Button');
			}
		}
	})

	Ext.create('Ext.Button', {
		text: 'Button',
		renderTo: 'btn3',
		scale: 'small',
		iconCls: 'add',
		tooltip: 'Teste Disabled',
		split: false,
		disabled: true,
		enableToggle: true,
		toggleHandler: function (btn, state) {
			if (state == true) {
				btn.setText('TRUE');
			} else {
				btn.setText('FALSE');
			}
		}
	})

	Ext.create('Ext.Button', {
		text: 'Button',
		renderTo: 'btn3',
		scale: 'medium',
		iconCls: 'add',
		tooltip: 'Teste Disabled',
		split: false,
		disabled: true,
		enableToggle: true,
		toggleHandler: function (btn, state) {
			if (state == true) {
				btn.setText('TRUE');
			} else {
				btn.setText('FALSE');
			}
		}
	})

	Ext.create('Ext.Button', {
		text: 'Button',
		renderTo: 'btn3',
		scale: 'large',
		iconCls: 'add',
		tooltip: 'Teste Disabled',
		split: false,
		disabled: true,
		enableToggle: true,
		toggleHandler: function (btn, state) {
			if (state == true) {
				btn.setText('TRUE');
			} else {
				btn.setText('FALSE');
			}
		}
	})

	Ext.create('Ext.Button', {
		text: 'Button',
		renderTo: 'btn4',
		scale: 'small',
		iconCls: 'add',
		iconAlign: 'TOP',
		width: 61,
		tooltip: 'Teste Listeners',
		split: false,
		handler: function () {
			console.log('Button Clicado')
		},
		listeners: {
			click: function (btn) {
				btn.setText("CLICKED")
			},
			mouseOver: function (btn) {
				btn.setText('Mouse IN');
			},
			mouseOut: function (btn) {
				btn.setText('Button')
			}
		}
	})

	Ext.create('Ext.Button', {
		text: 'Button',
		renderTo: 'btn4',
		scale: 'medium',
		iconCls: 'add',
		iconAlign: 'TOP',
		width: 71,
		tooltip: 'Teste Listeners',
		split: false,
		handler: function () {
			console.log('Button Clicado')
		},
		listeners: {
			click: function (btn) {
				btn.setText("CLICKED")
			},
			mouseOver: function (btn) {
				btn.setText('Mouse IN');
			},
			mouseOut: function (btn) {
				btn.setText('Button')
			}
		}
	})

	Ext.create('Ext.Button', {
		text: 'Button',
		renderTo: 'btn4',
		scale: 'large',
		iconCls: 'add',
		iconAlign: 'TOP',
		width: 80,
		tooltip: 'Teste Listeners',
		split: false,
		handler: function () {
			console.log('Button Clicado')
		},
		listeners: {
			click: function (btn) {
				btn.setText("CLICKED")
			},
			mouseOver: function (btn) {
				btn.setText('Mouse IN');
			},
			mouseOut: function (btn) {
				btn.setText('Button')
			}
		}
	})

	Ext.create('Ext.Button', {
		text: 'Link',
		renderTo: 'btn5',
		scale: 'small',
		iconCls: 'add',
		iconAlign: 'TOP',
		width: 61,
		tooltip: 'Teste HiperlInk',
		split: false,
		href: 'https://www.alura.com.br/'
	})

	Ext.create('Ext.Button', {
		text: 'Link',
		renderTo: 'btn5',
		scale: 'medium',
		iconCls: 'add',
		iconAlign: 'TOP',
		width: 71,
		tooltip: 'Teste HiperlInk',
		split: false,
		href: 'https://www.alura.com.br/'

	})

	Ext.create('Ext.Button', {
		text: 'Link',
		renderTo: 'btn5',
		scale: 'large',
		iconCls: 'add',
		iconAlign: 'TOP',
		width: 80,
		tooltip: 'Teste HiperlInk',
		split: false,
		href: 'https://www.alura.com.br/'

	})

	Ext.create('Ext.button.Split', {
		text: 'OPÇÃO',
		renderTo: 'btn6',
		scale: 'small',
		iconCls: 'add',
		iconAlign: 'TOP',
		width: 61,
		tooltip: 'Teste SplitButton',
		handler: function () {
			console.log('BOTAO 1 CLICADO')
		},
		menu: new Ext.menu.Menu({
			items: [
				{
					text: 'Item 1',
					handler: function () {
						console.log("Item 1 Clicado");
					},
				},
				{
					text: 'Item 2',
					handler: function () {
						console.log("Item 2 Clicado");
					}
				},
				{
					text: 'Item 3',
					handler: function () {
						console.log("Item 3 Clicado");
					}
				},
				{
					text: 'Item 4',
					handler: function () {
						console.log("Item 4 Clicado");
					}
				},
				{
					text: 'Item 5',
					handler: function () {
						console.log("Item 5 Clicado");
					}
				}
			]
		})

	})

	Ext.create('Ext.button.Split', {
		text: 'OPÇÃO',
		renderTo: 'btn6',
		scale: 'medium',
		iconCls: 'add',
		iconAlign: 'TOP',
		width: 71,
		tooltip: 'Teste SplitButton',
		handler: function () {
			console.log('BOTAO 1 CLICADO')
		},
		menu: new Ext.menu.Menu({
			items: [
				{
					text: 'Item 1',
					handler: function () {
						console.log("Item 1 Clicado");
					},
				},
				{
					text: 'Item 2',
					handler: function () {
						console.log("Item 2 Clicado");
					}
				},
				{
					text: 'Item 3',
					handler: function () {
						console.log("Item 3 Clicado");
					}
				},
				{
					text: 'Item 4',
					handler: function () {
						console.log("Item 4 Clicado");
					}
				},
				{
					text: 'Item 5',
					handler: function () {
						console.log("Item 5 Clicado");
					}
				}
			]
		})

	})

	Ext.create('Ext.button.Split', {
		text: 'OPÇÃO',
		renderTo: 'btn6',
		scale: 'large',
		iconCls: 'add',
		iconAlign: 'TOP',
		width: 80,
		tooltip: 'Teste SplitButton',
		handler: function () {
			console.log('BOTAO 1 CLICADO')
		},
		menu: new Ext.menu.Menu({
			items: [
				{
					text: 'Item 1',
					handler: function () {
						console.log("Item 1 Clicado");
					},
				},
				{
					text: 'Item 2',
					handler: function () {
						console.log("Item 2 Clicado");
					}
				},
				{
					text: 'Item 3',
					handler: function () {
						console.log("Item 3 Clicado");
					}
				},
				{
					text: 'Item 4',
					handler: function () {
						console.log("Item 4 Clicado");
					}
				},
				{
					text: 'Item 5',
					handler: function () {
						console.log("Item 5 Clicado");
					}
				}
			]
		})
	})

	Ext.create('Ext.button.Split', {
		text: 'Scale',
		renderTo: 'btn7',
		scale: 'small',
		iconCls: 'add',
		iconAlign: 'TOP',
		width: 61,
		var: i = 0,
		handler: function(btn){
			i = i+1;
			if(i == 1){
				btn.setScale("medium");
			}else if(i == 2){
				btn.setScale("large");
			}else{
				btn.setScale("small");
				i = 0;
			}
		}
		

	})

	Ext.create('Ext.button.Split', {
		text: 'Scale',
		renderTo: 'btn7',
		scale: 'medium',
		iconCls: 'add',
		iconAlign: 'TOP',
		width: 71,
		var: i = 0,
		handler: function(btn){
			i = i+1;
			if(i == 1){
				btn.setScale("large");
			}else if(i == 2){
				btn.setScale("small");
			}else{
				btn.setScale("medium");
				i = 0;
			}
		}
		

	})

	Ext.create('Ext.button.Split', {
		text: 'Scale',
		renderTo: 'btn7',
		scale: 'large',
		iconCls: 'add',
		iconAlign: 'TOP',
		width: 80,
		var: i = 0,
		handler: function(btn){
			i = i+1;
			if(i == 1){
				btn.setScale("small");
			}else if(i == 2){
				btn.setScale("medium");
			}else{
				btn.setScale("large");
				i = 0;
			}
		}
		

	})


	/**Ext.tip.QuickTipManager.init();

	Ext.create('Ext.Button', {
		text: 'Botão pequeno',
		renderTo: 'btn1',
		tooltip: 'exemplo de tooltip',
		listeners: {
		click: function(btn) {
			btn.setText('cliquei no botão');
		},
		mouseover: function(btn) {
			btn.setText('mouseover');
		},
		mouseout: function(btn) {
			btn.setText('mouseout');
		}
	}

	});
	
	Ext.create('Ext.Button', {
		text: 'Botão médio',
		renderTo: 'btn2',
		scale: 'medium',
		handler: function() {
			console.log('Botão médio');
		}
	});

	Ext.create('Ext.Button', {
		text: 'Botão grande',
		renderTo: 'btn3',
		scale: 'large',
		handler: function() {
			console.log('Botão grande');
		}
	});

	var btn = Ext.create('Ext.Button', {
		text: 'Botão disabled',
		renderTo: 'btn4',
		disabled: true,
		handler: function() {
			console.log('Botão disabled');
		}
	});
	btn.setDisabled(true);

	Ext.create('Ext.Button', {
		renderTo: 'btn5',
		iconCls: 'add',
		handler: function() {
			console.log('só icone - pequeno');
		}
	});

	Ext.create('Ext.Button', {
		renderTo: 'btn6',
		iconCls: 'add',
		scale: 'medium',
		handler: function() {
			console.log('só icone - medio');
		}
	});

	Ext.create('Ext.Button', {
		renderTo: 'btn7',
		iconCls: 'add',
		scale: 'large',
		handler: function() {
			console.log('só icone - grande');
		}
	});

	//--
	Ext.create('Ext.Button', {
		text: 'pequeno',
		renderTo: 'btn8',
		iconCls: 'add',
		iconAlign: 'top', //left right bottom top
		enableToggle: true,
		toggleHandler: function(btn, state) {
			console.log(state);
		}
	});

	Ext.create('Ext.Button', {
		text: 'médio',
		renderTo: 'btn9',
		iconCls: 'add',
		scale: 'medium',
		iconAlign: 'top', //left right bottom top
		enableToggle: true
	});

	Ext.create('Ext.Button', {
		text: 'grande',
		renderTo: 'btn10',
		iconCls: 'add',
		scale: 'large',
		iconAlign: 'top', //left right bottom top
		enableToggle: true
	});

	//---
	Ext.create('Ext.Button', {
		text: 'link',
		renderTo: 'btn11',
		iconCls: 'add',
		href: 'http://loiane.com'
	    
	});

	Ext.create('Ext.Button', {
		text: 'link',
		renderTo: 'btn12',
		iconCls: 'add',
		scale: 'medium',
		href: 'http://loiane.com'
	});

	Ext.create('Ext.Button', {
		text: 'link',
		renderTo: 'btn13',
		iconCls: 'add',
		scale: 'large',
		href: 'http://loiane.com'
	});

	// display a dropdown menu:
	Ext.create('Ext.button.Split', {
		renderTo: 'btn14',
		text: 'Options',
		tooltip: 'tooltip do botão',
		// handle a click on the button itself
		handler: function() {
			console.log("The button was clicked");
		},
		menu: Ext.create('Ext.menu.Menu',{
			items: [
				// these will render as dropdown menu items when the arrow is clicked:
				{text: 'Item 1', handler: function(){ console.log("Item 1 clicked"); }},
				{text: 'Item 2', handler: function(){ console.log("Item 2 clicked"); }}
			]
		})
	});


	Ext.create('Ext.button.Cycle', {
		showText: true,
		prependText: 'View as ',
		renderTo: 'btn15',
		menu: {
			id: 'view-type-menu',
			items: [{
				text: 'text only',
				iconCls: 'view-text',
				checked: true
			},{
				text: 'HTML',
				iconCls: 'view-html'
			}]
		},
		changeHandler: function(cycleBtn, activeItem) {
			Ext.Msg.alert('Change View', activeItem.text);
		}
	});**/

})