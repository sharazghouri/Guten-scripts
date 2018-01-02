(function () {


    var el = wp.element.createElement,
        registerBlockType = wp.blocks.registerBlockType,
        Editable = wp.blocks.Editable;


    registerBlockType('guten-script/style-block', {
        title:'style',
        icon: 'art',
        category: 'formatting',

        keywords: ['css', 'in line'],

        attributes: {

            content: {
                source: 'children',
                selector: '.wp-block-guten-script-style-block'
            },


        },
        supports: {
            html: false,
            customClassName: false,
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
            return el('script' , { className: props.className } ,  content);
        }

    });

})();



(function ($) {

    $('.wp-block-guten-script-style-block').keyup(function(event) {
        if (event.text.charCodeAt() == '10') {
            event.preventDefault();
        }
    });

})(jQuery);