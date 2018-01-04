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

        var  content =  props.attributes.content;

        function onChangeContent(newStyle) {

            props.setAttributes({ content : newStyle });

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


        //var  content =  'fadsfaf';
        var  content =  props.attributes.content;
        return el('style' , { className: props.className } ,  content);
    }

});