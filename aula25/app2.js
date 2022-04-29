Ext.onReady(function () {

	Ext.create('Ext.Button', {
		text: 'CLICK-ME',
		renderTo: 'btnAlert',
		handler: function () {
			Ext.MessageBox.alert('FUI CLICADO', 'Alguem Clicou em mim', function (btn) {
				console.log('Apertaram o botao ' + btn);
			});
		}
	});


	Ext.create('Ext.Button', {
		text: 'CONFIRMAR',
		renderTo: 'btnConfirm',
		handler: function () {
			console.log('Acionou handler');
			Ext.MessageBox.confirm('CONFIRMAR?', 'Deseja mesmo confirmar?', function (btn) {
				if (btn == 'yes') {
					Ext.MessageBox.alert('Success', 'CONFIRMADO COM SUCESSO!')
					console.log('CONFIRMOU!!!')
				} else {
					Ext.MessageBox.alert('Cancelled', 'CANCELADO COM SUCESSO!')
					console.log('NÃO CONFIRMOU')
				}
			})
		}

	});

	Ext.create('Ext.Button', {
		text: 'PROMPT',
		renderTo: 'btnPrompt',
		handler: function () {
			console.log('Acionou handler');
			Ext.MessageBox.prompt('PROMPT', 'DIGITE SEU COMANDO', function (btn, text) {

				if (btn == 'ok' && text.length > 0) {
					Ext.MessageBox.alert('Comando Validado!', text);

				} else {
					Ext.MessageBox.alert('Comando Cancelado!', text);
				}
			})
		}

	});

	Ext.create('Ext.Button', {
		text: 'TEXTO',
		renderTo: 'btnPromptMult',
		handler: function () {
			console.log('Acionou handler');
			Ext.MessageBox.prompt('PROMPT', 'DIGITE SEU COMANDO', function (btn, text)
			{

				if (btn == 'ok' && text.length > 0) {
					Ext.MessageBox.alert('Comando Validado!', text);

				} else {
					Ext.MessageBox.alert('Comando Cancelado!', text);
				}
			}, this, true)
		}

	});


	Ext.create('Ext.Button', {
		text: 'ERROR',
		renderTo: 'btnError',
		handler: function () {
			Ext.MessageBox.show({
				title: 'ERRO!',
				msg: 'ERRO INESPERADO!',
				icon: Ext.MessageBox.ERROR,
				modal: false,
				buttons: Ext.MessageBox.CANCEL,
				buttonText: {
					cancel: 'Cancelar'
				},
				fn: function (btn) {
					console.log('FECHOU MENSSAGEM DE ERRO');
				}
			})
		}
	});

	Ext.create('Ext.Button', {
		text: 'INFO',
		renderTo: 'btnInfo',
		handler: function () {
			Ext.MessageBox.show({
				title: 'AQUI TEM INFORMAÇÃO',
				msg: 'WEG corresponde as iniciais de Werner Eggon e Geraldo!',
				modal: false,
				icon: Ext.MessageBox.INFO,
				buttons: Ext.MessageBox.OK,
				fn: function (btn) {
					console.log('FECHOU MENSSAGEM DE INFORMAÇÃO');
				}
			})
		}
	})

	Ext.create('Ext.Button', {
		text: 'DÚVIDA',
		renderTo: 'btnQuestion',
		handler: function () {
			Ext.MessageBox.show({
				title: 'Central de Atendimento',
				msg: 'Para retirar suas duvidas, ligue para: 0800 722 7878',
				modal: false,
				icon: Ext.MessageBox.QUESTION,
				buttons: Ext.MessageBox.OK,
				fn: function (btn) {
					console.log('FECHOU MENSSAGEM DE DUVIDA');
				}
			})
		}
	})

	Ext.create('Ext.Button', {
		text: 'PERIGO!',
		renderTo: 'btnWarning',
		handler: function () {
			Ext.MessageBox.show({
				title: 'PERIGO!!!',
				msg: 'Você está executando uma ação perigosa, TENHA CUIDADO!!!',
				modal: false,
				icon: Ext.MessageBox.WARNING,
				buttons: Ext.MessageBox.OKCANCEL,
				fn: function (btn) {
					if (btn == 'ok') {
						Ext.MessageBox.alert('VOCE PROSSEGUIU!', 'MANTENHA CUIDADO!');
					} else {
						Ext.MessageBox.alert('VOCE CANCELOU', 'A AÇÃO PERIGOSA FOI CANCELADA!');
					}
					console.log('FECHOU MENSSAGEM DE PERIGO');
				}
			})
		}
	})

	Ext.create('Ext.Button', {
		text: 'PESQUISA DE SATISFAÇÃO',
		renderTo: 'btnPesq',
		handler: function () {
			Ext.MessageBox.show({
				title: 'AVALIAÇÃO DE SATISFAÇÃO DO ALIMENTO',
				msg: 'Escreva comentários sobre o que esta achando da qualidade da comida servida.',
				prompt: true,
				multiline: true,
				closable: true,
				modal: false,
				icon: Ext.MessageBox.QUESTION,
				buttons: Ext.MessageBox.OKCANCEL,
				buttonText: {
					ok: 'CONFIRMAR',
					cancel: 'CANCELAR'
				},
				fn: function (btn, text) {
					if (btn == 'ok') {
						Ext.MessageBox.show({
							title: 'OPNIÃO ENVIADA COM SUCESSO!',
							msg: 'OBRIGADO POR CONTRIBUIR COM A SESSÃO ALIMENTAÇÃO',
							buttons: Ext.MessageBox.YESNOCANCEL,



						})
					}
				}
			})
		}
	})

	Ext.create('Ext.Button', {
		text: 'BARRA DE PROGRESSO',
		renderTo: 'btnProgress',
		handler: function () {
			Ext.MessageBox.show({
				title: 'Doownloading Content',
				msg: 'Pleease Wait a few seconds...',
				progressText: 'Downloading...',
				modal: false,
				progress: true,
				closable: false,
				width: 400
			})

			var f = function (v) {
				return function () {
					if (v == 101) {
						Ext.MessageBox.hide();
						Ext.MessageBox.show({
							title: 'Download Concluido',
							msg: 'Deseja Efetuar a instalação agora?',
							icon: Ext.MessageBox.QUESTION,
							buttons: Ext.MessageBox.YESNO,
							buttonText: {
								yes: 'SIM',
								no: 'NÃO'
							},
							fn: function (btn) {
								if (btn == 'yes') {
									Ext.MessageBox.show({
										title: 'Instalando Conteudos',
										msg: 'Seus download estão sendo instalados, nao Desligue o Computador',
										icon: Ext.MessageBox.WARNING,
										progressText: 'INSTALANDO...',
										progress: true,
										closable: false,
										width: 400

									})

									var f = function (v) {
										return function () {
											if (v == 101) {
												Ext.MessageBox.hide();
												Ext.MessageBox.alert('Instalação Concluida', 'Seus Arquivos foram instalados com Sucesso')
											} else {
												var i = v / 100;
												Ext.MessageBox.updateProgress(i, Math.round(100 * i) + '%');
											}
										}
									}
									for (var i = 1; i <= 101; i++) {
										setTimeout(f(i), i * 100)
									}
								}
							}
						})
					} else {
						var i = v / 100;
						Ext.MessageBox.updateProgress(i, Math.round(100 * i) + '%')
					}
				}
			}
			for (var i = 1; i <= 101; i++) {
				setTimeout(f(i), i * 30)
			}
		}
	})

});







