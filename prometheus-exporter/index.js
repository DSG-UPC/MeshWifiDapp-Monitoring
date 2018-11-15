
var express = require('express')
var proc = require('node-proc')
var app = express()
const eth0 = 'eth0'
const lo = 'lo'
const token = "Bearer /RqFf-iW{<iaQ&5uAZmV~(QhZÂ§@5#gtitEyJq|5SN${2et|R&>d.VelFa}q,MxCz";

app.get('/metrics', function (req, res) {
    if (req.get("authorization") === token) {
        proc.netdev((err, netdev) => {
            var network = netdev.filter(element => element.device == eth0)[0]
            network.Rx = network.Rx.bytes
            network.Tx = network.Tx.bytes
            network.Total = parseInt(network.Rx) + parseInt(network.Tx)
            res.send(format(network))
        })
    } else{
        res.sendStatus(403);
    }

})

function format(network) {
    var result = "# HELP target_forwarded_bytes Total number of bytes forwarded (in/out/total).\n"
    result += "# TYPE target_forwarded_bytes counter\n"
    result += `target_forwarded_bytes{state=\"in\"} ${network.Rx}\n`
    result += `target_forwarded_bytes{state=\"out\"} ${network.Tx}\n`
    result += `target_forwarded_bytes{state=\"total\"} ${network.Total}\n`
    return result
}

app.listen(9000)