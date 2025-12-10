import Address from "../components/ContactUs/Address";
import WhatsAppUs from "../components/ContactUs/WhatsAppUs";
import Form from "../components/ContactUs/Form";

const ContactUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="bg-purple-800 text-white py-10 mb-10 text-center rounded-2xl">
          <h2 className="text-4xl font-bold tracking-tight mb-3">Contact Us</h2>
          <p className="text-violet-200 mt-2 text-lg max-w-2xl mx-auto">
            Tell us about your project, requirements, or consultancy needs.
            We’ll get back to you shortly.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <Address />
            <WhatsAppUs />
          </div>

          <Form />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
