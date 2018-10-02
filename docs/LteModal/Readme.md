# LteModal
[[toc]]

O componente LteModal fornece um botão e uma janela modal para exibição de informações ocultas para quando clicar no botão.

```html
 <lte-modal title="teste de modal title" target="modal1" close-text="Fechar" open-text="Abrir modal" type="info">
      teste de modal
 </lte-modal>
```
<lte-modal title="teste de modal title" target="modal1234234" close-text="Fechar" open-text="Abrir modal" >
      teste de modal
</lte-modal>
  
  
### Texto Abrir

O componente tem o parâmetro _openText_, do tipo String e obrigatório, para indicar o texto do botão de abrir a janela.

### Título

O componente tem o parâmetro _title_, do tipo String, como obrigatório.

### Texto Fechar

O componente tem o parâmetro _closeText_, do tipo String e obrigatório, para indicar o texto do botão de fechar a janela.
 
### Texto Salvar

O componente tem o parâmetro _saveText_, do tipo String e opcional, para indicar o texto do botão de salvar. Quando indicado o texto, o botão aparece automaticamente, e quando clicado irá disparar um evento chamado 'modal-saved'.
 
### Alvo

O parâmetro obrigatório _target_, do tipo String, indica o _id_ do componente na página.

### Tipos/Cores

O componente tem 6 tipos/cores: _primary_, _default_, _success_, _info_, _danger_, _warning_.

O parâmetro _type_, do tipo String, não é obrigatório, e quando não informado terá seu valor _default_ indicado.

<lte-modal title="teste de modal title" target="modal12342345" close-text="Fechar" open-text="Abrir modal" type="primary" >
      teste de modal
</lte-modal>
  
  
  
<lte-modal title="teste de modal title" target="modal1234" close-text="Fechar" open-text="Abrir modal" >
        teste de modal
</lte-modal>
  
  
  
<lte-modal title="teste de modal title" target="modal1d234" close-text="Fechar" open-text="Abrir modal" type="success">
       teste de modal
</lte-modal>
     
     
     
<lte-modal title="teste de modal title" target="modal123h34" close-text="Fechar" open-text="Abrir modal" type="info">
            teste de modal
</lte-modal>
      
      
        
<lte-modal title="teste de modal title" target="modal1r234" close-text="Fechar" open-text="Abrir modal" type="danger">
              teste de modal
</lte-modal>
      
      
          
<lte-modal title="teste de modal title" target="modal123234" close-text="Fechar" open-text="Abrir modal" type="warning">
                teste de modal
</lte-modal>
