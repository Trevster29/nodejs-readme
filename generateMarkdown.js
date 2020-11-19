function generateMarkdown(data) {
    return `
    # ${data.title}

    ## RTCSessionDescription

    ${data.description}

    ## Installation
    ${data.installation}

    ##Licenses
    ${data.license}

    ##Github
    ${data.github}

    ##Tests
    ${data.tests}
    
    `;
}

module.exports = generateMarkdown