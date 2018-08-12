// config.js
// Configuration settings

module.exports = {
    app_name: 'r014_dsa_webagent',
    session_secret: "uiyhb3kn3245335355jhnnnmdpew[]",
    //dsa_webagent_server: 'https://webagentdev.arx.com', // url for the Web Agent server,
    dsa_webagent_server: 'https://webapp-dsa-devctr.docusign.net', // url for the Web Agent server,
        // not for the DocuSign Signature Appliance itself.
    finish_url_path: "/signing", // the path part of the url
    doc1_file: 'images/example.pdf',
    doc1_type: 'pdf',
    doc1_filename: '3-d model'
}