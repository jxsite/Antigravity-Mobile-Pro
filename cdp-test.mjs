import WebSocket from 'ws';

async function run() {
    try {
        const res = await fetch(`http://127.0.0.1:9222/json/list`);
        const targets = await res.json();
        const pageTarget = targets.find(t => t.type === 'page' && t.title === 'Mobile PWA Command Board');
        
        if (pageTarget) {
            await connectAndInspect(pageTarget.webSocketDebuggerUrl);
        } else {
            console.log("Could not find the page target.");
        }
    } catch (e) {
        console.error("Error:", e.message);
    }
}

async function connectAndInspect(wsUrl) {
    return new Promise((resolve) => {
        const ws = new WebSocket(wsUrl);
        let idCounter = 1;
        
        const call = (method, params) => new Promise((res, rej) => {
            const id = idCounter++;
            const handler = (msg) => {
                const data = JSON.parse(msg.toString());
                if (data.id === id) {
                    ws.off('message', handler);
                    res(data.result);
                }
            };
            ws.on('message', handler);
            ws.send(JSON.stringify({ id, method, params }));
        });

        ws.on('open', async () => {
            await call('Runtime.enable', {});
            
            setTimeout(async () => {
                const SCRIPT = `(() => {
                    const elements = Array.from(document.body.children);
                    return elements.map(el => ({
                        tagName: el.tagName,
                        id: el.id,
                        className: el.className,
                        htmlPreview: el.outerHTML.substring(0, 300)
                    }));
                })()`;
                
                try {
                    const result = await call('Runtime.evaluate', {
                        expression: SCRIPT,
                        returnByValue: true
                    });
                    console.log(JSON.stringify(result.result?.value, null, 2));
                } catch(e) {}
                
                ws.close();
                resolve();
            }, 1000);
        });
    });
}

run();
