interface IBinding {
    value: {
        countFrom: number,
        countTo: number,
        duration: number,
        text?: number
    }
}

interface IHTMLElement extends HTMLElement {
    animationFrameID: number
}


const vNumberCounter = {
    mounted(element: IHTMLElement, binding: IBinding) {
        const {countFrom, countTo, duration, text} = binding.value;

        if (countTo <= 0) return;

        const animate = () => {
            let startTime: number;

            const step = (currentTime: number) => {
                if (!startTime) {
                    startTime = currentTime;
                }

                const progress = Math.min((currentTime - startTime) / duration, 1);
                const currentNumber = Math.floor(progress * (countTo - countFrom));

                element.textContent = `${currentNumber + countFrom} ${text || ""}`;

                if (progress < 1) {
                    element.animationFrameID = window.requestAnimationFrame(step);
                } else {
                    window.cancelAnimationFrame(element.animationFrameID);
                }
            };

            window.requestAnimationFrame(step);
        };

        animate();
    },
    unmounted(element: IHTMLElement) {
        window.cancelAnimationFrame(element.animationFrameID);
    }
};

export {
    vNumberCounter
};