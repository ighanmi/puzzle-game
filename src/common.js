export const appendStyle = (css) => {
    let head = document.head || document.getElementsByTagName('head')[0];
    let styleTag = document.createElement('style');

    head.appendChild(styleTag);

    styleTag.type = 'text/css';
    if (styleTag.styleSheet){
        // This is required for IE8 and below.
        styleTag.styleSheet.cssText = css;
    } else {
        styleTag.appendChild(document.createTextNode(css));
    }
};
