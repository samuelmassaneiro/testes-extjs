    Ext.define('Painel.Toolbar', {
        extend: 'Ext.toolbar.Toolbar',
        alias: 'widget.testetoolbar',
        renderTo: document.body,
        width: 400,
        items: [
            {
                xtype: 'textfield',
                emptyText: 'Localizar e Substituir'
            },
            {
                xtype: 'button',
                text: 'Substituir'
            },
            {
                xtype: 'tbspacer',
                width: 15
            },
            {
                var: tamanho = 0,
                xtype: 'splitbutton',
                text: 'Tamanho',
                handler: function(btn){
                    if(tamanho == 8){
                        btn.setText('Tamanho: ' + tamanho)
                    }else if(tamanho == 9){
                        btn.setText('Tamanho: ' + tamanho)
                    }else if(tamanho == 10){
                        btn.setText('Tamanho: ' + tamanho)
                    }else if(tamanho == 11){
                        btn.setText('Tamanho: ' + tamanho)
                    }else if(tamanho == 12){
                        btn.setText('Tamanho: ' + tamanho)
                    }else if(tamanho == 14){
                        btn.setText('Tamanho: ' + tamanho)
                    }else if(tamanho == 16){
                        btn.setText('Tamanho: ' + tamanho)
                    }else if(tamanho == 18){
                        btn.setText('Tamanho: ' + tamanho)
                    }else if(tamanho == 20){
                        btn.setText('Tamanho: ' + tamanho)
                    }else if(tamanho == 22){
                        btn.setText('Tamanho: ' + tamanho)
                    }else if(tamanho == 24){
                        btn.setText('Tamanho: ' + tamanho)
                    }else if(tamanho == 26){
                        btn.setText('Tamanho: ' + tamanho)
                    }else if(tamanho == 28){
                        btn.setText('Tamanho: ' + tamanho)
                    }else if(tamanho == 36){
                        btn.setText('Tamanho: ' + tamanho)
                    }else if(tamanho == 48){
                        btn.setText('Tamanho: ' + tamanho)
                    }else if(tamanho == 72){
                        btn.setText('Tamanho: ' + tamanho)
                    }
                },
                menu: Ext.create('Ext.menu.Menu', {
                    plain: true,
                    width: 60,
                    border: 1000,
                    items: [
                    {
                        text: '8',
                        handler: function(){
                            tamanho = 8
                        }
                    },
                    {
                        text: '9',
                        handler: function(){
                            tamanho = 9
                        }
                    },
                    {
                        text: '10',
                        handler: function(){
                            tamanho = 10
                        }
                    },
                    {
                        text: '11',
                        handler: function(){
                            tamanho = 11
                        }
                    },
                    {
                        text: '12',
                        handler: function(){
                            tamanho = 12
                        }
                    },
                    {
                        text: '14',
                        handler: function(){
                            tamanho = 14
                        }
                    },
                    {
                        text: '16',
                        handler: function(){
                            tamanho = 16
                        }
                    },
                    {
                        text: '18',
                        handler: function(){
                            tamanho = 18
                        }
                    },
                    {
                        text: '20',
                        handler: function(){
                            tamanho = 20 
                        }
                    },
                    {
                        text: '22',
                        handler: function(){
                            tamanho = 22
                        }
                    },
                    {
                        text: '24',
                        handler: function(){
                            tamanho = 24
                        }
                    },
                    {
                        text: '26',
                        handler: function(){
                            tamanho = 26  
                        }
                    },
                    {
                        text: '28',
                        handler: function(){
                            tamanho = 28
                        }
                    },
                    {
                        text: '36',
                        handler: function(){
                            tamanho = 36
                        }
                    },
                    {
                        text: '48',
                        handler: function(){
                            tamanho = 48
                        }
                    },
                    {
                        text: '72',
                        handler: function(){
                            tamanho = 72
                        }
                        
                    }
                    ]
                }),
                
            
            },
            {
                xtype: 'tbseparator',

            },
            {
                xtype: 'button',
                text: '<b>B</b>',
                enableToggle: true,
                handler: function(){
                    
                }
            },
            {
                xtype: 'button',
                text: '<i>I</i>',
                enableToggle: true,

            },
            {
                xtype: 'button',
                text: '<u>U</u>',
                enableToggle: true,

            }
        ]
    });

    Ext.define('Painel.Toolbar2', {
        extend: 'Ext.toolbar.Toolbar',
        alias: 'widget.testetoolbar2',
        renderTo: document.body,
        anchor: '50%, 100%',
        items: [
            {
                xtype: 'tbtext',
                text: 'WORD Pré Alpha'
            },
            {
                xtype: 'tbfill'
            },
            {
                xtype: 'tbseparator',
            },
            {
                var: language = 0,
                xtype: 'splitbutton',
                text: 'PT - BR',
                width: 60,
                menu: Ext.create('Ext.menu.Menu', {
                    items:[
                        {
                            text: 'PT - BR',
                            handler: function(){
                                language = 1
                                
                            }
                        },
                        {
                            text: 'PT - PT',
                            handler: function(){
                                language = 2
                            }
                        },
                        {
                            text: 'EN - US',
                            handler: function(){
                                language = 3
                            }
                        },
                        {
                            text: 'ES - ES',
                            handler: function(){
                                language = 4
                            }
                        }
                    ]
                }),
                handler: function(btn){
                   if(language == 1){
                        btn.setText('PT - BR')
                    }else if(language == 2){
                        btn.setText('PT - PT')
                    }else if(language == 3){
                        btn.setText('EN - US')
                    }else if(language == 4){
                        btn.setText('ES - ES')
                    }
                    console.log(language)
                    console.log(btn.getText)
                }
            },
            {
                xtype: 'tbseparator',
            },
        ]
    });


Ext.onReady(function (){


    Ext.create('Ext.window.Window', {
        title: 'MICROSOFTT WORD',
        width: 400,
        height: 300,
        maximizable: true,
        minimizable: true,
        draggable: true,
        resizable: true,
        isDroppable: true,
        renderTo: Ext.getBody(),
        autoShow: true,
        layout: 'anchor',
        items: [{
            xtype: 'htmleditor',
            bodyStyle:{"background-color":"lightblue"}, 
            anchor: '100%, 100%',
            inputType: 'text',
            growAppend: true,
            autoScroll: true,
        }],
        dockedItems:
        [
        {
            xtype: 'testetoolbar2',
            dock: 'bottom',
            //anchor: '100%, 100%',
        }],
    });

});