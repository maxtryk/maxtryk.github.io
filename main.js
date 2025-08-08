const LINE_COLOR = '#38bdf8'; // cyan-400

function init_lines() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // 67 degrees in radians
    const angle = 67 * Math.PI / 180;
    const interval = 170;
    const num_lines = 5;

    for (let i = 0; i < num_lines; i++) {
        // Start point: move left by interval*i
        const x0 = canvas.width - i * interval;
        const y0 = 0;
        const L = (canvas.height - y0) / Math.sin(angle);
        const x1 = x0 - L * Math.cos(angle);
        const y1 = y0 + L * Math.sin(angle);

        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
        ctx.strokeStyle = LINE_COLOR;
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    // Draw horizontal lines: one in the middle, one 40px above, one 60px above that, one 60px below the middle
    const y_middle = canvas.height / 2 + 50;
    const y1 = y_middle;
    const y2 = y_middle - 150;
    const y3 = y_middle - 375;
    const y4 = y_middle + 225;
    const ys = [y1, y2, y3, y4];
    ys.forEach(y => {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.strokeStyle = LINE_COLOR;
        ctx.lineWidth = 1;
        ctx.stroke();
    });
}

window.onload = function() {
    init_lines();
};