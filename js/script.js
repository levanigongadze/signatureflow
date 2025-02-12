function generateSignature() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const position = document.getElementById('position').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const website = document.getElementById('website').value;
    const logoURL = document.getElementById('logoURL').value;
    const facebookLink = document.getElementById('facebook').value;
    const twitterLink = document.getElementById('twitter').value;
    const telegramLink = document.getElementById('telegram').value;
    const youtubeLink = document.getElementById('youtube').value;
    const linkedinLink = document.getElementById('linkedin').value;
    const templateType = document.getElementById('templateSelect').value;

    if (firstName && lastName && position && phone && email && website && logoURL) {
        let socialIconsHTML = '';

        if (facebookLink) socialIconsHTML += `<a href="${facebookLink}" target="_blank"><img style="width:15px;height:15px;"src="https://www.svgrepo.com/show/512120/facebook-176.svg" alt="Facebook"></a>`;
        if (twitterLink) socialIconsHTML += `<a href="${twitterLink}" target="_blank"><img style="width:15px;height:15px;"src="https://www.svgrepo.com/show/508974/twitter-2.svg" alt="X (Twitter)"></a>`;
        if (telegramLink) socialIconsHTML += `<a href="${telegramLink}" target="_blank"><img style="width:15px;height:15px;"src="https://www.svgrepo.com/show/504946/telegram.svg" alt="Telegram"></a>`;
        if (youtubeLink) socialIconsHTML += `<a href="${youtubeLink}" target="_blank"><img style="width:15px;height:15px;"src="https://www.svgrepo.com/show/521051/youtube.svg" alt="YouTube"></a>`;
        if (linkedinLink) socialIconsHTML += `<a href="${linkedinLink}" target="_blank"><img style="width:15px;height:15px;"src="https://www.svgrepo.com/show/512419/linkedin-161.svg" alt="LinkedIn"></a>`;

        const phoneIcon = `<img src="https://www.svgrepo.com/show/529760/phone-calling.svg" alt="Phone" style="width: 20px; height: 20px; fill: #494949;">`;
        const emailIcon = `<img src="https://www.svgrepo.com/show/488920/email.svg" alt="Email" style="width: 20px; height: 20px; fill: #494949;">`;
        const websiteIcon = `<img src="https://www.svgrepo.com/show/521261/web.svg" alt="Website" style="width: 20px; height: 20px; fill: #494949;">`;

        let signatureHTML = '';
        switch (templateType) {
            case 'simple':
                signatureHTML = `
                    <div class="signature-box simple">
                        <table cellpadding="0" cellspacing="0" width="460">
                            <tr>
                                <td><img class="logo" src="${logoURL}" alt="Logo"></td>
                                <td>
                                    <strong>${firstName} ${lastName}</strong><br>
                                    <em>${position}</em><br><br>
                                    ${phoneIcon} ${phone}<br>
                                    ${emailIcon} <a href="mailto:${email}">${email}</a><br>
                                    ${websiteIcon} <a href="${website}" target="_blank">${website}</a><br>
                                    <div class="social-icons">${socialIconsHTML}</div>
                                </td>
                            </tr>
                        </table>
                    </div>
                `;
                break;
            case 'classic':
                signatureHTML = `
                    <div class="signature-box classic">
                        <table cellpadding="0" cellspacing="0" width="460">
                            <tr>
                                <td><img class="logo" src="${logoURL}" alt="Logo"></td>
                                <td>
                                    <strong>${firstName} ${lastName}</strong><br>
                                    <em>${position}</em><br><br>
                                    ${phoneIcon} ${phone}<br>
                                    ${emailIcon} <a href="mailto:${email}">${email}</a><br>
                                    ${websiteIcon} <a href="${website}" target="_blank">${website}</a><br>
                                    <div class="social-icons">${socialIconsHTML}</div>
                                </td>
                            </tr>
                        </table>
                    </div>
                `;
                break;
            case 'modern':
                signatureHTML = `
                    <div class="signature-box modern">
                        <img class="logo" src="${logoURL}" alt="Logo">
                        <strong>${firstName} ${lastName}</strong><br>
                        <em>${position}</em><br><br>
                        ${phoneIcon} ${phone}<br>
                        ${emailIcon} <a href="mailto:${email}">${email}</a><br>
                        ${websiteIcon} <a href="${website}" target="_blank">${website}</a><br>
                        <div class="social-icons">${socialIconsHTML}</div>
                    </div>
                `;
                break;
            case 'advanced':
                signatureHTML = `
                    <div class="signature-box advanced">
                        <table cellpadding="0" cellspacing="0" width="460">
                            <tr>
                                <td><img class="logo" src="${logoURL}" alt="Logo"></td>
                                <td>
                                    <strong>${firstName} ${lastName}</strong><br>
                                    <em>${position}</em><br><br>
                                    ${phoneIcon} <a href="tel:${phone}">${phone}</a><br>
                                    ${emailIcon} <a href="mailto:${email}">${email}</a><br>
                                    ${websiteIcon} <a href="${website}" target="_blank">${website}</a><br>
                                    <div class="social-icons">${socialIconsHTML}</div>
                                </td>
                            </tr>
                        </table>
                    </div>
                `;
                break;
        }
        
        document.getElementById('generated-signature').innerHTML = signatureHTML;
        document.getElementById('copyBtn').style.display = 'inline-block';
    }
}

function copyToClipboard() {
    const signatureElement = document.getElementById('generated-signature');
    const range = document.createRange();
    range.selectNode(signatureElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    
    try {
        document.execCommand('copy');
        alert('Signature copied to clipboard! You can now paste it into your email client.');
    } catch (err) {
        alert('Failed to copy signature: ' + err);
    }
}