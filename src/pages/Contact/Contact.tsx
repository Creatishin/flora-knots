import React from 'react';
import Typography from '../../components/common/Typography';
import ContactUsForm from './ContactForm';
import AnimateSection from '../../components/common/elements/AnimateSection';

const ContactTab = ({ label, value, href }: { label: string; value: string; href: string }) => {
  return (
    <AnimateSection className="p-6 rounded-lg bg-(--gray-light) border-2 border-transparent hover:border-(--primary)">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Typography variant="body-1" className="font-medium mb-2 text-(--primary)">
          {label}
        </Typography>
        <Typography variant="body-2" className="text-(--primary-dark)">
          {value}
        </Typography>
      </a>
    </AnimateSection>
  );
};

function Contact() {
  return (
    <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <AnimateSection>
          <>
            <Typography className="font-bold text-(--primary)" variant="s-title">
              Get in touch
            </Typography>
            <Typography className="mt-4" variant="body-2">
              We’d love to hear from you! Whether you have a question, a custom request, or just
              want to say hello, we’re here to help.
            </Typography>
          </>
        </AnimateSection>
        <div className="grid my-16 gap-4 grid-cols-1 md:grid-cols-2">
          <ContactTab
            href="mailto:flora-knots@email.com"
            label="Email"
            value="flora-knots@email.com"
          />

          <ContactTab href="tel:+1234567890" label="Call Us" value="+1 234 567 890" />

          <ContactTab
            href="https://www.google.com/maps?q=FloraKnots+Location"
            label="Visit Us"
            value="123 Floral Street, New York, USA"
          />

          <ContactTab
            href="https://www.instagram.com/floraknots"
            label="Follow Us on Instagram"
            value="@floraknots"
          />
        </div>
      </div>
      <AnimateSection>
        <ContactUsForm />
      </AnimateSection>
    </div>
  );
}

export default Contact;
