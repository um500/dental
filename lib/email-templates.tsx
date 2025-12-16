export const appointmentConfirmationTemplate = (data: {
  name: string
  date: string
  time: string
  service: string
}) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Appointment Confirmation - Shree Dental Clinic</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #0066cc 0%, #004c99 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="color: white; margin: 0;">Shree Dental Clinic</h1>
    <p style="color: #e6f2ff; margin: 10px 0 0;">Your Trusted Dental Care Partner</p>
  </div>
  
  <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
    <h2 style="color: #0066cc; margin-top: 0;">Appointment Confirmation</h2>
    
    <p>Dear ${data.name},</p>
    
    <p>Thank you for choosing Shree Dental Clinic! We have received your appointment request and will confirm it shortly.</p>
    
    <div style="background: white; padding: 20px; border-left: 4px solid #0066cc; margin: 20px 0;">
      <h3 style="margin-top: 0; color: #0066cc;">Appointment Details:</h3>
      <p style="margin: 10px 0;"><strong>Service:</strong> ${data.service}</p>
      <p style="margin: 10px 0;"><strong>Date:</strong> ${new Date(data.date).toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
      <p style="margin: 10px 0;"><strong>Time:</strong> ${data.time}</p>
    </div>
    
    <p><strong>What to expect:</strong></p>
    <ul style="padding-left: 20px;">
      <li>Our team will call you within 24 hours to confirm your appointment</li>
      <li>Please arrive 10 minutes early for registration</li>
      <li>Bring any previous dental records if available</li>
      <li>For emergency cases, call us immediately at +91 9471373777</li>
    </ul>
    
    <div style="background: #e6f2ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
      <p style="margin: 0;"><strong>📍 Address:</strong> BC-14, Samarpally, Kestopur, Kolkata - 700102</p>
      <p style="margin: 10px 0 0;"><strong>📞 Phone:</strong> +91 9471373777</p>
    </div>
    
    <p>If you need to reschedule or cancel, please contact us at least 24 hours in advance.</p>
    
    <p>We look forward to seeing you!</p>
    
    <p style="margin-top: 30px;">Best regards,<br><strong>Shree Dental Clinic Team</strong></p>
  </div>
  
  <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
    <p>This is an automated email. Please do not reply to this message.</p>
    <p>&copy; ${new Date().getFullYear()} Shree Dental Clinic. All rights reserved.</p>
  </div>
</body>
</html>
`

export const reviewThankYouTemplate = (data: {
  name: string
  rating: number
}) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Your Review - Shree Dental Clinic</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #0066cc 0%, #004c99 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="color: white; margin: 0;">Thank You!</h1>
    <p style="color: #e6f2ff; margin: 10px 0 0;">We appreciate your feedback</p>
  </div>
  
  <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
    <p>Dear ${data.name},</p>
    
    <p>Thank you for taking the time to share your experience with Shree Dental Clinic! Your ${data.rating}-star review means a lot to us.</p>
    
    <div style="background: white; padding: 20px; border-left: 4px solid #10b981; margin: 20px 0; text-align: center;">
      <h3 style="margin-top: 0; color: #10b981;">Help Others Find Us!</h3>
      <p>We would greatly appreciate if you could also share your review on Google Maps. It helps other patients discover our services.</p>
      <a href="https://maps.app.goo.gl/AsZ19tucWvQJxFzo8" style="display: inline-block; background: #0066cc; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin-top: 10px; font-weight: bold;">Post Review on Google</a>
    </div>
    
    <p>Your feedback helps us improve our services and maintain the highest standards of dental care.</p>
    
    <p>We look forward to serving you again!</p>
    
    <p style="margin-top: 30px;">Best regards,<br><strong>Shree Dental Clinic Team</strong></p>
    
    <div style="background: #e6f2ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
      <p style="margin: 0;"><strong>📍</strong> BC-14, Samarpally, Kestopur, Kolkata - 700102</p>
      <p style="margin: 10px 0 0;"><strong>📞</strong> +91 9471373777</p>
    </div>
  </div>
  
  <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
    <p>&copy; ${new Date().getFullYear()} Shree Dental Clinic. All rights reserved.</p>
  </div>
</body>
</html>
`

export const clinicNotificationTemplate = (data: any) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Appointment Request</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: #dc2626; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="color: white; margin: 0;">New Appointment Request</h1>
  </div>
  
  <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
    <h2 style="color: #dc2626; margin-top: 0;">Patient Details:</h2>
    
    <div style="background: white; padding: 20px; border-left: 4px solid #dc2626;">
      <p style="margin: 10px 0;"><strong>Name:</strong> ${data.name}</p>
      <p style="margin: 10px 0;"><strong>Phone:</strong> ${data.phone}</p>
      <p style="margin: 10px 0;"><strong>Email:</strong> ${data.email || "Not provided"}</p>
      <p style="margin: 10px 0;"><strong>Service:</strong> ${data.service}</p>
      <p style="margin: 10px 0;"><strong>Date:</strong> ${data.date}</p>
      <p style="margin: 10px 0;"><strong>Time:</strong> ${data.time}</p>
      ${data.message ? `<p style="margin: 10px 0;"><strong>Message:</strong> ${data.message}</p>` : ""}
    </div>
    
    <p style="margin-top: 20px;"><strong>Action Required:</strong> Please contact the patient within 24 hours to confirm the appointment.</p>
  </div>
</body>
</html>
`
