import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const origin = request.nextUrl.origin;
    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL ?? origin;
    const logoUrl = `${siteUrl}/logo/hori/logo_noir_hori.png`;
    const logoAttachment = {
      filename: "logo_noir_hori.png",
      path: logoUrl,
      cid: "lvp-logo",
    };

    // Récupérer les données du formulaire
    const nom = formData.get("nom") as string;
    const prenom = formData.get("prenom") as string;
    const email = formData.get("email") as string;
    const telephone = formData.get("telephone") as string;
    const adresse = formData.get("adresse") as string;
    const typePrestation = formData.get("typePrestation") as string;
    const message = formData.get("message") as string;

    // Valider les champs obligatoires
    if (
      !nom ||
      !prenom ||
      !email ||
      !telephone ||
      !adresse ||
      !typePrestation ||
      !message
    ) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis." },
        { status: 400 },
      );
    }

    // Récupérer les images
    const images: Array<{ buffer: Buffer; filename: string }> = [];
    for (let i = 1; i <= 4; i++) {
      const imageFile = formData.get(`image_${i}`) as File | null;
      if (imageFile) {
        const buffer = Buffer.from(await imageFile.arrayBuffer());
        images.push({
          buffer,
          filename: imageFile.name,
        });
      }
    }

    // Configurer Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Préparer les pièces jointes
    const attachments = images.map((img) => ({
      filename: img.filename,
      content: img.buffer,
    }));

    // Préparer le contenu de l'email
    const htmlContent = `
      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f7ede3; padding: 24px 0;">
        <tr>
          <td align="center">
            <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="width: 600px; max-width: 600px; background-color: #ffffff; border: 1px solid #ecd8bd; border-radius: 3px; overflow: hidden;">
              <tr>
                <td style="padding: 24px 32px; background-color: #ddccbc;">
                  <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td align="left">
                        <img src="cid:lvp-logo" alt="LVP Service" width="140" style="display: block; height: auto;" />
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding: 28px 32px; font-family: 'Montserrat', Arial, sans-serif; color: #1e1e1e;">
                  <h2 style="margin: 0 0 16px; font-family: 'Tenor Sans', 'Montserrat', Arial, sans-serif; color: #766252; font-size: 22px;">Nouvelle demande de contact</h2>

                  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f7ede3; border: 1px solid #ecd8bd; margin-bottom: 20px; border-radius: 3px; overflow: hidden;">
                    <tr>
                      <td style="padding: 16px 18px;">
                        <h3 style="margin: 0 0 10px; font-family: 'Tenor Sans', 'Montserrat', Arial, sans-serif; color: #b09b8a; font-size: 16px;">Informations personnelles</h3>
                        <p style="margin: 4px 0;"><strong>Nom :</strong> ${nom}</p>
                        <p style="margin: 4px 0;"><strong>Prénom :</strong> ${prenom}</p>
                        <p style="margin: 4px 0;"><strong>Email :</strong> <a href="mailto:${email}" style="color: #1e1e1e;">${email}</a></p>
                        <p style="margin: 4px 0;"><strong>Téléphone :</strong> ${telephone}</p>
                        <p style="margin: 4px 0;"><strong>Adresse :</strong> ${adresse}</p>
                      </td>
                    </tr>
                  </table>

                  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f7ede3; border: 1px solid #ecd8bd; margin-bottom: 20px; border-radius: 3px; overflow: hidden;">
                    <tr>
                      <td style="padding: 16px 18px;">
                        <h3 style="margin: 0 0 10px; font-family: 'Tenor Sans', 'Montserrat', Arial, sans-serif; color: #b09b8a; font-size: 16px;">Demande</h3>
                        <p style="margin: 4px 0;"><strong>Type de prestation :</strong> ${typePrestation}</p>
                        <p style="margin: 12px 0 6px;"><strong>Message :</strong></p>
                        <p style="margin: 0; white-space: pre-wrap; color: #1e1e1e;">${message}</p>
                      </td>
                    </tr>
                  </table>

                  ${
                    images.length > 0
                      ? `
                  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f7ede3; border: 1px solid #ecd8bd; border-radius: 3px; overflow: hidden;">
                    <tr>
                      <td style="padding: 16px 18px;">
                        <h3 style="margin: 0 0 10px; font-family: 'Tenor Sans', 'Montserrat', Arial, sans-serif; color: #b09b8a; font-size: 16px;">Pieces jointes</h3>
                        <p style="margin: 4px 0;"><strong>${images.length} image(s) fournie(s)</strong></p>
                        <ul style="color: #1e1e1e; margin: 8px 0 0; padding-left: 18px;">
                          ${images.map((img) => `<li>${img.filename}</li>`).join("")}
                        </ul>
                      </td>
                    </tr>
                  </table>
                `
                      : ""
                  }
                </td>
              </tr>
              <tr>
                <td style="padding: 18px 32px; background-color: #1e1e1e; font-family: 'Montserrat', Arial, sans-serif; color: #f7ede3; font-size: 12px;">
                  LVP Service - Nouveau contact recu depuis le site. Logo non visible ? <a href="${logoUrl}" style="color: #f7ede3;">Ouvrir l'image</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `;

    // Envoyer l'email
    await transporter.sendMail({
      from: process.env.GMAIL_EMAIL,
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: email,
      subject: `Nouvelle demande de contact - ${typePrestation}`,
      html: htmlContent,
      attachments: [...attachments, logoAttachment],
    });

    // Envoyer également une confirmation au client
    const confirmationHtml = `
      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f7ede3; padding: 24px 0;">
        <tr>
          <td align="center">
            <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="width: 600px; max-width: 600px; background-color: #ffffff; border: 1px solid #ecd8bd; border-radius: 3px; overflow: hidden;">
              <tr>
                <td style="padding: 24px 32px; background-color: #ddccbc;">
                  <img src="cid:lvp-logo" alt="LVP Service" width="140" style="display: block; height: auto;" />
                </td>
              </tr>
              <tr>
                <td style="padding: 28px 32px; font-family: 'Montserrat', Arial, sans-serif; color: #1e1e1e;">
                  <h2 style="margin: 0 0 16px; font-family: 'Tenor Sans', 'Montserrat', Arial, sans-serif; color: #766252; font-size: 22px;">Confirmation de reception</h2>
                  <p style="margin: 0 0 10px;">Bonjour ${prenom} ${nom},</p>
                  <p style="margin: 0 0 10px;">Nous avons bien recu votre demande de contact. Merci de votre interet !</p>
                  <p style="margin: 0 0 18px;">Nous vous recontacterons dans les plus brefs delais a l'adresse email ou au numero de telephone que vous nous avez fourni.</p>

                  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f7ede3; border: 1px solid #ecd8bd; margin-top: 10px; border-radius: 3px; overflow: hidden;">
                    <tr>
                      <td style="padding: 16px 18px;">
                        <h3 style="margin: 0 0 10px; font-family: 'Tenor Sans', 'Montserrat', Arial, sans-serif; color: #b09b8a; font-size: 16px;">Resume de votre demande</h3>
                        <p style="margin: 4px 0;"><strong>Type de prestation :</strong> ${typePrestation}</p>
                        <p style="margin: 4px 0;"><strong>Nombre de pieces jointes :</strong> ${images.length}</p>
                      </td>
                    </tr>
                  </table>

                  <p style="margin: 24px 0 0; color: #766252; font-size: 12px;">
                    Cordialement,<br />
                    L'equipe LVP Service
                  </p>
                </td>
              </tr>
              <tr>
                <td style="padding: 18px 32px; background-color: #1e1e1e; font-family: 'Montserrat', Arial, sans-serif; color: #f7ede3; font-size: 12px;">
                  Merci pour votre confiance. Logo non visible ? <a href="${logoUrl}" style="color: #f7ede3;">Ouvrir l'image</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `;

    await transporter.sendMail({
      from: process.env.GMAIL_EMAIL,
      to: email,
      subject: "Confirmation de réception de votre demande",
      html: confirmationHtml,
      attachments: [logoAttachment],
    });

    return NextResponse.json(
      { message: "Votre message a été envoyé avec succès !" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi. Merci de réessayer." },
      { status: 500 },
    );
  }
}
