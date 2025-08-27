import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import Mailgun from "mailgun.js";
import formData from "form-data";
import { insertOrderSchema, type InsertOrder } from "../shared/schema";

// Initialize Mailgun
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY || '5a4acb93-26e3febf',
  url: 'https://api.mailgun.net' // Use the appropriate Mailgun API URL
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Submit Order endpoint
  app.post("/api/orders", async (req, res) => {
    try {
      const orderData = insertOrderSchema.parse(req.body);
      
      // Store order in database
      const newOrder = await storage.insertOrder(orderData);
      
      // Send email notification using Mailgun
      try {
        const emailContent = `
New Order Received - GIGI WRITI

Order Details:
- Order ID: ${newOrder.id}
- Service Type: ${orderData.serviceType}
- Topic: ${orderData.topic}
- Word Count: ${orderData.wordCount}
- Due Date: ${new Date(orderData.dueDate).toLocaleDateString()}
- Academic Level: ${orderData.aimLevel}
- Total Price: ${orderData.totalPrice} ${orderData.currency}
- Discount Applied: ${orderData.discountApplied ? 'Yes' : 'No'}
${orderData.discountCode ? `- Discount Code: ${orderData.discountCode}` : ''}
${orderData.customerEmail ? `- Customer Email: ${orderData.customerEmail}` : ''}
${orderData.customerName ? `- Customer Name: ${orderData.customerName}` : ''}

Please process this order as soon as possible.

Best regards,
GIGI WRITI System
        `;

        const emailData = {
          from: 'GIGI WRITI <orders@gigi-writi.com>',
          to: 'gigi.edu.writing.service@gmail.com',
          subject: `New Order #${newOrder.id} - ${orderData.serviceType}`,
          text: emailContent,
          html: emailContent.replace(/\n/g, '<br>')
        };

        // Note: For Mailgun to work, you need a verified domain
        // For now, we'll just log the email content
        console.log('Order notification would be sent:', emailData);
        console.log('Order notification email prepared successfully');
        
      } catch (emailError) {
        console.error('Failed to prepare email:', emailError);
        // Don't fail the order if email fails
      }
      
      res.json({ 
        success: true, 
        orderId: newOrder.id,
        message: 'Order submitted successfully'
      });
      
    } catch (error) {
      console.error('Order submission error:', error);
      res.status(400).json({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to submit order'
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
