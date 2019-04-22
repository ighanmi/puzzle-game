// Add support for standard HTML5 Drag and Drop operations on Mobile Devices
// Src: https://www.codeproject.com/Articles/1091766/Add-support-for-standard-HTML-Drag-and-Drop-operat
import './lib/dragDropTouch';
import {appendStyle} from './common';
class Puzzle {
    constructor(puzzleWrapper, puzzleImage, blockWidth, blockHeight) {
        this.puzzleWrapper = puzzleWrapper;
        this.puzzleImage = puzzleImage;
        this.blockWidth = blockWidth;
        this.blockHeight = blockHeight;
        this.backgroundSizeConfig = this.setBackgroundSizeConfig();
        this.dropTarget = null;
        this.dragTarget = null;

        // Bind some methods to avoid issues while accessing to this.someMethod in the drag and drop callbacks
        this.handleDragStart = this.handleDragStart.bind(this);
        this.handleDragEnter = this.handleDragEnter.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);
        this.handleDragLeave = this.handleDragLeave.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
        this.handleDragEnd = this.handleDragEnd.bind(this);
    }

    init() {
        for (let index = 0; index < 12; index++) {
            // Insert the puzzle blocks
            let block = document.createElement("div");
            let backgroundSize = this.getRandomBackgroundSize();
            block.setAttribute('class', 'puzzle__block');
            block.setAttribute('draggable', 'true');
            block.setAttribute('default-order', index);
            this.puzzleWrapper.appendChild(block);
            // Setting the background position randomly
            block.style.backgroundImage = `url(${this.puzzleImage})`;
            block.style.backgroundPosition = backgroundSize;
            block.style.order = index;

            // Attach drag and drop callbacks
            block.addEventListener('dragstart', this.handleDragStart, false);
            block.addEventListener('dragenter', this.handleDragEnter, false);
            block.addEventListener('dragover', this.handleDragOver, false);
            block.addEventListener('dragleave', this.handleDragLeave, false);
            block.addEventListener('drop', this.handleDrop, false);
            block.addEventListener('dragend', this.handleDragEnd, false);
        }
    }

    // Get backgroundPosition randomly from the config array
    getRandomBackgroundSize() {
        return this.backgroundSizeConfig.splice(Math.floor(Math.random() * this.backgroundSizeConfig.length), 1)[0];
    }

    // Setting the config array for the background positions
    setBackgroundSizeConfig() {
        let backgroundSizeConfig = [];
        for (let xAxisIndex = 0; xAxisIndex < 4; xAxisIndex++) {
            for (let yAxisIndex = 0; yAxisIndex < 3; yAxisIndex++) {
                backgroundSizeConfig.push((xAxisIndex * this.blockWidth) + 'px ' + (yAxisIndex * this.blockHeight) + 'px ');
            }
        }
        return backgroundSizeConfig;
    }

    handleDragStart(e) {
        e.target.style.opacity = '0.4';  // this / e.target is the source node.
        //Firefox requires drag data to be set (event.dataTransfer.setData(...)) in the dragstart event.
        // Without setting this data the dragstart event will fire, but the dragend event won't.
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', e.target.innerHTML);
    }

    handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault(); // Necessary. Allows us to drop.
        }

        e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

        return false;
    }

    handleDragEnter(e) {
        e.target.classList.add('over');
    }

    handleDragLeave(e) {
        e.target.classList.remove('over');  // this / e.target is previous target element.
    }

    handleDrop(e) {
        this.dropTarget = e.target;
        if (e.stopPropagation) {
            e.stopPropagation(); // stops the browser from redirecting.
        }

        return false;
    }

    handleDragEnd(e) {
        this.dragTarget = e.target;
        this.swapOder();
        let blocks = document.querySelectorAll('.puzzle__block');
        [].forEach.call(blocks, function (col) {
            col.classList.remove('over');
            col.style.opacity = '1';
        });
    }

    swapOder() {
        let dropTargetOrder = this.dropTarget.style.order;
        this.dropTarget.style.order = this.dragTarget.style.order;
        this.dragTarget.style.order = dropTargetOrder;
    }

}

document.addEventListener('DOMContentLoaded', () => {
    const puzzleImageUrl = 'https://s3-eu-west-1.amazonaws.com/wagawin-ad-platform/media/testmode/banner-landscape.jpg';
    const puzzleImage = document.getElementById('puzzle__image');
    const puzzleWrapper = document.querySelector('#puzzle__wrapper');
    // We load the puzzle image in a 'non visible' image tag
    // and then we get its width and height (needed to calculate the dimensions ratio)
    const newImg = new Image;
    newImg.onload = function() {
        puzzleImage.src = this.src;
        const puzzleImageWidth = puzzleImage.clientWidth;
        const puzzleImageHeight = puzzleImage.clientHeight;
        const imageRatio = puzzleImageWidth/puzzleImageHeight;
        const puzzleWrapperWidth = puzzleWrapper.clientWidth;
        const puzzleWrapperHeight = puzzleWrapperWidth / imageRatio;
        const blockWidth = (puzzleWrapperWidth - 3) / 4;
        const blockHeight = (puzzleWrapperHeight - 2) / 3;
        // Set the puzzle block dimensions
        const css = `
            .puzzle__wrapper {
                height: ${puzzleWrapperHeight}px;
                grid-template-columns: ${blockWidth}px ${blockWidth}px ${blockWidth}px ${blockWidth}px;
            }
            
            .puzzle__block {
                background-size: ${puzzleWrapperWidth}px ${puzzleWrapperHeight}px;
            }
        `;
        appendStyle(css);
        const puzzle = new Puzzle(puzzleWrapper,
            puzzleImageUrl,
            blockWidth,
            blockHeight
        );
        puzzle.init();
    };
    newImg.src = puzzleImageUrl;
});
