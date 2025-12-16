import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Divider,
  Chip,
  Link,
  useTheme,
  useMediaQuery
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GavelIcon from '@mui/icons-material/Gavel';

export default function TermsAndConditions() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const sections = [
    {
      id: 'scope',
      title: '1. Scope of Services',
      content: `TheVSoft provides professional IT services, including:
      
• Software development (web, mobile, desktop)
• Web application development & maintenance
• Mobile application development & support
• UI/UX design and consulting
• IT consulting, strategy, and digital transformation
• Cloud services, hosting, and deployment
• API integration and third-party platform integration
• Branding and digital solutions

Project deliverables, timelines, fees, and scope will be defined in separate agreements, proposals, or Statements of Work (SOW).`
    },
    {
      id: 'acceptance',
      title: '2. Acceptance of Terms',
      content: 'By using our website or engaging in any services, you acknowledge that you have read, understood, and agreed to be bound by these Terms and any applicable agreements between you and TheVSoft.'
    },
    {
      id: 'client',
      title: '3. Client Responsibilities',
      content: `Clients are expected to:

• Provide accurate, complete, and timely project requirements
• Cooperate with TheVSoft to facilitate project delivery
• Ensure ownership or permission for any content provided
• Respond promptly to queries, feedback, and approval requests
• Maintain confidentiality regarding TheVSoft's methods, processes, and deliverables

Failure to comply may impact delivery timelines and outcomes.`
    },
    {
      id: 'ip',
      title: '4. Intellectual Property',
      content: `• All intellectual property ("IP") created, including code, designs, technical documentation, and project assets, remain the property of TheVSoft until full payment is received.

• Upon full payment, IP rights for the deliverables may transfer to the client, excluding third-party licensed software or frameworks.

• TheVSoft retains the right to showcase projects in its portfolio unless restricted by confidentiality agreements.

• Unauthorized copying, distribution, or use of TheVSoft's IP is strictly prohibited.`
    },
    {
      id: 'payment',
      title: '5. Payment Terms',
      content: `• Fees for services will be outlined in proposals or agreements.

• Payments must be made as per the agreed schedule (e.g., advance, milestone-based, or full payment).

• Delays in payment may result in project suspension or delayed delivery.

• Taxes, third-party licenses, domains, hosting, and software costs are billed separately unless explicitly included.`
    },
    {
      id: 'refunds',
      title: '6. Refunds and Cancellations',
      content: `• Services are labor-based and non-refundable once work has commenced.

• Project cancellations after approval may result in partial charges based on completed work.

• Expenses incurred for third-party services (domains, hosting, plugins) are non-refundable.`
    },
    {
      id: 'delivery',
      title: '7. Delivery and Revisions',
      content: `• Project timelines are estimates and may depend on client cooperation.

• Revisions are provided as per the scope defined in agreements or proposals.

• Additional revisions or requirements outside the agreed scope may incur extra charges.

• TheVSoft is not liable for delays caused by third-party tools, APIs, or hosting platforms.`
    },
    {
      id: 'support',
      title: '8. Support & Maintenance',
      content: `• Post-delivery support is provided per the agreed support or maintenance plan.

• Free support (if offered) is limited to the terms specified in the agreement.

• Additional support or modifications will be billed separately.

• Unauthorized changes by the client may void the support obligations.`
    },
    {
      id: 'liability',
      title: '9. Limitation of Liability',
      content: `To the fullest extent permitted by law, TheVSoft shall not be liable for:

• Any indirect, incidental, or consequential damages
• Loss of revenue, profits, or data
• Delays caused by client dependencies or third-party services
• Security breaches on client systems, hosting platforms, or APIs

Use of TheVSoft services is at the client's risk.`
    },
    {
      id: 'thirdparty',
      title: '10. Third-Party Services',
      content: 'Our services may involve third-party platforms, libraries, or APIs. TheVSoft is not responsible for failures, downtime, pricing changes, or other impacts caused by third-party services.'
    },
    {
      id: 'confidentiality',
      title: '11. Confidentiality',
      content: `Both parties shall maintain confidentiality regarding:

• Project information, deliverables, and strategies
• Business processes, pricing, and methods
• Technical documentation and proprietary materials

Disclosure is permitted only when required by law or with prior written consent.`
    },
    {
      id: 'termination',
      title: '12. Termination',
      content: `TheVSoft reserves the right to suspend or terminate services if:

• Terms are violated
• Payments are overdue
• Misuse, fraud, or abusive conduct occurs

No refunds shall be provided upon termination for cause.`
    },
    {
      id: 'governing',
      title: '13. Governing Law and Jurisdiction',
      content: 'These Terms are governed by the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts in Tirunelveli, Tamil Nadu, India.'
    },
    {
      id: 'amendments',
      title: '14. Amendments',
      content: 'TheVSoft reserves the right to update or amend these Terms at any time. Changes will be effective immediately upon posting on the website. Continued use of the website or services constitutes acceptance of updated Terms.'
    }
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      bgcolor: '#f5f7fa',
      py: { xs: 4, md: 6 }
    }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 3, md: 5 },
            mb: 4,
            background: '#ffbe01',
            color: 'white',
            borderRadius: 3
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, color: 'black' }}>
            <GavelIcon sx={{ fontSize: { xs: 32, md: 40 }, mr: 2 }} />
            <Typography 
              variant={isMobile ? 'h4' : 'h3'} 
              component="h1" 
              fontWeight="bold"
            >
              Terms & Conditions
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ opacity: 0.95, mb: 1, color: 'black' }}>
            TheVSoft
          </Typography>
          <Chip 
            label="Effective Date: 29-Nov-2025" 
            sx={{ 
              bgcolor: 'rgba(255,255,255,0.2)',
              color: 'black',
              fontWeight: 500
            }} 
          />
        </Paper>

        {/* Introduction */}
        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 3, md: 4 },
            mb: 3,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            These Terms & Conditions ("Terms") govern your access to and use of TheVSoft's website 
            (<Link href="http://www.thevsoft.com" target="_blank" rel="noopener">www.thevsoft.com</Link>) 
            and the services provided by TheVSoft ("Company", "we", "our", "us"). By accessing or using our 
            website or services, you agree to comply with these Terms.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, fontWeight: 500 }}>
            If you do not agree to these Terms, please do not use our website or services.
          </Typography>
        </Paper>

        {/* Accordion Sections */}
        <Box sx={{ mb: 4 }}>
          {sections.map((section) => (
            <Accordion
              key={section.id}
              expanded={expanded === section.id}
              onChange={handleChange(section.id)}
              elevation={0}
              sx={{
                mb: 2,
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                '&:before': { display: 'none' },
                '&.Mui-expanded': {
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                }
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  px: { xs: 2, md: 3 },
                  py: 1.5,
                  '&.Mui-expanded': {
                    borderBottom: '1px solid',
                    borderColor: 'divider'
                  }
                }}
              >
                <Typography 
                  variant={isMobile ? 'body1' : 'h6'} 
                  fontWeight="600"
                  color="black"
                >
                  {section.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: { xs: 2, md: 3 }, py: 3 }}>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    whiteSpace: 'pre-line',
                    lineHeight: 1.8,
                    color: 'text.secondary'
                  }}
                >
                  {section.content}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Contact Information */}
        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 3, md: 4 },
            borderRadius: 2,
            bgcolor: '#fff',
            border: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Typography 
            variant="h5" 
            fontWeight="bold" 
            gutterBottom 
            color="black"
            sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}
          >
            15. Contact Information
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            For questions regarding these Terms & Conditions:
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <EmailIcon color="black" />
              <Link 
                href="mailto:info@thevsoft.com" 
                underline="hover"
                sx={{ fontSize: '1rem', color: 'black' }}
              >
                info@thevsoft.com
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <PhoneIcon color="black" />
              <Link 
                href="tel:+919095422237" 
                underline="hover"
                sx={{ fontSize: '1rem', color: 'black' }}
              >
                +91 90954 22237
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <LocationOnIcon color="black" />
              <Typography variant="body1">
                Tirunelveli, Tamil Nadu, India
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Footer */}
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} TheVSoft. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}