/*Ext.onReady(function(){

	Ext.create('Ext.Button', {
		text: 'Alerta',
		renderTo: 'btnAlert',
		handler: function() {
			Ext.MessageBox.alert('Alerta','Simples alerta!', function(btn){
				console.log('apertou o botão ' + btn);
			});
		}
	});

	Ext.create('Ext.Button', {
		text: 'Confirmação',
		renderTo: 'btnConfirm',
		handler: function() {
			Ext.MessageBox.confirm('Confirmação','Quer mesmo deletar o registro?', function(btn){
				console.log('apertou o botão ' + btn);
				if (btn == 'yes'){
					Ext.MessageBox.alert('Mensagem','Registro deletado com sucesso!');
				} else if (btn == 'no') {
					console.log('cancelou - não deletou o registro.');
				}
			});
		}
	});

	Ext.create('Ext.Button', {
		text: 'Prompt',
		renderTo: 'btnPrompt',
		handler: function() {
			Ext.MessageBox.prompt('Prompt','Qual é o seu nome?', function(btn, text){
				console.log('apertou o botão ' + btn);
				console.log('entrou com o texto: ' + text);
				if (btn == 'ok'){
					Ext.MessageBox.alert('Bem vindo!','Bem vindo ' + text + "!");
				} else if (btn == 'cancel') {
					console.log('cancelou');
				}
			});
		}
	});

	Ext.create('Ext.Button', {
		text: 'Prompt Multiline',
		renderTo: 'btnPromptMult',
		handler: function() {
			Ext.MessageBox.prompt('Prompt','O que você gosta de fazer?', function(btn, text){
				console.log('apertou o botão ' + btn);
				console.log('entrou com o texto: ' + text);
				if (btn == 'ok'){
					Ext.MessageBox.alert('Mensagem!',text);
				} else if (btn == 'cancel') {
					console.log('cancelou');
				}
			},this, true, 'descreva aqui o que vc gosta de fazer...');
		}
	});

	Ext.create('Ext.Button', {
		text: 'Icone - ERROR',
		renderTo: 'btnError',
		handler: function() {
			Ext.MessageBox.show({
				title: 'Erro!',
				msg: 'Alguma coisa deu errado!',
				icon: Ext.MessageBox.ERROR
			});
		}
	});

	Ext.create('Ext.Button', {
		text: 'Icone - INFO',
		renderTo: 'btnInfo',
		handler: function() {
			Ext.MessageBox.show({
				title: 'Info!',
				msg: 'Registro deletado com sucesso!',
				icon: Ext.MessageBox.INFO
			});
		}
	});

	Ext.create('Ext.Button', {
		text: 'Icone - QUESTION',
		renderTo: 'btnQuestion',
		handler: function() {
			Ext.MessageBox.show({
				title: 'Pergunta!',
				msg: 'Você tem certeza de que quer fazer isso?',
				icon: Ext.MessageBox.QUESTION
			});
		}
	});

	Ext.create('Ext.Button', {
		text: 'Icone - WARNING',
		renderTo: 'btnWarning',
		handler: function() {
			Ext.MessageBox.show({
				title: 'Atenção!',
				msg: 'Por favor, cancele a operação.',
				icon: Ext.MessageBox.WARNING
			});
		}
	});

	Ext.create('Ext.Button', {
		text: 'Botão - CANCEL',
		renderTo: 'btnCancel',
		handler: function() {
			Ext.MessageBox.show({
				title: 'Botão - CANCEL',
				msg: 'Por favor, cancele a operação.',
				icon: Ext.MessageBox.WARNING,
				buttons: Ext.MessageBox.CANCEL,
				fn: function(btn){
					console.log('apertou o botao ' + btn);
				}
			});
		}
	});

	Ext.create('Ext.Button', {
		text: 'Botão - NO',
		renderTo: 'btnNo',
		handler: function() {
			Ext.MessageBox.show({
				title: 'Botão - NO',
				msg: 'Você gosta de jiló?',
				buttons: Ext.MessageBox.NO,
				fn: function(btn){
					console.log('apertou o botao ' + btn);
				}
			});
		}
	});

	Ext.create('Ext.Button', {
		text: 'Botão - OK',
		renderTo: 'btnOk',
		handler: function() {
			Ext.MessageBox.show({
				title: 'Botão - OK',
				msg: 'Eu gosto de ExtJS',
				buttons: Ext.MessageBox.OK,
				fn: function(btn){
					console.log('apertou o botao ' + btn);
				}
			});
		}
	});

	Ext.create('Ext.Button', {
		text: 'Botão - OKCANCEL',
		renderTo: 'btnOKCANCEL',
		handler: function() {
			Ext.MessageBox.show({
				title: 'Botão - OKCANCEL',
				msg: 'Você quer deletar o registro?',
				buttons: Ext.MessageBox.OKCANCEL,
				fn: function(btn){
					console.log('apertou o botao ' + btn);
					if (btn == 'ok'){
						Ext.MessageBox.alert('Mensagem', 'Registro deletado com sucesso!');
					}
				}
			});
		}
	});

	Ext.create('Ext.Button', {
		text: 'Botão - YES',
		renderTo: 'btnYES',
		handler: function() {
			Ext.MessageBox.show({
				title: 'Botão - YES',
				msg: 'Você gosta de ExtJS?',
				buttons: Ext.MessageBox.YES,
				fn: function(btn){
					console.log('apertou o botao ' + btn);
				}
			});
		}
	});

	Ext.create('Ext.Button', {
		text: 'Botão - YESNO',
		renderTo: 'btnYESNO',
		handler: function() {
			Ext.MessageBox.show({
				title: 'Botão - YESNO',
				msg: 'Você quer deletar esse registro?',
				buttons: Ext.MessageBox.YESNO,
				fn: function(btn){
					console.log('apertou o botao ' + btn);
					if (btn == 'yes'){
						Ext.MessageBox.alert('Mensagem', 'Registro deletado com sucesso!');
					}
				}
			});
		}
	});

	Ext.create('Ext.Button', {
		text: 'Botão - YESNOCANCEL',
		renderTo: 'btnYESNOCANCEL',
		handler: function() {
			Ext.MessageBox.show({
				title: 'Botão - YESNOCANCEL',
				msg: 'Você quer deletar esse registro?',
				buttons: Ext.MessageBox.YESNOCANCEL,
				fn: function(btn){
					console.log('apertou o botao ' + btn);
					if (btn == 'yes'){
						Ext.MessageBox.alert('Mensagem', 'Registro deletado com sucesso!');
					} else if (btn == 'no') {
						Ext.MessageBox.alert('Mensagem', 'Ok, não vou deletar o registro');
					} else if (btn == 'cancel') {
						Ext.MessageBox.alert('Mensagem', 'Operação cancelada!');
					}
				}
			});
		}
	});

	Ext.create('Ext.Button', {
		text: 'Show - Prompt',
		renderTo: 'btnShowPrompt',
		handler: function() {
			Ext.MessageBox.show({
				title: 'Show - Prompt',
				msg: 'Você gosta de ExtJS por qual motivo?',
				prompt: true,
				width: 400,
				buttons: Ext.MessageBox.OK,
				fn: function(btn, text){
					console.log('apertou o botao ' + btn);
					console.log('texto que escreveu: ' + text);
				}
			});
		}
	});

	Ext.create('Ext.Button', {
		text: 'Show - Prompt Multine',
		renderTo: 'btnShowPromptMult',
		handler: function() {
			Ext.MessageBox.show({
				title: 'Show - Prompt',
				msg: 'Você gosta de ExtJS por qual motivo?',
				multiline: true,
				width: 400,
				modal: false,
				buttons: Ext.MessageBox.OK,
				fn: function(btn, text){
					console.log('apertou o botao ' + btn);
					console.log('texto que escreveu: ' + text);
				}
			});
		}
	});

	Ext.create('Ext.Button', {
		text: 'Show - Progresso',
		renderTo: 'btnProgress',
		handler: function() {
			Ext.MessageBox.show({
				title: 'Progresso',
				msg: 'Carregando os dados...',
				progressText: 'carregando...',
				progress: true,
				closable: false,
				width: 300
			});

			var f = function(v){
				return function(){
					if (v == 12){
						Ext.MessageBox.hide();
						Ext.MessageBox.alert('Pronto!', 'Os dados foram carregados!');
					} else {
						var i = v/11;
						Ext.MessageBox.updateProgress(i, Math.round(100*i)+'%');
					}
				};
			}

			for (var i=1; i<13; i++){
				setTimeout(f(i), i*500);
			}
		}
	});

	Ext.create('Ext.Button', {
		text: 'Show - Wait',
		renderTo: 'btnWait',
		handler: function() {
			Ext.MessageBox.show({
				title: 'Espere',
				msg: 'Salvando os dados...',
				wait: true,
				waitConfig: {interval: 200},
				closable: false,
				width: 300
			});

			setTimeout(function(){
				Ext.MessageBox.hide();
				Ext.MessageBox.alert('Pronto!', 'Os dados foram salvos com sucesso!');
			}, 8000);
		}
	});

	Ext.create('Ext.Button', {
		text: 'Botão - Customizado',
		renderTo: 'btnYESNOCANCELCustom',
		handler: function() {
			Ext.MessageBox.show({
				title: 'Botão - Customizado',
				msg: 'Você quer deletar esse registro?',
				buttons: Ext.MessageBox.YESNOCANCEL,
				buttonText: {
					yes: 'Sim',
					no: 'Não',
					cancel: 'Cancelar'
				},
				fn: function(btn){
					console.log('apertou o botao ' + btn);
					if (btn == 'yes'){
						Ext.MessageBox.alert('Mensagem', 'Registro deletado com sucesso!');
					} else if (btn == 'no') {
						Ext.MessageBox.alert('Mensagem', 'Ok, não vou deletar o registro');
					} else if (btn == 'cancel') {
						Ext.MessageBox.alert('Mensagem', 'Operação cancelada!');
					}
				}
			});
		}
	});

	Ext.create('Ext.Button', {
		text: 'Icone - Customizado',
		renderTo: 'btnCustomIcon',
		handler: function() {
			Ext.MessageBox.show({
				title: 'Mensagem!',
				msg: 'Eu gosto de ExtJS!',
				icon: 'icon-heart'
			});
		}
	});

});*/