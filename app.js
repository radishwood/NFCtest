if ('NDEFReader' in window) {
    const reader = new NDEFReader();

    document.getElementById('scanNFC').addEventListener('click', async () => {
        try {
            await reader.scan();
            document.getElementById('output').innerText = 'NFC scan started. Tap an NFC tag!';
            
            reader.onreading = (event) => {
                const record = event.message.records[0];
                const textDecoder = new TextDecoder();
                const decodedData = textDecoder.decode(record.data);
                document.getElementById('output').innerText = `NFC Data: ${decodedData}`;
            };
        } catch (err) {
            document.getElementById('output').innerText = `Error: ${err}`;
            console.error('NFC scan failed:', err);
        }
    });
} else {
    document.getElementById('output').innerText = 'Web NFC is not supported on this device.';
}
