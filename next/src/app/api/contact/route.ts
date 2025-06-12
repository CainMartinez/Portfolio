import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;
    
    // Validar los datos
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios' },
        { status: 400 }
      );
    }
    
    // Configurar el transporte de correo
    // Reemplaza estos datos con tu configuración SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER || 'tu-servidor-smtp.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: false, // true para puerto 465, false para otros puertos
      auth: {
        user: process.env.EMAIL_USER || 'tu-email@dominio.com',
        pass: process.env.EMAIL_PASSWORD || 'tu-contraseña'
      }
    });
    
    // Contenido del email
    const mailOptions = {
      from: `"Caín Martínez Portfolio" <${process.env.EMAIL_FROM || 'contact@cain-dev.es'}>`,
      to: process.env.EMAIL_TO || 'c.martinezbernabeu@hotmail.com',
      subject: `Nuevo contacto: ${name}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nuevo mensaje desde el Portfolio</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f9fafb;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f9fafb; padding: 40px 10px;">
            <tr>
              <td align="center">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%); padding: 30px 40px; text-align: center;">
                      <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 500;">
                        <span style="font-family: monospace; opacity: 0.8;">&lt;</span> 
                        Nuevo Mensaje desde el Portfolio 
                        <span style="font-family: monospace; opacity: 0.8;">/&gt;</span>
                      </h1>
                    </td>
                  </tr>
                  
                  <!-- Contact Person Info -->
                  <tr>
                    <td style="padding: 30px 40px;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td style="padding-bottom: 20px;">
                            <div style="display: inline-block; width: 50px; height: 50px; border-radius: 50%; background-color: #dbeafe; color: #3b82f6; text-align: center; line-height: 50px; font-size: 20px; font-weight: bold;">
                              ${name.charAt(0).toUpperCase()}
                            </div>
                            <div style="display: inline-block; vertical-align: middle; margin-left: 15px;">
                              <h2 style="margin: 0; color: #1f2937; font-size: 18px;">${name}</h2>
                              <p style="margin: 5px 0 0; color: #6b7280; font-size: 15px;">
                                <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
                              </p>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
    
                  <!-- Message Content -->
                  <tr>
                    <td style="padding: 0 40px 30px;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td>
                            <h3 style="color: #374151; font-size: 16px; margin: 0 0 12px; font-weight: 500;">Mensaje:</h3>
                            <div style="background-color: #f3f4f6; border-left: 4px solid #3b82f6; padding: 20px; border-radius: 4px; color: #4b5563; font-size: 15px; line-height: 1.6;">
                              ${message.replace(/\n/g, '<br>')}
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
    
                  <!-- Footer -->
                  <tr>
                    <td style="padding: 25px 40px; background-color: #f3f4f6; border-top: 1px solid #e5e7eb;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td style="text-align: center;">
                            <p style="margin: 0; color: #6b7280; font-size: 13px;">
                              Mensaje recibido desde el formulario de contacto en <a href="https://cain-dev.es" style="color: #3b82f6; text-decoration: none;">cain-dev.es</a>
                            </p>
                            <p style="margin: 10px 0 0; color: #9ca3af; font-size: 12px;">
                              ${new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
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
        </body>
        </html>
      `
    };
    
    // Enviar el email
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error al enviar email:', error);
    return NextResponse.json(
      { error: 'Error al enviar el mensaje' },
      { status: 500 }
    );
  }
}
