(function () {


    var el = wp.element.createElement,
        registerBlockType = wp.blocks.registerBlockType,
        Editable = wp.blocks.Editable;
    createBlock = wp.blocks.createBlock;


    // style block
    registerBlockType('guten-script/style-block', {
        title: 'style',
        icon: 'art',
        category: 'formatting',

        keywords: ['css', 'in line'],

        attributes: {

            content: {
                source: 'text',
                selector: '.wp-block-guten-script-style-block',

            },


        },
        supports: {
            html: false,
            customClassName: false,
        },

        edit: function (props) {
            console.log('edit runnuing');

            var content = props.attributes.content;
            console.log(content);

            function onChangeContent(newStyle) {

                props.setAttributes({content: newStyle.target.value});
                console.log(newStyle);
            }

            return el(
                'textarea',
                {
                    className: props.className,
                    onChange: onChangeContent,
                    value: content,
                    placeholder:  ' Your css code ....'
                },
            )
        },

        save: function (props) {
            var content = props.attributes.content;

            return el('style', {dangerouslySetInnerHTML: {__html: content}});
        }

    });

   // script block
    registerBlockType('guten-script/script-block', {
        title: 'script',
        icon: 'editor-code',
        category: 'formatting',

        keywords: ['java script', 'script','js'],

        attributes: {

            content: {
                source: 'text',
                selector: '.wp-block-guten-script-script-block',

            },


        },
        supports: {
            html: false,
            customClassName: false,
        },

        edit: function (props) {
            console.log('edit runnuing');

            var content = props.attributes.content;
            console.log(content);

            function onChangeContent(newStyle) {

                props.setAttributes({content: newStyle.target.value});
                console.log(newStyle);
            }

            return el(
                'textarea',
                {
                    className: props.className,
                    onChange: onChangeContent,
                    value: content,
                    placeholder: ' Your js code ....'
                },
            )
        },

        save: function (props) {
            var content = props.attributes.content;
            return el('script', {dangerouslySetInnerHTML: { __html: content}});
        }

    });

})();



