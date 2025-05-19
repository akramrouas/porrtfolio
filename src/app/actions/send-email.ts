"use server"


type FormData = {
  firstName: string
  lastName: string
  email: string
  message: string
}

export async function sendContactEmail(formData: FormData) {
  try {
   
    
    console.log("Email qui serait envoyé à akramrouas999@gmail.com:");
    console.log("De:", formData.email);
    console.log("Nom:", formData.firstName, formData.lastName);
    console.log("Message:", formData.message);
    
    // Dans un environnement de production, vous utiliseriez un code comme celui-ci:
    // const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     personalizations: [{ to: [{ email: 'akramrouas999@gmail.com' }] }],
    //     from: { email: formData.email },
    //     subject: `Nouveau message de contact de ${formData.firstName} ${formData.lastName}`,
    //     content: [{ type: 'text/plain', value: formData.message }],
    //   }),
    // });
    
    // Simuler un délai pour l'envoi d'email
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Failed to send email" };
  }
}
