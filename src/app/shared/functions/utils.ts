export type UpdateDisplayFn = (text: string) => void;

export function animateNameRewrite(
    fromName: string,
    toName: string,
    blinkChar: string,
    updateDisplay: UpdateDisplayFn,
    onComplete: () => void,
    delayPerLetter = 30
) {
    const maxLen = Math.max(fromName.length, toName.length);
    let index = 0;

    const rewriteStep = () => {
        if (index >= maxLen) {
            onComplete();
            return;
        }

        const step1 = fromName
            .split('')
            .map((char, i) => {
                if (i < index) return toName[i] || ' ';
                if (i === index) return blinkChar;
                return fromName[i] || ' ';
            })
            .join('');
        updateDisplay(step1);

        setTimeout(() => {
            const step2 = fromName
                .split('')
                .map((char, i) => {
                    if (i < index) return toName[i] || ' ';
                    if (i === index) return toName[i] || ' ';
                    return fromName[i] || ' ';
                })
                .join('');
            updateDisplay(step2);
            index++;
            setTimeout(rewriteStep, delayPerLetter);
        }, delayPerLetter);
    };

    rewriteStep();
}
