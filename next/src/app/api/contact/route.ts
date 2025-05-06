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
      from: `"Formulario Web" <${process.env.EMAIL_FROM || 'noreply@cain-dev.es'}>`,
      to: process.env.EMAIL_TO || 'c.martinezbernabeu@hotmail.com',
      subject: `Nuevo mensaje de contacto de ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #3b82f6; margin-bottom: 20px;">Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
          <div>
            <strong>Mensaje:</strong>
            <p style="background-color: #f9fafb; padding: 15px; border-radius: 5px; margin-top: 10px;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="color: #6b7280; font-size: 12px; margin-top: 30px;">Este mensaje fue enviado desde el formulario de contacto en cain-dev.es</p>
        </div>
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