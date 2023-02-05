const createTemplate = (email) => {
  return `
    <!DOCTYPE html>
    <html lang="en" xmlns:v="urn:schemas-microsoft-com:vml">
    <head>
      <meta charset="utf-8">
      <meta name="x-apple-disable-message-reformatting">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
      <meta name="color-scheme" content="light dark">
      <meta name="supported-color-schemes" content="light dark">
      <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings xmlns:o="urn:schemas-microsoft-com:office:office">
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
      <style>
        td,th,div,p,a,h1,h2,h3,h4,h5,h6 {font-family: "Segoe UI", sans-serif; mso-line-height-rule: exactly;}
      </style>
      <![endif]-->
      <title>Confirm your signup</title>
      <style>
        .hover-bg-blue-600:hover {
          background-color: #2563eb !important;
        }
        .hover-text-decoration-underline:hover {
          text-decoration: underline;
        }
        @media (max-width: 600px) {
          .sm-h-8 {
            height: 32px !important;
          }
          .sm-w-full {
            width: 100% !important;
          }
          .sm-px-8 {
            padding-left: 32px !important;
            padding-right: 32px !important;
          }
          .sm-px-6 {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .sm-pb-3 {
            padding-bottom: 12px !important;
          }
        }
      </style>
    </head>
    <body style="word-break: break-word; -webkit-font-smoothing: antialiased; margin: 0; width: 100%; background-color: #e5e7eb; padding: 0">
      <div role="article" aria-roledescription="email" aria-label="Confirm your signup" lang="en">
        <table style="width: 100%; font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif" cellpadding="0" cellspacing="0" role="presentation">
          <tr>
            <td align="center" style="background-color: #e5e7eb; padding-top: 24px; padding-bottom: 24px">
              <table class="sm-w-full" style="width: 600px" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td class="sm-pb-3" style="padding-bottom: 24px; text-align: center">
                    <h1 style="font-size: 24px; font-weight: 600; color: #000">Confirm your signup</h1>
                  </td>
                </tr>
                <tr>
                  <td align="center" class="sm-px-8">
                    <table class="sm-w-full" style="width: 75%" cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td class="sm-px-6" style="background-color: #fff; padding: 48px; text-align: center">
                          <p style="margin: 0; font-size: 18px; font-weight: 600">Hey ${email},</p>
                          <p style="font-size: 16px; color: #374151">Follow this link to confirm your account:</p>
                          <div class="sm-h-8" style="line-height: 24px">&zwnj;</div>
                          <a href="{{ .ConfirmationURL }}" class="hover-bg-blue-600" style="text-decoration: none; display: inline-block; border-radius: 4px; background-color: #3b82f6; padding: 20px 24px; font-size: 14px; font-weight: 600; text-transform: uppercase; line-height: 1; color: #fff">
                            <!--[if mso]><i style="letter-spacing: 24px; mso-font-width: -100%; mso-text-raise: 26pt;">&nbsp;</i><![endif]-->
                            <span style="mso-text-raise: 13pt">Confirm your email &rarr;</span>
                            <!--[if mso]><i style="letter-spacing: 24px; mso-font-width: -100%;">&nbsp;</i><![endif]-->
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td style="height: 2px; background-color: #d1d5db"></td>
                      </tr>
                      <tr>
                        <td style="padding: 32px; text-align: center; font-size: 12px; color: #4b5563">
                          <p style="margin: 0 0 16px; text-transform: uppercase">Powered by Maizzle</p>
                          <p style="margin: 0; font-style: italic">Quickly build HTML emails with utility-first CSS</p>
                          <p style="margin: 0">
                            <a href="https://maizzle.com/docs/" class="hover-text-decoration-underline" style="text-decoration: none; color: #3b82f6">Docs</a> &bull;
                            <a href="https://github.com/maizzle" class="hover-text-decoration-underline" style="text-decoration: none; color: #3b82f6">Github</a> &bull;
                            <a href="https://twitter.com/maizzlejs" class="hover-text-decoration-underline" style="text-decoration: none; color: #3b82f6">Twitter</a>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </body>
    </html>`;
};

module.exports = {
  createTemplate,
};
