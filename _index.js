registerBlockType('guten-script/style-block', {
    title:'style',
    icon: 'art',
    category: 'formatting',
    keywords: ['css', 'in line'],
    attributes: {

        content: {
            type: 'string',
            source: 'property',
            selector: '.wp-block-guten-script-style-block',
            property: 'textContent'
        },
    },
    supports: {
        html: false,
        customClassName: false,
    },

    transforms:{
        form:[
            {
                type: 'pattern',
                trigger: 'enter',
                // regExp: /^```$/,
                transform:function( attributes ){
                    console.log( 'transform');
                    createBlock( 'guten-script/style-block' ,attributes )},
            },
            {
                type:'raw',
                isMatch:function ( node ) {

                    node.nodeName === 'P'
                }
            }
        ]
    },
    edit: function (props) {
        console.log( 'edit runnuing' );
        var  content =  props.attributes.content;
        console.log( content );
        function onChangeContent(newStyle) {

            props.setAttributes({ content : newStyle });
            console.log(newStyle);
        }
        return el(
            Editable,
            {
                tagName: 'p',
                className: props.className,
                onFocus: props.setFocus,
                value: content,
                onChange: onChangeContent,

            }
        )
    },

    save: function ( props ) {

        console.log( 'save runing..');
        //var  content =  'fadsfaf';
        var  content =  props.attributes.content;
        console.log( content );
        return el('style' , { className: props.className } ,  content);
    }

});