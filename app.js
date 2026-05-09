const { Cap, decoders } = require('cap');
const PROTOCOL = decoders.PROTOCOL;

const c = new Cap();

const device = Cap.findDevice(); 
console.log(`Listening on device: ${device}`);

const filter = ''; 
const bufSize = 10 * 1024 * 1024;
const buffer = Buffer.alloc(65535);

const linkType = c.open(device, filter, bufSize, buffer);
c.setMinBytes && c.setMinBytes(0);

c.on('packet', (nbytes, trunc) => {
    console.log(`\n--- Packet Received ---`);
    console.log(`Size: ${nbytes} bytes (Truncated: ${trunc})`);

    if (linkType === 'ETHERNET') {
        const ret = decoders.Ethernet(buffer);
        console.log(`Source MAC: ${ret.info.srcmac} -> Dest MAC: ${ret.info.dstmac}`);

        if (ret.info.type === PROTOCOL.ETHERNET.IPV4) {
            const ip = decoders.IPV4(buffer, ret.offset);
            console.log(`IPv4: ${ip.info.srcaddr} -> ${ip.info.dstaddr}`);
        } else if (ret.info.type === PROTOCOL.ETHERNET.IPV6) {
            const ip = decoders.IPV6(buffer, ret.offset);
            console.log(`IPv6: ${ip.info.srcaddr} -> ${ip.info.dstaddr}`);
        }
    }
});